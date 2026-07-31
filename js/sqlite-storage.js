(async function () {
  const SQL = await initSqlJs({
    locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
  });

  const DB_NAME = "taskboard_sqlite_db";
  const STORE_NAME = "sqlite_store";
  let sqliteDB = null;

  function openIndexedDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);

      request.onupgradeneeded = function (event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function loadDatabase() {
    const idb = await openIndexedDB();

    return new Promise((resolve) => {
      const tx = idb.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get("taskboard");

      req.onsuccess = () => {
        if (req.result) {
          sqliteDB = new SQL.Database(new Uint8Array(req.result));
        } else {
          sqliteDB = new SQL.Database();
          sqliteDB.run(`
            CREATE TABLE IF NOT EXISTS kv_store (
              key TEXT PRIMARY KEY,
              value TEXT
            );
          `);
        }
        resolve();
      };

      req.onerror = () => {
        sqliteDB = new SQL.Database();
        sqliteDB.run(`
          CREATE TABLE IF NOT EXISTS kv_store (
            key TEXT PRIMARY KEY,
            value TEXT
          );
        `);
        resolve();
      };
    });
  }

  async function saveDatabase() {
    const idb = await openIndexedDB();
    const data = sqliteDB.export();

    return new Promise((resolve, reject) => {
      const tx = idb.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(data, "taskboard");

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  await loadDatabase();

  const originalLocalStorage = window.localStorage;

  function dbGet(key) {
    try {
      const stmt = sqliteDB.prepare("SELECT value FROM kv_store WHERE key = ?");
      stmt.bind([key]);

      let result = null;
      while (stmt.step()) {
        result = stmt.getAsObject().value;
      }

      stmt.free();
      return result;
    } catch (e) {
      console.error("SQLite get error:", e);
      return null;
    }
  }

  async function dbSet(key, value) {
    try {
      sqliteDB.run(
        "INSERT OR REPLACE INTO kv_store (key, value) VALUES (?, ?)",
        [key, value]
      );
      await saveDatabase();
    } catch (e) {
      console.error("SQLite set error:", e);
    }
  }

  async function dbRemove(key) {
    try {
      sqliteDB.run("DELETE FROM kv_store WHERE key = ?", [key]);
      await saveDatabase();
    } catch (e) {
      console.error("SQLite remove error:", e);
    }
  }

  const localStorageProxy = {
    getItem(key) {
      const dbValue = dbGet(key);
      if (dbValue !== null && dbValue !== undefined) {
        return dbValue;
      }
      return originalLocalStorage.getItem(key);
    },

    setItem(key, value) {
      originalLocalStorage.setItem(key, value);
      dbSet(key, value);
    },

    removeItem(key) {
      originalLocalStorage.removeItem(key);
      dbRemove(key);
    },

    clear() {
      originalLocalStorage.clear();
      sqliteDB.run("DELETE FROM kv_store");
      saveDatabase();
    },

    key(index) {
      return originalLocalStorage.key(index);
    },

    get length() {
      return originalLocalStorage.length;
    }
  };

  Object.defineProperty(window, "localStorage", {
    value: localStorageProxy,
    configurable: false,
    writable: false
  });

  console.log("SQLite persistence layer initialized successfully.");
})();
