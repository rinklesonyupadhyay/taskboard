(function(){
  'use strict';
  var loading=document.getElementById('tb-loading'),loadMsg=document.getElementById('tb-load-msg');
  function die(m){loading.innerHTML='<div style="font-size:28px;margin-bottom:12px">warning</div><div style="font-size:13px;font-weight:700;color:#f44747;margin-bottom:8px">Failed to load</div><div style="font-size:11px;color:#858585;max-width:280px;text-align:center;padding:0 20px">'+m+'</div>';}
  if(!window.React)return die('React failed to load');
  if(!window.React.useState)return die('React hooks unavailable');
  if(!window.ReactDOM)return die('ReactDOM failed to load');
  if(!window.ReactDOM.createRoot)return die('ReactDOM.createRoot missing');
  loadMsg.textContent='Starting...';
  try{
  const { useState, useRef, useEffect, useCallback, createContext, useContext } = React;
  const LUCIDE_ICONS = [["a-arrow-down", '<path d="m14 12 4 4 4-4" /> <path d="M18 16V7" /> <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /> <path d="M3.304 13h6.392" />', "letter font size text formatting smaller text design"], ["a-arrow-up", '<path d="m14 11 4-4 4 4" /> <path d="M18 16V7" /> <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /> <path d="M3.304 13h6.392" />', "letter font size text formatting larger bigger text design"], ["a-large-small", '<path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" /> <path d="M15.697 14h5.606" /> <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /> <path d="M3.304 13h6.392" />', "letter font size text formatting text design"], ["accessibility", '<circle cx="16" cy="4" r="1" /> <path d="m18 19 1-7-6 1" /> <path d="m5 8 3-3 5.5 3-2.36 3.5" /> <path d="M4.24 14.5a5 5 0 0 0 6.88 6" /> <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />', "disability disabled dda wheelchair accessibility medical"], ["activity", '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />', "pulse action motion movement exercise fitness healthcare heart rate monitor medical account social science multimedia"], ["air-vent", '<path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" /> <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /> <path d="M6 8h12" /> <path d="M6.6 15.572A2 2 0 1 0 10 17v-5" />', "air conditioner ac central air cooling climate-control home"], ["airplay", '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /> <path d="m12 15 5 6H7Z" />', "stream cast mirroring screen monitor macos osx multimedia connectivity devices brands"], ["alarm-clock-check", '<circle cx="12" cy="13" r="8" /> <path d="M5 3 2 6" /> <path d="m22 6-3-3" /> <path d="M6.38 18.7 4 21" /> <path d="M17.64 18.67 20 21" /> <path d="m9 13 2 2 4-4" />', "done todo tick complete task devices notifications time"], ["alarm-clock-minus", '<circle cx="12" cy="13" r="8" /> <path d="M5 3 2 6" /> <path d="m22 6-3-3" /> <path d="M6.38 18.7 4 21" /> <path d="M17.64 18.67 20 21" /> <path d="M9 13h6" />', "remove devices notifications time"], ["alarm-clock-off", '<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" /> <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" /> <path d="m22 6-3-3" /> <path d="M6.26 18.67 4 21" /> <path d="m2 2 20 20" /> <path d="M4 4 2 6" />', "morning turn-off devices notifications time"], ["alarm-clock-plus", '<circle cx="12" cy="13" r="8" /> <path d="M5 3 2 6" /> <path d="m22 6-3-3" /> <path d="M6.38 18.7 4 21" /> <path d="M17.64 18.67 20 21" /> <path d="M12 10v6" /> <path d="M9 13h6" />', "add devices notifications time"], ["alarm-clock", '<circle cx="12" cy="13" r="8" /> <path d="M12 9v4l2 2" /> <path d="M5 3 2 6" /> <path d="m22 6-3-3" /> <path d="M6.38 18.7 4 21" /> <path d="M17.64 18.67 20 21" />', "morning devices notifications time"], ["alarm-smoke", '<path d="M11 21c0-2.5 2-2.5 2-5" /> <path d="M16 21c0-2.5 2-2.5 2-5" /> <path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" /> <path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" /> <path d="M6 21c0-2.5 2-2.5 2-5" />', "fire alert warning detector carbon monoxide safety equipment amenities home devices travel"], ["album", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <polyline points="11 3 11 11 14 8 17 11 17 3" />', "photo book photography multimedia"], ["align-center-horizontal", '<path d="M2 12h20" /> <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" /> <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" /> <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" /> <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />', "items flex justify layout"], ["align-center-vertical", '<path d="M12 2v20" /> <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" /> <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" /> <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" /> <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />', "items flex justify layout"], ["align-end-horizontal", '<rect width="6" height="16" x="4" y="2" rx="2" /> <rect width="6" height="9" x="14" y="9" rx="2" /> <path d="M22 22H2" />', "items bottom flex justify layout"], ["align-end-vertical", '<rect width="16" height="6" x="2" y="4" rx="2" /> <rect width="9" height="6" x="9" y="14" rx="2" /> <path d="M22 22V2" />', "items right flex justify layout"], ["align-horizontal-distribute-center", '<rect width="6" height="14" x="4" y="5" rx="2" /> <rect width="6" height="10" x="14" y="7" rx="2" /> <path d="M17 22v-5" /> <path d="M17 7V2" /> <path d="M7 22v-3" /> <path d="M7 5V2" />', "items flex justify space evenly around layout"], ["align-horizontal-distribute-end", '<rect width="6" height="14" x="4" y="5" rx="2" /> <rect width="6" height="10" x="14" y="7" rx="2" /> <path d="M10 2v20" /> <path d="M20 2v20" />', "right items flex justify layout"], ["align-horizontal-distribute-start", '<rect width="6" height="14" x="4" y="5" rx="2" /> <rect width="6" height="10" x="14" y="7" rx="2" /> <path d="M4 2v20" /> <path d="M14 2v20" />', "left items flex justify layout"], ["align-horizontal-justify-center", '<rect width="6" height="14" x="2" y="5" rx="2" /> <rect width="6" height="10" x="16" y="7" rx="2" /> <path d="M12 2v20" />', "center items flex justify layout"], ["align-horizontal-justify-end", '<rect width="6" height="14" x="2" y="5" rx="2" /> <rect width="6" height="10" x="12" y="7" rx="2" /> <path d="M22 2v20" />', "right items flex justify layout"], ["align-horizontal-justify-start", '<rect width="6" height="14" x="6" y="5" rx="2" /> <rect width="6" height="10" x="16" y="7" rx="2" /> <path d="M2 2v20" />', "left items flex justify layout"], ["align-horizontal-space-around", '<rect width="6" height="10" x="9" y="7" rx="2" /> <path d="M4 22V2" /> <path d="M20 22V2" />', "center items flex justify distribute between layout"], ["align-horizontal-space-between", '<rect width="6" height="14" x="3" y="5" rx="2" /> <rect width="6" height="10" x="15" y="7" rx="2" /> <path d="M3 2v20" /> <path d="M21 2v20" />', "around items bottom flex justify layout"], ["align-start-horizontal", '<rect width="6" height="16" x="4" y="6" rx="2" /> <rect width="6" height="9" x="14" y="6" rx="2" /> <path d="M22 2H2" />', "top items flex justify layout"], ["align-start-vertical", '<rect width="9" height="6" x="6" y="14" rx="2" /> <rect width="16" height="6" x="6" y="4" rx="2" /> <path d="M2 2v20" />', "left items flex justify layout"], ["align-vertical-distribute-center", '<path d="M22 17h-3" /> <path d="M22 7h-5" /> <path d="M5 17H2" /> <path d="M7 7H2" /> <rect x="5" y="14" width="14" height="6" rx="2" /> <rect x="7" y="4" width="10" height="6" rx="2" />', "items flex justify space evenly around layout"], ["align-vertical-distribute-end", '<rect width="14" height="6" x="5" y="14" rx="2" /> <rect width="10" height="6" x="7" y="4" rx="2" /> <path d="M2 20h20" /> <path d="M2 10h20" />', "bottom items flex justify layout"], ["align-vertical-distribute-start", '<rect width="14" height="6" x="5" y="14" rx="2" /> <rect width="10" height="6" x="7" y="4" rx="2" /> <path d="M2 14h20" /> <path d="M2 4h20" />', "top items flex justify layout"], ["align-vertical-justify-center", '<rect width="14" height="6" x="5" y="16" rx="2" /> <rect width="10" height="6" x="7" y="2" rx="2" /> <path d="M2 12h20" />', "center items flex justify distribute between layout"], ["align-vertical-justify-end", '<rect width="14" height="6" x="5" y="12" rx="2" /> <rect width="10" height="6" x="7" y="2" rx="2" /> <path d="M2 22h20" />', "bottom items flex justify distribute between layout"], ["align-vertical-justify-start", '<rect width="14" height="6" x="5" y="16" rx="2" /> <rect width="10" height="6" x="7" y="6" rx="2" /> <path d="M2 2h20" />', "top items flex justify distribute between layout"], ["align-vertical-space-around", '<rect width="10" height="6" x="7" y="9" rx="2" /> <path d="M22 20H2" /> <path d="M22 4H2" />', "center items flex justify distribute between layout"], ["align-vertical-space-between", '<rect width="14" height="6" x="5" y="15" rx="2" /> <rect width="10" height="6" x="7" y="3" rx="2" /> <path d="M2 21h20" /> <path d="M2 3h20" />', "center items flex justify distribute between layout"], ["ambulance", '<path d="M10 10H6" /> <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /> <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" /> <path d="M8 8v4" /> <path d="M9 18h6" /> <circle cx="17" cy="18" r="2" /> <circle cx="7" cy="18" r="2" />', "ambulance emergency medical vehicle siren healthcare transportation rescue medical transportation"], ["ampersand", '<path d="M16 12h3" /> <path d="M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" />', "and typography operator join concatenate code & text development"], ["ampersands", '<path d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" /> <path d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />', "and operator then code && text development"], ["amphora", '<path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" /> <path d="M10 5H8a2 2 0 0 0 0 4h.68" /> <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" /> <path d="M14 5h2a2 2 0 0 1 0 4h-.68" /> <path d="M18 22H6" /> <path d="M9 2h6" />', "pottery artifact artefact vase ceramics clay archaeology museum food-beverage gaming"], ["anchor", '<path d="M12 6v16" /> <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" /> <path d="M9 11h6" /> <circle cx="12" cy="4" r="2" />', "ship transportation text"], ["angry", '<circle cx="12" cy="12" r="10" /> <path d="M16 16s-1.5-2-4-2-4 2-4 2" /> <path d="M7.5 8 10 9" /> <path d="m14 9 2.5-1" /> <path d="M9 10h.01" /> <path d="M15 10h.01" />', "emoji anger face emotion emoji"], ["annoyed", '<circle cx="12" cy="12" r="10" /> <path d="M8 15h8" /> <path d="M8 9h2" /> <path d="M14 9h2" />', "emoji nuisance face emotion emoji"], ["antenna", '<path d="M2 12 7 2" /> <path d="m7 12 5-10" /> <path d="m12 12 5-10" /> <path d="m17 12 5-10" /> <path d="M4.5 7h15" /> <path d="M12 16v6" />', "signal connection connectivity tv television broadcast live frequency devices multimedia communication"], ["anvil", '<path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" /> <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" /> <path d="M9 12v5" /> <path d="M15 12v5" /> <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />', "metal iron alloy materials heavy weight blacksmith forge buildings tools gaming"], ["aperture", '<circle cx="12" cy="12" r="10" /> <path d="m14.31 8 5.74 9.94" /> <path d="M9.69 8h11.48" /> <path d="m7.38 12 5.74-9.94" /> <path d="M9.69 16 3.95 6.06" /> <path d="M14.31 16H2.83" /> <path d="m16.62 12-5.74 9.94" />', "camera photo pictures shutter exposure photography"], ["app-window-mac", '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M6 8h.01" /> <path d="M10 8h.01" /> <path d="M14 8h.01" />', "application menu bar pane preferences macos osx executable layout design development files"], ["app-window", '<rect x="2" y="4" width="20" height="16" rx="2" /> <path d="M10 4v4" /> <path d="M2 8h20" /> <path d="M6 4v4" />', "application menu bar pane executable layout design development files"], ["apple", '<path d="M12 6.528V3a1 1 0 0 1 1-1h0" /> <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />', "fruit food healthy snack nutrition fresh produce grocery food-beverage"], ["archive-restore", '<rect width="20" height="5" x="2" y="3" rx="1" /> <path d="M4 8v11a2 2 0 0 0 2 2h2" /> <path d="M20 8v11a2 2 0 0 1-2 2h-2" /> <path d="m9 15 3-3 3 3" /> <path d="M12 12v9" />', "unarchive index backup box storage records files mail"], ["archive-x", '<rect width="20" height="5" x="2" y="3" rx="1" /> <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /> <path d="m9.5 17 5-5" /> <path d="m9.5 12 5 5" />', "index backup box storage records junk files mail"], ["archive", '<rect width="20" height="5" x="2" y="3" rx="1" /> <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" /> <path d="M10 12h4" />', "index backup box storage records files mail"], ["armchair", '<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" /> <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" /> <path d="M5 18v2" /> <path d="M19 18v2" />', "sofa furniture leisure lounge loveseat couch home"], ["arrow-big-down-dash", '<path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" /> <path d="M9 4h6" />', "backwards reverse slow direction south download arrows gaming files"], ["arrow-big-down", '<path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" />', "backwards reverse direction south arrows gaming"], ["arrow-big-left-dash", '<path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" /> <path d="M20 9v6" />', "previous back direction west turn corner arrows gaming"], ["arrow-big-left", '<path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />', "previous back direction west indicate turn arrows gaming"], ["arrow-big-right-dash", '<path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" /> <path d="M4 9v6" />', "next forward direction east turn corner arrows gaming"], ["arrow-big-right", '<path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />', "next forward direction east indicate turn arrows gaming"], ["arrow-big-up-dash", '<path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" /> <path d="M9 20h6" />', "caps lock capitals keyboard button mac forward direction north arrows text development gaming"], ["arrow-big-up", '<path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />', "shift keyboard button mac capitalize capitalise forward direction arrows text development gaming"], ["arrow-down-0-1", '<path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <rect x="15" y="4" width="4" height="6" ry="2" /> <path d="M17 20v-6h-2" /> <path d="M15 20h4" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-down-1-0", '<path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <path d="M17 10V4h-2" /> <path d="M15 10h4" /> <rect x="15" y="14" width="4" height="6" ry="2" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-down-a-z", '<path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <path d="M20 8h-5" /> <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" /> <path d="M15 14h5l-5 6h5" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-down-from-line", '<path d="M19 3H5" /> <path d="M12 21V7" /> <path d="m6 15 6 6 6-6" />', "backwards reverse direction south download expand fold vertical arrows files"], ["arrow-down-left", '<path d="M17 7 7 17" /> <path d="M17 17H7V7" />', "direction south-west diagonal arrows"], ["arrow-down-narrow-wide", '<path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <path d="M11 4h4" /> <path d="M11 8h7" /> <path d="M11 12h10" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-down-right", '<path d="m7 7 10 10" /> <path d="M17 7v10H7" />', "direction south-east diagonal arrows"], ["arrow-down-to-dot", '<path d="M12 2v14" /> <path d="m19 9-7 7-7-7" /> <circle cx="12" cy="21" r="1" />', "direction south waypoint location step into arrows"], ["arrow-down-to-line", '<path d="M12 17V3" /> <path d="m6 11 6 6 6-6" /> <path d="M19 21H5" />', "behind direction south download save git version control pull arrows files development"], ["arrow-down-up", '<path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <path d="m21 8-4-4-4 4" /> <path d="M17 4v16" />', "bidirectional two-way 2-way swap switch network traffic flow arrows"], ["arrow-down-wide-narrow", '<path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <path d="M11 4h10" /> <path d="M11 8h7" /> <path d="M11 12h4" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-down-z-a", '<path d="m3 16 4 4 4-4" /> <path d="M7 4v16" /> <path d="M15 4h5l-5 6h5" /> <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" /> <path d="M20 18h-5" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-down", '<path d="M12 5v14" /> <path d="m19 12-7 7-7-7" />', "backwards reverse direction south arrows"], ["arrow-left-from-line", '<path d="m9 6-6 6 6 6" /> <path d="M3 12h14" /> <path d="M21 19V5" />', "previous back direction west expand fold horizontal <-| arrows"], ["arrow-left-right", '<path d="M8 3 4 7l4 4" /> <path d="M4 7h16" /> <path d="m16 21 4-4-4-4" /> <path d="M20 17H4" />', "bidirectional two-way 2-way swap switch transaction reorder move arrows"], ["arrow-left-to-line", '<path d="M3 19V5" /> <path d="m13 6-6 6 6 6" /> <path d="M7 12h14" />', "previous back direction west collapse fold horizontal |<- arrows"], ["arrow-left", '<path d="m12 19-7-7 7-7" /> <path d="M19 12H5" />', "previous back direction west <- arrows"], ["arrow-right-from-line", '<path d="M3 5v14" /> <path d="M21 12H7" /> <path d="m15 18 6-6-6-6" />', "next forward direction east export expand fold horizontal arrows"], ["arrow-right-left", '<path d="m16 3 4 4-4 4" /> <path d="M20 7H4" /> <path d="m8 21-4-4 4-4" /> <path d="M4 17h16" />', "bidirectional two-way 2-way swap switch transaction reorder move arrows"], ["arrow-right-to-line", '<path d="M17 12H3" /> <path d="m11 18 6-6-6-6" /> <path d="M21 5v14" />', "next forward direction east tab keyboard mac indent arrows development"], ["arrow-right", '<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />', "forward next direction east -> arrows"], ["arrow-up-0-1", '<path d="m3 8 4-4 4 4" /> <path d="M7 4v16" /> <rect x="15" y="4" width="4" height="6" ry="2" /> <path d="M17 20v-6h-2" /> <path d="M15 20h4" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-up-1-0", '<path d="m3 8 4-4 4 4" /> <path d="M7 4v16" /> <path d="M17 10V4h-2" /> <path d="M15 10h4" /> <rect x="15" y="14" width="4" height="6" ry="2" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-up-a-z", '<path d="m3 8 4-4 4 4" /> <path d="M7 4v16" /> <path d="M20 8h-5" /> <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" /> <path d="M15 14h5l-5 6h5" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-up-down", '<path d="m21 16-4 4-4-4" /> <path d="M17 20V4" /> <path d="m3 8 4-4 4 4" /> <path d="M7 4v16" />', "bidirectional two-way 2-way swap switch network mobile data internet arrows"], ["arrow-up-from-dot", '<path d="m5 9 7-7 7 7" /> <path d="M12 16V2" /> <circle cx="12" cy="21" r="1" />', "direction north step out arrows"], ["arrow-up-from-line", '<path d="m18 9-6-6-6 6" /> <path d="M12 3v14" /> <path d="M5 21h14" />', "forward direction north upload git version control push expand arrows files development"], ["arrow-up-left", '<path d="M7 17V7h10" /> <path d="M17 17 7 7" />', "direction north-west diagonal arrows"], ["arrow-up-narrow-wide", '<path d="m3 8 4-4 4 4" /> <path d="M7 4v16" /> <path d="M11 12h4" /> <path d="M11 16h7" /> <path d="M11 20h10" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-up-right", '<path d="M7 7h10v10" /> <path d="M7 17 17 7" />', "direction north-east diagonal arrows"], ["arrow-up-to-line", '<path d="M5 3h14" /> <path d="m18 13-6-6-6 6" /> <path d="M12 7v14" />', "forward direction north upload collapse fold vertical arrows files"], ["arrow-up-wide-narrow", '<path d="m3 8 4-4 4 4" /> <path d="M7 4v16" /> <path d="M11 12h10" /> <path d="M11 16h7" /> <path d="M11 20h4" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-up-z-a", '<path d="m3 8 4-4 4 4" /> <path d="M7 4v16" /> <path d="M15 4h5l-5 6h5" /> <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" /> <path d="M20 18h-5" />', "filter sort ascending descending increasing decreasing rising falling text layout arrows"], ["arrow-up", '<path d="m5 12 7-7 7 7" /> <path d="M12 19V5" />', "forward direction north arrows"], ["arrows-up-from-line", '<path d="m4 6 3-3 3 3" /> <path d="M7 17V3" /> <path d="m14 6 3-3 3 3" /> <path d="M17 17V3" /> <path d="M4 21h16" />', "direction orientation this way up vertical package box fragile postage arrows transportation mail"], ["asterisk", '<path d="M12 6v12" /> <path d="M17.196 9 6.804 15" /> <path d="m6.804 9 10.392 6" />', "reference times multiply multiplication operator code glob pattern wildcard text math development"], ["at-sign", '<circle cx="12" cy="12" r="4" /> <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />', "mention at email message @ text account"], ["atom", '<circle cx="12" cy="12" r="1" /> <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" /> <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />', "atomic nuclear physics particle element molecule electricity energy science"], ["audio-lines", '<path d="M2 10v3" /> <path d="M6 6v11" /> <path d="M10 3v18" /> <path d="M14 8v7" /> <path d="M18 5v13" /> <path d="M22 10v3" />', "graphic equaliser sound noise listen hearing hertz frequency wavelength multimedia communication"], ["audio-waveform", '<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />', "sound noise listen hearing hertz frequency wavelength vibrate multimedia communication"], ["award", '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /> <circle cx="12" cy="8" r="6" />', "achievement badge rosette prize winner account sports gaming"], ["axe", '<path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" /> <path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z" />', "hatchet weapon chop sharp equipment fireman firefighter brigade tools gaming"], ["axis-3d", '<path d="M13.5 10.5 15 9" /> <path d="M4 4v15a1 1 0 0 0 1 1h15" /> <path d="M4.293 19.707 6 18" /> <path d="m9 15 1.5-1.5" />', "gizmo coordinates design"], ["baby", '<path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" /> <path d="M15 12h.01" /> <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" /> <path d="M9 12h.01" />', "child childproof children accessibility people"], ["backpack", '<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /> <path d="M8 10h8" /> <path d="M8 18h8" /> <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" /> <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />', "bag hiking travel camping school childhood gaming photography travel"], ["badge-alert", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <line x1="12" x2="12" y1="8" y2="12" /> <line x1="12" x2="12.01" y1="16" y2="16" />', "check verified unverified security safety issue account social"], ["badge-cent", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M12 7v10" /> <path d="M15.4 10a4 4 0 1 0 0 4" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-check", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="m9 12 2 2 4-4" />', "verified check social"], ["badge-dollar-sign", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /> <path d="M12 18V6" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-euro", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M7 12h5" /> <path d="M15 9.4a4 4 0 1 0 0 5.2" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-indian-rupee", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M8 8h8" /> <path d="M8 12h8" /> <path d="m13 17-5-1h1a4 4 0 0 0 0-8" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-info", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <line x1="12" x2="12" y1="16" y2="12" /> <line x1="12" x2="12.01" y1="8" y2="8" />', "verified unverified help account accessibility social"], ["badge-japanese-yen", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="m9 8 3 3v7" /> <path d="m12 11 3-3" /> <path d="M9 12h6" /> <path d="M9 16h6" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-minus", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <line x1="8" x2="16" y1="12" y2="12" />', "verified unverified delete remove erase social"], ["badge-percent", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="m15 9-6 6" /> <path d="M9 9h.01" /> <path d="M15 15h.01" />', "verified unverified sale discount offer marketing sticker price tag social finance shopping math"], ["badge-plus", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <line x1="12" x2="12" y1="8" y2="16" /> <line x1="8" x2="16" y1="12" y2="12" />', "verified unverified add create new social"], ["badge-pound-sterling", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M8 12h4" /> <path d="M10 16V9.5a2.5 2.5 0 0 1 5 0" /> <path d="M8 16h7" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-question-mark", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /> <line x1="12" x2="12.01" y1="17" y2="17" />', "verified unverified help accessibility social shapes"], ["badge-russian-ruble", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M9 16h5" /> <path d="M9 12h5a2 2 0 1 0 0-4h-3v9" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-swiss-franc", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <path d="M11 17V8h4" /> <path d="M11 12h3" /> <path d="M9 16h4" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-turkish-lira", '<path d="M11 7v10a5 5 0 0 0 5-5" /> <path d="m15 8-6 3" /> <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76" />', "discount offer sale voucher tag monetization marketing finance shopping finance"], ["badge-x", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /> <line x1="15" x2="9" y1="9" y2="15" /> <line x1="9" x2="15" y1="9" y2="15" />', "verified unverified lost delete remove social"], ["badge", '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />', "check verified unverified account social shapes"], ["baggage-claim", '<path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" /> <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" /> <rect width="13" height="8" x="8" y="6" rx="1" /> <circle cx="18" cy="20" r="2" /> <circle cx="9" cy="20" r="2" />', "baggage luggage travel cart trolley suitcase transportation travel"], ["balloon", '<path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" /> <path d="M12 6a2 2 0 0 1 2 2" /> <path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" />', "party festival congratulations celebration decoration colorful floating fun emoji"], ["ban", '<circle cx="12" cy="12" r="10" /> <path d="M4.929 4.929 19.07 19.071" />', "cancel no stop forbidden prohibited error incorrect mistake account"], ["banana", '<path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" /> <path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />', "fruit food food-beverage"], ["bandage", '<path d="M10 10.01h.01" /> <path d="M10 14.01h.01" /> <path d="M14 10.01h.01" /> <path d="M14 14.01h.01" /> <path d="M18 6v12" /> <path d="M6 6v12" /> <rect x="2" y="6" width="20" height="12" rx="2" />', "plaster band-aid first aid medical health wound injury care medical"], ["banknote-arrow-down", '<path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" /> <path d="m16 19 3 3 3-3" /> <path d="M18 12h.01" /> <path d="M19 16v6" /> <path d="M6 12h.01" /> <circle cx="12" cy="12" r="2" />', "bill currency money payment funds transaction cash finance finance"], ["banknote-arrow-up", '<path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" /> <path d="M18 12h.01" /> <path d="M19 22v-6" /> <path d="m22 19-3-3-3 3" /> <path d="M6 12h.01" /> <circle cx="12" cy="12" r="2" />', "bill currency money payment funds transaction cash finance finance"], ["banknote-x", '<path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" /> <path d="m17 17 5 5" /> <path d="M18 12h.01" /> <path d="m22 17-5 5" /> <path d="M6 12h.01" /> <circle cx="12" cy="12" r="2" />', "bill currency money payment funds transaction cash finance finance"], ["banknote", '<rect width="20" height="12" x="2" y="6" rx="2" /> <circle cx="12" cy="12" r="2" /> <path d="M6 12h.01M18 12h.01" />', "currency money payment finance"], ["barcode", '<path d="M3 5v14" /> <path d="M8 5v14" /> <path d="M12 5v14" /> <path d="M17 5v14" /> <path d="M21 5v14" />', "scan checkout till cart transaction purchase buy product shopping"], ["barrel", '<path d="M10 3a41 41 0 0 0 0 18" /> <path d="M14 3a41 41 0 0 1 0 18" /> <path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" /> <path d="M3.84 17h16.32" /> <path d="M3.84 7h16.32" />', "keg drum tank wine beer oak wood firkin food-beverage navigation"], ["baseline", '<path d="M4 20h16" /> <path d="m6 16 6-12 6 12" /> <path d="M8 12h8" />', "text format color text"], ["bath", '<path d="M10 4 8 6" /> <path d="M17 19v2" /> <path d="M2 12h20" /> <path d="M7 19v2" /> <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />', "amenities services bathroom shower travel"], ["battery-charging", '<path d="m11 7-3 5h4l-3 5" /> <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" /> <path d="M22 14v-4" /> <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />', "power electricity energy accumulator charge connectivity devices"], ["battery-full", '<path d="M10 10v4" /> <path d="M14 10v4" /> <path d="M22 14v-4" /> <path d="M6 10v4" /> <rect x="2" y="6" width="16" height="12" rx="2" />', "power electricity energy accumulator charge connectivity devices"], ["battery-low", '<path d="M22 14v-4" /> <path d="M6 14v-4" /> <rect x="2" y="6" width="16" height="12" rx="2" />', "power electricity energy accumulator charge connectivity devices"], ["battery-medium", '<path d="M10 14v-4" /> <path d="M22 14v-4" /> <path d="M6 14v-4" /> <rect x="2" y="6" width="16" height="12" rx="2" />', "power electricity energy accumulator charge connectivity devices"], ["battery-plus", '<path d="M10 9v6" /> <path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" /> <path d="M22 14v-4" /> <path d="M7 12h6" /> <path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" />', "power electricity energy accumulator charge plus economy health devices"], ["battery-warning", '<path d="M10 17h.01" /> <path d="M10 7v6" /> <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" /> <path d="M22 14v-4" /> <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />', "power electricity energy accumulator charge exclamation mark connectivity devices"], ["battery", '<path d="M 22 14 L 22 10" /> <rect x="2" y="6" width="16" height="12" rx="2" />', "power electricity energy accumulator charge connectivity devices"], ["beaker", '<path d="M4.5 3h15" /> <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" /> <path d="M6 14h12" />', "cup lab chemistry experiment test science gaming"], ["bean-off", '<path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" /> <path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" /> <path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" /> <line x1="2" x2="22" y1="2" y2="22" />', "soy free legume soy food seed allergy intolerance diet food-beverage"], ["bean", '<path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" /> <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />', "legume soy food seed food-beverage"], ["bed-double", '<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /> <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /> <path d="M12 4v6" /> <path d="M2 18h20" />', "sleep hotel furniture home"], ["bed-single", '<path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" /> <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" /> <path d="M3 18h18" />', "sleep hotel furniture home"], ["bed", '<path d="M2 4v16" /> <path d="M2 8h18a2 2 0 0 1 2 2v10" /> <path d="M2 17h20" /> <path d="M6 8v9" />', "sleep hotel furniture home"], ["beef", '<path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" /> <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" /> <circle cx="12.5" cy="8.5" r="2.5" />', "food dish restaurant course meal meat bbq steak food-beverage"], ["beer-off", '<path d="M13 13v5" /> <path d="M17 11.47V8" /> <path d="M17 11h1a3 3 0 0 1 2.745 4.211" /> <path d="m2 2 20 20" /> <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" /> <path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" /> <path d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" /> <path d="M9 14.6V18" />', "alcohol bar beverage brewery drink food-beverage"], ["beer", '<path d="M17 11h1a3 3 0 0 1 0 6h-1" /> <path d="M9 12v6" /> <path d="M13 12v6" /> <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" /> <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />', "alcohol bar beverage brewery drink food-beverage"], ["bell-dot", '<path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" /> <circle cx="18" cy="5" r="3" />', "alarm notification sound reminder unread account notifications"], ["bell-electric", '<path d="M18.518 17.347A7 7 0 0 1 14 19" /> <path d="M18.8 4A11 11 0 0 1 20 9" /> <path d="M9 9h.01" /> <circle cx="20" cy="16" r="2" /> <circle cx="9" cy="9" r="7" /> <rect x="4" y="16" width="10" height="6" rx="2" />', "fire alarm flames smoke firefighter fireman department brigade station devices notifications home"], ["bell-minus", '<path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M15 8h6" /> <path d="M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" />', "alarm notification silent reminder delete remove erase notifications"], ["bell-off", '<path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" /> <path d="m2 2 20 20" /> <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />', "alarm notification silent reminder notifications"], ["bell-plus", '<path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M15 8h6" /> <path d="M18 5v6" /> <path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />', "notification silent reminder add create new notifications"], ["bell-ring", '<path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M22 8c0-2.3-.8-4.3-2-6" /> <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /> <path d="M4 2C2.8 3.7 2 5.7 2 8" />', "alarm notification sound reminder notifications"], ["bell", '<path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />', "alarm notification sound reminder account notifications"], ["between-horizontal-end", '<rect width="13" height="7" x="3" y="3" rx="1" /> <path d="m22 15-3-3 3-3" /> <rect width="13" height="7" x="3" y="14" rx="1" />', "insert add left slot squeeze space vertical grid layout design tools"], ["between-horizontal-start", '<rect width="13" height="7" x="8" y="3" rx="1" /> <path d="m2 9 3 3-3 3" /> <rect width="13" height="7" x="8" y="14" rx="1" />', "insert add right slot squeeze space vertical grid layout design tools"], ["between-vertical-end", '<rect width="7" height="13" x="3" y="3" rx="1" /> <path d="m9 22 3-3 3 3" /> <rect width="7" height="13" x="14" y="3" rx="1" />', "insert add top slot squeeze space vertical grid layout design tools"], ["between-vertical-start", '<rect width="7" height="13" x="3" y="8" rx="1" /> <path d="m15 2-3 3-3-3" /> <rect width="7" height="13" x="14" y="8" rx="1" />', "insert add bottom slot squeeze space vertical grid layout design tools"], ["biceps-flexed", '<path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" /> <path d="M15 14a5 5 0 0 0-7.584 2" /> <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />', "arm muscle strong working out athletic toned muscular forelimb emoji"], ["bike", '<circle cx="18.5" cy="17.5" r="3.5" /> <circle cx="5.5" cy="17.5" r="3.5" /> <circle cx="15" cy="5" r="1" /> <path d="M12 17.5V14l-3-3 4-3 2 3h2" />', "bicycle transport trip transportation"], ["binary", '<rect x="14" y="14" width="4" height="6" rx="2" /> <rect x="6" y="4" width="4" height="6" rx="2" /> <path d="M6 20h4" /> <path d="M14 10h4" /> <path d="M6 14h2v6" /> <path d="M14 4h2v6" />', "code digits computer zero one boolean text development"], ["binoculars", '<path d="M10 10h4" /> <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" /> <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" /> <path d="M 22 16 L 2 16" /> <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" /> <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />', "field glasses lorgnette pince-nez observation sightseeing nature wildlife birdwatching navigation nature photography science travel development"], ["biohazard", '<circle cx="12" cy="11.9" r="2" /> <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" /> <path d="m8.9 10.1 1.4.8" /> <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" /> <path d="m15.1 10.1-1.4.8" /> <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" /> <path d="M12 13.9v1.6" /> <path d="M13.5 5.4c-1-.2-2-.2-3 0" /> <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" /> <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />', "fallout waste biology chemistry chemical element science"], ["bird", '<path d="M16 7h.01" /> <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" /> <path d="m20 7 2 .5-2 .5" /> <path d="M10 18v3" /> <path d="M14 17.75V21" /> <path d="M7 18a6 6 0 0 0 3.84-10.61" />', "peace freedom wing avian tweet animals"], ["birdhouse", '<path d="M12 18v4" /> <path d="m17 18 1.956-11.468" /> <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" /> <path d="M4 18h16" /> <path d="M7 18 5.044 6.532" /> <circle cx="12" cy="10" r="2" />', "birdhouse bird garden home house woodwork nature animals navigation home"], ["bitcoin", '<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />', "currency money payment brands development finance"], ["blend", '<circle cx="9" cy="9" r="7" /> <circle cx="15" cy="15" r="7" />', "mode overlay multiply screen opacity transparency alpha filters design photography tools development"], ["blinds", '<path d="M3 3h18" /> <path d="M20 7H8" /> <path d="M20 11H8" /> <path d="M10 19h10" /> <path d="M8 15h12" /> <path d="M4 3v14" /> <circle cx="4" cy="19" r="2" />', "shades screen curtain shutter roller blind window lighting household home"], ["blocks", '<path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" /> <rect x="14" y="2" width="8" height="8" rx="1" />', "addon plugin integration extension package build stack toys development layout shapes"], ["bluetooth-connected", '<path d="m7 7 10 10-5 5V2l5 5L7 17" /> <line x1="18" x2="21" y1="12" y2="12" /> <line x1="3" x2="6" y1="12" y2="12" />', "paired connectivity devices"], ["bluetooth-off", '<path d="m17 17-5 5V12l-5 5" /> <path d="m2 2 20 20" /> <path d="M14.5 9.5 17 7l-5-5v4.5" />', "lost connectivity devices"], ["bluetooth-searching", '<path d="m7 7 10 10-5 5V2l5 5L7 17" /> <path d="M20.83 14.83a4 4 0 0 0 0-5.66" /> <path d="M18 12h.01" />', "pairing connectivity devices"], ["bluetooth", '<path d="m7 7 10 10-5 5V2l5 5L7 17" />', "wireless connectivity devices"], ["bold", '<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />', "text strong format text"], ["bolt", '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /> <circle cx="12" cy="12" r="4" />', "nut screw settings preferences configuration controls edit diy tools home"], ["bomb", '<circle cx="11" cy="13" r="9" /> <path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" /> <path d="m22 2-1.5 1.5" />', "fatal error crash blockbuster mine explosion explode explosive security tools"], ["bone", '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />', "health skeleton skull death pets dog animals medical gaming"], ["book-a", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="m8 13 4-7 4 7" /> <path d="M9.1 11h5.7" />', "dictionary define definition thesaurus encyclopedia encyclopaedia reading booklet text gaming"], ["book-alert", '<path d="M12 13h.01" /> <path d="M12 6v3" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />', "reading paperback booklet magazine leaflet pamphlet tome library text development gaming"], ["book-audio", '<path d="M12 6v7" /> <path d="M16 8v3" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M8 8v3" />', "audiobook reading listening sound story fiction novel information multimedia text"], ["book-check", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="m9 9.5 2 2 4-4" />', "read booklet magazine leaflet pamphlet library written authored text development gaming"], ["book-copy", '<path d="M5 7a2 2 0 0 0-2 2v11" /> <path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" /> <path d="M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" />', "code coding version control git repository clone fork duplicate development text gaming"], ["book-dashed", '<path d="M12 17h1.5" /> <path d="M12 22h1.5" /> <path d="M12 2h1.5" /> <path d="M17.5 22H19a1 1 0 0 0 1-1" /> <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" /> <path d="M20 14v3h-2.5" /> <path d="M20 8.5V10" /> <path d="M4 10V8.5" /> <path d="M4 19.5V14" /> <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" /> <path d="M8 22H6.5a1 1 0 0 1 0-5H8" />', "code coding version control git repository template draft script development"], ["book-down", '<path d="M12 13V7" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="m9 10 3 3 3-3" />', "code coding version control git repository pull development"], ["book-headphones", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M8 12v-2a4 4 0 0 1 8 0v2" /> <circle cx="15" cy="12" r="1" /> <circle cx="9" cy="12" r="1" />', "audiobook reading listening sound story fiction novel information multimedia text"], ["book-heart", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />', "diary romance novel journal entry entries personal private social text gaming"], ["book-image", '<path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <circle cx="10" cy="8" r="2" />', "images pictures photos album collection event magazine catalog photography text multimedia files social shopping travel"], ["book-key", '<path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" /> <path d="M17 2v6" /> <path d="M17 4h2" /> <path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <circle cx="17" cy="10" r="2" />', "code coding version control git repository private public secret development security gaming"], ["book-lock", '<path d="M18 6V4a2 2 0 1 0-4 0v2" /> <path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" /> <rect x="12" y="6" width="8" height="5" rx="1" />', "code coding version control git repository private secret hidden development security gaming"], ["book-marked", '<path d="M10 2v8l3-3 3 3V2" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />', "dictionary reading booklet magazine leaflet pamphlet tome library text development gaming"], ["book-minus", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M9 10h6" />', "code coding version control git repository remove delete censor development text gaming"], ["book-open-check", '<path d="M12 21V7" /> <path d="m16 12 2 2 4-4" /> <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />', "read pages booklet magazine leaflet pamphlet library written text development gaming"], ["book-open-text", '<path d="M12 7v14" /> <path d="M16 12h2" /> <path d="M16 8h2" /> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /> <path d="M6 12h2" /> <path d="M6 8h2" />', "reading pages booklet magazine leaflet pamphlet library writing text development"], ["book-open", '<path d="M12 7v14" /> <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />', "reading pages booklet magazine leaflet pamphlet library writing text development gaming"], ["book-plus", '<path d="M12 7v6" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M9 10h6" />', "code coding version control git repository remove delete read development text gaming"], ["book-search", '<path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" /> <path d="m21 22-1.879-1.878" /> <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" /> <circle cx="17" cy="18" r="3" />', "reading library study education research knowledge discover browsing text development gaming"], ["book-text", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M8 11h8" /> <path d="M8 7h6" />', "reading booklet magazine leaflet pamphlet tome library writing text gaming"], ["book-type", '<path d="M10 13h4" /> <path d="M12 6v7" /> <path d="M16 8V6H8v2" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />', "thesaurus synonym reading booklet magazine leaflet pamphlet tome text design gaming"], ["book-up-2", '<path d="M12 13V7" /> <path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" /> <path d="m9 10 3-3 3 3" /> <path d="m9 5 3-3 3 3" />', "code coding version control git repository push force development"], ["book-up", '<path d="M12 13V7" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="m9 10 3-3 3 3" />', "code coding version control git repository push development"], ["book-user", '<path d="M15 13a3 3 0 1 0-6 0" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <circle cx="12" cy="8" r="2" />', "person people family friends acquaintances contacts details addresses account connectivity communication social"], ["book-x", '<path d="m14.5 7-5 5" /> <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /> <path d="m9.5 7 5 5" />', "code coding version control git repository remove delete reading text gaming"], ["book", '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />', "reading paperback booklet magazine leaflet pamphlet tome library text development gaming"], ["bookmark-check", '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" /> <path d="m9 10 2 2 4-4" />', "read finished complete clip marker tag task todo account"], ["bookmark-minus", '<path d="M15 10H9" /> <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />', "delete remove account"], ["bookmark-plus", '<path d="M12 7v6" /> <path d="M15 10H9" /> <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />', "add account"], ["bookmark-x", '<path d="m14.5 7.5-5 5" /> <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" /> <path d="m9.5 7.5 5 5" />', "read clip marker tag cancel close delete remove account"], ["bookmark", '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />', "save favorite mark label attachment file stick pin account"], ["boom-box", '<path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /> <path d="M8 8v1" /> <path d="M12 8v1" /> <path d="M16 8v1" /> <rect width="20" height="12" x="2" y="9" rx="2" /> <circle cx="8" cy="15" r="2" /> <circle cx="16" cy="15" r="2" />', "radio speakers audio music sound broadcast live frequency devices multimedia social"], ["bot-message-square", '<path d="M12 6V2H8" /> <path d="M15 11v2" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" /> <path d="M9 11v2" />', "robot ai chat assistant development social"], ["bot-off", '<path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" /> <path d="M2 14h2" /> <path d="M20 14h2" /> <path d="M22 22 2 2" /> <path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" /> <path d="M9 13v2" /> <path d="M9.67 4H12v2.33" />', "robot ai chat assistant development social"], ["bot", '<path d="M12 8V4H8" /> <rect width="16" height="12" x="4" y="8" rx="2" /> <path d="M2 14h2" /> <path d="M20 14h2" /> <path d="M15 13v2" /> <path d="M9 13v2" />', "robot ai chat assistant development social"], ["bottle-wine", '<path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" /> <path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" />', "alcohol drink glass goblet chalice vineyard winery red food-beverage"], ["bow-arrow", '<path d="M17 3h4v4" /> <path d="M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17" /> <path d="M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05" /> <path d="M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z" /> <path d="M9.707 14.293 21 3" />', "archer archery game war weapon gaming tools"], ["box", '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /> <path d="m3.3 7 8.7 5 8.7-5" /> <path d="M12 22V12" />', "cube package container storage geometry 3d isometric shapes gaming development math"], ["boxes", '<path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /> <path d="m7 16.5-4.74-2.85" /> <path d="m7 16.5 5-3" /> <path d="M7 16.5v5.17" /> <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /> <path d="m17 16.5-5-3" /> <path d="m17 16.5 4.74-2.85" /> <path d="M17 16.5v5.17" /> <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /> <path d="M12 8 7.26 5.15" /> <path d="m12 8 4.74-2.85" /> <path d="M12 13.5V8" />', "cubes packages parts group units collection cluster geometry shapes gaming development"], ["braces", '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" /> <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />', "json code token curly brackets data { } development files"], ["brackets", '<path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" /> <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />', "code token array list square [ ] development files"], ["brain-circuit", '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /> <path d="M9 13a4.5 4.5 0 0 0 3-4" /> <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" /> <path d="M3.477 10.896a4 4 0 0 1 .585-.396" /> <path d="M6 18a4 4 0 0 1-1.967-.516" /> <path d="M12 13h4" /> <path d="M12 18h6a2 2 0 0 1 2 2v1" /> <path d="M12 8h8" /> <path d="M16 8V5a2 2 0 0 1 2-2" /> <circle cx="16" cy="13" r=".5" /> <circle cx="18" cy="3" r=".5" /> <circle cx="20" cy="21" r=".5" /> <circle cx="20" cy="8" r=".5" />', "mind intellect artificial intelligence ai deep learning machine learning computing science development"], ["brain-cog", '<path d="m10.852 14.772-.383.923" /> <path d="m10.852 9.228-.383-.923" /> <path d="m13.148 14.772.382.924" /> <path d="m13.531 8.305-.383.923" /> <path d="m14.772 10.852.923-.383" /> <path d="m14.772 13.148.923.383" /> <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" /> <path d="M17.998 5.125a4 4 0 0 1 2.525 5.771" /> <path d="M19.505 10.294a4 4 0 0 1-1.5 7.706" /> <path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" /> <path d="M4.5 10.291A4 4 0 0 0 6 18" /> <path d="M6.002 5.125a3 3 0 0 0 .4 1.375" /> <path d="m9.228 10.852-.923-.383" /> <path d="m9.228 13.148-.923.383" /> <circle cx="12" cy="12" r="3" />', "mind intellect artificial intelligence ai deep learning machine learning computing science development"], ["brain", '<path d="M12 18V5" /> <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /> <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /> <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /> <path d="M18 18a4 4 0 0 0 2-7.464" /> <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /> <path d="M6 18a4 4 0 0 1-2-7.464" /> <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />', "medical mind mental intellect cerebral consciousness genius artificial intelligence medical science"], ["brick-wall-fire", '<path d="M16 3v2.107" /> <path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" /> <path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" /> <path d="M3 15h5.253" /> <path d="M3 9h8.228" /> <path d="M8 15v6" /> <path d="M8 3v6" />', "firewall security bricks mortar cement materials construction builder security home connectivity"], ["brick-wall-shield", '<path d="M12 9v1.258" /> <path d="M16 3v5.46" /> <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75" /> <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" /> <path d="M3 15h7" /> <path d="M3 9h12.142" /> <path d="M8 15v6" /> <path d="M8 3v6" />', "firewall security bricks mortar cement materials construction builder security home connectivity"], ["brick-wall", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M12 9v6" /> <path d="M16 15v6" /> <path d="M16 3v6" /> <path d="M3 15h18" /> <path d="M3 9h18" /> <path d="M8 15v6" /> <path d="M8 3v6" />', "bricks mortar cement materials construction builder labourer quantity surveyor buildings home"], ["briefcase-business", '<path d="M12 12h.01" /> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /> <path d="M22 13a18.15 18.15 0 0 1-20 0" /> <rect width="20" height="14" x="2" y="6" rx="2" />', "work bag baggage folder portfolio transportation"], ["briefcase-conveyor-belt", '<path d="M10 20v2" /> <path d="M14 20v2" /> <path d="M18 20v2" /> <path d="M21 20H3" /> <path d="M6 20v2" /> <path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" /> <rect x="4" y="6" width="16" height="10" rx="2" />', "baggage luggage travel suitcase conveyor carousel travel transportation"], ["briefcase-medical", '<path d="M12 11v4" /> <path d="M14 13h-4" /> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /> <path d="M18 6v14" /> <path d="M6 6v14" /> <rect width="20" height="14" x="2" y="6" rx="2" />', "doctor medicine first aid medical transportation"], ["briefcase", '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /> <rect width="20" height="14" x="2" y="6" rx="2" />', "work bag baggage folder transportation"], ["bring-to-front", '<rect x="8" y="8" width="8" height="8" rx="2" /> <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" /> <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />', "bring send move over forward front overlap layer design layout"], ["brush-cleaning", '<path d="m16 22-1-4" /> <path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" /> <path d="M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" /> <path d="m8 22 1-4" />', "cleaning utensil housekeeping tool sweeping scrubbing hygiene maintenance home tools design"], ["brush", '<path d="m11 10 3 3" /> <path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" /> <path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />', "clean sweep refactor remove draw paint color artist text design tools"], ["bubbles", '<path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" /> <circle cx="18.5" cy="8.5" r="3.5" /> <circle cx="7.5" cy="16.5" r="5.5" /> <circle cx="7.5" cy="4.5" r="2.5" />', "water cleaning soap bath hygiene freshness wash foam weather"], ["bug-off", '<path d="M12 20v-8" /> <path d="M12.656 7H14a4 4 0 0 1 4 4v1.344" /> <path d="M14.12 3.88 16 2" /> <path d="M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" /> <path d="m2 2 20 20" /> <path d="M21 5a4 4 0 0 1-3.55 3.97" /> <path d="M22 13h-3.344" /> <path d="M3 21a4 4 0 0 1 3.81-4" /> <path d="M3 5a4 4 0 0 0 3.55 3.97" /> <path d="M6 13H2" /> <path d="m8 2 1.88 1.88" /> <path d="M9.712 4.06A3 3 0 0 1 15 6v1.13" />', "issue fixed resolved testing debug code insect kill development animals"], ["bug-play", '<path d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" /> <path d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" /> <path d="M14.12 3.88 16 2" /> <path d="M21 5a4 4 0 0 1-3.55 3.97" /> <path d="M3 21a4 4 0 0 1 3.81-4" /> <path d="M3 5a4 4 0 0 0 3.55 3.97" /> <path d="M6 13H2" /> <path d="m8 2 1.88 1.88" /> <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />', "issue testing debug reproduce code insect development animals"], ["bug", '<path d="M12 20v-9" /> <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" /> <path d="M14.12 3.88 16 2" /> <path d="M21 21a4 4 0 0 0-3.81-4" /> <path d="M21 5a4 4 0 0 1-3.55 3.97" /> <path d="M22 13h-4" /> <path d="M3 21a4 4 0 0 1 3.81-4" /> <path d="M3 5a4 4 0 0 0 3.55 3.97" /> <path d="M6 13H2" /> <path d="m8 2 1.88 1.88" /> <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />', "issue error defect testing troubleshoot problem report debug development animals"], ["building-2", '<path d="M10 12h4" /> <path d="M10 8h4" /> <path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" /> <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />', "business company enterprise skyscraper organisation organization city account buildings"], ["building", '<path d="M12 10h.01" /> <path d="M12 14h.01" /> <path d="M12 6h.01" /> <path d="M16 10h.01" /> <path d="M16 14h.01" /> <path d="M16 6h.01" /> <path d="M8 10h.01" /> <path d="M8 14h.01" /> <path d="M8 6h.01" /> <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /> <rect x="4" y="2" width="16" height="20" rx="2" />', "organisation organization account buildings"], ["bus-front", '<path d="M4 6 2 7" /> <path d="M10 6h4" /> <path d="m22 7-2-1" /> <rect width="16" height="16" x="4" y="3" rx="2" /> <path d="M4 11h16" /> <path d="M8 15h.01" /> <path d="M16 15h.01" /> <path d="M6 19v2" /> <path d="M18 21v-2" />', "coach vehicle trip road transportation"], ["bus", '<path d="M8 6v6" /> <path d="M15 6v6" /> <path d="M2 12h19.6" /> <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" /> <circle cx="7" cy="18" r="2" /> <path d="M9 18h5" /> <circle cx="16" cy="18" r="2" />', "bus vehicle transport trip transportation"], ["cable-car", '<path d="M10 3h.01" /> <path d="M14 2h.01" /> <path d="m2 9 20-5" /> <path d="M12 12V6.5" /> <rect width="16" height="10" x="4" y="12" rx="3" /> <path d="M9 12v5" /> <path d="M15 12v5" /> <path d="M4 17h16" />', "ski lift winter holiday alpine resort mountains transportation travel"], ["cable", '<path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" /> <path d="M17 21v-2" /> <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" /> <path d="M21 21v-2" /> <path d="M3 5V3" /> <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" /> <path d="M7 5V3" />', "cord wire connector connection link signal console computer connectivity devices multimedia"], ["cake-slice", '<path d="M16 13H3" /> <path d="M16 17H3" /> <path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" /> <circle cx="9" cy="7" r="2" />', "birthday birthdate celebration party surprise gateaux dessert candles food-beverage social"], ["cake", '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /> <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" /> <path d="M2 21h20" /> <path d="M7 8v3" /> <path d="M12 8v3" /> <path d="M17 8v3" /> <path d="M7 4h.01" /> <path d="M12 4h.01" /> <path d="M17 4h.01" />', "birthday birthdate celebration party surprise gateaux dessert fondant food-beverage social account"], ["calculator", '<rect width="16" height="20" x="4" y="2" rx="2" /> <line x1="8" x2="16" y1="6" y2="6" /> <line x1="16" x2="16" y1="14" y2="18" /> <path d="M16 10h.01" /> <path d="M12 10h.01" /> <path d="M8 10h.01" /> <path d="M12 14h.01" /> <path d="M8 14h.01" /> <path d="M12 18h.01" /> <path d="M8 18h.01" />', "count calculating machine math devices"], ["calendar-1", '<path d="M11 14h1v4" /> <path d="M16 2v4" /> <path d="M3 10h18" /> <path d="M8 2v4" /> <rect x="3" y="4" width="18" height="18" rx="2" />', "date month year event single singular once 1 time"], ["calendar-arrow-down", '<path d="m14 18 4 4 4-4" /> <path d="M16 2v4" /> <path d="M18 14v8" /> <path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" /> <path d="M3 10h18" /> <path d="M8 2v4" />', "date month year event sort order ascending descending time"], ["calendar-arrow-up", '<path d="m14 18 4-4 4 4" /> <path d="M16 2v4" /> <path d="M18 22v-8" /> <path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" /> <path d="M3 10h18" /> <path d="M8 2v4" />', "date month year event sort order ascending descending time"], ["calendar-check-2", '<path d="M8 2v4" /> <path d="M16 2v4" /> <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /> <path d="M3 10h18" /> <path d="m16 20 2 2 4-4" />', "date day month year event confirm subscribe schedule time"], ["calendar-check", '<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" /> <path d="m9 16 2 2 4-4" />', "date day month year event confirm subscribe schedule time"], ["calendar-clock", '<path d="M16 14v2.2l1.6 1" /> <path d="M16 2v4" /> <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" /> <path d="M3 10h5" /> <path d="M8 2v4" /> <circle cx="16" cy="16" r="6" />', "date day month year event clock hour time"], ["calendar-cog", '<path d="m15.228 16.852-.923-.383" /> <path d="m15.228 19.148-.923.383" /> <path d="M16 2v4" /> <path d="m16.47 14.305.382.923" /> <path d="m16.852 20.772-.383.924" /> <path d="m19.148 15.228.383-.923" /> <path d="m19.53 21.696-.382-.924" /> <path d="m20.772 16.852.924-.383" /> <path d="m20.772 19.148.924.383" /> <path d="M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /> <path d="M3 10h18" /> <path d="M8 2v4" /> <circle cx="18" cy="18" r="3" />', "date day month year events settings gear cog time"], ["calendar-days", '<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" /> <path d="M8 14h.01" /> <path d="M12 14h.01" /> <path d="M16 14h.01" /> <path d="M8 18h.01" /> <path d="M12 18h.01" /> <path d="M16 18h.01" />', "date month year event time"], ["calendar-fold", '<path d="M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" /> <path d="M15 22v-5a1 1 0 0 1 1-1h5" /> <path d="M8 2v4" /> <path d="M16 2v4" /> <path d="M3 10h18" />', "date month year event birthday birthdate ics time files"], ["calendar-heart", '<path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125" /> <path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" /> <path d="M16 2v4" /> <path d="M3 10h18" /> <path d="M8 2v4" />', "date month year event heart favourite subscribe valentines day time"], ["calendar-minus-2", '<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" /> <path d="M10 16h4" />', "date day month year event delete remove time"], ["calendar-minus", '<path d="M16 19h6" /> <path d="M16 2v4" /> <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" /> <path d="M3 10h18" /> <path d="M8 2v4" />', "date day month year event delete remove time"], ["calendar-off", '<path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" /> <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" /> <path d="M16 2v4" /> <path d="M3 10h7" /> <path d="M21 10h-5.5" /> <path d="m2 2 20 20" />', "date day month year event delete remove time"], ["calendar-plus-2", '<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" /> <path d="M10 16h4" /> <path d="M12 14v4" />', "date day month year event add subscribe create time"], ["calendar-plus", '<path d="M16 19h6" /> <path d="M16 2v4" /> <path d="M19 16v6" /> <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" /> <path d="M3 10h18" /> <path d="M8 2v4" />', "date day month year event add subscribe create time"], ["calendar-range", '<rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M16 2v4" /> <path d="M3 10h18" /> <path d="M8 2v4" /> <path d="M17 14h-6" /> <path d="M13 18H7" /> <path d="M7 14h.01" /> <path d="M17 18h.01" />', "date day month year event range period time"], ["calendar-search", '<path d="M16 2v4" /> <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" /> <path d="m22 22-1.875-1.875" /> <path d="M3 10h18" /> <path d="M8 2v4" /> <circle cx="18" cy="18" r="3" />', "date day month year events search lens time"], ["calendar-sync", '<path d="M11 10v4h4" /> <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" /> <path d="M16 2v4" /> <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" /> <path d="M21 22v-4h-4" /> <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" /> <path d="M3 10h4" /> <path d="M8 2v4" />', "repeat refresh reconnect transfer backup date month year arrows time"], ["calendar-x-2", '<path d="M8 2v4" /> <path d="M16 2v4" /> <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /> <path d="M3 10h18" /> <path d="m17 22 5-5" /> <path d="m17 17 5 5" />', "date day month year event remove time"], ["calendar-x", '<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" /> <path d="m14 14-4 4" /> <path d="m10 14 4 4" />', "date day month year event remove busy time"], ["calendar", '<path d="M8 2v4" /> <path d="M16 2v4" /> <rect width="18" height="18" x="3" y="4" rx="2" /> <path d="M3 10h18" />', "date month year event birthday birthdate time"], ["calendars", '<path d="M12 2v2" /> <path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" /> <path d="M18 2v2" /> <path d="M2 13h2" /> <path d="M8 8h14" /> <rect x="8" y="3" width="14" height="14" rx="2" />', "date month year event dates months years events time"], ["camera-off", '<path d="M14.564 14.558a3 3 0 1 1-4.122-4.121" /> <path d="m2 2 20 20" /> <path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" /> <path d="M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" />', "photo webcam video photography devices communication"], ["camera", '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" /> <circle cx="12" cy="13" r="3" />', "photography lens focus capture shot visual image device photography devices communication"], ["candy-cane", '<path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" /> <path d="M17.75 7 15 2.1" /> <path d="M10.9 4.8 13 9" /> <path d="m7.9 9.7 2 4.4" /> <path d="M4.9 14.7 7 18.9" />', "sugar food sweet christmas xmas food-beverage"], ["candy-off", '<path d="M10 10v7.9" /> <path d="M11.802 6.145a5 5 0 0 1 6.053 6.053" /> <path d="M14 6.1v2.243" /> <path d="m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" /> <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" /> <path d="m2 2 20 20" /> <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" />', "sugar free food sweet allergy intolerance diet food-beverage"], ["candy", '<path d="M10 7v10.9" /> <path d="M14 6.1V17" /> <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" /> <path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" /> <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" />', "sugar food sweet food-beverage"], ["cannabis-off", '<path d="M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5" /> <path d="M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9" /> <path d="M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684" /> <path d="m2 2 20 20" /> <path d="M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907" /> <path d="M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3" />', "cannabis weed leaf nature"], ["cannabis", '<path d="M12 22v-4" /> <path d="M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" />', "cannabis weed leaf nature"], ["captions-off", '<path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" /> <path d="M17 11h-.5" /> <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" /> <path d="m2 2 20 20" /> <path d="M7 11h4" /> <path d="M7 15h2.5" />', "closed captions subtitles subhead transcription transcribe dialogue accessibility multimedia"], ["captions", '<rect width="18" height="14" x="3" y="5" rx="2" ry="2" /> <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />', "closed captions subtitles subhead transcription transcribe dialogue accessibility multimedia"], ["car-front", '<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" /> <path d="M7 14h.01" /> <path d="M17 14h.01" /> <rect width="18" height="8" x="3" y="10" rx="2" /> <path d="M5 18v2" /> <path d="M19 18v2" />', "vehicle drive trip journey transportation"], ["car-taxi-front", '<path d="M10 2h4" /> <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" /> <path d="M7 14h.01" /> <path d="M17 14h.01" /> <rect width="18" height="8" x="3" y="10" rx="2" /> <path d="M5 18v2" /> <path d="M19 18v2" />', "cab vehicle drive trip journey transportation"], ["car", '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /> <circle cx="7" cy="17" r="2" /> <path d="M9 17h6" /> <circle cx="17" cy="17" r="2" />', "vehicle drive trip journey transportation"], ["caravan", '<path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" /> <path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" /> <path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" /> <circle cx="8" cy="19" r="2" />', "trailer tow camping campsite mobile home holiday nomadic wilderness transportation travel nature"], ["card-sim", '<path d="M12 14v4" /> <path d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /> <path d="M8 14h8" /> <rect x="8" y="10" width="8" height="8" rx="1" />', "cellphone smartphone mobile network cellular service provider signal connectivity communication multimedia devices"], ["carrot", '<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" /> <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" /> <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" />', "vegetable food eat food-beverage"], ["case-lower", '<path d="M10 9v7" /> <path d="M14 6v10" /> <circle cx="17.5" cy="12.5" r="3.5" /> <circle cx="6.5" cy="12.5" r="3.5" />', "text letters characters font typography text development"], ["case-sensitive", '<path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /> <path d="M22 9v7" /> <path d="M3.304 13h6.392" /> <circle cx="18.5" cy="12.5" r="3.5" />', "text letters characters font typography text"], ["case-upper", '<path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" /> <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /> <path d="M3.304 13h6.392" />', "text letters characters font typography text development"], ["cassette-tape", '<rect width="20" height="16" x="2" y="4" rx="2" /> <circle cx="8" cy="10" r="2" /> <path d="M8 12h8" /> <circle cx="16" cy="10" r="2" /> <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />', "audio music recording play connectivity devices multimedia communication files"], ["cast", '<path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" /> <path d="M2 12a9 9 0 0 1 8 8" /> <path d="M2 16a5 5 0 0 1 4 4" /> <line x1="2" x2="2.01" y1="20" y2="20" />', "chromecast airplay screen devices connectivity"], ["castle", '<path d="M10 5V3" /> <path d="M14 5V3" /> <path d="M15 21v-3a3 3 0 0 0-6 0v3" /> <path d="M18 3v8" /> <path d="M18 5H6" /> <path d="M22 11H2" /> <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" /> <path d="M6 3v8" />', "fortress stronghold palace chateau building buildings gaming navigation"], ["cat", '<path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" /> <path d="M8 14v.5" /> <path d="M16 14v.5" /> <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />', "animal pet kitten feline animals"], ["cctv", '<path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" /> <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" /> <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" /> <path d="M2 21v-4" /> <path d="M7 9h.01" />', "camera surveillance recording film videotape crime watching security devices communication connectivity photography"], ["chart-area", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" />', "statistics analytics diagram graph area charts"], ["chart-bar-big", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <rect x="7" y="13" width="9" height="4" rx="1" /> <rect x="7" y="5" width="12" height="4" rx="1" />', "statistics analytics diagram graph charts"], ["chart-bar-decreasing", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M7 11h8" /> <path d="M7 16h3" /> <path d="M7 6h12" />', "statistics analytics diagram graph trending down charts"], ["chart-bar-increasing", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M7 11h8" /> <path d="M7 16h12" /> <path d="M7 6h3" />', "statistics analytics diagram graph trending up charts"], ["chart-bar-stacked", '<path d="M11 13v4" /> <path d="M15 5v4" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <rect x="7" y="13" width="9" height="4" rx="1" /> <rect x="7" y="5" width="12" height="4" rx="1" />', "statistics analytics diagram graph multivariate categorical comparison charts"], ["chart-bar", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M7 16h8" /> <path d="M7 11h12" /> <path d="M7 6h3" />', "statistics analytics diagram graph charts"], ["chart-candlestick", '<path d="M9 5v4" /> <rect width="4" height="6" x="7" y="9" rx="1" /> <path d="M9 15v2" /> <path d="M17 3v2" /> <rect width="4" height="8" x="15" y="5" rx="1" /> <path d="M17 13v3" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" />', "trading trader financial markets portfolio assets prices value charts finance"], ["chart-column-big", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <rect x="15" y="5" width="4" height="12" rx="1" /> <rect x="7" y="8" width="4" height="9" rx="1" />', "statistics analytics diagram graph charts"], ["chart-column-decreasing", '<path d="M13 17V9" /> <path d="M18 17v-3" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M8 17V5" />', "statistics analytics diagram graph trending down charts"], ["chart-column-increasing", '<path d="M13 17V9" /> <path d="M18 17V5" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M8 17v-3" />', "statistics analytics diagram graph trending up charts"], ["chart-column-stacked", '<path d="M11 13H7" /> <path d="M19 9h-4" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <rect x="15" y="5" width="4" height="12" rx="1" /> <rect x="7" y="8" width="4" height="9" rx="1" />', "statistics analytics diagram graph multivariate categorical comparison charts"], ["chart-column", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M18 17V9" /> <path d="M13 17V5" /> <path d="M8 17v-3" />', "statistics analytics diagram graph charts"], ["chart-gantt", '<path d="M10 6h8" /> <path d="M12 16h6" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M8 11h7" />', "diagram graph timeline planning charts"], ["chart-line", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="m19 9-5 5-4-4-3 3" />', "statistics analytics diagram graph charts"], ["chart-network", '<path d="m13.11 7.664 1.78 2.672" /> <path d="m14.162 12.788-3.324 1.424" /> <path d="m20 4-6.06 1.515" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <circle cx="12" cy="6" r="2" /> <circle cx="16" cy="12" r="2" /> <circle cx="9" cy="15" r="2" />', "statistics analytics diagram graph topology cluster web nodes charts"], ["chart-no-axes-column-decreasing", '<path d="M5 21V3" /> <path d="M12 21V9" /> <path d="M19 21v-6" />', "statistics analytics diagram graph trending down charts"], ["chart-no-axes-column-increasing", '<path d="M5 21v-6" /> <path d="M12 21V9" /> <path d="M19 21V3" />', "statistics analytics diagram graph trending up charts"], ["chart-no-axes-column", '<path d="M5 21v-6" /> <path d="M12 21V3" /> <path d="M19 21V9" />', "statistics analytics diagram graph charts"], ["chart-no-axes-combined", '<path d="M12 16v5" /> <path d="M16 14v7" /> <path d="M20 10v11" /> <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /> <path d="M4 18v3" /> <path d="M8 14v7" />', "statistics analytics diagram graph trending up charts"], ["chart-no-axes-gantt", '<path d="M6 5h12" /> <path d="M4 12h10" /> <path d="M12 19h8" />', "projects manage overview roadmap plan intentions timeline deadline charts time development design"], ["chart-pie", '<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /> <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />', "statistics analytics diagram presentation charts files"], ["chart-scatter", '<circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /> <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" /> <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" /> <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" /> <circle cx="17.5" cy="14.5" r=".5" fill="currentColor" /> <path d="M3 3v16a2 2 0 0 0 2 2h16" />', "statistics analytics diagram graph charts"], ["chart-spline", '<path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />', "statistics analytics diagram graph curve continuous smooth polynomial charts"], ["check-check", '<path d="M18 6 7 17l-5-5" /> <path d="m22 10-7.5 7.5L13 16" />', "done received double todo tick complete task notifications"], ["check-line", '<path d="M20 4L9 15" /> <path d="M21 19L3 19" /> <path d="M9 15L4 10" />', "done todo tick complete task notifications"], ["check", '<path d="M20 6 9 17l-5-5" />', "done todo tick complete task notifications"], ["chef-hat", '<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" /> <path d="M6 17h12" />', "cooking food kitchen restaurant food-beverage"], ["cherry", '<path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" /> <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" /> <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" /> <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />', "fruit food food-beverage"], ["chess-bishop", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" /> <path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" /> <path d="m16 7-2.5 2.5" /> <path d="M9 2h6" />', "mitre miter piece board game religion gaming emoji"], ["chess-king", '<path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /> <path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1" /> <path d="M10 4h4" /> <path d="M12 2v6.818" />', "ruler crown piece board game stalemate gaming emoji"], ["chess-knight", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" /> <path d="M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456" /> <path d="m15 5 1.425-1.425" /> <path d="m17 8 1.53-1.53" /> <path d="M9.713 12.185 7 18" />', "piece horse board game gaming emoji"], ["chess-pawn", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" /> <path d="m14.5 10 1.5 8" /> <path d="M7 10h10" /> <path d="m8 18 1.5-8" /> <circle cx="12" cy="6" r="4" />', "piece board game gaming emoji"], ["chess-queen", '<path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /> <path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" /> <path d="m20 9-3 9" /> <path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" /> <path d="M7 18 4 9" /> <circle cx="12" cy="4" r="2" /> <circle cx="20" cy="7" r="2" /> <circle cx="4" cy="7" r="2" />', "ruler crown piece board game stalemate gaming emoji"], ["chess-rook", '<path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" /> <path d="M10 2v2" /> <path d="M14 2v2" /> <path d="m17 18-1-9" /> <path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" /> <path d="M6 4h12" /> <path d="m7 18 1-9" />', "castle piece board game gaming emoji"], ["chevron-down", '<path d="m6 9 6 6 6-6" />', "backwards reverse slow dropdown arrows gaming"], ["chevron-first", '<path d="m17 18-6-6 6-6" /> <path d="M7 6v12" />', "previous music arrows multimedia"], ["chevron-last", '<path d="m7 18 6-6-6-6" /> <path d="M17 6v12" />', "skip next music arrows multimedia"], ["chevron-left", '<path d="m15 18-6-6 6-6" />', "back previous less than fewer menu < arrows"], ["chevron-right", '<path d="m9 18 6-6-6-6" />', "forward next more than greater menu code coding command line arrows math development"], ["chevron-up", '<path d="m18 15-6-6-6 6" />', "caret keyboard mac control ctrl superscript exponential power arrows math gaming"], ["chevrons-down-up", '<path d="m7 20 5-5 5 5" /> <path d="m7 4 5 5 5-5" />', "collapse fold vertical arrows"], ["chevrons-down", '<path d="m7 6 5 5 5-5" /> <path d="m7 13 5 5 5-5" />', "backwards reverse slower arrows gaming"], ["chevrons-left-right-ellipsis", '<path d="M12 12h.01" /> <path d="M16 12h.01" /> <path d="m17 7 5 5-5 5" /> <path d="m7 7-5 5 5 5" /> <path d="M8 12h.01" />', "internet network connection cable lan port router switch communication devices multimedia gaming"], ["chevrons-left-right", '<path d="m9 7-5 5 5 5" /> <path d="m15 7 5 5-5 5" />', "expand horizontal unfold arrows"], ["chevrons-left", '<path d="m11 17-5-5 5-5" /> <path d="m18 17-5-5 5-5" />', "turn corner arrows gaming"], ["chevrons-right-left", '<path d="m20 17-5-5 5-5" /> <path d="m4 17 5-5-5-5" />', "collapse fold horizontal arrows"], ["chevrons-right", '<path d="m6 17 5-5-5-5" /> <path d="m13 17 5-5-5-5" />', "turn corner arrows gaming"], ["chevrons-up-down", '<path d="m7 15 5 5 5-5" /> <path d="m7 9 5-5 5 5" />', "expand unfold vertical arrows"], ["chevrons-up", '<path d="m17 11-5-5-5 5" /> <path d="m17 18-5-5-5 5" />', "forward ahead faster speed boost arrows gaming"], ["chromium", '<path d="M10.88 21.94 15.46 14" /> <path d="M21.17 8H12" /> <path d="M3.95 6.06 8.54 14" /> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="4" />', "browser logo brands"], ["church", '<path d="M10 9h4" /> <path d="M12 7v5" /> <path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" /> <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" />', "temple building buildings navigation"], ["cigarette-off", '<path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" /> <path d="M18 8c0-2.5-2-2.5-2-5" /> <path d="m2 2 20 20" /> <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" /> <path d="M22 8c0-2.5-2-2.5-2-5" /> <path d="M7 12v4" />', "smoking no-smoking travel transportation medical"], ["cigarette", '<path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" /> <path d="M18 8c0-2.5-2-2.5-2-5" /> <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /> <path d="M22 8c0-2.5-2-2.5-2-5" /> <path d="M7 12v4" />', "smoking travel transportation medical"], ["circle-alert", '<circle cx="12" cy="12" r="10" /> <line x1="12" x2="12" y1="8" y2="12" /> <line x1="12" x2="12.01" y1="16" y2="16" />', "warning alert danger exclamation mark notifications"], ["circle-arrow-down", '<circle cx="12" cy="12" r="10" /> <path d="M12 8v8" /> <path d="m8 12 4 4 4-4" />', "backwards reverse direction south sign button arrows gaming"], ["circle-arrow-left", '<circle cx="12" cy="12" r="10" /> <path d="m12 8-4 4 4 4" /> <path d="M16 12H8" />', "previous back direction west sign turn button <- arrows gaming"], ["circle-arrow-out-down-left", '<path d="M2 12a10 10 0 1 1 10 10" /> <path d="m2 22 10-10" /> <path d="M8 22H2v-6" />', "outwards direction south-west diagonal arrows"], ["circle-arrow-out-down-right", '<path d="M12 22a10 10 0 1 1 10-10" /> <path d="M22 22 12 12" /> <path d="M22 16v6h-6" />', "outwards direction south-east diagonal arrows"], ["circle-arrow-out-up-left", '<path d="M2 8V2h6" /> <path d="m2 2 10 10" /> <path d="M12 2A10 10 0 1 1 2 12" />', "outwards direction north-west diagonal keyboard button escape arrows development"], ["circle-arrow-out-up-right", '<path d="M22 12A10 10 0 1 1 12 2" /> <path d="M22 2 12 12" /> <path d="M16 2h6v6" />', "outwards direction north-east diagonal arrows"], ["circle-arrow-right", '<circle cx="12" cy="12" r="10" /> <path d="m12 16 4-4-4-4" /> <path d="M8 12h8" />', "next forward direction east sign turn button -> arrows gaming"], ["circle-arrow-up", '<circle cx="12" cy="12" r="10" /> <path d="m16 12-4-4-4 4" /> <path d="M12 16V8" />', "forward direction north sign button arrows gaming"], ["circle-check-big", '<path d="M21.801 10A10 10 0 1 1 17 3.335" /> <path d="m9 11 3 3L22 4" />', "done todo tick complete task notifications"], ["circle-check", '<circle cx="12" cy="12" r="10" /> <path d="m9 12 2 2 4-4" />', "done todo tick complete task notifications"], ["circle-chevron-down", '<circle cx="12" cy="12" r="10" /> <path d="m16 10-4 4-4-4" />', "back menu arrows"], ["circle-chevron-left", '<circle cx="12" cy="12" r="10" /> <path d="m14 16-4-4 4-4" />', "back previous less than fewer menu < arrows"], ["circle-chevron-right", '<circle cx="12" cy="12" r="10" /> <path d="m10 8 4 4-4 4" />', "back more than greater menu > arrows"], ["circle-chevron-up", '<circle cx="12" cy="12" r="10" /> <path d="m8 14 4-4 4 4" />', "caret ahead menu ^ arrows"], ["circle-dashed", '<path d="M10.1 2.182a10 10 0 0 1 3.8 0" /> <path d="M13.9 21.818a10 10 0 0 1-3.8 0" /> <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" /> <path d="M2.182 13.9a10 10 0 0 1 0-3.8" /> <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" /> <path d="M21.818 10.1a10 10 0 0 1 0 3.8" /> <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" /> <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />', "pending dot progress issue draft code coding version control development shapes"], ["circle-divide", '<circle cx="12" cy="12" r="10" /> <line x1="8" x2="16" y1="12" y2="12" /> <line x1="12" x2="12" y1="16" y2="16" /> <line x1="12" x2="12" y1="8" y2="8" />', "calculate math \xF7 / math"], ["circle-dollar-sign", '<circle cx="12" cy="12" r="10" /> <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /> <path d="M12 18V6" />', "monetization marketing currency money payment finance"], ["circle-dot-dashed", '<path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" /> <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" /> <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" /> <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" /> <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" /> <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" /> <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" /> <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" /> <circle cx="12" cy="12" r="1" />', "pending dot progress issue draft code coding version control development shapes"], ["circle-dot", '<circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="1" />', "pending dot progress issue code coding version control choices development shapes"], ["circle-ellipsis", '<circle cx="12" cy="12" r="10" /> <path d="M17 12h.01" /> <path d="M12 12h.01" /> <path d="M7 12h.01" />', "ellipsis et cetera etc loader loading progress pending throbber layout development"], ["circle-equal", '<circle cx="12" cy="12" r="10" /> <path d="M7 10h10" /> <path d="M7 14h10" />', "calculate shape = math"], ["circle-fading-arrow-up", '<path d="M12 2a10 10 0 0 1 7.38 16.75" /> <path d="m16 12-4-4-4 4" /> <path d="M12 16V8" /> <path d="M2.5 8.875a10 10 0 0 0-.5 3" /> <path d="M2.83 16a10 10 0 0 0 2.43 3.4" /> <path d="M4.636 5.235a10 10 0 0 1 .891-.857" /> <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />', "north up upgrade improve circle button arrows development"], ["circle-fading-plus", '<path d="M12 2a10 10 0 0 1 7.38 16.75" /> <path d="M12 8v8" /> <path d="M16 12H8" /> <path d="M2.5 8.875a10 10 0 0 0-.5 3" /> <path d="M2.83 16a10 10 0 0 0 2.43 3.4" /> <path d="M4.636 5.235a10 10 0 0 1 .891-.857" /> <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />', "stories social media instagram facebook meta snapchat sharing content communication social"], ["circle-gauge", '<path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" /> <circle cx="12" cy="12" r="2" /> <path d="M13.4 10.6 19 5" />', "dashboard dial meter speed pressure measure level transportation sports science"], ["circle-minus", '<circle cx="12" cy="12" r="10" /> <path d="M8 12h8" />', "subtract remove decrease reduce calculate line operator code math"], ["circle-off", '<path d="m2 2 20 20" /> <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" /> <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />', "diameter zero \xD8 nothing null void cancel ban shapes"], ["circle-parking-off", '<path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" /> <path d="M13 13H9" /> <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" /> <path d="m2 2 20 20" /> <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" /> <path d="M9 17V9" />', "parking lot car park no parking transportation navigation"], ["circle-parking", '<circle cx="12" cy="12" r="10" /> <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />', "parking lot car park transportation navigation"], ["circle-pause", '<circle cx="12" cy="12" r="10" /> <line x1="10" x2="10" y1="15" y2="9" /> <line x1="14" x2="14" y1="15" y2="9" />', "music audio stop multimedia"], ["circle-percent", '<circle cx="12" cy="12" r="10" /> <path d="m15 9-6 6" /> <path d="M9 9h.01" /> <path d="M15 15h.01" />', "verified unverified sale discount offer marketing sticker price tag social finance shopping math"], ["circle-pile", '<circle cx="12" cy="19" r="2" /> <circle cx="12" cy="5" r="2" /> <circle cx="16" cy="12" r="2" /> <circle cx="20" cy="19" r="2" /> <circle cx="4" cy="19" r="2" /> <circle cx="8" cy="12" r="2" />', "off zero record shape circle-pile circle pile stack shapes"], ["circle-play", '<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" /> <circle cx="12" cy="12" r="10" />', "music start run multimedia"], ["circle-plus", '<circle cx="12" cy="12" r="10" /> <path d="M8 12h8" /> <path d="M12 8v8" />', "add new increase increment positive calculate crosshair aim math development cursors gaming"], ["circle-pound-sterling", '<circle cx="12" cy="12" r="10" /> <path d="M10 16V9.5a1 1 0 0 1 5 0" /> <path d="M8 12h4" /> <path d="M8 16h7" />', "monetization coin penny marketing currency money payment british finance"], ["circle-power", '<circle cx="12" cy="12" r="10" /> <path d="M12 7v4" /> <path d="M7.998 9.003a5 5 0 1 0 8-.005" />', "on off device switch toggle binary boolean reboot connectivity"], ["circle-question-mark", '<circle cx="12" cy="12" r="10" /> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /> <path d="M12 17h.01" />', "question mark accessibility text notifications"], ["circle-slash-2", '<circle cx="12" cy="12" r="10" /> <path d="M22 2 2 22" />', "diameter zero \xF8 nothing null void ban math shapes math development"], ["circle-slash", '<circle cx="12" cy="12" r="10" /> <line x1="9" x2="15" y1="15" y2="9" />', "diameter zero \xD8 nothing null void cancel ban development math"], ["circle-small", '<circle cx="12" cy="12" r="6" />', "shape bullet gender genderless shapes medical"], ["circle-star", '<circle cx="12" cy="12" r="10" /> <path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />', "badge medal honour decoration order pin laurel trophy sports gaming"], ["circle-stop", '<circle cx="12" cy="12" r="10" /> <rect x="9" y="9" width="6" height="6" rx="1" />', "media music multimedia"], ["circle-user-round", '<path d="M18 20a6 6 0 0 0-12 0" /> <circle cx="12" cy="10" r="4" /> <circle cx="12" cy="12" r="10" />', "person account contact account"], ["circle-user", '<circle cx="12" cy="12" r="10" /> <circle cx="12" cy="10" r="3" /> <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />', "person account contact account"], ["circle-x", '<circle cx="12" cy="12" r="10" /> <path d="m15 9-6 6" /> <path d="m9 9 6 6" />', "cancel close delete remove times clear error incorrect math development"], ["circle", '<circle cx="12" cy="12" r="10" />', "off zero record shape shapes"], ["circuit-board", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M11 9h4a2 2 0 0 0 2-2V3" /> <circle cx="9" cy="9" r="2" /> <path d="M7 21v-4a2 2 0 0 1 2-2h4" /> <circle cx="15" cy="15" r="2" />', "computing electricity electronics science development"], ["citrus", '<path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" /> <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" /> <path d="m14 10-5.5 5.5" /> <path d="M14 17.85V10H6.15" />', "lemon orange grapefruit fruit food-beverage"], ["clapperboard", '<path d="m12.296 3.464 3.02 3.956" /> <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" /> <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> <path d="m6.18 5.276 3.1 3.899" />', "movie film video camera cinema cut action television multimedia"], ["clipboard-check", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="m9 14 2 2 4-4" />', "copied pasted done todo tick complete task text"], ["clipboard-clock", '<path d="M16 14v2.2l1.6 1" /> <path d="M16 4h2a2 2 0 0 1 2 2v.832" /> <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" /> <circle cx="16" cy="16" r="6" /> <rect x="8" y="2" width="8" height="4" rx="1" />', "copy paste history log clock time watch alarm time text"], ["clipboard-copy", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /> <path d="M16 4h2a2 2 0 0 1 2 2v4" /> <path d="M21 14H11" /> <path d="m15 10-4 4 4 4" />', "copy paste text arrows"], ["clipboard-list", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="M12 11h4" /> <path d="M12 16h4" /> <path d="M8 11h.01" /> <path d="M8 16h.01" />', "copy paste tasks text"], ["clipboard-minus", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="M9 14h6" />', "copy delete remove erase document medical report doctor text medical"], ["clipboard-paste", '<path d="M11 14h10" /> <path d="M16 4h2a2 2 0 0 1 2 2v1.344" /> <path d="m17 18 4-4-4-4" /> <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" /> <rect x="8" y="2" width="8" height="4" rx="1" />', "copy paste text arrows"], ["clipboard-pen-line", '<rect width="8" height="4" x="8" y="2" rx="1" /> <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" /> <path d="M16 4h2a2 2 0 0 1 1.73 1" /> <path d="M8 18h1" /> <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />', "paste text"], ["clipboard-pen", '<path d="M16 4h2a2 2 0 0 1 2 2v2" /> <path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /> <path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <rect x="8" y="2" width="8" height="4" rx="1" />', "paste signature text"], ["clipboard-plus", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="M9 14h6" /> <path d="M12 17v-6" />', "copy paste add create new document medical report text medical"], ["clipboard-type", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="M9 12v-1h6v1" /> <path d="M11 17h2" /> <path d="M12 11v6" />', "paste format text text"], ["clipboard-x", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /> <path d="m15 11-6 6" /> <path d="m9 11 6 6" />', "copy paste discard remove text"], ["clipboard", '<rect width="8" height="4" x="8" y="2" rx="1" ry="1" /> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />', "copy paste text"], ["clock-1", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l2-4" />', "time watch alarm time"], ["clock-10", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l-4-2" />', "time watch alarm time"], ["clock-11", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l-2-4" />', "time watch alarm time"], ["clock-12", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6" />', "time watch alarm noon midnight time"], ["clock-2", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4-2" />', "time watch alarm time"], ["clock-3", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6h4" />', "time watch alarm time"], ["clock-4", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />', "time watch alarm time"], ["clock-5", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l2 4" />', "time watch alarm time"], ["clock-6", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v10" />', "time watch alarm time"], ["clock-7", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l-2 4" />', "time watch alarm time"], ["clock-8", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l-4 2" />', "time watch alarm time"], ["clock-9", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6H8" />', "time watch alarm time"], ["clock-alert", '<path d="M12 6v6l4 2" /> <path d="M20 12v5" /> <path d="M20 21h.01" /> <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />', "time watch alarm warning wrong time"], ["clock-arrow-down", '<path d="M12 6v6l2 1" /> <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" /> <path d="m14 18 4 4 4-4" /> <path d="M18 14v8" />', "time watch alarm sort order ascending descending increasing time"], ["clock-arrow-up", '<path d="M12 6v6l1.56.78" /> <path d="M13.227 21.925a10 10 0 1 1 8.767-9.588" /> <path d="m14 18 4-4 4 4" /> <path d="M18 22v-8" />', "time watch alarm sort order ascending descending increasing time"], ["clock-check", '<path d="M12 6v6l4 2" /> <path d="M22 12a10 10 0 1 0-11 9.95" /> <path d="m22 16-5.5 5.5L14 19" />', "time watch alarm time"], ["clock-fading", '<path d="M12 2a10 10 0 0 1 7.38 16.75" /> <path d="M12 6v6l4 2" /> <path d="M2.5 8.875a10 10 0 0 0-.5 3" /> <path d="M2.83 16a10 10 0 0 0 2.43 3.4" /> <path d="M4.636 5.235a10 10 0 0 1 .891-.857" /> <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />', "time watch alarm time"], ["clock-plus", '<path d="M12 6v6l3.644 1.822" /> <path d="M16 19h6" /> <path d="M19 16v6" /> <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />', "time watch alarm add create new time"], ["clock", '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />', "time watch alarm time"], ["closed-caption", '<path d="M10 9.17a3 3 0 1 0 0 5.66" /> <path d="M17 9.17a3 3 0 1 0 0 5.66" /> <rect x="2" y="5" width="20" height="14" rx="2" />', "tv movie video closed captions subtitles subhead transcription transcribe accessibility multimedia"], ["cloud-alert", '<path d="M12 12v4" /> <path d="M12 20h.01" /> <path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" />', "weather danger warning alert error sync network exclamation development"], ["cloud-backup", '<path d="M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" /> <path d="M7 11v4h4" /> <path d="M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" />', "storage memory bytes servers backup timemachine rotate synchronize arrows files"], ["cloud-check", '<path d="m17 15-5.5 5.5L9 18" /> <path d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" />', "sync network success done completed saved persisted development"], ["cloud-cog", '<path d="m10.852 19.772-.383.924" /> <path d="m13.148 14.228.383-.923" /> <path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" /> <path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" /> <path d="m14.772 15.852.923-.383" /> <path d="m14.772 18.148.923.383" /> <path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" /> <path d="m9.228 15.852-.923-.383" /> <path d="m9.228 18.148-.923.383" />', "computing ai cluster network development"], ["cloud-download", '<path d="M12 13v8l-4-4" /> <path d="m12 21 4-4" /> <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />', "import arrows files"], ["cloud-drizzle", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 19v1" /> <path d="M8 14v1" /> <path d="M16 19v1" /> <path d="M16 14v1" /> <path d="M12 21v1" /> <path d="M12 16v1" />', "weather shower weather"], ["cloud-fog", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 17H7" /> <path d="M17 21H9" />', "weather mist weather"], ["cloud-hail", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v2" /> <path d="M8 14v2" /> <path d="M16 20h.01" /> <path d="M8 20h.01" /> <path d="M12 16v2" /> <path d="M12 22h.01" />', "weather rainfall weather"], ["cloud-lightning", '<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" /> <path d="m13 12-3 5h4l-3 5" />', "weather bolt weather"], ["cloud-moon-rain", '<path d="M11 20v2" /> <path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" /> <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" /> <path d="M7 19v2" />', "weather partly night rainfall weather"], ["cloud-moon", '<path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" /> <path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" />', "weather night weather"], ["cloud-off", '<path d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" /> <path d="M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" /> <path d="m2 2 20 20" />', "disconnect connectivity weather"], ["cloud-rain-wind", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="m9.2 22 3-7" /> <path d="m9 13-3 7" /> <path d="m17 13-3 7" />', "weather rainfall weather"], ["cloud-rain", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v6" /> <path d="M8 14v6" /> <path d="M12 16v6" />', "weather rainfall weather"], ["cloud-snow", '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 15h.01" /> <path d="M8 19h.01" /> <path d="M12 17h.01" /> <path d="M12 21h.01" /> <path d="M16 15h.01" /> <path d="M16 19h.01" />', "weather blizzard weather"], ["cloud-sun-rain", '<path d="M12 2v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="M20 12h2" /> <path d="m19.07 4.93-1.41 1.41" /> <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" /> <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" /> <path d="M11 20v2" /> <path d="M7 19v2" />', "weather partly rainfall weather"], ["cloud-sun", '<path d="M12 2v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="M20 12h2" /> <path d="m19.07 4.93-1.41 1.41" /> <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" /> <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />', "weather partly weather"], ["cloud-sync", '<path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" /> <path d="M17 22v-4h-4" /> <path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" /> <path d="M7 10v4h4" /> <path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" />', "synchronize synchronise refresh reconnect transfer backup storage upload arrows files"], ["cloud-upload", '<path d="M12 13v8" /> <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="m8 17 4-4 4 4" />', "file arrows files"], ["cloud", '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />', "weather weather"], ["cloudy", '<path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" /> <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />', "weather clouds weather"], ["clover", '<path d="M16.17 7.83 2 22" /> <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" /> <path d="m7.83 7.83 8.34 8.34" />', "leaf luck plant gaming"], ["club", '<path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" /> <path d="M12 17.66L12 22" />', "shape suit playing cards shapes gaming"], ["code-xml", '<path d="m18 16 4-4-4-4" /> <path d="m6 8-4 4 4 4" /> <path d="m14.5 4-5 16" />', "source programming html xml text development"], ["code", '<path d="m16 18 6-6-6-6" /> <path d="m8 6-6 6 6 6" />', "source programming html xml text development"], ["codepen", '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /> <line x1="12" x2="12" y1="22" y2="15.5" /> <polyline points="22 8.5 12 15.5 2 8.5" /> <polyline points="2 15.5 12 8.5 22 15.5" /> <line x1="12" x2="12" y1="2" y2="8.5" />', "logo brands development"], ["codesandbox", '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /> <polyline points="7.5 4.21 12 6.81 16.5 4.21" /> <polyline points="7.5 19.79 7.5 14.6 3 12" /> <polyline points="21 12 16.5 14.6 16.5 19.79" /> <polyline points="3.27 6.96 12 12.01 20.73 6.96" /> <line x1="12" x2="12" y1="22.08" y2="12" />', "logo brands development"], ["coffee", '<path d="M10 2v2" /> <path d="M14 2v2" /> <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" /> <path d="M6 2v2" />', "drink cup mug tea cafe hot beverage food-beverage"], ["cog", '<path d="M11 10.27 7 3.34" /> <path d="m11 13.73-4 6.93" /> <path d="M12 22v-2" /> <path d="M12 2v2" /> <path d="M14 12h8" /> <path d="m17 20.66-1-1.73" /> <path d="m17 3.34-1 1.73" /> <path d="M2 12h2" /> <path d="m20.66 17-1.73-1" /> <path d="m20.66 7-1.73 1" /> <path d="m3.34 17 1.73-1" /> <path d="m3.34 7 1.73 1" /> <circle cx="12" cy="12" r="2" /> <circle cx="12" cy="12" r="8" />', "computing settings cog edit gear preferences controls configuration account"], ["coins", '<path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" /> <path d="M15 6h1v4" /> <path d="m6.134 14.768.866-.5 2 3.464" /> <circle cx="16" cy="8" r="6" />', "money cash finance gamble gaming"], ["columns-2", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M12 3v18" />', "lines list queue preview panel parallel series split layout design text"], ["columns-3-cog", '<path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" /> <path d="m14.3 19.6 1-.4" /> <path d="M15 3v7.5" /> <path d="m15.2 16.9-.9-.3" /> <path d="m16.6 21.7.3-.9" /> <path d="m16.8 15.3-.4-1" /> <path d="m19.1 15.2.3-.9" /> <path d="m19.6 21.7-.4-1" /> <path d="m20.7 16.8 1-.4" /> <path d="m21.7 19.4-.9-.3" /> <path d="M9 3v18" /> <circle cx="18" cy="18" r="3" />', "columns settings customize table grid adjust configuration panel layout design"], ["columns-3", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 3v18" /> <path d="M15 3v18" />', "lines list queue preview parallel series split vertical layout design text"], ["columns-4", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7.5 3v18" /> <path d="M12 3v18" /> <path d="M16.5 3v18" />', "lines list queue preview parallel series split vertical layout design text security"], ["combine", '<path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" /> <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" /> <path d="m7 15 3 3" /> <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" /> <rect x="14" y="14" width="7" height="7" rx="1" /> <rect x="3" y="3" width="7" height="7" rx="1" />', "cubes packages parts units collection cluster combine gather development files"], ["command", '<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />', "keyboard key mac cmd button development"], ["compass", '<circle cx="12" cy="12" r="10" /> <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />', "direction north east south west safari browser navigation travel"], ["component", '<path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" /> <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" /> <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" /> <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />', "design element group module part symbol design development"], ["computer", '<rect width="14" height="8" x="5" y="2" rx="2" /> <rect width="20" height="8" x="2" y="14" rx="2" /> <path d="M6 18h2" /> <path d="M12 18h6" />', "pc chassis codespaces github devices development gaming"], ["concierge-bell", '<path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" /> <path d="M20 16a8 8 0 1 0-16 0" /> <path d="M12 4v4" /> <path d="M10 4h4" />', "reception bell porter travel"], ["cone", '<path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" /> <ellipse cx="12" cy="19" rx="9" ry="3" />', "conical triangle triangular geometry filter funnel hopper spotlight shapes math"], ["construction", '<rect x="2" y="6" width="20" height="8" rx="1" /> <path d="M17 14v7" /> <path d="M7 14v7" /> <path d="M17 3v3" /> <path d="M7 3v3" /> <path d="M10 14 2.3 6.3" /> <path d="m14 6 7.7 7.7" /> <path d="m8 6 8 8" />', "roadwork maintenance blockade barricade development"], ["contact-round", '<path d="M16 2v2" /> <path d="M17.915 22a6 6 0 0 0-12 0" /> <path d="M8 2v2" /> <circle cx="12" cy="12" r="4" /> <rect x="3" y="4" width="18" height="18" rx="2" />', "user person family friend acquaintance listing networking account connectivity communication social"], ["contact", '<path d="M16 2v2" /> <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /> <path d="M8 2v2" /> <circle cx="12" cy="11" r="3" /> <rect x="3" y="4" width="18" height="18" rx="2" />', "user person family friend acquaintance listing networking account connectivity communication social"], ["container", '<path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" /> <path d="M10 21.9V14L2.1 9.1" /> <path d="m10 14 11.9-6.9" /> <path d="M14 19.8v-8.1" /> <path d="M18 17.5V9.4" />', "storage shipping freight supply chain docker environment devops code development transportation mail"], ["contrast", '<circle cx="12" cy="12" r="10" /> <path d="M12 18a6 6 0 0 0 0-12v12z" />', "display accessibility photography accessibility design"], ["cookie", '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /> <path d="M8.5 8.5v.01" /> <path d="M16 15.5v.01" /> <path d="M12 12v.01" /> <path d="M11 17v.01" /> <path d="M7 14v.01" />', "biscuit privacy legal food account food-beverage"], ["cooking-pot", '<path d="M2 12h20" /> <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /> <path d="m4 8 16-4" /> <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />', "pod cooking recipe food kitchen chef restaurant dinner food-beverage home"], ["copy-check", '<path d="m12 15 2 2 4-4" /> <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />', "clone duplicate done multiple text notifications"], ["copy-minus", '<line x1="12" x2="18" y1="15" y2="15" /> <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />', "clone duplicate remove delete collapse subtract multiple - text math"], ["copy-plus", '<line x1="15" x2="15" y1="12" y2="18" /> <line x1="12" x2="18" y1="15" y2="15" /> <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />', "clone duplicate add multiple expand + text math"], ["copy-slash", '<line x1="12" x2="18" y1="18" y2="12" /> <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />', "clone duplicate cancel ban no stop forbidden prohibited text development math"], ["copy-x", '<line x1="12" x2="18" y1="12" y2="18" /> <line x1="12" x2="18" y1="18" y2="12" /> <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />', "cancel close delete remove clear multiple multiply multiplication notifications math"], ["copy", '<rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />', "clone duplicate multiple text"], ["copyleft", '<circle cx="12" cy="12" r="10" /> <path d="M9.17 14.83a4 4 0 1 0 0-5.66" />', "licence text"], ["copyright", '<circle cx="12" cy="12" r="10" /> <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />', "licence license text"], ["corner-down-left", '<path d="M20 4v7a4 4 0 0 1-4 4H4" /> <path d="m9 10-5 5 5 5" />', "arrow return arrows"], ["corner-down-right", '<path d="m15 10 5 5-5 5" /> <path d="M4 4v7a4 4 0 0 0 4 4h12" />', "arrow indent tab arrows text development"], ["corner-left-down", '<path d="m14 15-5 5-5-5" /> <path d="M20 4h-7a4 4 0 0 0-4 4v12" />', "arrow arrows"], ["corner-left-up", '<path d="M14 9 9 4 4 9" /> <path d="M20 20h-7a4 4 0 0 1-4-4V4" />', "arrow arrows"], ["corner-right-down", '<path d="m10 15 5 5 5-5" /> <path d="M4 4h7a4 4 0 0 1 4 4v12" />', "arrow arrows"], ["corner-right-up", '<path d="m10 9 5-5 5 5" /> <path d="M4 20h7a4 4 0 0 0 4-4V4" />', "arrow arrows"], ["corner-up-left", '<path d="M20 20v-7a4 4 0 0 0-4-4H4" /> <path d="M9 14 4 9l5-5" />', "arrow arrows"], ["corner-up-right", '<path d="m15 14 5-5-5-5" /> <path d="M4 20v-7a4 4 0 0 1 4-4h12" />', "arrow arrows"], ["cpu", '<path d="M12 20v2" /> <path d="M12 2v2" /> <path d="M17 20v2" /> <path d="M17 2v2" /> <path d="M2 12h2" /> <path d="M2 17h2" /> <path d="M2 7h2" /> <path d="M20 12h2" /> <path d="M20 17h2" /> <path d="M20 7h2" /> <path d="M7 20v2" /> <path d="M7 2v2" /> <rect x="4" y="4" width="16" height="16" rx="2" /> <rect x="8" y="8" width="8" height="8" rx="1" />', "processor cores technology computer chip circuit memory ram devices"], ["creative-commons", '<circle cx="12" cy="12" r="10" /> <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" /> <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />', "licence license text"], ["credit-card", '<rect width="20" height="14" x="2" y="5" rx="2" /> <line x1="2" x2="22" y1="10" y2="10" />', "bank purchase payment cc account finance"], ["croissant", '<path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" /> <path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" /> <path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" /> <path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" /> <path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" />', "bakery cooking food pastry food-beverage"], ["crop", '<path d="M6 2v14a2 2 0 0 0 2 2h14" /> <path d="M18 22V8a2 2 0 0 0-2-2H2" />', "photo image photography design"], ["cross", '<path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />', "healthcare first aid shapes"], ["crosshair", '<circle cx="12" cy="12" r="10" /> <line x1="22" x2="18" y1="12" y2="12" /> <line x1="6" x2="2" y1="12" y2="12" /> <line x1="12" x2="12" y1="6" y2="2" /> <line x1="12" x2="12" y1="22" y2="18" />', "aim target photography"], ["crown", '<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" /> <path d="M5 21h14" />', "diadem tiara circlet corona king ruler winner favourite gaming"], ["cuboid", '<path d="M10 22v-8" /> <path d="M2.336 8.89 10 14l11.715-7.029" /> <path d="M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z" />', "brick block box 3d solid volume container storage shapes math food-beverage"], ["cup-soda", '<path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" /> <path d="M5 8h14" /> <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" /> <path d="m12 8 1-6h2" />', "beverage cup drink soda straw water food-beverage"], ["currency", '<circle cx="12" cy="12" r="8" /> <line x1="3" x2="6" y1="3" y2="6" /> <line x1="21" x2="18" y1="3" y2="6" /> <line x1="3" x2="6" y1="21" y2="18" /> <line x1="21" x2="18" y1="21" y2="18" />', "finance money finance"], ["cylinder", '<ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 5v14a9 3 0 0 0 18 0V5" />', "shape elliptical geometry container storage tin pot shapes design math"], ["dam", '<path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <path d="M2 6h4" /> <path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" />', "electricity energy water buildings sustainability navigation"], ["database-backup", '<ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 12a9 3 0 0 0 5 2.69" /> <path d="M21 9.3V5" /> <path d="M3 5v14a9 3 0 0 0 6.47 2.88" /> <path d="M12 12v4h4" /> <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />', "storage memory bytes servers backup timemachine rotate arrow devices arrows design development photography"], ["database-search", '<path d="M21 11.693V5" /> <path d="m22 22-1.875-1.875" /> <path d="M3 12a9 3 0 0 0 8.697 2.998" /> <path d="M3 5v14a9 3 0 0 0 9.28 2.999" /> <circle cx="18" cy="18" r="3" /> <ellipse cx="12" cy="5" rx="9" ry="3" />', "storage memory container tin pot bytes servers devices development"], ["database-zap", '<ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 5V19A9 3 0 0 0 15 21.84" /> <path d="M21 5V8" /> <path d="M21 12L18 17H22L19 22" /> <path d="M3 12A9 3 0 0 0 14.59 14.87" />', "cache busting storage memory bytes servers power crash devices development"], ["database", '<ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 5V19A9 3 0 0 0 21 19V5" /> <path d="M3 12A9 3 0 0 0 21 12" />', "storage memory container tin pot bytes servers devices development"], ["decimals-arrow-left", '<path d="m13 21-3-3 3-3" /> <path d="M20 18H10" /> <path d="M3 11h.01" /> <rect x="6" y="3" width="5" height="8" rx="2.5" />', "numerical decimal decrease less fewer precision rounding digits design text arrows math"], ["decimals-arrow-right", '<path d="M10 18h10" /> <path d="m17 21 3-3-3-3" /> <path d="M3 11h.01" /> <rect x="15" y="3" width="5" height="8" rx="2.5" /> <rect x="6" y="3" width="5" height="8" rx="2.5" />', "numerical decimal increase more precision rounding digits fraction design text arrows math"], ["delete", '<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" /> <path d="m12 9 6 6" /> <path d="m18 9-6 6" />', "backspace remove text arrows"], ["dessert", '<path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" /> <path d="M20.804 14.869a9 9 0 0 1-17.608 0" /> <circle cx="12" cy="4" r="2" />', "pudding christmas xmas custard iced bun icing fondant cake food-beverage"], ["diameter", '<circle cx="19" cy="19" r="2" /> <circle cx="5" cy="5" r="2" /> <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" /> <path d="m6.41 6.41 11.18 11.18" /> <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />', "shape circle geometry trigonometry width height size calculate shapes math design tools"], ["diamond-minus", '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" /> <path d="M8 12h8" />', "keyframe subtract remove decrease reduce calculator button keyboard multimedia photography tools devices"], ["diamond-percent", '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" /> <path d="M9.2 9.2h.01" /> <path d="m14.5 9.5-5 5" /> <path d="M14.7 14.8h.01" />', "verified unverified sale discount offer marketing sticker price tag social finance shopping math"], ["diamond-plus", '<path d="M12 8v8" /> <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" /> <path d="M8 12h8" />', "keyframe add new increase increment positive calculate toolbar multimedia photography tools devices"], ["diamond", '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />', "square rectangle oblique rhombus shape suit playing cards shapes gaming"], ["dice-1", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M12 12h.01" />', "dice random tabletop 1 board game gaming"], ["dice-2", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M15 9h.01" /> <path d="M9 15h.01" />', "dice random tabletop 2 board game gaming"], ["dice-3", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M16 8h.01" /> <path d="M12 12h.01" /> <path d="M8 16h.01" />', "dice random tabletop 3 board game gaming"], ["dice-4", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M16 8h.01" /> <path d="M8 8h.01" /> <path d="M8 16h.01" /> <path d="M16 16h.01" />', "dice random tabletop 4 board game gaming"], ["dice-5", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M16 8h.01" /> <path d="M8 8h.01" /> <path d="M8 16h.01" /> <path d="M16 16h.01" /> <path d="M12 12h.01" />', "dice random tabletop 5 board game gaming"], ["dice-6", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M16 8h.01" /> <path d="M16 12h.01" /> <path d="M16 16h.01" /> <path d="M8 8h.01" /> <path d="M8 12h.01" /> <path d="M8 16h.01" />', "dice random tabletop 6 board game gaming"], ["dices", '<rect width="12" height="12" x="2" y="10" rx="2" ry="2" /> <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" /> <path d="M6 18h.01" /> <path d="M10 14h.01" /> <path d="M15 6h.01" /> <path d="M18 9h.01" />', "dice random tabletop board game gaming"], ["diff", '<path d="M12 3v14" /> <path d="M5 10h14" /> <path d="M5 21h14" />', "patch difference compare plus minus plus-minus math development files"], ["disc-2", '<circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="4" /> <path d="M12 12h.01" />', "album music vinyl record cd dvd format dj devices multimedia"], ["disc-3", '<circle cx="12" cy="12" r="10" /> <path d="M6 12c0-1.7.7-3.2 1.8-4.2" /> <circle cx="12" cy="12" r="2" /> <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />', "album music vinyl record cd dvd format dj devices multimedia"], ["disc-album", '<rect width="18" height="18" x="3" y="3" rx="2" /> <circle cx="12" cy="12" r="5" /> <path d="M12 12h.01" />', "album music songs format cd dvd vinyl sleeve devices multimedia"], ["disc", '<circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="2" />', "album music songs format cd dvd vinyl sleeve devices multimedia"], ["divide", '<circle cx="12" cy="6" r="1" /> <line x1="5" x2="19" y1="12" y2="12" /> <circle cx="12" cy="18" r="1" />', "calculate math division operator code \xF7 / math development"], ["dna-off", '<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" /> <path d="m17 6-2.891-2.891" /> <path d="M2 15c3.333-3 6.667-3 10-3" /> <path d="m2 2 20 20" /> <path d="m20 9 .891.891" /> <path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" /> <path d="M3.109 14.109 4 15" /> <path d="m6.5 12.5 1 1" /> <path d="m7 18 2.891 2.891" /> <path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />', "gene gmo free helix heredity chromosome nucleic acid medical food-beverage"], ["dna", '<path d="m10 16 1.5 1.5" /> <path d="m14 8-1.5-1.5" /> <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" /> <path d="m16.5 10.5 1 1" /> <path d="m17 6-2.891-2.891" /> <path d="M2 15c6.667-6 13.333 0 20-6" /> <path d="m20 9 .891.891" /> <path d="M3.109 14.109 4 15" /> <path d="m6.5 12.5 1 1" /> <path d="m7 18 2.891 2.891" /> <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />', "gene gmo helix heredity chromosome nucleic acid medical"], ["dock", '<path d="M2 8h20" /> <rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M6 16h12" />', "desktop applications launch home menu bar bottom line macos layout design development files"], ["dog", '<path d="M11.25 16.25h1.5L12 17z" /> <path d="M16 14v.5" /> <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" /> <path d="M8 14v.5" /> <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />', "animal pet puppy hound canine animals"], ["dollar-sign", '<line x1="12" x2="12" y1="2" y2="22" /> <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />', "currency money payment finance"], ["donut", '<path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" /> <circle cx="12" cy="12" r="3" />', "doughnut sprinkles topping fast food junk food snack treat sweet food-beverage"], ["door-closed-locked", '<path d="M10 12h.01" /> <path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" /> <path d="M2 20h8" /> <path d="M20 17v-2a2 2 0 1 0-4 0v2" /> <rect x="14" y="17" width="8" height="5" rx="1" />', "entrance entry exit ingress egress gate gateway emergency exit home travel security"], ["door-closed", '<path d="M10 12h.01" /> <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" /> <path d="M2 20h20" />', "entrance entry exit ingress egress gate gateway emergency exit home travel security"], ["door-open", '<path d="M11 20H2" /> <path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" /> <path d="M11 4H8a2 2 0 0 0-2 2v14" /> <path d="M14 12h.01" /> <path d="M22 20h-3" />', "entrance entry exit ingress egress gate gateway emergency exit home travel security"], ["dot", '<circle cx="12.1" cy="12.1" r="1" />', "interpunct interpoint middot step punctuation period full stop end shapes text"], ["download", '<path d="M12 15V3" /> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <path d="m7 10 5 5 5-5" />', "import export save arrows files"], ["drafting-compass", '<path d="m12.99 6.74 1.93 3.44" /> <path d="M19.136 12a10 10 0 0 1-14.271 0" /> <path d="m21 21-2.16-3.84" /> <path d="m3 21 8.02-14.26" /> <circle cx="12" cy="5" r="2" />', "geometry trigonometry radius diameter circumference calculate measure arc math design tools"], ["drama", '<path d="M10 11h.01" /> <path d="M14 6h.01" /> <path d="M18 6h.01" /> <path d="M6.5 13.1h.01" /> <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" /> <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" /> <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" /> <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />', "drama masks theater theatre entertainment show multimedia"], ["dribbble", '<circle cx="12" cy="12" r="10" /> <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /> <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /> <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />', "design social brands social design"], ["drill", '<path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" /> <path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" /> <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" /> <path d="M18 6h4" /> <path d="m5 10-2 8" /> <path d="m7 18 2-8" />', "power bit head hole diy toolbox build construction tools home devices"], ["drone", '<path d="M10 10 7 7" /> <path d="m10 14-3 3" /> <path d="m14 10 3-3" /> <path d="m14 14 3 3" /> <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" /> <path d="M19.637 14a4 4 0 1 1-5.432 5.868" /> <path d="M4.367 10a4 4 0 1 1 5.438-5.862" /> <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" /> <rect x="10" y="8" width="4" height="8" rx="1" />', "quadcopter uav aerial flight flying technology airborne robotics transportation devices"], ["droplet-off", '<path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" /> <path d="m2 2 20 20" /> <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />', "water weather liquid fluid wet moisture damp bead weather gaming"], ["droplet", '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />', "water weather liquid fluid wet moisture damp bead weather gaming"], ["droplets", '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /> <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />', "water weather liquid fluid wet moisture damp bead weather"], ["drum", '<path d="m2 2 8 8" /> <path d="m22 2-8 8" /> <ellipse cx="12" cy="9" rx="10" ry="5" /> <path d="M7 13.4v7.9" /> <path d="M12 14v8" /> <path d="M17 13.4v7.9" /> <path d="M2 9v8a10 5 0 0 0 20 0V9" />', "drummer kit sticks instrument beat bang bass backing track multimedia devices"], ["drumstick", '<path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" /> <path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" />', "food chicken meat food-beverage"], ["dumbbell", '<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" /> <path d="m2.5 21.5 1.4-1.4" /> <path d="m20.1 3.9 1.4-1.4" /> <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" /> <path d="m9.6 14.4 4.8-4.8" />', "barbell weight workout gym navigation sports"], ["ear-off", '<path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" /> <path d="M6 8.5c0-.75.13-1.47.36-2.14" /> <path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" /> <path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" /> <line x1="2" x2="22" y1="2" y2="22" />', "hearing hard of hearing hearing loss deafness noise silence audio accessibility medical accessibility"], ["ear", '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" /> <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />', "hearing noise audio accessibility medical accessibility"], ["earth-lock", '<path d="M7 3.34V5a3 3 0 0 0 3 3" /> <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /> <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /> <path d="M12 2a10 10 0 1 0 9.54 13" /> <path d="M20 6V4a2 2 0 1 0-4 0v2" /> <rect width="8" height="5" x="14" y="6" rx="1" />', "vpn private privacy network world browser security encryption security development devices"], ["earth", '<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /> <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /> <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /> <circle cx="12" cy="12" r="10" />', "world browser language translate globe navigation"], ["eclipse", '<circle cx="12" cy="12" r="10" /> <path d="M12 2a7 7 0 1 0 10 10" />', "lunar solar crescent moon sun earth day night planet science design development accessibility photography"], ["egg-fried", '<circle cx="11.5" cy="12.5" r="3.5" /> <path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />', "food breakfast food-beverage"], ["egg-off", '<path d="m2 2 20 20" /> <path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" /> <path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" />', "egg free vegan hatched bad egg food-beverage"], ["egg", '<path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" />', "bird chicken nest hatch shell incubate soft boiled hard food-beverage animals"], ["ellipse", '<ellipse cx="12" cy="12" rx="10" ry="6" />', "shape geometry rounded smooth outline form boundary curve shapes"], ["ellipsis-vertical", '<circle cx="12" cy="12" r="1" /> <circle cx="12" cy="5" r="1" /> <circle cx="12" cy="19" r="1" />', "menu options spread more further extra overflow dots layout"], ["ellipsis", '<circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" /> <circle cx="5" cy="12" r="1" />', "et cetera etc loader loading progress pending throbber menu layout development"], ["equal-approximately", '<path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" /> <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />', "about calculate math operater math"], ["equal-not", '<line x1="5" x2="19" y1="9" y2="9" /> <line x1="5" x2="19" y1="15" y2="15" /> <line x1="19" x2="5" y1="5" y2="19" />', "calculate off math operator code \u2260 math development"], ["equal", '<line x1="5" x2="19" y1="9" y2="9" /> <line x1="5" x2="19" y1="15" y2="15" />', "calculate math operator assignment code = math development"], ["eraser", '<path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" /> <path d="m5.082 11.09 8.828 8.828" />', "pencil drawing undo delete clear trash remove text"], ["ethernet-port", '<path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" /> <path d="M6 8v1" /> <path d="M10 8v1" /> <path d="M14 8v1" /> <path d="M18 8v1" />', "internet network connection cable lan port router switch communication devices multimedia gaming"], ["euro", '<path d="M4 10h12" /> <path d="M4 14h9" /> <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />', "currency money payment finance"], ["ev-charger", '<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" /> <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" /> <path d="M2 21h13" /> <path d="M3 7h11" /> <path d="m9 11-2 3h3l-2 3" />', "electric charger station vehicle fast plug ev power transportation navigation"], ["expand", '<path d="m15 15 6 6" /> <path d="m15 9 6-6" /> <path d="M21 16v5h-5" /> <path d="M21 8V3h-5" /> <path d="M3 16v5h5" /> <path d="m3 21 6-6" /> <path d="M3 8V3h5" /> <path d="M9 9 3 3" />', "scale fullscreen maximize minimize contract text arrows"], ["external-link", '<path d="M15 3h6v6" /> <path d="M10 14 21 3" /> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />', "outbound open share arrows text social"], ["eye-closed", '<path d="m15 18-.722-3.25" /> <path d="M2 8a10.645 10.645 0 0 0 20 0" /> <path d="m20 15-1.726-2.05" /> <path d="m4 15 1.726-2.05" /> <path d="m9 18 .722-3.25" />', "view watch see hide conceal mask hidden visibility accessibility photography design security"], ["eye-off", '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /> <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /> <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /> <path d="m2 2 20 20" />', "view watch see hide conceal mask hidden visibility accessibility photography design security"], ["eye", '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /> <circle cx="12" cy="12" r="3" />', "view watch see show expose reveal display visible accessibility photography design security"], ["facebook", '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />', "logo social social brands"], ["factory", '<path d="M12 16h.01" /> <path d="M16 16h.01" /> <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" /> <path d="M8 16h.01" />', "building business energy industry manufacture sector buildings navigation"], ["fan", '<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" /> <path d="M12 12v.01" />', "air cooler ventilation ventilator blower home"], ["fast-forward", '<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" /> <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />', "music multimedia arrows"], ["feather", '<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" /> <path d="M16 8 2 22" /> <path d="M17.5 15H9" />', "logo gaming"], ["fence", '<path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" /> <path d="M6 8h4" /> <path d="M6 18h4" /> <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" /> <path d="M14 8h4" /> <path d="M14 18h4" /> <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />', "picket panels woodwork diy materials suburban garden property home buildings"], ["ferris-wheel", '<circle cx="12" cy="12" r="2" /> <path d="M12 2v4" /> <path d="m6.8 15-3.5 2" /> <path d="m20.7 7-3.5 2" /> <path d="M6.8 9 3.3 7" /> <path d="m20.7 17-3.5-2" /> <path d="m9 22 3-8 3 8" /> <path d="M8 22h8" /> <path d="M18 18.7a9 9 0 1 0-12 0" />', "big wheel daisy wheel observation attraction entertainment amusement park theme park funfair navigation"], ["figma", '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /> <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /> <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /> <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /> <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />', "logo design tool brands design"], ["file-archive", '<path d="M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 12v-1" /> <path d="M8 18v-2" /> <path d="M8 7V6" /> <circle cx="8" cy="20" r="2" />', "zip package archive files"], ["file-axis-3d", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m8 18 4-4" /> <path d="M8 10v8h8" />', "model 3d axis coordinates design files"], ["file-badge", '<path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" /> <circle cx="6" cy="14" r="3" />', "award achievement badge rosette prize winner files"], ["file-box", '<path d="M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M11.7 14.2 7 17l-4.7-2.8" /> <path d="M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z" /> <path d="M7 17v5" />', "box package model files"], ["file-braces-corner", '<path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" /> <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" />', "code json curly braces curly brackets files development"], ["file-braces", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" /> <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />', "code json curly braces curly brackets files development"], ["file-chart-column-increasing", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 18v-2" /> <path d="M12 18v-4" /> <path d="M16 18v-6" />', "statistics analytics diagram graph presentation trending up files"], ["file-chart-column", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 18v-1" /> <path d="M12 18v-6" /> <path d="M16 18v-3" />', "statistics analytics diagram graph presentation files"], ["file-chart-line", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m16 13-3.5 3.5-2-2L8 17" />', "statistics analytics diagram graph presentation files"], ["file-chart-pie", '<path d="M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M4.017 11.512a6 6 0 1 0 8.466 8.475" /> <path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" />', "statistics analytics diagram graph presentation files"], ["file-check-corner", '<path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m14 20 2 2 4-4" />', "done document todo tick complete task files"], ["file-check", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m9 15 2 2 4-4" />', "done document todo tick complete task files"], ["file-clock", '<path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 14v2.2l1.6 1" /> <circle cx="8" cy="16" r="6" />', "history log clock files time"], ["file-code-corner", '<path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m5 16-3 3 3 3" /> <path d="m9 22 3-3-3-3" />', "script document html xml property list plist files development"], ["file-code", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10 12.5 8 15l2 2.5" /> <path d="m14 12.5 2 2.5-2 2.5" />', "script document gist html xml property list plist files development"], ["file-cog", '<path d="M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z" /> <path d="M20 8v12a2 2 0 0 1-2 2h-4.182" /> <path d="m3.305 19.53.923-.382" /> <path d="M4 10.592V4a2 2 0 0 1 2-2h8" /> <path d="m4.228 16.852-.924-.383" /> <path d="m5.852 15.228-.383-.923" /> <path d="m5.852 20.772-.383.924" /> <path d="m8.148 15.228.383-.923" /> <path d="m8.53 21.696-.382-.924" /> <path d="m9.773 16.852.922-.383" /> <path d="m9.773 19.148.922.383" /> <circle cx="7" cy="18" r="3" />', "executable settings cog edit gear files"], ["file-diff", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M9 10h6" /> <path d="M12 13V7" /> <path d="M9 17h6" />', "diff patch files development"], ["file-digit", '<path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10 16h2v6" /> <path d="M10 22h4" /> <rect x="2" y="16" width="4" height="6" rx="2" />', "number document files development"], ["file-down", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M12 18v-6" /> <path d="m9 15 3 3 3-3" />', "download import export files arrows"], ["file-exclamation-point", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M12 9v4" /> <path d="M12 17h.01" />', "hidden warning alert danger protected exclamation mark files notifications"], ["file-headphone", '<path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" />', "music audio sound headphones files"], ["file-heart", '<path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z" />', "heart favourite bookmark quick link files"], ["file-image", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <circle cx="10" cy="12" r="2" /> <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />', "image graphics photo picture files"], ["file-input", '<path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M2 15h10" /> <path d="m9 18 3-3-3-3" />', "document files arrows"], ["file-key", '<path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M4 12v6" /> <path d="M4 14h2" /> <path d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4" /> <circle cx="4" cy="20" r="2" />', "key private public security files security"], ["file-lock", '<path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M9 17v-2a2 2 0 0 0-4 0v2" /> <rect width="8" height="5" x="3" y="17" rx="1" />', "lock password security files security"], ["file-minus-corner", '<path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M14 18h6" />', "document files"], ["file-minus", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M9 15h6" />', "delete remove erase document files"], ["file-music", '<path d="M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 20v-7l3 1.474" /> <circle cx="6" cy="20" r="2" />', "audio sound noise track digital recording playback piano files multimedia"], ["file-output", '<path d="M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m5 11-3 3" /> <path d="m5 17-3-3h10" />', "document files arrows"], ["file-pen-line", '<path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z" /> <path d="M14.487 7.858A1 1 0 0 1 14 7V2" /> <path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516" /> <path d="M8 18h1" />', "edit files"], ["file-pen", '<path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z" />', "signature files"], ["file-play", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" />', "movie video film files"], ["file-plus-corner", '<path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M14 19h6" /> <path d="M17 16v6" />', "add create new document files"], ["file-plus", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M9 15h6" /> <path d="M12 18v-6" />', "add create new document files"], ["file-question-mark", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M12 17h.01" /> <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />', "readme help question files"], ["file-scan", '<path d="M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M16 14a2 2 0 0 0-2 2" /> <path d="M16 22a2 2 0 0 1-2-2" /> <path d="M20 14a2 2 0 0 1 2 2" /> <path d="M20 22a2 2 0 0 0 2-2" />', "scan code qr-code files"], ["file-search-corner", '<path d="M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m21 22-2.88-2.88" /> <circle cx="16" cy="17" r="3" />', "lost document find browser lens files"], ["file-search", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <circle cx="11.5" cy="14.5" r="2.5" /> <path d="M13.3 16.3 15 18" />', "lost document find browser lens files"], ["file-signal", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 15h.01" /> <path d="M11.5 13.5a2.5 2.5 0 0 1 0 3" /> <path d="M15 12a5 5 0 0 1 0 6" />', "audio music volume files"], ["file-sliders", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 12h8" /> <path d="M10 11v2" /> <path d="M8 17h8" /> <path d="M14 16v2" />', "cogged gear mechanical machinery configuration controls preferences settings files development"], ["file-spreadsheet", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M8 13h2" /> <path d="M14 13h2" /> <path d="M8 17h2" /> <path d="M14 17h2" />', "spreadsheet sheet table files"], ["file-stack", '<path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" /> <path d="M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" /> <path d="M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />', "versions multiple copy documents revisions version control history files development"], ["file-symlink", '<path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m10 18 3-3-3-3" />', "symlink symbolic link files"], ["file-terminal", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m8 16 2-2-2-2" /> <path d="M12 18h4" />', "terminal bash script executable files development"], ["file-text", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10 9H8" /> <path d="M16 13H8" /> <path d="M16 17H8" />', "data txt pdf document files text"], ["file-type-corner", '<path d="M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16" /> <path d="M6 22h2" /> <path d="M7 14v8" />', "font text typography type files text"], ["file-type", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M11 18h2" /> <path d="M12 12v6" /> <path d="M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" />', "font text typography type files text"], ["file-up", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M12 12v6" /> <path d="m15 15-3-3-3 3" />', "upload import export files arrows"], ["file-user", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M16 22a4 4 0 0 0-8 0" /> <circle cx="12" cy="15" r="3" />', "person personal information people listing networking document contact cover letter account files"], ["file-video-camera", '<path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" /> <rect width="7" height="6" x="3" y="16" rx="1" />', "movie video film files"], ["file-volume", '<path d="M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M12 15a5 5 0 0 1 0 6" /> <path d="M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z" />', "audio music volume files"], ["file-x-corner", '<path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m15 17 5 5" /> <path d="m20 17-5 5" />', "lost delete remove document files"], ["file-x", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="m14.5 12.5-5 5" /> <path d="m9.5 12.5 5 5" />', "lost delete remove document files"], ["file", '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" />', "document files"], ["files", '<path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" /> <path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" /> <path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" />', "multiple copy documents files"], ["film", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 3v18" /> <path d="M3 7.5h4" /> <path d="M3 12h18" /> <path d="M3 16.5h4" /> <path d="M17 3v18" /> <path d="M17 7.5h4" /> <path d="M17 16.5h4" />', "movie video reel camera cinema entertainment photography multimedia"], ["fingerprint-pattern", '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" /> <path d="M14 13.12c0 2.38 0 6.38-1 8.88" /> <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" /> <path d="M2 12a10 10 0 0 1 18-6" /> <path d="M2 16h.01" /> <path d="M21.8 16c.2-2 .131-5.354 0-6" /> <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" /> <path d="M8.65 22c.21-.66.45-1.32.57-2" /> <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />', "2fa authentication biometric identity security account security medical devices"], ["fire-extinguisher", '<path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" /> <path d="M9 18h8" /> <path d="M18 3h-3" /> <path d="M11 3a6 6 0 0 0-6 6v11" /> <path d="M5 13h4" /> <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />', "flames smoke foam water spray hose firefighter fireman home tools travel"], ["fish-off", '<path d="M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" /> <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" /> <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" />', "food dish restaurant course meal seafood animal pet food-beverage animals"], ["fish-symbol", '<path d="M2 16s9-15 20-4C11 23 2 8 2 8" />', "dish restaurant course meal seafood pet sea marine food-beverage animals"], ["fish", '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" /> <path d="M18 12v.5" /> <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" /> <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" /> <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" /> <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />', "dish restaurant course meal seafood pet sea marine food-beverage animals"], ["fishing-hook", '<path d="m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" /> <path d="M20.414 8.586 22 7" /> <circle cx="19" cy="10" r="2" />', "sea boating angler bait reel tackle marine outdoors sports travel"], ["fishing-rod", '<path d="M4 11h1" /> <path d="M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" /> <circle cx="18" cy="18" r="2" />', "fishing rod hobby equipment reel sports travel"], ["flag-off", '<path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" /> <path d="m2 2 20 20" /> <path d="M4 22V4" /> <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />', "unflag unmark report marker notification warning milestone goal account social"], ["flag-triangle-left", '<path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" />', "report timeline marker pin development navigation"], ["flag-triangle-right", '<path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" />', "report timeline marker pin development navigation"], ["flag", '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />', "report marker notification warning milestone goal notice signal account social"], ["flame-kindling", '<path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" /> <path d="m5 22 14-4" /> <path d="m5 18 14 4" />', "campfire camping wilderness outdoors lit warmth wood twigs nature social gaming"], ["flame", '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />', "heat burn light glow ignite passion ember fire weather social gaming"], ["flashlight-off", '<path d="M11.652 6H18" /> <path d="M12 13v1" /> <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6" /> <path d="m2 2 20 20" /> <path d="M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007" />', "torch light beam emergency safety tool bright photography devices"], ["flashlight", '<path d="M12 13v1" /> <path d="M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z" /> <path d="M6 6h12" />', "torch light beam emergency safety tool bright photography devices"], ["flask-conical-off", '<path d="M10 2v2.343" /> <path d="M14 2v6.343" /> <path d="m2 2 20 20" /> <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" /> <path d="M6.453 15H15" /> <path d="M8.5 2h7" />', "beaker erlenmeyer non toxic lab chemistry experiment test science gaming"], ["flask-conical", '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /> <path d="M6.453 15h11.094" /> <path d="M8.5 2h7" />', "beaker erlenmeyer lab chemistry experiment test science gaming"], ["flask-round", '<path d="M10 2v6.292a7 7 0 1 0 4 0V2" /> <path d="M5 15h14" /> <path d="M8.5 2h7" />', "beaker lab chemistry experiment test science gaming"], ["flip-horizontal-2", '<path d="m3 7 5 5-5 5V7" /> <path d="m21 7-5 5 5 5V7" /> <path d="M12 20v2" /> <path d="M12 14v2" /> <path d="M12 8v2" /> <path d="M12 2v2" />', "reflect mirror alignment dashed design photography"], ["flip-vertical-2", '<path d="m17 3-5 5-5-5h10" /> <path d="m17 21-5-5-5 5h10" /> <path d="M4 12H2" /> <path d="M10 12H8" /> <path d="M16 12h-2" /> <path d="M22 12h-2" />', "reflect mirror alignment dashed design photography"], ["flower-2", '<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" /> <circle cx="12" cy="8" r="2" /> <path d="M12 10v12" /> <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" /> <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />', "sustainability nature plant nature sustainability seasons"], ["flower", '<circle cx="12" cy="12" r="3" /> <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" /> <path d="M12 7.5V9" /> <path d="M7.5 12H9" /> <path d="M16.5 12H15" /> <path d="M12 16.5V15" /> <path d="m8 8 1.88 1.88" /> <path d="M14.12 9.88 16 8" /> <path d="m8 16 1.88-1.88" /> <path d="M14.12 14.12 16 16" />', "sustainability nature plant spring nature gaming sustainability"], ["focus", '<circle cx="12" cy="12" r="3" /> <path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" />', "camera lens photo dashed photography"], ["fold-horizontal", '<path d="M2 12h6" /> <path d="M22 12h-6" /> <path d="M12 2v2" /> <path d="M12 8v2" /> <path d="M12 14v2" /> <path d="M12 20v2" /> <path d="m19 9-3 3 3 3" /> <path d="m5 15 3-3-3-3" />', "arrow collapse fold vertical dashed arrows layout"], ["fold-vertical", '<path d="M12 22v-6" /> <path d="M12 8V2" /> <path d="M4 12H2" /> <path d="M10 12H8" /> <path d="M16 12h-2" /> <path d="M22 12h-2" /> <path d="m15 19-3-3-3 3" /> <path d="m15 5-3 3-3-3" />', "arrow collapse fold vertical dashed arrows layout"], ["folder-archive", '<circle cx="15" cy="19" r="2" /> <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" /> <path d="M15 11v-1" /> <path d="M15 17v-2" />', "archive zip package files"], ["folder-check", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="m9 13 2 2 4-4" />', "done directory todo tick complete task files"], ["folder-clock", '<path d="M16 14v2.2l1.6 1" /> <path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" /> <circle cx="16" cy="16" r="6" />', "history directory clock files time"], ["folder-closed", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="M2 10h20" />', "directory closed files"], ["folder-code", '<path d="M10 10.5 8 13l2 2.5" /> <path d="m14 10.5 2 2.5-2 2.5" /> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />', "directory coding develop software files development"], ["folder-cog", '<path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3" /> <path d="m14.305 19.53.923-.382" /> <path d="m15.228 16.852-.923-.383" /> <path d="m16.852 15.228-.383-.923" /> <path d="m16.852 20.772-.383.924" /> <path d="m19.148 15.228.383-.923" /> <path d="m19.53 21.696-.382-.924" /> <path d="m20.772 16.852.924-.383" /> <path d="m20.772 19.148.924.383" /> <circle cx="18" cy="18" r="3" />', "directory settings control preferences cog edit gear files"], ["folder-dot", '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /> <circle cx="12" cy="13" r="1" />', "directory root project pinned active current cogged gear files development"], ["folder-down", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="M12 10v6" /> <path d="m15 13-3 3-3-3" />', "directory download import export files arrows"], ["folder-git-2", '<path d="M18 19a5 5 0 0 1-5-5v8" /> <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /> <circle cx="13" cy="12" r="2" /> <circle cx="20" cy="19" r="2" />', "directory root project git repo files"], ["folder-git", '<circle cx="12" cy="13" r="2" /> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="M14 13h3" /> <path d="M7 13h3" />', "directory root project git repo files"], ["folder-heart", '<path d="M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417" /> <path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />', "directory heart favourite bookmark quick link files"], ["folder-input", '<path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" /> <path d="M2 13h10" /> <path d="m9 16 3-3-3-3" />', "directory import export files arrows"], ["folder-kanban", '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /> <path d="M8 10v4" /> <path d="M12 10v2" /> <path d="M16 10v6" />', "projects manage overview board tickets issues roadmap plan charts development design files"], ["folder-key", '<path d="M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36" /> <path d="M19 12v6" /> <path d="M19 14h2" /> <circle cx="19" cy="20" r="2" />', "directory key private security protected files security"], ["folder-lock", '<rect width="8" height="5" x="14" y="17" rx="1" /> <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" /> <path d="M20 17v-2a2 2 0 1 0-4 0v2" />', "directory lock private security protected files security"], ["folder-minus", '<path d="M9 13h6" /> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />', "directory remove delete files"], ["folder-open-dot", '<path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" /> <circle cx="14" cy="15" r="1" />', "directory root project active current pinned files development"], ["folder-open", '<path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />', "directory files"], ["folder-output", '<path d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" /> <path d="M2 13h10" /> <path d="m5 10-3 3 3 3" />', "directory import export files arrows"], ["folder-pen", '<path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" /> <path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />', "directory rename files"], ["folder-plus", '<path d="M12 10v6" /> <path d="M9 13h6" /> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />', "directory add create new files"], ["folder-root", '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /> <circle cx="12" cy="13" r="2" /> <path d="M12 15v5" />', "directory root project git repo files development"], ["folder-search-2", '<circle cx="11.5" cy="12.5" r="2.5" /> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="M13.3 14.3 15 16" />', "directory search find lost browser lens files"], ["folder-search", '<path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" /> <path d="m21 21-1.9-1.9" /> <circle cx="17" cy="17" r="3" />', "directory search find lost browser lens files"], ["folder-symlink", '<path d="M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" /> <path d="m8 16 3-3-3-3" />', "directory symlink symbolic link files"], ["folder-sync", '<path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" /> <path d="M12 10v4h4" /> <path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" /> <path d="M22 22v-4h-4" /> <path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />', "directory synchronize synchronise refresh reconnect transfer backup files arrows"], ["folder-tree", '<path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" /> <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" /> <path d="M3 5a2 2 0 0 0 2 2h3" /> <path d="M3 3v13a2 2 0 0 0 2 2h3" />', "directory tree browser files"], ["folder-up", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="M12 10v6" /> <path d="m9 13 3-3 3 3" />', "directory upload import export files arrows"], ["folder-x", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="m9.5 10.5 5 5" /> <path d="m14.5 10.5-5 5" />', "directory remove delete files"], ["folder", '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />', "directory files"], ["folders", '<path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" /> <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" />', "multiple copy directories files"], ["footprints", '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" /> <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" /> <path d="M16 17h4" /> <path d="M4 13h4" />', "steps walking foot feet trail shoe navigation"], ["forklift", '<path d="M12 12H5a2 2 0 0 0-2 2v5" /> <path d="M15 19h7" /> <path d="M16 19V2" /> <path d="M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" /> <path d="M7 19h4" /> <circle cx="13" cy="19" r="2" /> <circle cx="5" cy="19" r="2" />', "machinery industrial warehouse lifting storage equipment heavy-duty moving transportation"], ["form", '<path d="M4 14h6" /> <path d="M4 2h10" /> <rect x="4" y="18" width="16" height="4" rx="1" /> <rect x="4" y="6" width="16" height="4" rx="1" />', "document page file layout paper stub formality structure development"], ["forward", '<path d="m15 17 5-5-5-5" /> <path d="M4 18v-2a4 4 0 0 1 4-4h12" />', "send share email mail"], ["frame", '<line x1="22" x2="2" y1="6" y2="6" /> <line x1="22" x2="2" y1="18" y2="18" /> <line x1="6" x2="6" y1="2" y2="22" /> <line x1="18" x2="18" y1="2" y2="22" />', "logo design tool design photography"], ["framer", '<path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />', "logo design tool brands design"], ["frown", '<circle cx="12" cy="12" r="10" /> <path d="M16 16s-1.5-2-4-2-4 2-4 2" /> <line x1="9" x2="9.01" y1="9" y2="9" /> <line x1="15" x2="15.01" y1="9" y2="9" />', "emoji face bad sad emotion emoji account"], ["fuel", '<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" /> <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" /> <path d="M2 21h13" /> <path d="M3 9h11" />', "filling-station gas petrol tank transportation navigation"], ["fullscreen", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <rect width="10" height="8" x="7" y="8" rx="1" />', "expand zoom preview focus camera lens image layout multimedia design photography"], ["funnel-plus", '<path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" /> <path d="M16 6h6" /> <path d="M19 3v6" />', "filter hopper add create new layout"], ["funnel-x", '<path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" /> <path d="m16.5 3.5 5 5" /> <path d="m21.5 3.5-5 5" />', "filter hopper remove delete layout"], ["funnel", '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />', "filter hopper layout"], ["gallery-horizontal-end", '<path d="M2 7v10" /> <path d="M6 5v14" /> <rect width="12" height="18" x="10" y="3" rx="2" />', "carousel pictures images scroll swipe album portfolio history layout design development photography multimedia files"], ["gallery-horizontal", '<path d="M2 3v18" /> <rect width="12" height="18" x="6" y="3" rx="2" /> <path d="M22 3v18" />', "carousel pictures images scroll swipe album portfolio layout design development photography multimedia"], ["gallery-thumbnails", '<rect width="18" height="14" x="3" y="3" rx="2" /> <path d="M4 21h1" /> <path d="M9 21h1" /> <path d="M14 21h1" /> <path d="M19 21h1" />', "carousel pictures images album portfolio preview layout design development photography multimedia"], ["gallery-vertical-end", '<path d="M7 2h10" /> <path d="M5 6h14" /> <rect width="18" height="12" x="3" y="10" rx="2" />', "carousel pictures images scroll swipe album portfolio history layout design development photography multimedia files"], ["gallery-vertical", '<path d="M3 2h18" /> <rect width="18" height="12" x="3" y="6" rx="2" /> <path d="M3 22h18" />', "carousel pictures images scroll swipe album portfolio layout design development photography multimedia"], ["gamepad-2", '<line x1="6" x2="10" y1="11" y2="11" /> <line x1="8" x2="8" y1="9" y2="13" /> <line x1="15" x2="15.01" y1="12" y2="12" /> <line x1="18" x2="18.01" y1="10" y2="10" /> <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />', "console gaming devices"], ["gamepad-directional", '<path d="M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z" /> <path d="M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" /> <path d="M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z" /> <path d="M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z" />', "direction arrow controller navigation button move pointer arrowhead gaming devices"], ["gamepad", '<line x1="6" x2="10" y1="12" y2="12" /> <line x1="8" x2="8" y1="10" y2="14" /> <line x1="15" x2="15.01" y1="13" y2="13" /> <line x1="18" x2="18.01" y1="11" y2="11" /> <rect width="20" height="12" x="2" y="6" rx="2" />', "console gaming devices"], ["gauge", '<path d="m12 14 4-4" /> <path d="M3.34 19a10 10 0 1 1 17.32 0" />', "dashboard dial meter speed pressure measure level transportation sports science"], ["gavel", '<path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" /> <path d="m16 16 6-6" /> <path d="m21.5 10.5-8-8" /> <path d="m8 8 6-6" /> <path d="m8.5 7.5 8 8" />', "justice law court judgment legal hands penalty decision navigation tools"], ["gem", '<path d="M10.5 3 8 9l4 13 4-13-2.5-6" /> <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" /> <path d="M2 9h20" />', "diamond crystal ruby jewellery price special present gift gaming development finance"], ["georgian-lari", '<path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" /> <path d="M13 12V3" /> <path d="M4 21h16" /> <path d="M9 12V3" />', "currency money payment finance"], ["ghost", '<path d="M9 10h.01" /> <path d="M15 10h.01" /> <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />', "pac-man spooky gaming"], ["gift", '<path d="M12 7v14" /> <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /> <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" /> <rect x="3" y="7" width="18" height="4" rx="1" />', "present box birthday party gaming account"], ["git-branch-minus", '<path d="M15 6a9 9 0 0 0-9 9V3" /> <path d="M21 18h-6" /> <circle cx="18" cy="6" r="3" /> <circle cx="6" cy="18" r="3" />', "code version control vcs repository delete remove - development"], ["git-branch-plus", '<path d="M6 3v12" /> <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> <path d="M15 6a9 9 0 0 0-9 9" /> <path d="M18 15v6" /> <path d="M21 18h-6" />', "code version control vcs repository add create + development"], ["git-branch", '<path d="M15 6a9 9 0 0 0-9 9V3" /> <circle cx="18" cy="6" r="3" /> <circle cx="6" cy="18" r="3" />', "code version control vcs repository development"], ["git-commit-horizontal", '<circle cx="12" cy="12" r="3" /> <line x1="3" x2="9" y1="12" y2="12" /> <line x1="15" x2="21" y1="12" y2="12" />', "code version control waypoint stop station development navigation"], ["git-commit-vertical", '<path d="M12 3v6" /> <circle cx="12" cy="12" r="3" /> <path d="M12 15v6" />', "code version control waypoint stop station development navigation"], ["git-compare-arrows", '<circle cx="5" cy="6" r="3" /> <path d="M12 6h5a2 2 0 0 1 2 2v7" /> <path d="m15 9-3-3 3-3" /> <circle cx="19" cy="18" r="3" /> <path d="M12 18H7a2 2 0 0 1-2-2V9" /> <path d="m9 15 3 3-3 3" />', "code version control diff development arrows"], ["git-compare", '<circle cx="18" cy="18" r="3" /> <circle cx="6" cy="6" r="3" /> <path d="M13 6h3a2 2 0 0 1 2 2v7" /> <path d="M11 18H8a2 2 0 0 1-2-2V9" />', "code version control diff development"], ["git-fork", '<circle cx="12" cy="18" r="3" /> <circle cx="6" cy="6" r="3" /> <circle cx="18" cy="6" r="3" /> <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" /> <path d="M12 12v3" />', "code version control development"], ["git-graph", '<circle cx="5" cy="6" r="3" /> <path d="M5 9v6" /> <circle cx="5" cy="18" r="3" /> <path d="M12 3v18" /> <circle cx="19" cy="6" r="3" /> <path d="M16 15.7A9 9 0 0 0 19 9" />', "code version control commit graph commits gitlens development"], ["git-merge-conflict", '<path d="M12 6h4a2 2 0 0 1 2 2v7" /> <path d="M6 12v9" /> <path d="M9 3 3 9" /> <path d="M9 9 3 3" /> <circle cx="18" cy="18" r="3" />', "code version control commits diff error conflict development"], ["git-merge", '<circle cx="18" cy="18" r="3" /> <circle cx="6" cy="6" r="3" /> <path d="M6 21V9a9 9 0 0 0 9 9" />', "code version control development"], ["git-pull-request-arrow", '<circle cx="5" cy="6" r="3" /> <path d="M5 9v12" /> <circle cx="19" cy="18" r="3" /> <path d="m15 9-3-3 3-3" /> <path d="M12 6h5a2 2 0 0 1 2 2v7" />', "code version control open development arrows"], ["git-pull-request-closed", '<circle cx="6" cy="6" r="3" /> <path d="M6 9v12" /> <path d="m21 3-6 6" /> <path d="m21 9-6-6" /> <path d="M18 11.5V15" /> <circle cx="18" cy="18" r="3" />', "code version control rejected closed cancelled x development"], ["git-pull-request-create-arrow", '<circle cx="5" cy="6" r="3" /> <path d="M5 9v12" /> <path d="m15 9-3-3 3-3" /> <path d="M12 6h5a2 2 0 0 1 2 2v3" /> <path d="M19 15v6" /> <path d="M22 18h-6" />', "code version control open plus add + development arrows"], ["git-pull-request-create", '<circle cx="6" cy="6" r="3" /> <path d="M6 9v12" /> <path d="M13 6h3a2 2 0 0 1 2 2v3" /> <path d="M18 15v6" /> <path d="M21 18h-6" />', "code version control open plus add + development"], ["git-pull-request-draft", '<circle cx="18" cy="18" r="3" /> <circle cx="6" cy="6" r="3" /> <path d="M18 6V5" /> <path d="M18 11v-1" /> <line x1="6" x2="6" y1="9" y2="21" />', "code version control open draft dashed development"], ["git-pull-request", '<circle cx="18" cy="18" r="3" /> <circle cx="6" cy="6" r="3" /> <path d="M13 6h3a2 2 0 0 1 2 2v7" /> <line x1="6" x2="6" y1="9" y2="21" />', "code version control open development"], ["github", '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /> <path d="M9 18c-4.51 2-5-2-7-2" />', "logo version control brands development"], ["gitlab", '<path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />', "logo version control brands development"], ["glass-water", '<path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" /> <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />', "beverage drink glass water food-beverage"], ["glasses", '<circle cx="6" cy="15" r="4" /> <circle cx="18" cy="15" r="4" /> <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" /> <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" /> <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />', "glasses spectacles accessibility"], ["globe-lock", '<path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" /> <path d="M2 12h8.5" /> <path d="M20 6V4a2 2 0 1 0-4 0v2" /> <rect width="8" height="5" x="14" y="6" rx="1" />', "vpn private privacy network world browser security encryption security development devices"], ["globe-off", '<path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" /> <path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" /> <path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" /> <path d="M17.656 12H22" /> <path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" /> <path d="M2 12h10" /> <path d="m2 2 20 20" />', "globe earth planet disable mute off hide avoid navigation connectivity devices"], ["globe-x", '<path d="m16 3 5 5" /> <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" /> <path d="m21 3-5 5" />', "globe internet offline disconnected network connection world no connection connectivity devices navigation"], ["globe", '<circle cx="12" cy="12" r="10" /> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /> <path d="M2 12h20" />', "world browser language translate navigation"], ["goal", '<path d="M12 13V2l8 4-8 4" /> <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" /> <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />', "flag bullseye gaming"], ["gpu", '<path d="M2 21V3" /> <path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" /> <path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" /> <circle cx="16" cy="11" r="2" /> <circle cx="8" cy="11" r="2" />', "processor cores technology computer chip circuit specs graphics processing unit devices gaming"], ["graduation-cap", '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /> <path d="M22 10v6" /> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />', "school university learn study mortarboard education ceremony academic buildings"], ["grape", '<path d="M22 5V2l-5.89 5.89" /> <circle cx="16.6" cy="15.89" r="3" /> <circle cx="8.11" cy="7.4" r="3" /> <circle cx="12.35" cy="11.65" r="3" /> <circle cx="13.91" cy="5.85" r="3" /> <circle cx="18.15" cy="10.09" r="3" /> <circle cx="6.56" cy="13.2" r="3" /> <circle cx="10.8" cy="17.44" r="3" /> <circle cx="5" cy="19" r="3" />', "fruit wine food food-beverage"], ["grid-2x2-check", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" /> <path d="m16 19 2 2 4-4" />', "table rows columns blocks plot land geometry measure text layout math"], ["grid-2x2-plus", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" /> <path d="M16 19h6" /> <path d="M19 22v-6" />', "table rows columns blocks plot land geometry measure text layout math"], ["grid-2x2-x", '<path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" /> <path d="m16 16 5 5" /> <path d="m16 21 5-5" />', "table rows columns data blocks plot land geometry text layout math"], ["grid-2x2", '<path d="M12 3v18" /> <path d="M3 12h18" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "table rows columns blocks plot land geometry measure text layout design math"], ["grid-3x2", '<path d="M15 3v18" /> <path d="M3 12h18" /> <path d="M9 3v18" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "table rows columns blocks plot land geometry measure text math layout design"], ["grid-3x3", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 9h18" /> <path d="M3 15h18" /> <path d="M9 3v18" /> <path d="M15 3v18" />', "table rows columns text layout design"], ["grip-horizontal", '<circle cx="12" cy="9" r="1" /> <circle cx="19" cy="9" r="1" /> <circle cx="5" cy="9" r="1" /> <circle cx="12" cy="15" r="1" /> <circle cx="19" cy="15" r="1" /> <circle cx="5" cy="15" r="1" />', "grab dots handle move drag layout"], ["grip-vertical", '<circle cx="9" cy="12" r="1" /> <circle cx="9" cy="5" r="1" /> <circle cx="9" cy="19" r="1" /> <circle cx="15" cy="12" r="1" /> <circle cx="15" cy="5" r="1" /> <circle cx="15" cy="19" r="1" />', "grab dots handle move drag layout"], ["grip", '<circle cx="12" cy="5" r="1" /> <circle cx="19" cy="5" r="1" /> <circle cx="5" cy="5" r="1" /> <circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" /> <circle cx="5" cy="12" r="1" /> <circle cx="12" cy="19" r="1" /> <circle cx="19" cy="19" r="1" /> <circle cx="5" cy="19" r="1" />', "grab dots handle move drag layout"], ["group", '<path d="M3 7V5c0-1.1.9-2 2-2h2" /> <path d="M17 3h2c1.1 0 2 .9 2 2v2" /> <path d="M21 17v2c0 1.1-.9 2-2 2h-2" /> <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" /> <rect width="7" height="5" x="7" y="7" rx="1" /> <rect width="7" height="5" x="10" y="12" rx="1" />', "cubes packages parts units collection cluster gather dashed files"], ["guitar", '<path d="m11.9 12.1 4.514-4.514" /> <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" /> <path d="m6 16 2 2" /> <path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" />', "acoustic instrument strings riff rock band country concert multimedia"], ["ham", '<path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" /> <path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" /> <path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" /> <path d="m8.5 16.5-1-1" />', "food pork pig meat bone hock knuckle gammon food-beverage"], ["hamburger", '<path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" /> <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" /> <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" /> <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />', "burger cheeseburger meat beef patty bun fast food junk food food-beverage"], ["hammer", '<path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" /> <path d="m18 15 4-4" /> <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />', "mallet nails diy toolbox build construction tools home"], ["hand-coins", '<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /> <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /> <path d="m2 16 6 6" /> <circle cx="16" cy="9" r="2.9" /> <circle cx="6" cy="5" r="3" />', "savings banking money finance offers mortgage payment received finance account"], ["hand-fist", '<path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0" /> <path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" /> <path d="M9 5A2 2 0 1 0 5 5V10" /> <path d="M9 7V4A2 2 0 1 1 13 4V7.268" />', "clench strength power unity solidarity rebellion victory triumph social emoji communication sports"], ["hand-grab", '<path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" /> <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" /> <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" /> <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" /> <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />', "hand cursors design layout"], ["hand-heart", '<path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /> <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" /> <path d="m2 15 6 6" /> <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />', "love like emotion social"], ["hand-helping", '<path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" /> <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /> <path d="m2 13 6 6" />', "agreement help proposal charity begging terms emoji"], ["hand-metal", '<path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" /> <path d="M14 11V9a2 2 0 1 0-4 0v2" /> <path d="M10 10.5V5a2 2 0 1 0-4 0v9" /> <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />', "rock emoji multimedia"], ["hand-platter", '<path d="M12 3V2" /> <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" /> <path d="M2 14h12a2 2 0 0 1 0 4h-2" /> <path d="M4 10h16" /> <path d="M5 10a7 7 0 0 1 14 0" /> <path d="M5 14v6a1 1 0 0 1-1 1H2" />', "waiter waitress restaurant table service served dinner dining meal food-beverage people"], ["hand", '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" /> <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" /> <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" /> <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />', "wave move mouse grab cursors accessibility"], ["handbag", '<path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" /> <path d="M8 11V6a4 4 0 0 1 8 0v5" />', "bag baggage carry clutch fashion luggage purse tote shopping transportation"], ["handshake", '<path d="m11 17 2 2a1 1 0 1 0 3-3" /> <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /> <path d="m21 3 1 11h-2" /> <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /> <path d="M3 4h8" />', "agreement partnership deal business assistance cooperation friendship union account social communication finance security"], ["hard-drive-download", '<path d="M12 2v8" /> <path d="m16 6-4 4-4-4" /> <rect width="20" height="8" x="2" y="14" rx="2" /> <path d="M6 18h.01" /> <path d="M10 18h.01" />', "computer server memory data ssd disk hard disk save development devices arrows files"], ["hard-drive-upload", '<path d="m16 6-4-4-4 4" /> <path d="M12 2v8" /> <rect width="20" height="8" x="2" y="14" rx="2" /> <path d="M6 18h.01" /> <path d="M10 18h.01" />', "computer server memory data ssd disk hard disk save development devices arrows files"], ["hard-drive", '<path d="M10 16h.01" /> <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /> <path d="M21.946 12.013H2.054" /> <path d="M6 16h.01" />', "computer server memory data ssd disk hard disk storage development devices"], ["hard-hat", '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" /> <path d="M14 6a6 6 0 0 1 6 6v3" /> <path d="M4 15v-3a6 6 0 0 1 6-6" /> <rect x="2" y="15" width="20" height="4" rx="1" />', "helmet construction safety savety tools"], ["hash", '<line x1="4" x2="20" y1="9" y2="9" /> <line x1="4" x2="20" y1="15" y2="15" /> <line x1="10" x2="8" y1="3" y2="21" /> <line x1="16" x2="14" y1="3" y2="21" />', "hashtag number pound text social"], ["hat-glasses", '<path d="M14 18a2 2 0 0 0-4 0" /> <path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" /> <path d="M2 11h20" /> <circle cx="17" cy="18" r="3" /> <circle cx="7" cy="18" r="3" />', "incognito disguise costume masked anonymous anonymity privacy private browsing social account security"], ["haze", '<path d="m5.2 6.2 1.4 1.4" /> <path d="M2 13h2" /> <path d="M20 13h2" /> <path d="m17.4 7.6 1.4-1.4" /> <path d="M22 17H2" /> <path d="M22 21H2" /> <path d="M16 13a4 4 0 0 0-8 0" /> <path d="M12 5V2.5" />', "mist fog weather"], ["hd", '<path d="M10 12H6" /> <path d="M10 15V9" /> <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" /> <path d="M6 15V9" /> <rect x="2" y="5" width="20" height="14" rx="2" />', "tv resolution video high definition 720p 1080p devices multimedia"], ["hdmi-port", '<path d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" /> <path d="M7.5 12h9" />', "socket plug slot controller connector interface console signal devices multimedia gaming"], ["heading-1", '<path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <path d="m17 12 3-2v8" />', "h1 html markup markdown text"], ["heading-2", '<path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />', "h2 html markup markdown text"], ["heading-3", '<path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" /> <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />', "h3 html markup markdown text"], ["heading-4", '<path d="M12 18V6" /> <path d="M17 10v3a1 1 0 0 0 1 1h3" /> <path d="M21 10v8" /> <path d="M4 12h8" /> <path d="M4 18V6" />', "h4 html markup markdown text"], ["heading-5", '<path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <path d="M17 13v-3h4" /> <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />', "h5 html markup markdown text"], ["heading-6", '<path d="M4 12h8" /> <path d="M4 18V6" /> <path d="M12 18V6" /> <circle cx="19" cy="16" r="2" /> <path d="M20 10c-2 2-3 3.5-3 6" />', "h6 html markup markdown text"], ["heading", '<path d="M6 12h12" /> <path d="M6 20V4" /> <path d="M18 20V4" />', "h1 html markup markdown text"], ["headphone-off", '<path d="M21 14h-1.343" /> <path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" /> <path d="m2 2 20 20" /> <path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" /> <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />', "music audio sound mute off multimedia connectivity communication devices gaming"], ["headphones", '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />', "music audio sound multimedia connectivity devices files gaming"], ["headset", '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /> <path d="M21 16v2a4 4 0 0 1-4 4h-5" />', "music audio sound gaming headphones headset call center multimedia connectivity devices files gaming"], ["heart-crack", '<path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15" /> <path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z" />', "heartbreak sadness emotion emoji"], ["heart-handshake", '<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />', "agreement charity help deal terms emotion together handshake emoji account security"], ["heart-minus", '<path d="m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" /> <path d="M15 15h6" />', "unlike unfavorite remove damage ui & ux medical account multimedia gaming social"], ["heart-off", '<path d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" /> <path d="m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" /> <path d="m2 2 20 20" />', "unlike dislike hate emotion social multimedia"], ["heart-plus", '<path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" /> <path d="M15 15h6" /> <path d="M18 12v6" />', "plus like favorite add health support medical account multimedia gaming social"], ["heart-pulse", '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /> <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />', "heartbeat pulse health medical blood pressure cardiac systole diastole medical"], ["heart", '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />', "like love emotion suit playing cards medical social multimedia emoji gaming shapes"], ["heater", '<path d="M11 8c2-3-2-3 0-6" /> <path d="M15.5 8c2-3-2-3 0-6" /> <path d="M6 10h.01" /> <path d="M6 14h.01" /> <path d="M10 16v-4" /> <path d="M14 16v-4" /> <path d="M18 16v-4" /> <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" /> <path d="M5 20v2" /> <path d="M19 20v2" />', "heating warmth comfort fire stove electric electronics amenities home devices travel"], ["helicopter", '<path d="M11 17v4" /> <path d="M14 3v8a2 2 0 0 0 2 2h5.865" /> <path d="M17 17v4" /> <path d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" /> <path d="M2 10v5" /> <path d="M6 3h16" /> <path d="M7 21h14" /> <path d="M8 13H2" />', "transport flying rotor aviation helipad gear flyer technology transportation travel"], ["hexagon", '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />', "shape node.js logo shapes brands development"], ["highlighter", '<path d="m9 11-6 6v3h9l3-3" /> <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />', "mark text text design"], ["history", '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M12 7v5l4 2" />', "time redo undo rewind timeline version time machine backup arrows time"], ["hop-off", '<path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" /> <path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" /> <path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" /> <path d="M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" /> <path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" /> <path d="M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" /> <path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" /> <path d="M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" /> <path d="m2 2 20 20" />', "beer brewery drink hop free allergy intolerance diet food-beverage"], ["hop", '<path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" /> <path d="M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" /> <path d="M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" /> <path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" /> <path d="M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" /> <path d="M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" /> <path d="M4.93 4.93 3 3a.7.7 0 0 1 0-1" /> <path d="M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" />', "beer brewery drink food-beverage"], ["hospital", '<path d="M12 7v4" /> <path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="M14 9h-4" /> <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" /> <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />', "infirmary sanatorium healthcare doctor hospice clinic emergency room ward medical buildings navigation travel"], ["hotel", '<path d="M10 22v-6.57" /> <path d="M12 11h.01" /> <path d="M12 7h.01" /> <path d="M14 15.43V22" /> <path d="M15 16a5 5 0 0 0-6 0" /> <path d="M16 11h.01" /> <path d="M16 7h.01" /> <path d="M8 11h.01" /> <path d="M8 7h.01" /> <rect x="4" y="2" width="16" height="20" rx="2" />', "building hostel motel inn buildings navigation travel"], ["hourglass", '<path d="M5 22h14" /> <path d="M5 2h14" /> <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /> <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />', "timer time sandglass time gaming"], ["house-heart", '<path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" /> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />', "home sweet home abode building residence healthy living lifestyle home buildings medical"], ["house-plug", '<path d="M10 12V8.964" /> <path d="M14 12V8.964" /> <path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" /> <path d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" />', "home living building residence architecture autarky energy buildings home sustainability"], ["house-plus", '<path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" /> <path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" /> <path d="M15 18h6" /> <path d="M18 15v6" />', "home living medical new addition building residence architecture buildings medical"], ["house-wifi", '<path d="M9.5 13.866a4 4 0 0 1 5 .01" /> <path d="M12 17h.01" /> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> <path d="M7 10.754a8 8 0 0 1 10 0" />', "home living building wifi connectivity home buildings connectivity"], ["house", '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />', "home living building residence architecture buildings home navigation"], ["ice-cream-bowl", '<path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" /> <path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" /> <path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />', "gelato food dessert dish restaurant course meal food-beverage"], ["ice-cream-cone", '<path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" /> <path d="M17 7A5 5 0 0 0 7 7" /> <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />', "gelato food food-beverage"], ["id-card-lanyard", '<path d="M13.5 8h-3" /> <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" /> <path d="M16.899 22A5 5 0 0 0 7.1 22" /> <path d="m9 2 3 6" /> <circle cx="12" cy="15" r="3" />', "id-card id-card-lanyard identity employee gate-pass badge security account"], ["id-card", '<path d="M16 10h2" /> <path d="M16 14h2" /> <path d="M6.17 15a3 3 0 0 1 5.66 0" /> <circle cx="9" cy="11" r="2" /> <rect x="2" y="5" width="20" height="14" rx="2" />', "card badge identity authentication secure security account"], ["image-down", '<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /> <path d="m14 19 3 3v-5.5" /> <path d="m17 22 3-3" /> <circle cx="9" cy="9" r="2" />', "picture photo download save export photography text multimedia files"], ["image-minus", '<path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" /> <line x1="16" x2="22" y1="5" y2="5" /> <circle cx="9" cy="9" r="2" /> <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />', "remove delete photography multimedia files"], ["image-off", '<line x1="2" x2="22" y1="2" y2="22" /> <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" /> <line x1="13.5" x2="6" y1="13.5" y2="21" /> <line x1="18" x2="21" y1="12" y2="15" /> <path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" /> <path d="M21 15V5a2 2 0 0 0-2-2H9" />', "picture photo photography multimedia files"], ["image-play", '<path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" /> <path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /> <path d="m6 21 5-5" /> <circle cx="9" cy="9" r="2" />', "picture gif photo photography text multimedia files"], ["image-plus", '<path d="M16 5h6" /> <path d="M19 2v6" /> <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" /> <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /> <circle cx="9" cy="9" r="2" />', "add create picture photography multimedia files"], ["image-up", '<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /> <path d="m14 19.5 3-3 3 3" /> <path d="M17 22v-5.5" /> <circle cx="9" cy="9" r="2" />', "picture photo upload import photography text multimedia files"], ["image-upscale", '<path d="M16 3h5v5" /> <path d="M17 21h2a2 2 0 0 0 2-2" /> <path d="M21 12v3" /> <path d="m21 3-5 5" /> <path d="M3 7V5a2 2 0 0 1 2-2" /> <path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" /> <path d="M9 3h3" /> <rect x="3" y="11" width="10" height="10" rx="1" />', "resize picture sharpen increase photography multimedia"], ["image", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <circle cx="9" cy="9" r="2" /> <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />', "picture photo photography text multimedia files"], ["images", '<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" /> <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" /> <circle cx="13" cy="7" r="1" fill="currentColor" /> <rect x="8" y="2" width="14" height="14" rx="2" />', "picture photo multiple copy gallery album collection slideshow photography text multimedia files"], ["import", '<path d="M12 3v12" /> <path d="m8 11 4 4 4-4" /> <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />', "save arrows files"], ["inbox", '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /> <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />', "email account mail"], ["indian-rupee", '<path d="M6 3h12" /> <path d="M6 8h12" /> <path d="m6 13 8.5 8" /> <path d="M6 13h3" /> <path d="M9 13c6.667 0 6.667-10 0-10" />', "currency money payment finance"], ["infinity", '<path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />', "unlimited forever loop math multimedia"], ["info", '<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />', "about advice clue details help hint indicator information accessibility notifications"], ["inspection-panel", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 7h.01" /> <path d="M17 7h.01" /> <path d="M7 17h.01" /> <path d="M17 17h.01" />', "access cover tile metal materials screws tools"], ["instagram", '<rect width="20" height="20" x="2" y="2" rx="5" ry="5" /> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />', "logo camera social brands social photography"], ["italic", '<line x1="19" x2="10" y1="4" y2="4" /> <line x1="14" x2="5" y1="20" y2="20" /> <line x1="15" x2="9" y1="4" y2="20" />', "oblique text format text"], ["iteration-ccw", '<path d="m16 14 4 4-4 4" /> <path d="M20 10a8 8 0 1 0-8 8h8" />', "arrow right arrows design"], ["iteration-cw", '<path d="M4 10a8 8 0 1 1 8 8H4" /> <path d="m8 22-4-4 4-4" />', "arrow left arrows design"], ["japanese-yen", '<path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" /> <path d="M6 15h12" /> <path d="M6 11h12" />', "currency money payment finance"], ["joystick", '<path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" /> <path d="M6 15v-2" /> <path d="M12 15V9" /> <circle cx="12" cy="6" r="3" />', "game console control stick gaming devices"], ["kanban", '<path d="M5 3v14" /> <path d="M12 3v8" /> <path d="M19 3v18" />', "projects manage overview board tickets issues roadmap plan charts development design"], ["kayak", '<path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" /> <path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" /> <path d="m6.707 6.707 10.586 10.586" /> <path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />', "kayak boat paddle water sport recreation adventure outdoors transportation"], ["key-round", '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /> <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />', "password login authentication secure unlock security account"], ["key-square", '<path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" /> <path d="m14 7 3 3" /> <path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" />', "password login authentication secure unlock car key security account"], ["key", '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" /> <path d="m21 2-9.6 9.6" /> <circle cx="7.5" cy="15.5" r="5.5" />', "password login authentication secure unlock keychain key ring fob security account"], ["keyboard-music", '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M6 8h4" /> <path d="M14 8h.01" /> <path d="M18 8h.01" /> <path d="M2 12h20" /> <path d="M6 12v4" /> <path d="M10 12v4" /> <path d="M14 12v4" /> <path d="M18 12v4" />', "music audio sound noise notes keys chord octave multimedia devices"], ["keyboard-off", '<path d="M 20 4 A2 2 0 0 1 22 6" /> <path d="M 22 6 L 22 16.41" /> <path d="M 7 16 L 16 16" /> <path d="M 9.69 4 L 20 4" /> <path d="M14 8h.01" /> <path d="M18 8h.01" /> <path d="m2 2 20 20" /> <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" /> <path d="M6 8h.01" /> <path d="M8 12h.01" />', "unkeys layout spell settings mouse devices text development"], ["keyboard", '<path d="M10 8h.01" /> <path d="M12 12h.01" /> <path d="M14 8h.01" /> <path d="M16 12h.01" /> <path d="M18 8h.01" /> <path d="M6 8h.01" /> <path d="M7 16h10" /> <path d="M8 12h.01" /> <rect width="20" height="16" x="2" y="4" rx="2" />', "layout spell settings mouse text devices development"], ["lamp-ceiling", '<path d="M12 2v5" /> <path d="M14.829 15.998a3 3 0 1 1-5.658 0" /> <path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" />', "lighting household home furniture home"], ["lamp-desk", '<path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" /> <path d="m14.207 4.793-3.414 3.414" /> <path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" /> <path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" />', "lighting household office desk home furniture home"], ["lamp-floor", '<path d="M12 10v12" /> <path d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" /> <path d="M9 22h6" />', "lighting household floor home furniture home"], ["lamp-wall-down", '<path d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z" /> <path d="M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /> <path d="M8 6h4a2 2 0 0 1 2 2v5" />', "lighting household wall home furniture home"], ["lamp-wall-up", '<path d="M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z" /> <path d="M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" /> <path d="M8 18h4a2 2 0 0 0 2-2v-5" />', "lighting household wall home furniture home"], ["lamp", '<path d="M12 12v6" /> <path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" /> <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />', "lighting household home furniture home"], ["land-plot", '<path d="m12 8 6-3-6-3v10" /> <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" /> <path d="m6.49 12.85 11.02 6.3" /> <path d="M17.51 12.85 6.5 19.15" />', "area surface square metres allotment parcel property plane acres design tools math sports gaming"], ["landmark", '<path d="M10 18v-7" /> <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" /> <path d="M14 18v-7" /> <path d="M18 18v-7" /> <path d="M3 22h18" /> <path d="M6 18v-7" />', "bank building capitol finance money museum art gallery hall finance navigation buildings"], ["languages", '<path d="m5 8 6 6" /> <path d="m4 14 6-6 2-3" /> <path d="M2 5h12" /> <path d="M7 2h1" /> <path d="m22 22-5-10-5 10" /> <path d="M14 18h6" />', "translate text"], ["laptop-minimal-check", '<path d="M2 20h20" /> <path d="m9 10 2 2 4-4" /> <rect x="3" y="4" width="18" height="12" rx="2" />', "computer screen remote success done todo tick complete devices notifications"], ["laptop-minimal", '<rect width="18" height="12" x="3" y="4" rx="2" ry="2" /> <line x1="2" x2="22" y1="20" y2="20" />', "computer screen remote devices"], ["laptop", '<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" /> <path d="M20.054 15.987H3.946" />', "computer screen remote devices"], ["lasso-select", '<path d="M7 22a5 5 0 0 1-2-4" /> <path d="M7 16.93c.96.43 1.96.74 2.99.91" /> <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" /> <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /> <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" />', "select cursor arrows design cursors"], ["lasso", '<path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" /> <path d="M7 22a5 5 0 0 1-2-3.994" /> <circle cx="5" cy="16" r="2" />', "select cursor design cursors"], ["laugh", '<circle cx="12" cy="12" r="10" /> <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" /> <line x1="9" x2="9.01" y1="9" y2="9" /> <line x1="15" x2="15.01" y1="9" y2="9" />', "emoji face happy good emotion emoji"], ["layers-2", '<path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" /> <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" />', "stack pile pages sheets paperwork copies copy duplicate design layout"], ["layers-plus", '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z" /> <path d="M16 17h6" /> <path d="M19 14v6" /> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" /> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" />', "stack layers add new increase create positive copy design layout"], ["layers", '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /> <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /> <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />', "stack pile pages sheets paperwork copies copy design layout"], ["layout-dashboard", '<rect width="7" height="9" x="3" y="3" rx="1" /> <rect width="7" height="5" x="14" y="3" rx="1" /> <rect width="7" height="9" x="14" y="12" rx="1" /> <rect width="7" height="5" x="3" y="16" rx="1" />', "masonry brick design layout"], ["layout-grid", '<rect width="7" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="14" y="3" rx="1" /> <rect width="7" height="7" x="14" y="14" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" />', "app home start design layout"], ["layout-list", '<rect width="7" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" /> <path d="M14 4h7" /> <path d="M14 9h7" /> <path d="M14 15h7" /> <path d="M14 20h7" />', "todo tasks items pending image photo design layout photography text"], ["layout-panel-left", '<rect width="7" height="18" x="3" y="3" rx="1" /> <rect width="7" height="7" x="14" y="3" rx="1" /> <rect width="7" height="7" x="14" y="14" rx="1" />', "app home start grid design layout"], ["layout-panel-top", '<rect width="18" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" /> <rect width="7" height="7" x="14" y="14" rx="1" />', "window webpage block section grid template structure layout"], ["layout-template", '<rect width="18" height="7" x="3" y="3" rx="1" /> <rect width="9" height="7" x="3" y="14" rx="1" /> <rect width="5" height="7" x="16" y="14" rx="1" />', "window webpage block section layout"], ["leaf", '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />', "sustainability nature energy plant autumn nature sustainability seasons"], ["leafy-green", '<path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" /> <path d="M2 22 17 7" />', "salad lettuce vegetable chard cabbage bok choy food-beverage emoji sustainability"], ["lectern", '<path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" /> <path d="M18 6V3a1 1 0 0 0-1-1h-3" /> <rect width="8" height="12" x="8" y="10" rx="1" />', "pulpit podium stand communication multimedia"], ["lens-concave", '<path d="M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z" />', "concave lens optics light magnification curved focus refraction science tools shapes"], ["lens-convex", '<path d="M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z" />', "convex lens optics magnification focus light refraction physics science tools shapes"], ["library-big", '<rect width="8" height="18" x="3" y="3" rx="1" /> <path d="M7 3v18" /> <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />', "books reading written authors stories fiction novels information text photography multimedia navigation development"], ["library", '<path d="m16 6 4 14" /> <path d="M12 6v14" /> <path d="M8 8v12" /> <path d="M4 4v16" />', "books reading written authors stories fiction novels information text photography multimedia navigation development"], ["life-buoy", '<circle cx="12" cy="12" r="10" /> <path d="m4.93 4.93 4.24 4.24" /> <path d="m14.83 9.17 4.24-4.24" /> <path d="m14.83 14.83 4.24 4.24" /> <path d="m9.17 14.83-4.24 4.24" /> <circle cx="12" cy="12" r="4" />', "preserver life belt lifesaver help rescue ship ring raft accessibility medical"], ["ligature", '<path d="M14 12h2v8" /> <path d="M14 20h4" /> <path d="M6 12h4" /> <path d="M6 20h4" /> <path d="M8 20V8a4 4 0 0 1 7.464-2" />', "text font typography alternates alternatives text"], ["lightbulb-off", '<path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" /> <path d="m2 2 20 20" /> <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" /> <path d="M9 18h6" /> <path d="M10 22h4" />', "lights photography"], ["lightbulb", '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /> <path d="M9 18h6" /> <path d="M10 22h4" />', "idea bright lights photography"], ["line-dot-right-horizontal", '<path d="M 3 12 L 15 12" /> <circle cx="18" cy="12" r="3" />', "code version control waypoint stop station last end development navigation"], ["line-squiggle", '<path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" />', "line snakes annotate curve doodle stroke pen tool shapes math design"], ["link-2-off", '<path d="M9 17H7A5 5 0 0 1 7 7" /> <path d="M15 7h2a5 5 0 0 1 4 8" /> <line x1="8" x2="12" y1="12" y2="12" /> <line x1="2" x2="22" y1="2" y2="22" />', "unchain chain text"], ["link-2", '<path d="M9 17H7A5 5 0 0 1 7 7h2" /> <path d="M15 7h2a5 5 0 1 1 0 10h-2" /> <line x1="8" x2="16" y1="12" y2="12" />', "chain url text account"], ["link", '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /> <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />', "chain url text account"], ["linkedin", '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect width="4" height="12" x="2" y="9" /> <circle cx="4" cy="4" r="2" />', "logo social media social social brands"], ["list-check", '<path d="M16 5H3" /> <path d="M16 12H3" /> <path d="M11 19H3" /> <path d="m15 18 2 2 4-4" />', "done check tick complete list to-do bom text"], ["list-checks", '<path d="M13 5h8" /> <path d="M13 12h8" /> <path d="M13 19h8" /> <path d="m3 17 2 2 4-4" /> <path d="m3 7 2 2 4-4" />', "todo done check tick complete tasks items pending text"], ["list-chevrons-down-up", '<path d="M3 5h8" /> <path d="M3 12h8" /> <path d="M3 19h8" /> <path d="m15 5 3 3 3-3" /> <path d="m15 19 3-3 3 3" />', "options items collapse expand details disclosure show hide text arrows"], ["list-chevrons-up-down", '<path d="M3 5h8" /> <path d="M3 12h8" /> <path d="M3 19h8" /> <path d="m15 8 3-3 3 3" /> <path d="m15 16 3 3 3-3" />', "options items collapse expand details disclosure show hide text arrows"], ["list-collapse", '<path d="M10 5h11" /> <path d="M10 12h11" /> <path d="M10 19h11" /> <path d="m3 10 3-3-3-3" /> <path d="m3 20 3-3-3-3" />', "items collapse expand details disclosure show hide toggle text"], ["list-end", '<path d="M16 5H3" /> <path d="M16 12H3" /> <path d="M9 19H3" /> <path d="m16 16-3 3 3 3" /> <path d="M21 5v12a2 2 0 0 1-2 2h-6" />', "queue bottom end playlist multimedia text"], ["list-filter-plus", '<path d="M12 5H2" /> <path d="M6 12h12" /> <path d="M9 19h6" /> <path d="M16 5h6" /> <path d="M19 8V2" />', "filter plus options add text layout"], ["list-filter", '<path d="M2 5h20" /> <path d="M6 12h12" /> <path d="M9 19h6" />', "options text"], ["list-indent-decrease", '<path d="M21 5H11" /> <path d="M21 12H11" /> <path d="M21 19H11" /> <path d="m7 8-4 4 4 4" />', "text tab text development"], ["list-indent-increase", '<path d="M21 5H11" /> <path d="M21 12H11" /> <path d="M21 19H11" /> <path d="m3 8 4 4-4 4" />', "text tab text development"], ["list-minus", '<path d="M16 5H3" /> <path d="M11 12H3" /> <path d="M16 19H3" /> <path d="M21 12h-6" />', "playlist remove song subtract delete unqueue multimedia text"], ["list-music", '<path d="M16 5H3" /> <path d="M11 12H3" /> <path d="M11 19H3" /> <path d="M21 16V5" /> <circle cx="18" cy="16" r="3" />', "playlist queue music audio playback multimedia"], ["list-ordered", '<path d="M11 5h10" /> <path d="M11 12h10" /> <path d="M11 19h10" /> <path d="M4 4h1v5" /> <path d="M4 9h2" /> <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />', "number order queue text"], ["list-plus", '<path d="M16 5H3" /> <path d="M11 12H3" /> <path d="M16 19H3" /> <path d="M18 9v6" /> <path d="M21 12h-6" />', "playlist add song track new multimedia text"], ["list-restart", '<path d="M21 5H3" /> <path d="M7 12H3" /> <path d="M7 19H3" /> <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" /> <path d="M11 10v4h4" />', "reset refresh reload playlist replay multimedia text"], ["list-start", '<path d="M3 5h6" /> <path d="M3 12h13" /> <path d="M3 19h13" /> <path d="m16 8-3-3 3-3" /> <path d="M21 19V7a2 2 0 0 0-2-2h-6" />', "queue top start next playlist multimedia text"], ["list-todo", '<path d="M13 5h8" /> <path d="M13 12h8" /> <path d="M13 19h8" /> <path d="m3 17 2 2 4-4" /> <rect x="3" y="4" width="6" height="6" rx="1" />', "todo done check tick complete tasks items pending text"], ["list-tree", '<path d="M8 5h13" /> <path d="M13 12h8" /> <path d="M13 19h8" /> <path d="M3 10a2 2 0 0 0 2 2h3" /> <path d="M3 5v12a2 2 0 0 0 2 2h3" />', "tree browser files text layout"], ["list-video", '<path d="M21 5H3" /> <path d="M10 12H3" /> <path d="M10 19H3" /> <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />', "playlist video playback multimedia"], ["list-x", '<path d="M16 5H3" /> <path d="M11 12H3" /> <path d="M16 19H3" /> <path d="m15.5 9.5 5 5" /> <path d="m20.5 9.5-5 5" />', "playlist subtract remove delete unqueue multimedia text"], ["list", '<path d="M3 5h.01" /> <path d="M3 12h.01" /> <path d="M3 19h.01" /> <path d="M8 5h13" /> <path d="M8 12h13" /> <path d="M8 19h13" />', "options text"], ["loader-circle", '<path d="M21 12a9 9 0 1 1-6.219-8.56" />', "loading wait busy progress spinner spinning throbber circle cursors multimedia layout"], ["loader-pinwheel", '<path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" /> <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" /> <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" /> <circle cx="12" cy="12" r="10" />', "loading wait busy progress throbber spinner spinning beach ball cursors design"], ["loader", '<path d="M12 2v4" /> <path d="m16.2 7.8 2.9-2.9" /> <path d="M18 12h4" /> <path d="m16.2 16.2 2.9 2.9" /> <path d="M12 18v4" /> <path d="m4.9 19.1 2.9-2.9" /> <path d="M2 12h4" /> <path d="m4.9 4.9 2.9 2.9" />', "loading wait busy progress spinner spinning throbber cursors multimedia layout design"], ["locate-fixed", '<line x1="2" x2="5" y1="12" y2="12" /> <line x1="19" x2="22" y1="12" y2="12" /> <line x1="12" x2="12" y1="2" y2="5" /> <line x1="12" x2="12" y1="19" y2="22" /> <circle cx="12" cy="12" r="7" /> <circle cx="12" cy="12" r="3" />', "map gps location cross navigation"], ["locate-off", '<path d="M12 19v3" /> <path d="M12 2v3" /> <path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" /> <path d="M19 12h3" /> <path d="M2 12h3" /> <path d="m2 2 20 20" /> <path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />', "map gps location cross navigation"], ["locate", '<line x1="2" x2="5" y1="12" y2="12" /> <line x1="19" x2="22" y1="12" y2="12" /> <line x1="12" x2="12" y1="2" y2="5" /> <line x1="12" x2="12" y1="19" y2="22" /> <circle cx="12" cy="12" r="7" />', "map gps location cross navigation"], ["lock-keyhole-open", '<circle cx="12" cy="16" r="1" /> <rect width="18" height="12" x="3" y="10" rx="2" /> <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />', "security security"], ["lock-keyhole", '<circle cx="12" cy="16" r="1" /> <rect x="3" y="10" width="18" height="12" rx="2" /> <path d="M7 10V7a5 5 0 0 1 10 0v3" />', "security password secure admin security"], ["lock-open", '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 9.9-1" />', "security security"], ["lock", '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" />', "security password secure admin security"], ["log-in", '<path d="m10 17 5-5-5-5" /> <path d="M15 12H3" /> <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />', "sign in arrow enter auth arrows account"], ["log-out", '<path d="m16 17 5-5-5-5" /> <path d="M21 12H9" /> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />', "sign out arrow exit auth arrows account"], ["logs", '<path d="M3 5h1" /> <path d="M3 12h1" /> <path d="M3 19h1" /> <path d="M8 5h1" /> <path d="M8 12h1" /> <path d="M8 19h1" /> <path d="M13 5h8" /> <path d="M13 12h8" /> <path d="M13 19h8" />', "options list menu order queue tasks logs text"], ["lollipop", '<circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /> <path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" />', "lolly candy sugar food sweet dessert spiral food-beverage"], ["luggage", '<path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" /> <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" /> <path d="M10 20h4" /> <circle cx="16" cy="20" r="2" /> <circle cx="8" cy="20" r="2" />', "baggage luggage travel suitcase travel transportation"], ["magnet", '<path d="m12 15 4 4" /> <path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" /> <path d="m5 8 4 4" />', "horseshoe lock science snap design"], ["mail-check", '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="m16 19 2 2 4-4" />', "email message letter subscribe delivered success read done mail"], ["mail-minus", '<path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="M16 19h6" />', "email message letter remove delete mail"], ["mail-open", '<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /> <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />', "email message letter read mail"], ["mail-plus", '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="M19 16v6" /> <path d="M16 19h6" />', "email message letter add create new compose mail"], ["mail-question-mark", '<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" /> <path d="M20 22v.01" />', "email message letter delivery undelivered mail"], ["mail-search", '<path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /> <circle cx="18" cy="18" r="3" /> <path d="m22 22-1.5-1.5" />', "email message letter search lens mail"], ["mail-warning", '<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="M20 14v4" /> <path d="M20 22v.01" />', "email message letter delivery error exclamation mark mail"], ["mail-x", '<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" /> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /> <path d="m17 17 4 4" /> <path d="m21 17-4 4" />', "email message letter remove delete mail"], ["mail", '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" />', "email message letter unread text account mail"], ["mailbox", '<path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" /> <polyline points="15,9 18,9 18,11" /> <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" /> <line x1="6" x2="7" y1="10" y2="10" />', "emails messages letters mailing list newsletter mail"], ["mails", '<path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" /> <path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" /> <rect x="7" y="3" width="15" height="12" rx="2" />', "emails messages letters multiple mailing list newsletter copy mail"], ["map-minus", '<path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" /> <path d="M15 5.764V14" /> <path d="M21 18h-6" /> <path d="M9 3.236v15" />', "location navigation travel drop delete remove erase navigation travel"], ["map-pin-check-inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <path d="m9 10 2 2 4-4" />', "location waypoint marker drop done tick complete task navigation travel account"], ["map-pin-check", '<path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" /> <circle cx="12" cy="10" r="3" /> <path d="m16 18 2 2 4-4" />', "location waypoint marker drop done tick complete task navigation travel account"], ["map-pin-house", '<path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" /> <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" /> <path d="M18 22v-3" /> <circle cx="10" cy="10" r="3" />', "location waypoint marker drop home living building residence navigation travel account"], ["map-pin-minus-inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <path d="M9 10h6" />', "location waypoint marker drop delete remove erase navigation travel account"], ["map-pin-minus", '<path d="M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" /> <circle cx="12" cy="10" r="3" /> <path d="M16 18h6" />', "location waypoint marker drop delete remove erase navigation travel account"], ["map-pin-off", '<path d="M12.75 7.09a3 3 0 0 1 2.16 2.16" /> <path d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" /> <path d="m2 2 20 20" /> <path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" /> <path d="M9.13 9.13a3 3 0 0 0 3.74 3.74" />', "location waypoint marker remove navigation travel"], ["map-pin-pen", '<path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" /> <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /> <circle cx="10" cy="10" r="3" />', "location waypoint marker drop edit navigation travel account"], ["map-pin-plus-inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <path d="M12 7v6" /> <path d="M9 10h6" />', "location waypoint marker drop add create new navigation travel account"], ["map-pin-plus", '<path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" /> <circle cx="12" cy="10" r="3" /> <path d="M16 18h6" /> <path d="M19 15v6" />', "location waypoint marker drop add create new navigation travel account"], ["map-pin-x-inside", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <path d="m14.5 7.5-5 5" /> <path d="m9.5 7.5 5 5" />', "location waypoint marker drop delete remove erase navigation travel account"], ["map-pin-x", '<path d="M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" /> <circle cx="12" cy="10" r="3" /> <path d="m21.5 15.5-5 5" /> <path d="m21.5 20.5-5-5" />', "location waypoint marker drop delete remove erase navigation travel account"], ["map-pin", '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /> <circle cx="12" cy="10" r="3" />', "location waypoint marker drop navigation travel account"], ["map-pinned", '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" /> <circle cx="12" cy="8" r="2" /> <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />', "location waypoint marker drop navigation travel account"], ["map-plus", '<path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" /> <path d="M15 5.764V12" /> <path d="M18 15v6" /> <path d="M21 18h-6" /> <path d="M9 3.236v15" />', "location navigation travel new add create navigation"], ["map", '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /> <path d="M15 5.764v15" /> <path d="M9 3.236v15" />', "location navigation travel text navigation"], ["mars-stroke", '<path d="m14 6 4 4" /> <path d="M17 3h4v4" /> <path d="m21 3-7.75 7.75" /> <circle cx="9" cy="15" r="6" />', "gender androgyne transgender medical"], ["mars", '<path d="M16 3h5v5" /> <path d="m21 3-6.75 6.75" /> <circle cx="10" cy="14" r="6" />', "gender sex male masculine man boy medical"], ["martini", '<path d="M8 22h8" /> <path d="M12 11v11" /> <path d="m19 3-7 8-7-8Z" />', "cocktail alcohol beverage bar drink glass food-beverage"], ["maximize-2", '<path d="M15 3h6v6" /> <path d="m21 3-7 7" /> <path d="m3 21 7-7" /> <path d="M9 21H3v-6" />', "fullscreen arrows expand arrows layout design"], ["maximize", '<path d="M8 3H5a2 2 0 0 0-2 2v3" /> <path d="M21 8V5a2 2 0 0 0-2-2h-3" /> <path d="M3 16v3a2 2 0 0 0 2 2h3" /> <path d="M16 21h3a2 2 0 0 0 2-2v-3" />', "fullscreen expand dashed layout design"], ["medal", '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /> <path d="M11 12 5.12 2.2" /> <path d="m13 12 5.88-9.8" /> <path d="M8 7h8" /> <circle cx="12" cy="17" r="5" /> <path d="M12 18v-2h-.5" />', "prize sports winner trophy award achievement sports gaming"], ["megaphone-off", '<path d="M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" /> <path d="M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" /> <path d="m2 2 20 20" /> <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" /> <path d="M8 8v6" />', "advertisement announcement attention alert loudspeaker megaphone notification disable multimedia notifications"], ["megaphone", '<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /> <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" /> <path d="M8 6v8" />', "advertisement announcement attention alert loudspeaker megaphone notification multimedia notifications"], ["meh", '<circle cx="12" cy="12" r="10" /> <line x1="8" x2="16" y1="15" y2="15" /> <line x1="9" x2="9.01" y1="9" y2="9" /> <line x1="15" x2="15.01" y1="9" y2="9" />', "emoji face neutral emotion emoji"], ["memory-stick", '<path d="M12 12v-2" /> <path d="M12 18v-2" /> <path d="M16 12v-2" /> <path d="M16 18v-2" /> <path d="M2 11h1.5" /> <path d="M20 18v-2" /> <path d="M20.5 11H22" /> <path d="M4 18v-2" /> <path d="M8 12v-2" /> <path d="M8 18v-2" /> <rect x="2" y="6" width="20" height="10" rx="2" />', "ram random access technology computer chip circuit specs capacity devices gaming"], ["menu", '<path d="M4 5h16" /> <path d="M4 12h16" /> <path d="M4 19h16" />', "bars navigation hamburger options layout account"], ["merge", '<path d="m8 6 4-4 4 4" /> <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" /> <path d="m20 22-5-5" />', "combine join unite development arrows"], ["message-circle-check", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="m9 12 2 2 4-4" />', "comment chat conversation dialog feedback speech bubble moderate check social account"], ["message-circle-code", '<path d="m10 9-3 3 3 3" /> <path d="m14 15 3-3-3-3" /> <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />', "comment chat conversation dialog feedback speech bubble code review coding development social"], ["message-circle-dashed", '<path d="M10.1 2.182a10 10 0 0 1 3.8 0" /> <path d="M13.9 21.818a10 10 0 0 1-3.8 0" /> <path d="M17.609 3.72a10 10 0 0 1 2.69 2.7" /> <path d="M2.182 13.9a10 10 0 0 1 0-3.8" /> <path d="M20.28 17.61a10 10 0 0 1-2.7 2.69" /> <path d="M21.818 10.1a10 10 0 0 1 0 3.8" /> <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" /> <path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" />', "comment chat conversation dialog feedback speech bubble draft social"], ["message-circle-heart", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />', "comment chat conversation dialog feedback positive like love social"], ["message-circle-more", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="M8 12h.01" /> <path d="M12 12h.01" /> <path d="M16 12h.01" />', "comment chat conversation dialog feedback speech bubble typing writing social"], ["message-circle-off", '<path d="m2 2 20 20" /> <path d="M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" /> <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />', "comment chat conversation dialog feedback speech bubble clear close social"], ["message-circle-plus", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="M8 12h8" /> <path d="M12 8v8" />', "comment chat conversation dialog feedback speech bubble add social"], ["message-circle-question-mark", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /> <path d="M12 17h.01" />', "comment chat conversation dialog feedback speech bubble help social"], ["message-circle-reply", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="m10 15-3-3 3-3" /> <path d="M7 12h8a2 2 0 0 1 2 2v1" />', "comment chat conversation dialog feedback speech bubble reply response social"], ["message-circle-warning", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="M12 8v4" /> <path d="M12 16h.01" />', "comment chat conversation dialog feedback speech bubble report abuse social notifications"], ["message-circle-x", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /> <path d="m15 9-6 6" /> <path d="m9 9 6 6" />', "comment chat conversation dialog feedback speech bubble clear close account social"], ["message-circle", '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />', "comment chat conversation dialog feedback speech bubble social"], ["message-square-check", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="m9 11 2 2 4-4" />', "comment chat conversation dialog feedback speech bubble moderate check social account"], ["message-square-code", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="m10 8-3 3 3 3" /> <path d="m14 14 3-3-3-3" />', "comment chat conversation dialog feedback speech bubble code review coding development social"], ["message-square-dashed", '<path d="M14 3h2" /> <path d="M16 19h-2" /> <path d="M2 12v-2" /> <path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" /> <path d="M20 19a2 2 0 0 0 2-2v-1" /> <path d="M22 10v2" /> <path d="M22 6V5a2 2 0 0 0-2-2" /> <path d="M4 3a2 2 0 0 0-2 2v1" /> <path d="M8 19h2" /> <path d="M8 3h2" />', "comment chat conversation dialog feedback speech bubble draft social"], ["message-square-diff", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M10 15h4" /> <path d="M10 9h4" /> <path d="M12 7v4" />', "comment chat conversation dialog feedback speech bubble add patch development files social"], ["message-square-dot", '<path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" /> <circle cx="19" cy="6" r="3" />', "unread unresolved comment chat conversation dialog feedback speech bubble social notifications"], ["message-square-heart", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5" />', "comment chat conversation dialog feedback positive like love social"], ["message-square-lock", '<path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" /> <path d="M20 15v-2a2 2 0 0 0-4 0v2" /> <rect x="14" y="15" width="8" height="5" rx="1" />', "comment chat conversation dialog feedback speech bubble secure encrypted social"], ["message-square-more", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M12 11h.01" /> <path d="M16 11h.01" /> <path d="M8 11h.01" />', "comment chat conversation dialog feedback speech bubble typing writing social"], ["message-square-off", '<path d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" /> <path d="m2 2 20 20" /> <path d="M8.656 3H20a2 2 0 0 1 2 2v11.344" />', "comment chat conversation dialog feedback speech bubble clear close social"], ["message-square-plus", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M12 8v6" /> <path d="M9 11h6" />', "comment chat conversation dialog feedback speech bubble add social"], ["message-square-quote", '<path d="M14 14a2 2 0 0 0 2-2V8h-2" /> <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M8 14a2 2 0 0 0 2-2V8H8" />', "comment chat conversation dialog feedback speech bubble blockquote quotation social text"], ["message-square-reply", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="m10 8-3 3 3 3" /> <path d="M17 14v-1a2 2 0 0 0-2-2H7" />', "comment chat conversation dialog feedback speech bubble reply response social"], ["message-square-share", '<path d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" /> <path d="M16 3h6v6" /> <path d="m16 9 6-6" />', "comment chat conversation dialog feedback speech bubble network forward social"], ["message-square-text", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M7 11h10" /> <path d="M7 15h6" /> <path d="M7 7h8" />', "comment chat conversation dialog feedback speech bubble social"], ["message-square-warning", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M12 15h.01" /> <path d="M12 7v4" />', "comment chat conversation dialog feedback speech bubble report abuse social notifications"], ["message-square-x", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="m14.5 8.5-5 5" /> <path d="m9.5 8.5 5 5" />', "comment chat conversation dialog feedback speech bubble clear close social"], ["message-square", '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />', "comment chat conversation dialog feedback speech bubble social"], ["messages-square", '<path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /> <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />', "comment chat conversation dialog feedback speech bubbles copy multiple social"], ["metronome", '<path d="M12 11.4V9.1" /> <path d="m12 17 6.59-6.59" /> <path d="m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" /> <circle cx="20" cy="9" r="2" />', "metronome tempo rhythm beat bpm music audio sound multimedia time"], ["mic-off", '<path d="M12 19v3" /> <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" /> <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" /> <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" /> <path d="m2 2 20 20" /> <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />', "record sound mute microphone devices communication connectivity multimedia"], ["mic-vocal", '<path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" /> <path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" /> <circle cx="16" cy="7" r="5" />', "lyrics voice listen sound music radio podcast karaoke devices multimedia"], ["mic", '<path d="M12 19v3" /> <path d="M19 10v2a7 7 0 0 1-14 0v-2" /> <rect x="9" y="2" width="6" height="13" rx="3" />', "record sound listen radio podcast microphone devices communication connectivity multimedia"], ["microchip", '<path d="M10 12h4" /> <path d="M10 17h4" /> <path d="M10 7h4" /> <path d="M18 12h2" /> <path d="M18 18h2" /> <path d="M18 6h2" /> <path d="M4 12h2" /> <path d="M4 18h2" /> <path d="M4 6h2" /> <rect x="6" y="2" width="12" height="20" rx="2" />', "processor cores technology computer chip integrated circuit memory ram devices"], ["microscope", '<path d="M6 18h8" /> <path d="M3 22h18" /> <path d="M14 22a7 7 0 1 0 0-14h-1" /> <path d="M9 14h2" /> <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /> <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />', "medical education science imaging research science medical"], ["microwave", '<rect width="20" height="15" x="2" y="4" rx="2" /> <rect width="8" height="7" x="6" y="8" rx="1" /> <path d="M18 8v7" /> <path d="M6 19v2" /> <path d="M18 19v2" />', "oven cooker toaster oven bake food-beverage home"], ["milestone", '<path d="M12 13v8" /> <path d="M12 3v3" /> <path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z" />', "signpost direction right east forward version control waypoint arrows navigation development gaming"], ["milk-off", '<path d="M8 2h8" /> <path d="M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" /> <path d="M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" /> <line x1="2" x2="22" y1="2" y2="22" />', "lactose free bottle beverage drink water allergy intolerance diet food-beverage"], ["milk", '<path d="M8 2h8" /> <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" /> <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />', "lactose bottle beverage drink water diet food-beverage"], ["minimize-2", '<path d="m14 10 7-7" /> <path d="M20 10h-6V4" /> <path d="m3 21 7-7" /> <path d="M4 14h6v6" />', "exit fullscreen arrows close shrink arrows layout design"], ["minimize", '<path d="M8 3v3a2 2 0 0 1-2 2H3" /> <path d="M21 8h-3a2 2 0 0 1-2-2V3" /> <path d="M3 16h3a2 2 0 0 1 2 2v3" /> <path d="M16 21v-3a2 2 0 0 1 2-2h3" />', "exit fullscreen close shrink layout design"], ["minus", '<path d="M5 12h14" />', "subtract remove decrease decrement reduce negative calculate line math development text tools"], ["mirror-rectangular", '<path d="M11 6 8 9" /> <path d="m16 7-8 8" /> <rect x="4" y="2" width="16" height="20" rx="2" />', "reflection optics glass surface image physics science bathroom science home tools"], ["mirror-round", '<path d="M10 6.6 8.6 8" /> <path d="M12 18v4" /> <path d="M15 7.5 9.5 13" /> <path d="M7 22h10" /> <circle cx="12" cy="10" r="8" />', "reflection optics glass surface image physics science bathroom science home tools"], ["monitor-check", '<path d="m9 10 2 2 4-4" /> <rect width="20" height="14" x="2" y="3" rx="2" /> <path d="M12 17v4" /> <path d="M8 21h8" />', "tv screen display desktop running active virtual machine vm connectivity devices"], ["monitor-cloud", '<path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" /> <path d="M12 17v4" /> <path d="M8 21h8" /> <rect x="2" y="3" width="20" height="14" rx="2" />', "virtual machine virtual desktop vm vdi computing remote work monitoring infrastructure connectivity devices development"], ["monitor-cog", '<path d="M12 17v4" /> <path d="m14.305 7.53.923-.382" /> <path d="m15.228 4.852-.923-.383" /> <path d="m16.852 3.228-.383-.924" /> <path d="m16.852 8.772-.383.923" /> <path d="m19.148 3.228.383-.924" /> <path d="m19.53 9.696-.382-.924" /> <path d="m20.772 4.852.924-.383" /> <path d="m20.772 7.148.924.383" /> <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" /> <path d="M8 21h8" /> <circle cx="18" cy="6" r="3" />', "tv screen display virtual machine vm executable settings cog connectivity devices"], ["monitor-dot", '<path d="M12 17v4" /> <path d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" /> <path d="M8 21h8" /> <circle cx="19" cy="6" r="3" />', "tv screen display desktop running active virtual machine vm connectivity devices"], ["monitor-down", '<path d="M12 13V7" /> <path d="m15 10-3 3-3-3" /> <rect width="20" height="14" x="2" y="3" rx="2" /> <path d="M12 17v4" /> <path d="M8 21h8" />', "tv screen display desktop download connectivity devices"], ["monitor-off", '<path d="M12 17v4" /> <path d="M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" /> <path d="m2 2 20 20" /> <path d="M8 21h8" /> <path d="M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" />', "share connectivity devices"], ["monitor-pause", '<path d="M10 13V7" /> <path d="M14 13V7" /> <rect width="20" height="14" x="2" y="3" rx="2" /> <path d="M12 17v4" /> <path d="M8 21h8" />', "tv screen display desktop video movie film suspend connectivity devices multimedia"], ["monitor-play", '<path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" /> <path d="M12 17v4" /> <path d="M8 21h8" /> <rect x="2" y="3" width="20" height="14" rx="2" />', "tv screen display desktop video movie film running connectivity devices multimedia"], ["monitor-smartphone", '<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" /> <path d="M10 19v-3.96 3.15" /> <path d="M7 19h5" /> <rect width="6" height="10" x="16" y="12" rx="2" />', "smartphone phone cellphone device mobile desktop monitor responsive connectivity devices"], ["monitor-speaker", '<path d="M5.5 20H8" /> <path d="M17 9h.01" /> <rect width="10" height="16" x="12" y="4" rx="2" /> <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" /> <circle cx="17" cy="15" r="1" />', "devices connect cast connectivity devices"], ["monitor-stop", '<path d="M12 17v4" /> <path d="M8 21h8" /> <rect x="2" y="3" width="20" height="14" rx="2" /> <rect x="9" y="7" width="6" height="6" rx="1" />', "tv screen display desktop video movie film stop connectivity devices multimedia"], ["monitor-up", '<path d="m9 10 3-3 3 3" /> <path d="M12 13V7" /> <rect width="20" height="14" x="2" y="3" rx="2" /> <path d="M12 17v4" /> <path d="M8 21h8" />', "tv screen display upload connect remote screen share connectivity devices"], ["monitor-x", '<path d="m14.5 12.5-5-5" /> <path d="m9.5 12.5 5-5" /> <rect width="20" height="14" x="2" y="3" rx="2" /> <path d="M12 17v4" /> <path d="M8 21h8" />', "tv screen display desktop virtual machine vm close stop connectivity devices"], ["monitor", '<rect width="20" height="14" x="2" y="3" rx="2" /> <line x1="8" x2="16" y1="21" y2="21" /> <line x1="12" x2="12" y1="17" y2="21" />', "tv screen display virtual machine vm connectivity devices"], ["moon-star", '<path d="M18 5h4" /> <path d="M20 3v4" /> <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />', "dark night star accessibility weather"], ["moon", '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />', "dark night accessibility"], ["motorbike", '<path d="m18 14-1-3" /> <path d="m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" /> <path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" /> <circle cx="19" cy="17" r="3" /> <circle cx="5" cy="17" r="3" />', "moto motorcycle transport vehicle drive ride trip race transportation"], ["mountain-snow", '<path d="m8 3 4 8 5-5 5 15H2L8 3z" /> <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />', "alpine climb snow nature"], ["mountain", '<path d="m8 3 4 8 5-5 5 15H2L8 3z" />', "climb hike rock nature gaming"], ["mouse-left", '<path d="M12 7.318V10" /> <path d="M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" /> <circle cx="7" cy="4" r="2" />', "device scroll click devices"], ["mouse-off", '<path d="M12 6v.343" /> <path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" /> <path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" /> <path d="M22 22 2 2" />', "device scroll click disabled devices"], ["mouse-pointer-2-off", '<path d="m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" /> <path d="M22 2 2 22" /> <path d="m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" />', "pointer mouse cursor off disable arrow navigation selection arrows cursors"], ["mouse-pointer-2", '<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />', "click select arrows cursors"], ["mouse-pointer-ban", '<path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" /> <circle cx="16" cy="16" r="6" /> <path d="m11.8 11.8 8.4 8.4" />', "wait busy loading blocked frozen freeze arrows cursors"], ["mouse-pointer-click", '<path d="M14 4.1 12 6" /> <path d="m5.1 8-2.9-.8" /> <path d="m6 12-1.9 2" /> <path d="M7.2 2.2 8 5.1" /> <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />', "click select arrows cursors"], ["mouse-pointer", '<path d="M12.586 12.586 19 19" /> <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" />', "click select arrows cursors"], ["mouse-right", '<path d="M12 7.318V10" /> <path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" /> <circle cx="17" cy="4" r="2" />', "device scroll click devices"], ["mouse", '<rect x="5" y="2" width="14" height="20" rx="7" /> <path d="M12 6v4" />', "device scroll click devices"], ["move-3d", '<path d="M5 3v16h16" /> <path d="m5 19 6-6" /> <path d="m2 6 3-3 3 3" /> <path d="m18 16 3 3-3 3" />', "arrows axis gizmo coordinates transform translate design"], ["move-diagonal-2", '<path d="M19 13v6h-6" /> <path d="M5 11V5h6" /> <path d="m5 5 14 14" />', "double arrow arrows cursors"], ["move-diagonal", '<path d="M11 19H5v-6" /> <path d="M13 5h6v6" /> <path d="M19 5 5 19" />', "double arrow arrows cursors"], ["move-down-left", '<path d="M11 19H5V13" /> <path d="M19 5L5 19" />', "arrow direction arrows"], ["move-down-right", '<path d="M19 13V19H13" /> <path d="M5 5L19 19" />', "arrow direction arrows"], ["move-down", '<path d="M8 18L12 22L16 18" /> <path d="M12 2V22" />', "arrow direction downwards south arrows"], ["move-horizontal", '<path d="m18 8 4 4-4 4" /> <path d="M2 12h20" /> <path d="m6 8-4 4 4 4" />', "double arrow arrows cursors"], ["move-left", '<path d="M6 8L2 12L6 16" /> <path d="M2 12H22" />', "arrow direction back west arrows"], ["move-right", '<path d="M18 8L22 12L18 16" /> <path d="M2 12H22" />', "arrow direction trend flat east arrows"], ["move-up-left", '<path d="M5 11V5H11" /> <path d="M5 5L19 19" />', "arrow direction arrows"], ["move-up-right", '<path d="M13 5H19V11" /> <path d="M19 5L5 19" />', "arrow direction arrows"], ["move-up", '<path d="M8 6L12 2L16 6" /> <path d="M12 2V22" />', "arrow direction upwards north arrows"], ["move-vertical", '<path d="M12 2v20" /> <path d="m8 18 4 4 4-4" /> <path d="m8 6 4-4 4 4" />', "double arrow arrows cursors"], ["move", '<path d="M12 2v20" /> <path d="m15 19-3 3-3-3" /> <path d="m19 9 3 3-3 3" /> <path d="M2 12h20" /> <path d="m5 9-3 3 3 3" /> <path d="m9 5 3-3 3 3" />', "arrows arrows cursors"], ["music-2", '<circle cx="8" cy="18" r="4" /> <path d="M12 18V2l7 4" />', "quaver eighth note note multimedia files"], ["music-3", '<circle cx="12" cy="18" r="4" /> <path d="M16 18V2" />', "crotchet minim quarter note half note note multimedia files"], ["music-4", '<path d="M9 18V5l12-2v13" /> <path d="m9 9 12-2" /> <circle cx="6" cy="18" r="3" /> <circle cx="18" cy="16" r="3" />', "semiquaver sixteenth note note multimedia files"], ["music", '<path d="M9 18V5l12-2v13" /> <circle cx="6" cy="18" r="3" /> <circle cx="18" cy="16" r="3" />', "note quaver eighth note multimedia files"], ["navigation-2-off", '<path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" /> <path d="M14.53 8.88 12 2l-1.17 3.17" /> <line x1="2" x2="22" y1="2" y2="22" />', "location travel navigation"], ["navigation-2", '<polygon points="12 2 19 21 12 17 5 21 12 2" />', "location travel navigation"], ["navigation-off", '<path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" /> <path d="M17.39 11.73 22 2l-9.73 4.61" /> <line x1="2" x2="22" y1="2" y2="22" />', "location travel navigation"], ["navigation", '<polygon points="3 11 22 2 13 21 11 13 3 11" />', "location travel navigation"], ["network", '<rect x="16" y="16" width="6" height="6" rx="1" /> <rect x="2" y="16" width="6" height="6" rx="1" /> <rect x="9" y="2" width="6" height="6" rx="1" /> <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /> <path d="M12 12V8" />', "tree development"], ["newspaper", '<path d="M15 18h-5" /> <path d="M18 14h-8" /> <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" /> <rect width="8" height="4" x="10" y="6" rx="1" />', "news feed home magazine article headline multimedia communication"], ["nfc", '<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" /> <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" /> <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" /> <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />', "contactless payment near-field communication communication finance devices"], ["non-binary", '<path d="M12 2v10" /> <path d="m8.5 4 7 4" /> <path d="m8.5 8 7-4" /> <circle cx="12" cy="17" r="5" />', "gender nonbinary enby medical"], ["notebook-pen", '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /> <path d="M2 6h4" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />', "pencil notepad notes noted stationery sketchbook organizer organiser text social"], ["notebook-tabs", '<path d="M2 6h4" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <rect width="16" height="20" x="4" y="2" rx="2" /> <path d="M15 2v20" /> <path d="M15 7h5" /> <path d="M15 12h5" /> <path d="M15 17h5" />', "notepad notes people family friends acquaintances contacts details account communication social"], ["notebook-text", '<path d="M2 6h4" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <rect width="16" height="20" x="4" y="2" rx="2" /> <path d="M9.5 8h5" /> <path d="M9.5 12H16" /> <path d="M9.5 16H14" />', "notepad notes pages paper stationery sketchbook organizer organiser text social"], ["notebook", '<path d="M2 6h4" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <rect width="16" height="20" x="4" y="2" rx="2" /> <path d="M16 2v20" />', "notepad notes stationery sketchbook moleskine closure strap band text communication social design"], ["notepad-text-dashed", '<path d="M8 2v4" /> <path d="M12 2v4" /> <path d="M16 2v4" /> <path d="M16 4h2a2 2 0 0 1 2 2v2" /> <path d="M20 12v2" /> <path d="M20 18v2a2 2 0 0 1-2 2h-1" /> <path d="M13 22h-2" /> <path d="M7 22H6a2 2 0 0 1-2-2v-2" /> <path d="M4 14v-2" /> <path d="M4 8V6a2 2 0 0 1 2-2h2" /> <path d="M8 10h6" /> <path d="M8 14h8" /> <path d="M8 18h5" />', "notebook notes pages paper stationery diary journal writing text social"], ["notepad-text", '<path d="M8 2v4" /> <path d="M12 2v4" /> <path d="M16 2v4" /> <rect width="16" height="18" x="4" y="4" rx="2" /> <path d="M8 10h6" /> <path d="M8 14h8" /> <path d="M8 18h5" />', "notebook notes pages paper stationery sketchbook organizer organiser text social"], ["nut-off", '<path d="M12 4V2" /> <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939" /> <path d="M19 10v3.343" /> <path d="M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192" /> <line x1="2" x2="22" y1="2" y2="22" />', "hazelnut acorn food allergy intolerance diet food-beverage"], ["nut", '<path d="M12 4V2" /> <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" /> <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />', "hazelnut acorn food diet food-beverage"], ["octagon-alert", '<path d="M12 16h.01" /> <path d="M12 8v4" /> <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />', "warning alert danger exclamation mark notifications shapes"], ["octagon-minus", '<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" /> <path d="M8 12h8" />', "stop forbidden subtract remove decrease reduce - traffic transportation"], ["octagon-pause", '<path d="M10 15V9" /> <path d="M14 15V9" /> <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />', "music audio stop multimedia shapes"], ["octagon-x", '<path d="m15 9-6 6" /> <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" /> <path d="m9 9 6 6" />', "delete stop alert warning times clear math math notifications"], ["octagon", '<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />', "stop shape shapes"], ["omega", '<path d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" />', "greek symbol mathematics education physics engineering ohms electrical resistance math development text science"], ["option", '<path d="M3 3h6l6 18h6" /> <path d="M14 3h7" />', "keyboard key mac alt button development"], ["orbit", '<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" /> <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" /> <circle cx="12" cy="12" r="3" /> <circle cx="19" cy="5" r="2" /> <circle cx="5" cy="19" r="2" />', "planet space physics satellites moons science"], ["origami", '<path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" /> <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" /> <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />', "paper bird animals design"], ["package-2", '<path d="M12 3v6" /> <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" /> <path d="M3.054 9.013h17.893" />', "box container storage sealed packed unopened undelivered archive files development"], ["package-check", '<path d="M12 22V12" /> <path d="m16 17 2 2 4-4" /> <path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" /> <path d="M3.29 7 12 12l8.71-5" /> <path d="m7.5 4.27 8.997 5.148" />', "confirm verified done todo tick complete task delivered development"], ["package-minus", '<path d="M12 22V12" /> <path d="M16 17h6" /> <path d="M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" /> <path d="M3.29 7 12 12l8.71-5" /> <path d="m7.5 4.27 8.997 5.148" />', "delete remove development"], ["package-open", '<path d="M12 22v-9" /> <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" /> <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" /> <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />', "box container storage unpack unarchive unzip opened delivered files development"], ["package-plus", '<path d="M12 22V12" /> <path d="M16 17h6" /> <path d="M19 14v6" /> <path d="M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" /> <path d="M3.29 7 12 12l8.71-5" /> <path d="m7.5 4.27 8.997 5.148" />', "new add create development"], ["package-search", '<path d="M12 22V12" /> <path d="M20.27 18.27 22 20" /> <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" /> <path d="M3.29 7 12 12l8.71-5" /> <path d="m7.5 4.27 8.997 5.148" /> <circle cx="18.5" cy="16.5" r="2.5" />', "find product process lens files development"], ["package-x", '<path d="M12 22V12" /> <path d="m16.5 14.5 5 5" /> <path d="m16.5 19.5 5-5" /> <path d="M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074" /> <path d="M3.29 7 12 12l8.71-5" /> <path d="m7.5 4.27 8.997 5.148" />', "delete remove development"], ["package", '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" /> <path d="M12 22V12" /> <polyline points="3.29 7 12 12 20.71 7" /> <path d="m7.5 4.27 9 5.15" />', "box container storage sealed delivery undelivered unopened packed files development"], ["paint-bucket", '<path d="M11 7 6 2" /> <path d="M18.992 12H2.041" /> <path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595" /> <path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33" />', "fill paint bucket color colour design tools"], ["paint-roller", '<rect width="16" height="6" x="2" y="2" rx="2" /> <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /> <rect width="4" height="6" x="8" y="16" rx="1" />', "brush color colour decoration diy text design home tools"], ["paintbrush-vertical", '<path d="M10 2v2" /> <path d="M14 2v4" /> <path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" /> <path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" />', "brush paintbrush design color colour decoration diy text design photography home tools"], ["paintbrush", '<path d="m14.622 17.897-10.68-2.913" /> <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" /> <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />', "brush paintbrush design color colour decoration diy text design photography home tools"], ["palette", '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /> <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /> <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /> <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /> <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />', "colors colours theme scheme paint watercolor watercolour artist text design photography"], ["panda", '<path d="M11.25 17.25h1.5L12 18z" /> <path d="m15 12 2 2" /> <path d="M18 6.5a.5.5 0 0 0-.5-.5" /> <path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" /> <path d="M6 6.5a.495.495 0 0 1 .5-.5" /> <path d="m9 12-2 2" />', "animal wildlife bear zoo bamboo animals"], ["panel-bottom-close", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 15h18" /> <path d="m15 8-3 3-3-3" />', "drawer dock hide chevron down layout arrows"], ["panel-bottom-dashed", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M14 15h1" /> <path d="M19 15h2" /> <path d="M3 15h2" /> <path d="M9 15h1" />', "drawer dock show reveal padding margin guide layout layout"], ["panel-bottom-open", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 15h18" /> <path d="m9 10 3-3 3 3" />', "drawer dock show reveal chevron up layout arrows"], ["panel-bottom", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 15h18" />', "drawer dock layout"], ["panel-left-close", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 3v18" /> <path d="m16 15-3-3 3-3" />', "primary drawer hide chevron < layout arrows"], ["panel-left-dashed", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 14v1" /> <path d="M9 19v2" /> <path d="M9 3v2" /> <path d="M9 9v1" />', "sidebar primary drawer show reveal padding margin guide layout"], ["panel-left-open", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 3v18" /> <path d="m14 9 3 3-3 3" />', "primary drawer show reveal chevron right > layout arrows"], ["panel-left-right-dashed", '<path d="M15 10V9" /> <path d="M15 15v-1" /> <path d="M15 21v-2" /> <path d="M15 5V3" /> <path d="M9 10V9" /> <path d="M9 15v-1" /> <path d="M9 21v-2" /> <path d="M9 5V3" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "sidebar primary drawer show reveal padding margin guide layout"], ["panel-left", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 3v18" />', "primary drawer layout"], ["panel-right-close", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M15 3v18" /> <path d="m8 9 3 3-3 3" />', "sidebar secondary drawer hide chevron > layout arrows"], ["panel-right-dashed", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M15 14v1" /> <path d="M15 19v2" /> <path d="M15 3v2" /> <path d="M15 9v1" />', "sidebar secondary drawer show reveal padding margin guide layout"], ["panel-right-open", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M15 3v18" /> <path d="m10 15-3-3 3-3" />', "sidebar secondary drawer show reveal chevron left < layout arrows"], ["panel-right", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M15 3v18" />', "sidebar secondary drawer layout"], ["panel-top-bottom-dashed", '<path d="M14 15h1" /> <path d="M14 9h1" /> <path d="M19 15h2" /> <path d="M19 9h2" /> <path d="M3 15h2" /> <path d="M3 9h2" /> <path d="M9 15h1" /> <path d="M9 9h1" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "sidebar primary drawer show reveal padding margin guide layout"], ["panel-top-close", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 9h18" /> <path d="m9 16 3-3 3 3" />', "menu bar drawer hide chevron up layout arrows"], ["panel-top-dashed", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M14 9h1" /> <path d="M19 9h2" /> <path d="M3 9h2" /> <path d="M9 9h1" />', "menu bar drawer show reveal padding margin guide layout layout"], ["panel-top-open", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 9h18" /> <path d="m15 14-3 3-3-3" />', "menu bar drawer show reveal chevron down layout arrows"], ["panel-top", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 9h18" />', "drawer browser webpage layout design development"], ["panels-left-bottom", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 3v18" /> <path d="M9 15h12" />', "drawers sidebar primary layout"], ["panels-right-bottom", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 15h12" /> <path d="M15 3v18" />', "drawers sidebar secondary layout"], ["panels-top-left", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 9h18" /> <path d="M9 21V9" />', "menu bar sidebar primary drawers window webpage projects overview layout design development"], ["paperclip", '<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />', "attachment file text design files mail"], ["parentheses", '<path d="M8 21s-4-3-4-9 4-9 4-9" /> <path d="M16 3s4 3 4 9-4 9-4 9" />', "code token parenthesis parens brackets parameters arguments args development files math"], ["parking-meter", '<path d="M11 15h2" /> <path d="M12 12v3" /> <path d="M12 19v3" /> <path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" /> <path d="M9 9a3 3 0 1 1 6 0" />', "driving car park pay sidewalk pavement transportation navigation"], ["party-popper", '<path d="M5.8 11.3 2 22l10.7-3.79" /> <path d="M4 3h.01" /> <path d="M22 8h.01" /> <path d="M15 2h.01" /> <path d="M22 20h.01" /> <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" /> <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" /> <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" /> <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />', "emoji congratulations celebration party tada \u{1F389} \u{1F38A} excitement emoji"], ["pause", '<rect x="14" y="3" width="5" height="18" rx="1" /> <rect x="5" y="3" width="5" height="18" rx="1" />', "music stop multimedia"], ["paw-print", '<circle cx="11" cy="4" r="2" /> <circle cx="18" cy="8" r="2" /> <circle cx="20" cy="16" r="2" /> <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />', "pets vets veterinarian domesticated cat dog bear animals"], ["pc-case", '<rect width="14" height="20" x="5" y="2" rx="2" /> <path d="M15 14h.01" /> <path d="M9 6h6" /> <path d="M9 10h6" />', "computer chassis devices gaming"], ["pen-line", '<path d="M13 21h8" /> <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />', "pencil change create draw writer writing biro ink text design tools"], ["pen-off", '<path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" /> <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" /> <path d="m2 2 20 20" />', "disabled inactive non-editable locked read-only unmodifiable frozen restricted text design tools"], ["pen-tool", '<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" /> <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" /> <path d="m2.3 2.3 7.286 7.286" /> <circle cx="11" cy="11" r="2" />', "vector drawing path text design cursors"], ["pen", '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />', "pencil change create draw writer writing biro ink text design tools"], ["pencil-line", '<path d="M13 21h8" /> <path d="m15 5 4 4" /> <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />', "pencil change create draw sketch draft writer writing text design tools"], ["pencil-off", '<path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" /> <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" /> <path d="m15 5 4 4" /> <path d="m2 2 20 20" />', "disabled inactive non-editable locked read-only unmodifiable frozen restricted design cursors tools text"], ["pencil-ruler", '<path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /> <path d="m8 6 2-2" /> <path d="m18 16 2-2" /> <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /> <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /> <path d="m15 5 4 4" />', "edit create draw sketch draft writer writing stationery tools design layout text"], ["pencil", '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /> <path d="m15 5 4 4" />', "rubber edit create draw sketch draft writer writing design cursors tools text"], ["pentagon", '<path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />', "shape shapes"], ["percent", '<line x1="19" x2="5" y1="5" y2="19" /> <circle cx="6.5" cy="6.5" r="2.5" /> <circle cx="17.5" cy="17.5" r="2.5" />', "percentage modulo modulus remainder % sale discount offer math development finance shopping"], ["person-standing", '<circle cx="12" cy="5" r="1" /> <path d="m9 20 3-6 3 6" /> <path d="m6 8 6 2 6-2" /> <path d="M12 10v4" />', "people human accessibility stick figure accessibility people"], ["philippine-peso", '<path d="M20 11H4" /> <path d="M20 7H4" /> <path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />', "currency peso money php finance"], ["phone-call", '<path d="M13 2a9 9 0 0 1 9 9" /> <path d="M13 6a5 5 0 0 1 5 5" /> <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />', "ring connectivity devices communication"], ["phone-forwarded", '<path d="M14 6h8" /> <path d="m18 2 4 4-4 4" /> <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />', "call arrows connectivity devices communication"], ["phone-incoming", '<path d="M16 2v6h6" /> <path d="m22 2-6 6" /> <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />', "call arrows connectivity devices communication"], ["phone-missed", '<path d="m16 2 6 6" /> <path d="m22 2-6 6" /> <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />', "call connectivity devices communication"], ["phone-off", '<path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" /> <path d="M22 2 2 22" /> <path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />', "call mute connectivity devices communication"], ["phone-outgoing", '<path d="m16 8 6-6" /> <path d="M22 8V2h-6" /> <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />', "call arrows connectivity devices communication"], ["phone", '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />', "call text connectivity devices communication"], ["pi", '<line x1="9" x2="9" y1="4" y2="20" /> <path d="M4 7c0-1.7 1.3-3 3-3h13" /> <path d="M18 20c-1.7 0-3-1.3-3-3V4" />', "constant code coding programming symbol trigonometry geometry formula development math"], ["piano", '<path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" /> <path d="M2 14h20" /> <path d="M6 14v4" /> <path d="M10 14v4" /> <path d="M14 14v4" /> <path d="M18 14v4" />', "music audio sound noise notes chord keys octave multimedia devices"], ["pickaxe", '<path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" /> <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" /> <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" /> <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />', "mining mine land worker extraction labor construction progress advancement tools gaming"], ["picture-in-picture-2", '<path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" /> <rect width="10" height="7" x="12" y="13" rx="2" />', "display play video pop out always on top window inset multitask multimedia"], ["picture-in-picture", '<path d="M2 10h6V4" /> <path d="m2 4 6 6" /> <path d="M21 10V7a2 2 0 0 0-2-2h-7" /> <path d="M3 14v2a2 2 0 0 0 2 2h3" /> <rect x="12" y="14" width="10" height="7" rx="1" />', "display play video pop out always on top window inset multitask multimedia"], ["piggy-bank", '<path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" /> <path d="M16 10h.01" /> <path d="M2 8v1a2 2 0 0 0 2 2h1" />', "money savings finance"], ["pilcrow-left", '<path d="M14 3v11" /> <path d="M14 9h-3a3 3 0 0 1 0-6h9" /> <path d="M18 3v11" /> <path d="M22 18H2l4-4" /> <path d="m6 22-4-4" />', "direction paragraph mark paraph blind typography type text text"], ["pilcrow-right", '<path d="M10 3v11" /> <path d="M10 9H7a1 1 0 0 1 0-6h8" /> <path d="M14 3v11" /> <path d="m18 14 4 4H2" /> <path d="m22 18-4 4" />', "direction paragraph mark paraph blind typography type text text"], ["pilcrow", '<path d="M13 4v16" /> <path d="M17 4v16" /> <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />', "paragraph mark paraph blind typography type text prose text"], ["pill-bottle", '<path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" /> <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" /> <rect width="16" height="5" x="4" y="2" rx="1" />', "medicine medication prescription drug supplement vitamin capsule jar medical"], ["pill", '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /> <path d="m8.5 8.5 7 7" />', "medicine medication drug prescription tablet pharmacy medical"], ["pin-off", '<path d="M12 17v5" /> <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" /> <path d="m2 2 20 20" /> <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" />', "unpin map unlock unfix unsave remove navigation"], ["pin", '<path d="M12 17v5" /> <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />', "save map lock fix navigation account"], ["pipette", '<path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" /> <path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" /> <path d="m2 22 .414-.414" />', "eye dropper color picker lab chemistry text design science"], ["pizza", '<path d="m12 14-1 1" /> <path d="m13.75 18.25-1.25 1.42" /> <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" /> <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" /> <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />', "pie quiche food food-beverage"], ["plane-landing", '<path d="M2 22h20" /> <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />', "arrival plane trip airplane landing transportation travel"], ["plane-takeoff", '<path d="M2 22h20" /> <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />', "departure plane trip airplane takeoff transportation travel"], ["plane", '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />', "plane trip airplane transportation travel navigation"], ["play", '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />', "music audio video start run arrows multimedia"], ["plug-2", '<path d="M9 2v6" /> <path d="M15 2v6" /> <path d="M12 17v5" /> <path d="M5 8h14" /> <path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />', "electricity energy socket outlet devices development"], ["plug-zap", '<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" /> <path d="m2 22 3-3" /> <path d="M7.5 13.5 10 11" /> <path d="M10.5 16.5 13 14" /> <path d="m18 3-4 4h6l-4 4" />', "electricity energy electronics charge charging battery connect devices"], ["plug", '<path d="M12 22v-5" /> <path d="M15 8V2" /> <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" /> <path d="M9 8V2" />', "electricity energy electronics socket outlet power voltage current devices development"], ["plus", '<path d="M5 12h14" /> <path d="M12 5v14" />', "add new increase increment positive calculate toolbar crosshair math tools development text cursors gaming"], ["pocket-knife", '<path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" /> <path d="M18 6h.01" /> <path d="M6 18h.01" /> <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" /> <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />', "swiss army knife penknife multi-tool multitask blade cutter gadget corkscrew tools"], ["pocket", '<path d="M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z" /> <path d="m8 10 4 4 4-4" />', "logo save brands"], ["podcast", '<path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor" /> <path d="M16.85 18.58a9 9 0 1 0-9.7 0" /> <path d="M8 14a5 5 0 1 1 8 0" /> <circle cx="12" cy="11" r="1" fill="currentColor" />', "audio music mic talk voice subscribe subscription stream multimedia social"], ["pointer-off", '<path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" /> <path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" /> <path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" /> <path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" /> <path d="M6 6v8" /> <path d="m2 2 20 20" />', "mouse cursors"], ["pointer", '<path d="M22 14a8 8 0 0 1-8 8" /> <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" /> <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" /> <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" /> <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />', "mouse cursors"], ["popcorn", '<path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" /> <path d="M10 22 9 8" /> <path d="m14 22 1-14" /> <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />', "cinema movies films salted sweet sugar candy snack food-beverage multimedia"], ["popsicle", '<path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" /> <path d="m22 22-5.5-5.5" />', "ice lolly ice cream sweet food food-beverage"], ["pound-sterling", '<path d="M18 7c0-5.333-8-5.333-8 0" /> <path d="M10 7v14" /> <path d="M6 21h12" /> <path d="M6 13h10" />', "currency money payment finance"], ["power-off", '<path d="M18.36 6.64A9 9 0 0 1 20.77 15" /> <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" /> <path d="M12 2v4" /> <path d="m2 2 20 20" />', "on off device switch connectivity"], ["power", '<path d="M12 2v10" /> <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />', "on off device switch toggle binary boolean reboot connectivity"], ["presentation", '<path d="M2 3h20" /> <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /> <path d="m7 21 5-5 5 5" />', "screen whiteboard marker pens markers blackboard chalk easel school multimedia photography devices communication design"], ["printer-check", '<path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" /> <path d="m16 19 2 2 4-4" /> <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" /> <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />', "fax office device success printed devices"], ["printer-x", '<path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" /> <path d="m16.5 16.5 5 5" /> <path d="m16.5 21.5 5-5" /> <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" /> <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />', "fax office device cross cancel remove error devices"], ["printer", '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /> <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" /> <rect x="6" y="14" width="12" height="8" rx="1" />', "fax office device devices"], ["projector", '<path d="M5 7 3 5" /> <path d="M9 6V3" /> <path d="m13 7 2-2" /> <circle cx="9" cy="13" r="3" /> <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" /> <path d="M16 16h2" />', "cinema film movie home video presentation slideshow office meeting multimedia photography devices communication"], ["proportions", '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M12 9v11" /> <path d="M2 9h13a2 2 0 0 1 2 2v9" />', "screens sizes rotate rotation adjust aspect ratio 16:9 widescreen layout design photography devices"], ["puzzle", '<path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />', "component module part piece development gaming"], ["pyramid", '<path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" /> <path d="M12 2v20" />', "prism triangle triangular hierarchy structure geometry ancient egyptian shapes math travel"], ["qr-code", '<rect width="5" height="5" x="3" y="3" rx="1" /> <rect width="5" height="5" x="16" y="3" rx="1" /> <rect width="5" height="5" x="3" y="16" rx="1" /> <path d="M21 16h-3a2 2 0 0 0-2 2v3" /> <path d="M21 21v.01" /> <path d="M12 7v3a2 2 0 0 1-2 2H7" /> <path d="M3 12h.01" /> <path d="M12 3h.01" /> <path d="M12 16v.01" /> <path d="M16 12h1" /> <path d="M21 12v.01" /> <path d="M12 21v-1" />', "barcode scan link url information digital development social"], ["quote", '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" /> <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />', "quotation text"], ["rabbit", '<path d="M13 16a3 3 0 0 1 2.24 5" /> <path d="M18 12h.01" /> <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" /> <path d="M20 8.54V4a2 2 0 1 0-4 0v3" /> <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />', "animal rodent pet pest bunny hare fast speed animals"], ["radar", '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" /> <path d="M4 6h.01" /> <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" /> <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" /> <path d="M12 18h.01" /> <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" /> <circle cx="12" cy="12" r="2" /> <path d="m13.41 10.59 5.66-5.66" />', "scan sonar detect find locate navigation security communication"], ["radiation", '<path d="M12 12h.01" /> <path d="M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z" /> <path d="M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z" /> <path d="M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" />', "radioactive nuclear fallout waste atomic physics particle element science"], ["radical", '<path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" />', "calculate formula math operator root square symbol development math"], ["radio-receiver", '<path d="M5 16v2" /> <path d="M19 16v2" /> <rect width="20" height="8" x="2" y="8" rx="2" /> <path d="M18 12h.01" />', "device music connect devices"], ["radio-tower", '<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" /> <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" /> <circle cx="12" cy="9" r="2" /> <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" /> <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" /> <path d="M9.5 18h5" /> <path d="m8 22 4-11 4 11" />', "signal broadcast connectivity live frequency devices multimedia social"], ["radio", '<path d="M16.247 7.761a6 6 0 0 1 0 8.478" /> <path d="M19.075 4.933a10 10 0 0 1 0 14.134" /> <path d="M4.925 19.067a10 10 0 0 1 0-14.134" /> <path d="M7.753 16.239a6 6 0 0 1 0-8.478" /> <circle cx="12" cy="12" r="2" />', "signal broadcast connectivity live frequency devices multimedia social"], ["radius", '<path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" /> <circle cx="19" cy="19" r="2" /> <path d="m13.41 13.41 4.18 4.18" /> <circle cx="12" cy="12" r="2" />', "shape circle geometry trigonometry radii calculate measure size shapes math design tools"], ["rail-symbol", '<path d="M5 15h14" /> <path d="M5 9h14" /> <path d="m14 20-5-5 6-6-5-5" />', "railway train track line transportation navigation"], ["rainbow", '<path d="M22 17a10 10 0 0 0-20 0" /> <path d="M6 17a6 6 0 0 1 12 0" /> <path d="M10 17a2 2 0 0 1 4 0" />', "colors colours spectrum light prism arc clear sunshine weather"], ["rat", '<path d="M13 22H4a2 2 0 0 1 0-4h12" /> <path d="M13.236 18a3 3 0 0 0-2.2-5" /> <path d="M16 9h.01" /> <path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" /> <path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" />', "mouse mice gerbil rodent pet pest plague disease animals"], ["ratio", '<rect width="12" height="20" x="6" y="2" rx="2" /> <rect width="20" height="12" x="2" y="6" rx="2" />', "screens sizes rotate rotation adjust aspect ratio proportions 16:9 layout design photography"], ["receipt-cent", '<path d="M12 7v10" /> <path d="M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />', "bill voucher slip check counterfoil currency cents dollar finance travel"], ["receipt-euro", '<path d="M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" /> <path d="M8 12h5" />', "bill voucher slip check counterfoil currency \u20AC finance travel"], ["receipt-indian-rupee", '<path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" /> <path d="M8 11h8" /> <path d="M8 7h8" /> <path d="M9 7a4 4 0 0 1 0 8H8l3 2" />', "bill voucher slip check counterfoil currency inr \u20B9 finance travel"], ["receipt-japanese-yen", '<path d="m12 10 3-3" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" /> <path d="M9 11h6" /> <path d="M9 15h6" /> <path d="m9 7 3 3v7" />', "bill voucher slip check counterfoil currency jpy \xA5 finance travel"], ["receipt-pound-sterling", '<path d="M10 17V9.5a1 1 0 0 1 5 0" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" /> <path d="M8 13h5" /> <path d="M8 17h7" />', "bill voucher slip check counterfoil british currency gbp finance travel"], ["receipt-russian-ruble", '<path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" /> <path d="M8 11h5a2 2 0 0 0 0-4h-3v10" /> <path d="M8 15h5" />', "bill voucher slip check counterfoil currency rub \u20BD finance travel"], ["receipt-swiss-franc", '<path d="M10 11h4" /> <path d="M10 17V7h5" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" /> <path d="M8 15h5" />', "bill voucher slip check counterfoil currency chf \u20A3 finance travel"], ["receipt-text", '<path d="M13 16H8" /> <path d="M14 8H8" /> <path d="M16 12H8" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />', "bill voucher slip check counterfoil details small print terms finance travel"], ["receipt-turkish-lira", '<path d="M10 7v10a5 5 0 0 0 5-5" /> <path d="m14 8-6 3" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />', "bill voucher slip check counterfoil currency try \u20BA finance travel"], ["receipt", '<path d="M12 17V7" /> <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" /> <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />', "bill voucher slip check counterfoil currency dollar usd finance travel"], ["rectangle-circle", '<path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /> <circle cx="14" cy="12" r="8" />', "compose keyboard key button development text"], ["rectangle-ellipsis", '<rect width="20" height="12" x="2" y="6" rx="2" /> <path d="M12 12h.01" /> <path d="M17 12h.01" /> <path d="M7 12h.01" />', "login password authenticate 2fa field fill ellipsis et cetera text development"], ["rectangle-goggles", '<path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />', "vr virtual augmented reality headset goggles devices gaming multimedia connectivity"], ["rectangle-horizontal", '<rect width="20" height="12" x="2" y="6" rx="2" />', "rectangle aspect ratio 16:9 horizontal shape shapes design"], ["rectangle-vertical", '<rect width="12" height="20" x="6" y="2" rx="2" />', "rectangle aspect ratio 9:16 vertical shape shapes design"], ["recycle", '<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" /> <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" /> <path d="m14 16-3 3 3 3" /> <path d="M8.293 13.596 7.196 9.5 3.1 10.598" /> <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" /> <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />', "sustainability salvage arrows sustainability"], ["redo-2", '<path d="m15 14 5-5-5-5" /> <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />', "undo rerun history text arrows"], ["redo-dot", '<circle cx="12" cy="17" r="1" /> <path d="M21 7v6h-6" /> <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />', "redo history step over forward text arrows"], ["redo", '<path d="M21 7v6h-6" /> <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />', "undo rerun history text arrows"], ["refresh-ccw-dot", '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /> <path d="M16 16h5v5" /> <circle cx="12" cy="12" r="1" />', "arrows rotate reload synchronise synchronize circular cycle issue arrows development"], ["refresh-ccw", '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /> <path d="M16 16h5v5" />', "arrows rotate reload rerun synchronise synchronize circular cycle arrows"], ["refresh-cw-off", '<path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" /> <path d="M8 16H3v5" /> <path d="M3 12C3 9.51 4 7.26 5.64 5.64" /> <path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" /> <path d="M21 12c0 1-.16 1.97-.47 2.87" /> <path d="M21 3v5h-5" /> <path d="M22 22 2 2" />', "rotate reload rerun synchronise synchronize arrows circular cycle arrows"], ["refresh-cw", '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />', "rotate reload rerun synchronise synchronize arrows circular cycle arrows"], ["refrigerator", '<path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" /> <path d="M5 10h14" /> <path d="M15 7v6" />', "frigerator fridge freezer cooler icebox chiller cold storage food-beverage home"], ["regex", '<path d="M17 3v10" /> <path d="m12.67 5.5 8.66 5" /> <path d="m12.67 10.5 8.66-5" /> <path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />', "search text code text development"], ["remove-formatting", '<path d="M4 7V4h16v3" /> <path d="M5 20h6" /> <path d="M13 4 8 20" /> <path d="m15 15 5 5" /> <path d="m20 15-5 5" />', "text font typography format x remove delete times text"], ["repeat-1", '<path d="m17 2 4 4-4 4" /> <path d="M3 11v-1a4 4 0 0 1 4-4h14" /> <path d="m7 22-4-4 4-4" /> <path d="M21 13v1a4 4 0 0 1-4 4H3" /> <path d="M11 10h1v4" />', "replay multimedia"], ["repeat-2", '<path d="m2 9 3-3 3 3" /> <path d="M13 18H7a2 2 0 0 1-2-2V6" /> <path d="m22 15-3 3-3-3" /> <path d="M11 6h6a2 2 0 0 1 2 2v10" />', "arrows retweet repost share repeat loop arrows social multimedia"], ["repeat", '<path d="m17 2 4 4-4 4" /> <path d="M3 11v-1a4 4 0 0 1 4-4h14" /> <path d="m7 22-4-4 4-4" /> <path d="M21 13v1a4 4 0 0 1-4 4H3" />', "loop arrows arrows multimedia"], ["replace-all", '<path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" /> <path d="M14 4a1 1 0 0 1 1-1" /> <path d="M15 10a1 1 0 0 1-1-1" /> <path d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" /> <path d="M21 4a1 1 0 0 0-1-1" /> <path d="M21 9a1 1 0 0 1-1 1" /> <path d="m3 7 3 3 3-3" /> <path d="M6 10V5a2 2 0 0 1 2-2h2" /> <rect x="3" y="14" width="7" height="7" rx="1" />', "search substitute swap change text"], ["replace", '<path d="M14 4a1 1 0 0 1 1-1" /> <path d="M15 10a1 1 0 0 1-1-1" /> <path d="M21 4a1 1 0 0 0-1-1" /> <path d="M21 9a1 1 0 0 1-1 1" /> <path d="m3 7 3 3 3-3" /> <path d="M6 10V5a2 2 0 0 1 2-2h2" /> <rect x="3" y="14" width="7" height="7" rx="1" />', "search substitute swap change text"], ["reply-all", '<path d="m12 17-5-5 5-5" /> <path d="M22 18v-2a4 4 0 0 0-4-4H7" /> <path d="m7 17-5-5 5-5" />', "email mail"], ["reply", '<path d="M20 18v-2a4 4 0 0 0-4-4H4" /> <path d="m9 17-5-5 5-5" />', "email mail"], ["rewind", '<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" /> <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />', "music arrows multimedia"], ["ribbon", '<path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" /> <path d="m12 18 2.57-3.5" /> <path d="M6.243 9.016a7 7 0 0 1 11.507-.009" /> <path d="M9.35 14.53 12 11.22" /> <path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" />', "awareness strip band tape strap cordon social medical emoji"], ["rocket", '<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /> <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" /> <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" /> <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />', "release boost launch space version gaming development"], ["rocking-chair", '<path d="m15 13 3.708 7.416" /> <path d="M3 19a15 15 0 0 0 18 0" /> <path d="m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" /> <path d="m9 13-3.708 7.416" />', "chair furniture seat comfort relax home"], ["roller-coaster", '<path d="M6 19V5" /> <path d="M10 19V6.8" /> <path d="M14 19v-7.8" /> <path d="M18 5v4" /> <path d="M18 19v-6" /> <path d="M22 19V9" /> <path d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" />', "attraction entertainment amusement park theme park funfair navigation"], ["rose", '<path d="M17 10h-1a4 4 0 1 1 4-4v.534" /> <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" /> <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" /> <path d="M9.77 12C4 15 2 22 2 22" /> <circle cx="17" cy="8" r="2" />', "roses thorns petals plant stem leaves spring bloom nature seasons sustainability home social"], ["rotate-3d", '<path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" /> <path d="m15.194 13.707 3.814 1.86-1.86 3.814" /> <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />', "gizmo transform orientation orbit axis design"], ["rotate-ccw-key", '<path d="M12 7v6" /> <path d="M12 9h2" /> <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <circle cx="12" cy="15" r="2" />', "password key refresh change security account"], ["rotate-ccw-square", '<path d="M20 9V7a2 2 0 0 0-2-2h-6" /> <path d="m15 2-3 3 3 3" /> <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />', "left counter-clockwise rotate image 90 45 degrees \xB0 layout design photography tools arrows"], ["rotate-ccw", '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" />', "arrow left counter-clockwise restart reload rerun refresh backup arrows design photography"], ["rotate-cw-square", '<path d="M12 5H6a2 2 0 0 0-2 2v3" /> <path d="m9 8 3-3-3-3" /> <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />', "right clockwise rotate image 90 45 degrees \xB0 layout design photography tools arrows"], ["rotate-cw", '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" />', "arrow right clockwise refresh reload rerun redo arrows design photography"], ["route-off", '<circle cx="6" cy="19" r="3" /> <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" /> <path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" /> <path d="m2 2 20 20" /> <path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" /> <path d="M15 5h-4.3" /> <circle cx="18" cy="5" r="3" />', "path journey planner points stops stations reset clear navigation"], ["route", '<circle cx="6" cy="19" r="3" /> <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /> <circle cx="18" cy="5" r="3" />', "path journey planner points stops stations navigation"], ["router", '<rect width="20" height="8" x="2" y="14" rx="2" /> <path d="M6.01 18H6" /> <path d="M10.01 18H10" /> <path d="M15 10v4" /> <path d="M17.84 7.17a4 4 0 0 0-5.66 0" /> <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />', "computer server cloud development devices connectivity home"], ["rows-2", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 12h18" />', "lines list queue preview panel paragraphs parallel series layout design text"], ["rows-3", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M21 9H3" /> <path d="M21 15H3" />', "lines list queue preview paragraphs parallel series split layout design text"], ["rows-4", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M21 7.5H3" /> <path d="M21 12H3" /> <path d="M21 16.5H3" />', "lines list queue preview paragraphs parallel series split layout design text"], ["rss", '<path d="M4 11a9 9 0 0 1 9 9" /> <path d="M4 4a16 16 0 0 1 16 16" /> <circle cx="5" cy="19" r="1" />', "feed subscribe news updates notifications content blog articles development social"], ["ruler-dimension-line", '<path d="M10 15v-3" /> <path d="M14 15v-3" /> <path d="M18 15v-3" /> <path d="M2 8V4" /> <path d="M22 6H2" /> <path d="M22 8V4" /> <path d="M6 15v-3" /> <rect x="2" y="12" width="20" height="8" rx="2" />', "measurements centimeters cm millimeters mm metre foot feet tools design layout"], ["ruler", '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /> <path d="m14.5 12.5 2-2" /> <path d="m11.5 9.5 2-2" /> <path d="m8.5 6.5 2-2" /> <path d="m17.5 15.5 2-2" />', "measurements centimeters cm millimeters mm metre foot feet tools design layout"], ["russian-ruble", '<path d="M6 11h8a4 4 0 0 0 0-8H9v18" /> <path d="M6 15h8" />', "currency money payment finance"], ["sailboat", '<path d="M10 2v15" /> <path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" /> <path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" />', "ship boat harbor harbour dock transportation travel"], ["salad", '<path d="M7 21h10" /> <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" /> <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" /> <path d="m13 12 4-4" /> <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />', "food vegetarian dish restaurant course meal side vegetables food-beverage emoji"], ["sandwich", '<path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" /> <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" /> <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" /> <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" /> <rect width="20" height="4" x="2" y="11" rx="1" />', "food snack dish restaurant lunch meal food-beverage"], ["satellite-dish", '<path d="M4 10a7.31 7.31 0 0 0 10 10Z" /> <path d="m9 15 3-3" /> <path d="M17 13a6 6 0 0 0-6-6" /> <path d="M21 13A10 10 0 0 0 11 3" />', "antenna receiver dish aerial saucer connectivity devices multimedia"], ["satellite", '<path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" /> <path d="M16.5 7.5 19 5" /> <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" /> <path d="M9 21a6 6 0 0 0-6-6" /> <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" />', "space station orbit transmitter connectivity science"], ["saudi-riyal", '<path d="m20 19.5-5.5 1.2" /> <path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" /> <path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" /> <path d="M20 10 4 13.5" />', "currency money payment finance"], ["save-all", '<path d="M10 2v3a1 1 0 0 0 1 1h5" /> <path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" /> <path d="M18 22H4a2 2 0 0 1-2-2V6" /> <path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" />', "floppy disks copy text files"], ["save-off", '<path d="M13 13H8a1 1 0 0 0-1 1v7" /> <path d="M14 8h1" /> <path d="M17 21v-4" /> <path d="m2 2 20 20" /> <path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" /> <path d="M29.5 11.5s5 5 4 5" /> <path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" />', "floppy disk unsalvageable text files"], ["save", '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /> <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" /> <path d="M7 3v4a1 1 0 0 0 1 1h7" />', "floppy disk text files"], ["scale-3d", '<path d="M5 7v11a1 1 0 0 0 1 1h11" /> <path d="M5.293 18.707 11 13" /> <circle cx="19" cy="19" r="2" /> <circle cx="5" cy="5" r="2" />', "gizmo transform size axis design"], ["scale", '<path d="M12 3v18" /> <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" /> <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" /> <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" /> <path d="M7 21h10" />', "balance legal license right rule law justice weight navigation science finance"], ["scaling", '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /> <path d="M14 15H9v-5" /> <path d="M16 3h5v5" /> <path d="M21 3 9 15" />', "scale resize design design"], ["scan-barcode", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <path d="M8 7v10" /> <path d="M12 7v10" /> <path d="M17 7v10" />', "checkout till cart transaction purchase buy product packaging shopping devices"], ["scan-eye", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <circle cx="12" cy="12" r="1" /> <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />', "preview zoom expand fullscreen gallery image camera watch photography multimedia accessibility security devices account"], ["scan-face", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <path d="M8 14s1.5 2 4 2 4-2 4-2" /> <path d="M9 9h.01" /> <path d="M15 9h.01" />', "face biometric identification authentication 2fa access login dashed account security devices social"], ["scan-heart", '<path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" />', "health heart rate pulse monitoring healthiness screening dashed medical"], ["scan-line", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <path d="M7 12h10" />', "checkout till cart transaction purchase buy product packaging devices shopping"], ["scan-qr-code", '<path d="M17 12v4a1 1 0 0 1-1 1h-4" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M17 8V7" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M7 17h.01" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <rect x="7" y="7" width="5" height="5" rx="1" />', "barcode scan qrcode url information digital scanner account shopping devices security"], ["scan-search", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <circle cx="12" cy="12" r="3" /> <path d="m16 16-1.9-1.9" />', "preview zoom expand fullscreen gallery image focus lens photography multimedia accessibility"], ["scan-text", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <path d="M7 8h8" /> <path d="M7 12h10" /> <path d="M7 16h6" />', "recognition read translate copy lines text devices"], ["scan", '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" />', "qr-code barcode checkout augmented reality ar target surveillance camera devices shopping security social gaming"], ["school", '<path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="M18 5v16" /> <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" /> <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" /> <path d="M6 5v16" /> <circle cx="12" cy="9" r="2" />', "building education childhood university learning campus scholar student buildings navigation"], ["scissors-line-dashed", '<path d="M5.42 9.42 8 12" /> <circle cx="4" cy="8" r="2" /> <path d="m14 6-8.58 8.58" /> <circle cx="4" cy="16" r="2" /> <path d="M10.8 14.8 14 18" /> <path d="M16 12h-2" /> <path d="M22 12h-2" />', "cut here along snip chop stationery crafts instructions diagram design tools"], ["scissors", '<circle cx="6" cy="6" r="3" /> <path d="M8.12 8.12 12 12" /> <path d="M20 4 8.12 15.88" /> <circle cx="6" cy="18" r="3" /> <path d="M14.8 14.8 20 20" />', "cut snip chop stationery crafts text design tools"], ["scooter", '<path d="M21 4h-3.5l2 11.05" /> <path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" /> <circle cx="19.5" cy="17.5" r="2.5" /> <circle cx="4.5" cy="17.5" r="2.5" />', "vehicle drive trip journey transport electric ride urban transportation"], ["screen-share-off", '<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" /> <path d="M8 21h8" /> <path d="M12 17v4" /> <path d="m22 3-5 5" /> <path d="m17 3 5 5" />', "desktop disconnect monitor connectivity devices communication"], ["screen-share", '<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" /> <path d="M8 21h8" /> <path d="M12 17v4" /> <path d="m17 8 5-5" /> <path d="M17 3h5v5" />', "host desktop monitor connectivity devices communication"], ["scroll-text", '<path d="M15 12h-5" /> <path d="M15 8h-5" /> <path d="M19 17V5a2 2 0 0 0-2-2H4" /> <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />', "paper log scripture document notes parchment list long gaming development text"], ["scroll", '<path d="M19 17V5a2 2 0 0 0-2-2H4" /> <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />', "paper log scripture document notes parchment list long gaming development text"], ["search-alert", '<circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /> <path d="M11 7v4" /> <path d="M11 15h.01" />', "find scan magnifier magnifying glass stop warning alert error text social"], ["search-check", '<path d="m8 11 2 2 4-4" /> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />', "find scan magnifier magnifying glass found correct complete tick text social"], ["search-code", '<path d="m13 13.5 2-2.5-2-2.5" /> <path d="m21 21-4.3-4.3" /> <path d="M9 8.5 7 11l2 2.5" /> <circle cx="11" cy="11" r="8" />', "find scan magnifier magnifying glass grep chevrons <> lens text social development"], ["search-slash", '<path d="m13.5 8.5-5 5" /> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />', "find scan magnifier magnifying glass stop clear cancel abort text social"], ["search-x", '<path d="m13.5 8.5-5 5" /> <path d="m8.5 8.5 5 5" /> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />', "find scan magnifier magnifying glass stop clear cancel abort text social"], ["search", '<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />', "find scan magnifier magnifying glass lens text social"], ["section", '<path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" /> <path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />', "mark typography punctuation legal type text prose symbol text"], ["send-horizontal", '<path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /> <path d="M6 12h16" />', "email message mail paper airplane paper aeroplane submit mail communication connectivity"], ["send-to-back", '<rect x="14" y="14" width="8" height="8" rx="2" /> <rect x="2" y="2" width="8" height="8" rx="2" /> <path d="M7 14v1a2 2 0 0 0 2 2h1" /> <path d="M14 7h1a2 2 0 0 1 2 2v1" />', "bring send move under back backwards overlap layer design layout"], ["send", '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /> <path d="m21.854 2.147-10.94 10.939" />', "email message mail paper airplane paper aeroplane submit mail communication connectivity"], ["separator-horizontal", '<path d="m16 16-4 4-4-4" /> <path d="M3 12h18" /> <path d="m8 8 4-4 4 4" />', "move split text arrows layout"], ["separator-vertical", '<path d="M12 3v18" /> <path d="m16 16 4-4-4-4" /> <path d="m8 8-4 4 4 4" />', "move split text arrows layout"], ["server-cog", '<path d="m10.852 14.772-.383.923" /> <path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" /> <path d="m13.148 9.228.383-.923" /> <path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" /> <path d="m14.772 10.852.923-.383" /> <path d="m14.772 13.148.923.383" /> <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" /> <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" /> <path d="M6 18h.01" /> <path d="M6 6h.01" /> <path d="m9.228 10.852-.923-.383" /> <path d="m9.228 13.148-.923.383" />', "cloud storage computing cog gear development devices"], ["server-crash", '<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" /> <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" /> <path d="M6 6h.01" /> <path d="M6 18h.01" /> <path d="m13 6-4 6h6l-4 6" />', "cloud storage problem error development devices"], ["server-off", '<path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" /> <path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" /> <path d="M22 17v-1a2 2 0 0 0-2-2h-1" /> <path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" /> <path d="M6 18h.01" /> <path d="m2 2 20 20" />', "cloud storage development devices"], ["server", '<rect width="20" height="8" x="2" y="2" rx="2" ry="2" /> <rect width="20" height="8" x="2" y="14" rx="2" ry="2" /> <line x1="6" x2="6.01" y1="6" y2="6" /> <line x1="6" x2="6.01" y1="18" y2="18" />', "cloud storage development devices"], ["settings-2", '<path d="M14 17H5" /> <path d="M19 7h-9" /> <circle cx="17" cy="17" r="3" /> <circle cx="7" cy="7" r="3" />', "cog edit gear preferences slider account"], ["settings", '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /> <circle cx="12" cy="12" r="3" />', "cog edit gear preferences account"], ["shapes", '<path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" /> <rect x="3" y="14" width="7" height="7" rx="1" /> <circle cx="17.5" cy="17.5" r="3.5" />', "triangle equilateral square circle classification different collection toy shapes gaming"], ["share-2", '<circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="19" r="3" /> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />', "network connections account social"], ["share", '<path d="M12 2v13" /> <path d="m16 6-4-4-4 4" /> <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />', "network connections account social"], ["sheet", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <line x1="3" x2="21" y1="9" y2="9" /> <line x1="3" x2="21" y1="15" y2="15" /> <line x1="9" x2="9" y1="9" y2="21" /> <line x1="15" x2="15" y1="9" y2="21" />', "spreadsheets table excel text files"], ["shell", '<path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />', "beach sand holiday sealife fossil ammonite biology ocean animals development nature science travel food-beverage home"], ["shelving-unit", '<path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /> <path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" /> <path d="M20 22V2" /> <path d="M4 12h16" /> <path d="M4 20h16" /> <path d="M4 2v20" /> <path d="M4 4h16" />', "ledge rack storage inventory furniture sill shelves shelf home"], ["shield-alert", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M12 8v4" /> <path d="M12 16h.01" />', "unshielded cybersecurity insecure unsecured safety unsafe protection unprotected account security development notifications gaming"], ["shield-ban", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="m4.243 5.21 14.39 12.472" />', "unshielded cybersecurity insecure unsecured safety unsafe protection unprotected account security development gaming"], ["shield-check", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="m9 12 2 2 4-4" />', "cybersecurity secured safety protection protected guardian guarded armored account security development gaming"], ["shield-ellipsis", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M8 12h.01" /> <path d="M12 12h.01" /> <path d="M16 12h.01" />', "cybersecurity securing protecting guarding armoring armouring defending blocking account security development gaming"], ["shield-half", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M12 22V2" />', "cybersecurity secure safety protection guardian armored armoured defense account security development gaming"], ["shield-minus", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M9 12h6" />', "unshield cybersecurity unsecure unguard unblock antivirus clean clear account security development gaming"], ["shield-off", '<path d="m2 2 20 20" /> <path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" /> <path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />', "unshielded cybersecurity insecure unsecured safety unsafe protection unprotected account security development gaming"], ["shield-plus", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M9 12h6" /> <path d="M12 9v6" />', "cybersecurity secure safety protection guardian armored armoured defense account security development gaming medical"], ["shield-question-mark", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" /> <path d="M12 17h.01" />', "unshielded cybersecurity insecure unsecured safety unsafe protection unprotected account security development gaming"], ["shield-user", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M6.376 18.91a6 6 0 0 1 11.249.003" /> <circle cx="12" cy="11" r="4" />', "shield user admin protection protected safety guard account security development"], ["shield-x", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="m14.5 9.5-5 5" /> <path d="m9.5 9.5 5 5" />', "unshielded cybersecurity insecure unsecured safety unsafe protection unprotected account security development gaming"], ["shield", '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />', "cybersecurity secure safety protection guardian armored armoured defense account security development gaming shapes"], ["ship-wheel", '<circle cx="12" cy="12" r="8" /> <path d="M12 2v7.5" /> <path d="m19 5-5.23 5.23" /> <path d="M22 12h-7.5" /> <path d="m19 19-5.23-5.23" /> <path d="M12 14.5V22" /> <path d="M10.23 13.77 5 19" /> <path d="M9.5 12H2" /> <path d="M10.23 10.23 5 5" /> <circle cx="12" cy="12" r="2.5" />', "steering rudder boat knots nautical mile maritime sailing yacht transportation navigation travel"], ["ship", '<path d="M12 10.189V14" /> <path d="M12 2v3" /> <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" /> <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" /> <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />', "boat knots nautical mile maritime sailing yacht cruise ocean liner transportation navigation travel"], ["shirt", '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />', "t-shirt shopping store clothing clothes shopping"], ["shopping-bag", '<path d="M16 10a4 4 0 0 1-8 0" /> <path d="M3.103 6.034h17.794" /> <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />', "ecommerce cart purchase store shopping"], ["shopping-basket", '<path d="m15 11-1 9" /> <path d="m19 11-4-7" /> <path d="M2 11h20" /> <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" /> <path d="M4.5 15.5h15" /> <path d="m5 11 4-7" /> <path d="m9 11 1 9" />', "cart e-commerce store purchase products items ingredients shopping"], ["shopping-cart", '<circle cx="8" cy="21" r="1" /> <circle cx="19" cy="21" r="1" /> <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />', "trolley cart basket e-commerce store purchase products items shopping"], ["shovel", '<path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z" /> <path d="M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z" /> <path d="m9 15 7.879-7.878" />', "dig spade treasure nature tools gaming"], ["shower-head", '<path d="m4 4 2.5 2.5" /> <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" /> <path d="M15 5 5 15" /> <path d="M14 17v.01" /> <path d="M10 16v.01" /> <path d="M13 13v.01" /> <path d="M16 10v.01" /> <path d="M11 20v.01" /> <path d="M17 14v.01" /> <path d="M20 11v.01" />', "shower bath bathroom amenities services home travel"], ["shredder", '<path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10 22v-5" /> <path d="M14 19v-2" /> <path d="M18 20v-3" /> <path d="M2 13h20" /> <path d="M6 20v-3" />', "file paper tear cut delete destroy remove erase mail files"], ["shrimp", '<path d="M11 12h.01" /> <path d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" /> <path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" /> <path d="M14 8a8.5 8.5 0 0 1 0 8" /> <path d="M16 16c2 0 4.5-4 4-6" />', "seafood shellfish crustacean prawn scallop whelk arthropod littleneck animals"], ["shrink", '<path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" /> <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" /> <path d="M15 4.2V9m0 0h4.8M15 9l6-6" /> <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />', "scale fullscreen layout arrows"], ["shrub", '<path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" /> <path d="M14.5 14.5 12 17" /> <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" />', "forest undergrowth park nature nature"], ["shuffle", '<path d="m18 14 4 4-4 4" /> <path d="m18 2 4 4-4 4" /> <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" /> <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" /> <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />', "music random reorder multimedia arrows"], ["sigma", '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" />', "sum calculate formula math enumeration enumerate text math science"], ["signal-high", '<path d="M2 20h.01" /> <path d="M7 20v-4" /> <path d="M12 20v-8" /> <path d="M17 20V8" />', "connection wireless gsm phone 2g 3g 4g 5g connectivity"], ["signal-low", '<path d="M2 20h.01" /> <path d="M7 20v-4" />', "connection wireless gsm phone 2g 3g 4g 5g connectivity"], ["signal-medium", '<path d="M2 20h.01" /> <path d="M7 20v-4" /> <path d="M12 20v-8" />', "connection wireless gsm phone 2g 3g 4g 5g connectivity"], ["signal-zero", '<path d="M2 20h.01" />', "connection wireless gsm phone 2g 3g 4g 5g connectivity"], ["signal", '<path d="M2 20h.01" /> <path d="M7 20v-4" /> <path d="M12 20v-8" /> <path d="M17 20V8" /> <path d="M22 4v16" />', "connection wireless gsm phone 2g 3g 4g 5g connectivity"], ["signature", '<path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" /> <path d="M3 21h18" />', "text format input contract autograph handwriting sign cursive text"], ["signpost-big", '<path d="M10 9H4L2 7l2-2h6" /> <path d="M14 5h6l2 2-2 2h-6" /> <path d="M10 22V4a2 2 0 1 1 4 0v18" /> <path d="M8 22h8" />', "bidirectional left right east west arrows navigation development gaming"], ["signpost", '<path d="M12 13v8" /> <path d="M12 3v3" /> <path d="M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" />', "bidirectional left right east west arrows navigation development gaming"], ["siren", '<path d="M7 18v-6a5 5 0 1 1 10 0v6" /> <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" /> <path d="M21 12h1" /> <path d="M18.5 4.5 18 5" /> <path d="M2 12h1" /> <path d="M12 2v1" /> <path d="m4.929 4.929.707.707" /> <path d="M12 12v6" />', "police ambulance emergency security alert alarm light medical"], ["skip-back", '<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" /> <path d="M3 20V4" />', "arrow previous music multimedia arrows"], ["skip-forward", '<path d="M21 4v16" /> <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />', "arrow skip next music multimedia arrows"], ["skull", '<path d="m12.5 17-.5-1-.5 1h1z" /> <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" /> <circle cx="15" cy="12" r="1" /> <circle cx="9" cy="12" r="1" />', "death danger bone gaming"], ["slack", '<rect width="3" height="8" x="13" y="2" rx="1.5" /> <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" /> <rect width="3" height="8" x="8" y="14" rx="1.5" /> <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" /> <rect width="8" height="3" x="14" y="13" rx="1.5" /> <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" /> <rect width="8" height="3" x="2" y="8" rx="1.5" /> <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />', "logo account social brands development"], ["slash", '<path d="M22 2 2 22" />', "divide division or / development math"], ["slice", '<path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" />', "cutter scalpel knife design"], ["sliders-horizontal", '<path d="M10 5H3" /> <path d="M12 19H3" /> <path d="M14 3v4" /> <path d="M16 17v4" /> <path d="M21 12h-9" /> <path d="M21 19h-5" /> <path d="M21 5h-7" /> <path d="M8 10v4" /> <path d="M8 12H3" />', "settings filters controls account"], ["sliders-vertical", '<path d="M10 8h4" /> <path d="M12 21v-9" /> <path d="M12 8V3" /> <path d="M17 16h4" /> <path d="M19 12V3" /> <path d="M19 21v-5" /> <path d="M3 14h4" /> <path d="M5 10V3" /> <path d="M5 21v-7" />', "settings controls account"], ["smartphone-charging", '<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /> <path d="M12.667 8 10 12h4l-2.667 4" />', "phone cellphone device power screen connectivity devices"], ["smartphone-nfc", '<rect width="7" height="12" x="2" y="6" rx="1" /> <path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" /> <path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" /> <path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />', "contactless payment near-field communication screen communication finance devices"], ["smartphone", '<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /> <path d="M12 18h.01" />', "phone cellphone device screen connectivity devices"], ["smile-plus", '<path d="M22 11v1a10 10 0 1 1-9-10" /> <path d="M8 14s1.5 2 4 2 4-2 4-2" /> <line x1="9" x2="9.01" y1="9" y2="9" /> <line x1="15" x2="15.01" y1="9" y2="9" /> <path d="M16 5h6" /> <path d="M19 2v6" />', "emoji face happy good emotion react reaction add emoji social notifications communication"], ["smile", '<circle cx="12" cy="12" r="10" /> <path d="M8 14s1.5 2 4 2 4-2 4-2" /> <line x1="9" x2="9.01" y1="9" y2="9" /> <line x1="15" x2="15.01" y1="9" y2="9" />', "emoji face happy good emotion emoji account"], ["snail", '<path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" /> <circle cx="10" cy="13" r="8" /> <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" /> <path d="M18 3 19.1 5.2" /> <path d="M22 3 20.9 5.2" />', "animal insect slow speed delicacy spiral animals food-beverage"], ["snowflake", '<path d="m10 20-1.25-2.5L6 18" /> <path d="M10 4 8.75 6.5 6 6" /> <path d="m14 20 1.25-2.5L18 18" /> <path d="m14 4 1.25 2.5L18 6" /> <path d="m17 21-3-6h-4" /> <path d="m17 3-3 6 1.5 3" /> <path d="M2 12h6.5L10 9" /> <path d="m20 10-1.5 2 1.5 2" /> <path d="M22 12h-6.5L14 15" /> <path d="m4 10 1.5 2L4 14" /> <path d="m7 21 3-6-1.5-3" /> <path d="m7 3 3 6h4" />', "cold weather freeze snow winter weather seasons"], ["soap-dispenser-droplet", '<path d="M10.5 2v4" /> <path d="M14 2H7a2 2 0 0 0-2 2" /> <path d="M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19" /> <path d="M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />', "wash bath water liquid fluid wet moisture damp home travel"], ["sofa", '<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /> <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" /> <path d="M4 18v2" /> <path d="M20 18v2" /> <path d="M12 4v9" />', "armchair furniture leisure lounge loveseat couch home"], ["solar-panel", '<path d="M11 2h2" /> <path d="m14.28 14-4.56 8" /> <path d="m21 22-1.558-4H4.558" /> <path d="M3 10v2" /> <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" /> <path d="M7 2a4 4 0 0 1-4 4" /> <path d="m8.66 7.66 1.41 1.41" />', "solar panel solar panel sun energy electricity light home science sustainability weather"], ["soup", '<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" /> <path d="M7 21h10" /> <path d="M19.5 12 22 6" /> <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" /> <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" /> <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />', "food dish restaurant course meal bowl starter food-beverage"], ["space", '<path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />', "text selection letters characters font typography text"], ["spade", '<path d="M12 18v4" /> <path d="M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5" />', "shape suit playing cards shapes gaming"], ["sparkle", '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />', "star effect filter night magic shiny glitter twinkle shapes"], ["sparkles", '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />', "stars effect filter night magic cursors multimedia gaming weather"], ["speaker", '<rect width="16" height="20" x="4" y="2" rx="2" /> <path d="M12 6h.01" /> <circle cx="12" cy="14" r="4" /> <path d="M12 14h.01" />', "sound audio music tweeter subwoofer bass production producer multimedia devices"], ["speech", '<path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" /> <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" /> <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />', "disability disabled dda human accessibility people sound accessibility communication"], ["spell-check-2", '<path d="m6 16 6-12 6 12" /> <path d="M8 12h8" /> <path d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" />', "spelling error mistake oversight typo correction code linter text development"], ["spell-check", '<path d="m6 16 6-12 6 12" /> <path d="M8 12h8" /> <path d="m16 20 2 2 4-4" />', "spelling error mistake oversight typo correction code linter text development"], ["spline-pointer", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" /> <path d="M5 17A12 12 0 0 1 17 5" /> <circle cx="19" cy="5" r="2" /> <circle cx="5" cy="19" r="2" />', "path tool curve node click pointer target vector arrows cursors design tools"], ["spline", '<circle cx="19" cy="5" r="2" /> <circle cx="5" cy="19" r="2" /> <path d="M5 17A12 12 0 0 1 17 5" />', "path pen tool shape curve draw design"], ["split", '<path d="M16 3h5v5" /> <path d="M8 3H3v5" /> <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" /> <path d="m15 9 6-6" />', "break disband divide separate branch disunite development arrows"], ["spool", '<path d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66" /> <path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" />', "bobbin spindle yarn thread string sewing needlework communication tools social"], ["spotlight", '<path d="M15.295 19.562 16 22" /> <path d="m17 16 3.758 2.098" /> <path d="m19 12.5 3.026-.598" /> <path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" /> <path d="M8 9V2" />', "winner soapbox stage entertainment drama podium actor actress devices photography multimedia communication"], ["spray-can", '<path d="M3 3h.01" /> <path d="M7 5h.01" /> <path d="M11 7h.01" /> <path d="M3 7h.01" /> <path d="M7 9h.01" /> <path d="M3 11h.01" /> <rect width="4" height="4" x="15" y="5" /> <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" /> <path d="m13 14 8-2" /> <path d="m13 19 8-2" />', "paint color graffiti decoration aerosol deodorant shaving foam air freshener design tools"], ["sprout", '<path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" /> <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" /> <path d="M5 21h14" />', "eco green growth leaf nature plant seed spring nature gaming sustainability"], ["square-activity", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M17 12h-2l-2 5-2-10-2 5H7" />', "pulse action motion movement exercise fitness healthcare heart rate monitor medical social science multimedia"], ["square-arrow-down-left", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m16 8-8 8" /> <path d="M16 16H8V8" />', "direction south-west diagonal sign turn keyboard button arrows gaming"], ["square-arrow-down-right", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m8 8 8 8" /> <path d="M16 8v8H8" />', "direction south-east diagonal sign turn keyboard button arrows gaming"], ["square-arrow-down", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M12 8v8" /> <path d="m8 12 4 4 4-4" />', "backwards reverse direction south sign keyboard button arrows gaming"], ["square-arrow-left", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m12 8-4 4 4 4" /> <path d="M16 12H8" />', "previous back direction west sign keyboard button <- arrows"], ["square-arrow-out-down-left", '<path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" /> <path d="m3 21 9-9" /> <path d="M9 21H3v-6" />', "outwards direction south-west diagonal arrows"], ["square-arrow-out-down-right", '<path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /> <path d="m21 21-9-9" /> <path d="M21 15v6h-6" />', "outwards direction south-east diagonal arrows"], ["square-arrow-out-up-left", '<path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" /> <path d="m3 3 9 9" /> <path d="M3 9V3h6" />', "outwards direction north-west diagonal arrows"], ["square-arrow-out-up-right", '<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /> <path d="m21 3-9 9" /> <path d="M15 3h6v6" />', "outwards direction north-east diagonal share open external link arrows social"], ["square-arrow-right-enter", '<path d="m10 16 4-4-4-4" /> <path d="M3 12h11" /> <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />', "left in inside input insert source import place arrows shapes layout multimedia"], ["square-arrow-right-exit", '<path d="M10 12h11" /> <path d="m17 16 4-4-4-4" /> <path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" />', "out outside output export -> arrows shapes layout multimedia"], ["square-arrow-right", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M8 12h8" /> <path d="m12 16 4-4-4-4" />', "next forward direction west sign keyboard button -> arrows"], ["square-arrow-up-left", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M8 16V8h8" /> <path d="M16 16 8 8" />', "direction north-west diagonal sign keyboard button arrows"], ["square-arrow-up-right", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M8 8h8v8" /> <path d="m8 16 8-8" />', "direction north-east diagonal sign keyboard button share arrows social"], ["square-arrow-up", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m16 12-4-4-4 4" /> <path d="M12 16V8" />', "forward direction north sign keyboard button arrows"], ["square-asterisk", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M12 8v8" /> <path d="m8.5 14 7-4" /> <path d="m8.5 10 7 4" />', "password secret access key multiply multiplication glob pattern wildcard text security math development"], ["square-bottom-dashed-scissors", '<line x1="5" y1="3" x2="19" y2="3" /> <line x1="3" y1="5" x2="3" y2="19" /> <line x1="21" y1="5" x2="21" y2="19" /> <line x1="9" y1="21" x2="10" y2="21" /> <line x1="14" y1="21" x2="15" y2="21" /> <path d="M 3 5 A2 2 0 0 1 5 3" /> <path d="M 19 3 A2 2 0 0 1 21 5" /> <path d="M 5 21 A2 2 0 0 1 3 19" /> <path d="M 21 19 A2 2 0 0 1 19 21" /> <circle cx="8.5" cy="8.5" r="1.5" /> <line x1="9.56066" y1="9.56066" x2="12" y2="12" /> <line x1="17" y1="17" x2="14.82" y2="14.82" /> <circle cx="8.5" cy="15.5" r="1.5" /> <line x1="9.56066" y1="14.43934" x2="17" y2="7" />', "cut snippet chop stationery crafts text design tools files development"], ["square-centerline-dashed-horizontal", '<path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" /> <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" /> <path d="M12 20v2" /> <path d="M12 14v2" /> <path d="M12 8v2" /> <path d="M12 2v2" />', "reflect mirror alignment dashed design photography"], ["square-centerline-dashed-vertical", '<path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" /> <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" /> <path d="M4 12H2" /> <path d="M10 12H8" /> <path d="M16 12h-2" /> <path d="M22 12h-2" />', "reflect mirror alignment dashed design photography"], ["square-chart-gantt", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 8h7" /> <path d="M8 12h6" /> <path d="M11 16h5" />', "projects manage overview roadmap plan intentions timeline deadline charts time development design"], ["square-check-big", '<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" /> <path d="m9 11 3 3L22 4" />', "done todo tick complete task notifications"], ["square-check", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m9 12 2 2 4-4" />', "done todo tick complete task notifications"], ["square-chevron-down", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m16 10-4 4-4-4" />', "back menu panel arrows navigation"], ["square-chevron-left", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m14 16-4-4 4-4" />', "back previous less than fewer menu panel button keyboard arrows navigation"], ["square-chevron-right", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m10 8 4 4-4 4" />', "forward next more than greater menu panel code coding arrows navigation development"], ["square-chevron-up", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m8 14 4-4 4 4" />', "caret keyboard button mac control ctrl superscript exponential arrows navigation math"], ["square-code", '<path d="m10 9-3 3 3 3" /> <path d="m14 15 3-3-3-3" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "gist source programming html xml coding text development"], ["square-dashed-bottom-code", '<path d="M10 9.5 8 12l2 2.5" /> <path d="M14 21h1" /> <path d="m14 9.5 2 2.5-2 2.5" /> <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" /> <path d="M9 21h1" />', "rectangle aspect ratio 1:1 shape snippet code coding development files"], ["square-dashed-bottom", '<path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" /> <path d="M9 21h1" /> <path d="M14 21h1" />', "rectangle aspect ratio 1:1 shape snippet code coding development files"], ["square-dashed-kanban", '<path d="M8 7v7" /> <path d="M12 7v4" /> <path d="M16 7v9" /> <path d="M5 3a2 2 0 0 0-2 2" /> <path d="M9 3h1" /> <path d="M14 3h1" /> <path d="M19 3a2 2 0 0 1 2 2" /> <path d="M21 9v1" /> <path d="M21 14v1" /> <path d="M21 19a2 2 0 0 1-2 2" /> <path d="M14 21h1" /> <path d="M9 21h1" /> <path d="M5 21a2 2 0 0 1-2-2" /> <path d="M3 14v1" /> <path d="M3 9v1" />', "projects manage overview board tickets issues roadmap plan charts development design"], ["square-dashed-mouse-pointer", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" /> <path d="M5 3a2 2 0 0 0-2 2" /> <path d="M19 3a2 2 0 0 1 2 2" /> <path d="M5 21a2 2 0 0 1-2-2" /> <path d="M9 3h1" /> <path d="M9 21h2" /> <path d="M14 3h1" /> <path d="M3 9v1" /> <path d="M21 9v2" /> <path d="M3 14v1" />', "inspector element mouse click pointer box browser selector arrows cursors development tools"], ["square-dashed-top-solid", '<path d="M14 21h1" /> <path d="M21 14v1" /> <path d="M21 19a2 2 0 0 1-2 2" /> <path d="M21 9v1" /> <path d="M3 14v1" /> <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" /> <path d="M3 9v1" /> <path d="M5 21a2 2 0 0 1-2-2" /> <path d="M9 21h1" />', "square border width layout style design rectangular marquee design development layout"], ["square-dashed", '<path d="M5 3a2 2 0 0 0-2 2" /> <path d="M19 3a2 2 0 0 1 2 2" /> <path d="M21 19a2 2 0 0 1-2 2" /> <path d="M5 21a2 2 0 0 1-2-2" /> <path d="M9 3h1" /> <path d="M9 21h1" /> <path d="M14 3h1" /> <path d="M14 21h1" /> <path d="M3 9v1" /> <path d="M21 9v1" /> <path d="M3 14v1" /> <path d="M21 14v1" />', "selection square rectangular marquee tool dashed box text design"], ["square-divide", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <line x1="8" x2="16" y1="12" y2="12" /> <line x1="12" x2="12" y1="16" y2="16" /> <line x1="12" x2="12" y1="8" y2="8" />', "calculate math \xF7 / math"], ["square-dot", '<rect width="18" height="18" x="3" y="3" rx="2" /> <circle cx="12" cy="12" r="1" />', "git diff modified . development"], ["square-equal", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 10h10" /> <path d="M7 14h10" />', "calculate = math"], ["square-function", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" /> <path d="M9 11.2h5.7" />', "programming code automation math development math"], ["square-kanban", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M8 7v7" /> <path d="M12 7v4" /> <path d="M16 7v9" />', "projects manage overview board tickets issues roadmap plan charts development design"], ["square-library", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 7v10" /> <path d="M11 7v10" /> <path d="m15 7 2 10" />', "books reading written authors stories fiction novels information text photography multimedia navigation development"], ["square-m", '<path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "metro subway underground track line transportation navigation"], ["square-menu", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 8h10" /> <path d="M7 12h10" /> <path d="M7 16h10" />', "bars navigation hamburger options menu bar panel layout"], ["square-minus", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M8 12h8" />', "subtract remove decrease reduce calculator button keyboard line math development text tools devices"], ["square-mouse-pointer", '<path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" /> <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />', "inspector element mouse click pointer box browser selector arrows cursors development tools"], ["square-parking-off", '<path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" /> <path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" /> <path d="m2 2 20 20" /> <path d="M13 13a3 3 0 1 0 0-6H9v2" /> <path d="M9 17v-2.3" />', "parking lot car park no parking transportation navigation"], ["square-parking", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />', "parking lot car park transportation navigation"], ["square-pause", '<rect width="18" height="18" x="3" y="3" rx="2" /> <line x1="10" x2="10" y1="15" y2="9" /> <line x1="14" x2="14" y1="15" y2="9" />', "music audio stop multimedia"], ["square-pen", '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /> <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />', "pencil edit change create draw sketch draft writer text"], ["square-percent", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="m15 9-6 6" /> <path d="M9 9h.01" /> <path d="M15 15h.01" />', "verified unverified sale discount offer marketing sticker price tag social finance shopping math"], ["square-pi", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 7h10" /> <path d="M10 7v10" /> <path d="M16 17a2 2 0 0 1-2-2V7" />', "constant code coding programming symbol trigonometry geometry formula development math"], ["square-pilcrow", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" /> <path d="M12 7v10" /> <path d="M16 7v10" />', "paragraph mark paraph blind typography type text prose text"], ["square-play", '<rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />', "music audio video start run arrows multimedia"], ["square-plus", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M8 12h8" /> <path d="M12 8v8" />', "add new increase increment positive calculate calculator button math tools development text"], ["square-power", '<path d="M12 7v4" /> <path d="M7.998 9.003a5 5 0 1 0 8-.005" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "on off device switch toggle binary boolean reboot connectivity"], ["square-radical", '<path d="M7 12h2l2 5 2-10h4" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "calculate formula math operator root square symbol development math"], ["square-round-corner", '<path d="M21 11a8 8 0 0 0-8-8" /> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />', "border radius style design corner layout round rounded design development layout"], ["square-scissors", '<rect width="18" height="18" x="3" y="3" rx="2" /> <circle cx="8.5" cy="8.5" r="1.5" /> <line x1="9.56066" y1="9.56066" x2="12" y2="12" /> <line x1="17" y1="17" x2="14.82" y2="14.82" /> <circle cx="8.5" cy="15.5" r="1.5" /> <line x1="9.56066" y1="14.43934" x2="17" y2="7" />', "cut snippet chop stationery crafts toolbar button text design tools files development"], ["square-sigma", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />', "sum calculate formula math enumeration enumerate text math"], ["square-slash", '<rect width="18" height="18" x="3" y="3" rx="2" /> <line x1="9" x2="15" y1="15" y2="9" />', "git diff ignored divide division shortcut or / development math"], ["square-split-horizontal", '<path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" /> <path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" /> <line x1="12" x2="12" y1="4" y2="20" />', "split divide layout"], ["square-split-vertical", '<path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" /> <path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" /> <line x1="4" x2="20" y1="12" y2="12" />', "split divide layout"], ["square-square", '<rect x="3" y="3" width="18" height="18" rx="2" /> <rect x="8" y="8" width="8" height="8" rx="1" />', "float center rectangle layout"], ["square-stack", '<path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /> <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" /> <rect width="8" height="8" x="14" y="14" rx="2" />', "versions clone copy duplicate multiple revisions version control backup text files development"], ["square-star", '<path d="M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" /> <rect x="3" y="3" width="18" height="18" rx="2" />', "badge medal honour decoration order pin laurel trophy sports gaming"], ["square-stop", '<rect width="18" height="18" x="3" y="3" rx="2" /> <rect x="9" y="9" width="6" height="6" rx="1" />', "media music multimedia"], ["square-terminal", '<path d="m7 11 2-2-2-2" /> <path d="M11 13h4" /> <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />', "code command line prompt shell development"], ["square-user-round", '<path d="M18 21a6 6 0 0 0-12 0" /> <circle cx="12" cy="11" r="4" /> <rect width="18" height="18" x="3" y="3" rx="2" />', "person account contact account"], ["square-user", '<rect width="18" height="18" x="3" y="3" rx="2" /> <circle cx="12" cy="10" r="3" /> <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />', "person account contact account"], ["square-x", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <path d="m15 9-6 6" /> <path d="m9 9 6 6" />', "cancel close delete remove times clear math multiply math notifications"], ["square", '<rect width="18" height="18" x="3" y="3" rx="2" />', "stop playback music audio video rectangle aspect ratio 1:1 shapes multimedia"], ["squares-exclude", '<path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" /> <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" />', "square pathfinder path exclude invert xor shape vector design"], ["squares-intersect", '<path d="M10 22a2 2 0 0 1-2-2" /> <path d="M14 2a2 2 0 0 1 2 2" /> <path d="M16 22h-2" /> <path d="M2 10V8" /> <path d="M2 4a2 2 0 0 1 2-2" /> <path d="M20 8a2 2 0 0 1 2 2" /> <path d="M22 14v2" /> <path d="M22 20a2 2 0 0 1-2 2" /> <path d="M4 16a2 2 0 0 1-2-2" /> <path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" /> <path d="M8 2h2" />', "square pathfinder path intersect shape include vector design"], ["squares-subtract", '<path d="M10 22a2 2 0 0 1-2-2" /> <path d="M16 22h-2" /> <path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" /> <path d="M20 8a2 2 0 0 1 2 2" /> <path d="M22 14v2" /> <path d="M22 20a2 2 0 0 1-2 2" />', "square pathfinder path minus subtract subtraction shape front design"], ["squares-unite", '<path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z" />', "square pathfinder path unite union shape merge vector design"], ["squircle-dashed", '<path d="M13.77 3.043a34 34 0 0 0-3.54 0" /> <path d="M13.771 20.956a33 33 0 0 1-3.541.001" /> <path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" /> <path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" /> <path d="M20.957 10.23a33 33 0 0 1 0 3.54" /> <path d="M3.043 10.23a34 34 0 0 0 .001 3.541" /> <path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" /> <path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />', "shape pending progress issue draft code coding version control development shapes design"], ["squircle", '<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />', "shape shapes"], ["squirrel", '<path d="M15.236 22a3 3 0 0 0-2.2-5" /> <path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" /> <path d="M18 13h.01" /> <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />', "animal rodent pet pest nuts retrieve updates storage animals"], ["stamp", '<path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" /> <path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" /> <path d="M5 22h14" />', "mark print clone loyalty library design cursors tools"], ["star-half", '<path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />', "bookmark favorite like review rating social multimedia"], ["star-off", '<path d="m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" /> <path d="m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" /> <path d="m2 2 20 20" />', "dislike unlike remove unrate multimedia social"], ["star", '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />', "bookmark favorite like review rating account social shapes multimedia weather emoji gaming"], ["step-back", '<path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" /> <path d="M21 20V4" />', "arrow previous music left reverse multimedia arrows"], ["step-forward", '<path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" /> <path d="M3 4v16" />', "arrow next music right continue multimedia arrows"], ["stethoscope", '<path d="M11 2v2" /> <path d="M5 2v2" /> <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" /> <path d="M8 15a6 6 0 0 0 12 0v-3" /> <circle cx="20" cy="10" r="2" />', "phonendoscope medical heart lungs sound science medical"], ["sticker", '<path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" /> <path d="M15 3v5a1 1 0 0 0 1 1h5" /> <path d="M8 13h.01" /> <path d="M16 13h.01" /> <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />', "reaction emotion smile happy feedback social"], ["sticky-note", '<path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" /> <path d="M15 3v5a1 1 0 0 0 1 1h5" />', "post-it comment annotation reaction memo reminder todo task text social"], ["stone", '<path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" /> <path d="M11.99 22 14 12l7.822 3.184" /> <path d="M14 12 8.47 2.302" />', "mineral geology nature solid pebble crystal ore hard nature"], ["store", '<path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" /> <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" /> <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />', "shop supermarket stand boutique building buildings navigation shopping"], ["stretch-horizontal", '<rect width="20" height="6" x="2" y="4" rx="2" /> <rect width="20" height="6" x="2" y="14" rx="2" />', "items flex justify distribute layout"], ["stretch-vertical", '<rect width="6" height="20" x="4" y="2" rx="2" /> <rect width="6" height="20" x="14" y="2" rx="2" />', "items flex justify distribute layout"], ["strikethrough", '<path d="M16 4H9a3 3 0 0 0-2.83 4" /> <path d="M14 12a4 4 0 0 1 0 8H6" /> <line x1="4" x2="20" y1="12" y2="12" />', "cross out delete remove format text"], ["subscript", '<path d="m4 5 8 8" /> <path d="m12 5-8 8" /> <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />', "text text"], ["sun-dim", '<circle cx="12" cy="12" r="4" /> <path d="M12 4h.01" /> <path d="M20 12h.01" /> <path d="M12 20h.01" /> <path d="M4 12h.01" /> <path d="M17.657 6.343h.01" /> <path d="M17.657 17.657h.01" /> <path d="M6.343 17.657h.01" /> <path d="M6.343 6.343h.01" />', "brightness dim low brightness low accessibility weather"], ["sun-medium", '<circle cx="12" cy="12" r="4" /> <path d="M12 3v1" /> <path d="M12 20v1" /> <path d="M3 12h1" /> <path d="M20 12h1" /> <path d="m18.364 5.636-.707.707" /> <path d="m6.343 17.657-.707.707" /> <path d="m5.636 5.636.707.707" /> <path d="m17.657 17.657.707.707" />', "brightness medium accessibility weather"], ["sun-moon", '<path d="M12 2v2" /> <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" /> <path d="M16 12a4 4 0 0 0-4-4" /> <path d="m19 5-1.256 1.256" /> <path d="M20 12h2" />', "dark light moon sun brightness theme auto theme system theme accessibility"], ["sun-snow", '<path d="M10 21v-1" /> <path d="M10 4V3" /> <path d="M10 9a3 3 0 0 0 0 6" /> <path d="m14 20 1.25-2.5L18 18" /> <path d="m14 4 1.25 2.5L18 6" /> <path d="m17 21-3-6 1.5-3H22" /> <path d="m17 3-3 6 1.5 3" /> <path d="M2 12h1" /> <path d="m20 10-1.5 2 1.5 2" /> <path d="m3.64 18.36.7-.7" /> <path d="m4.34 6.34-.7-.7" />', "weather air conditioning temperature hot cold seasons weather"], ["sun", '<circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />', "brightness weather light summer accessibility weather seasons sustainability"], ["sunrise", '<path d="M12 2v8" /> <path d="m4.93 10.93 1.41 1.41" /> <path d="M2 18h2" /> <path d="M20 18h2" /> <path d="m19.07 10.93-1.41 1.41" /> <path d="M22 22H2" /> <path d="m8 6 4-4 4 4" /> <path d="M16 18a4 4 0 0 0-8 0" />', "weather time morning day arrows weather time"], ["sunset", '<path d="M12 10V2" /> <path d="m4.93 10.93 1.41 1.41" /> <path d="M2 18h2" /> <path d="M20 18h2" /> <path d="m19.07 10.93-1.41 1.41" /> <path d="M22 22H2" /> <path d="m16 6-4 4-4-4" /> <path d="M16 18a4 4 0 0 0-8 0" />', "weather time evening night arrows weather"], ["superscript", '<path d="m4 19 8-8" /> <path d="m12 19-8-8" /> <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />', "text exponent text"], ["swatch-book", '<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" /> <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" /> <path d="M 7 17h.01" /> <path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" />', "colors colours swatches pantone shades tint hue saturation design home photography"], ["swiss-franc", '<path d="M10 21V3h8" /> <path d="M6 16h9" /> <path d="M10 9.5h7" />', "currency money payment finance"], ["switch-camera", '<path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" /> <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" /> <circle cx="12" cy="12" r="3" /> <path d="m18 22-3-3 3-3" /> <path d="m6 2 3 3-3 3" />', "photo selfie front back communication devices"], ["sword", '<path d="m11 19-6-6" /> <path d="m5 21-2-2" /> <path d="m8 16-4 4" /> <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" />', "battle challenge game war weapon gaming tools"], ["swords", '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" /> <line x1="13" x2="19" y1="19" y2="13" /> <line x1="16" x2="20" y1="16" y2="20" /> <line x1="19" x2="21" y1="21" y2="19" /> <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" /> <line x1="5" x2="9" y1="14" y2="18" /> <line x1="7" x2="4" y1="17" y2="20" /> <line x1="3" x2="5" y1="19" y2="21" />', "battle challenge game war weapon gaming tools"], ["syringe", '<path d="m18 2 4 4" /> <path d="m17 7 3-3" /> <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" /> <path d="m9 11 4 4" /> <path d="m5 19-3 3" /> <path d="m14 4 6 6" />', "medicine medical needle pump plunger nozzle blood science medical"], ["table-2", '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />', "spreadsheet grid text files"], ["table-cells-merge", '<path d="M12 21v-6" /> <path d="M12 9V3" /> <path d="M3 15h18" /> <path d="M3 9h18" /> <rect width="18" height="18" x="3" y="3" rx="2" />', "spreadsheet grid row text files"], ["table-cells-split", '<path d="M12 15V9" /> <path d="M3 15h18" /> <path d="M3 9h18" /> <rect width="18" height="18" x="3" y="3" rx="2" />', "spreadsheet grid row text files"], ["table-columns-split", '<path d="M14 14v2" /> <path d="M14 20v2" /> <path d="M14 2v2" /> <path d="M14 8v2" /> <path d="M2 15h8" /> <path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" /> <path d="M2 9h8" /> <path d="M22 15h-4" /> <path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" /> <path d="M22 9h-4" /> <path d="M5 3v18" />', "spreadsheet grid cut break divide separate segment text files"], ["table-of-contents", '<path d="M16 5H3" /> <path d="M16 12H3" /> <path d="M16 19H3" /> <path d="M21 5h.01" /> <path d="M21 12h.01" /> <path d="M21 19h.01" />', "toc outline navigation document structure index overview sections chapters text"], ["table-properties", '<path d="M15 3v18" /> <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M21 9H3" /> <path d="M21 15H3" />', "property list plist spreadsheet grid dictionary object hash text development files"], ["table-rows-split", '<path d="M14 10h2" /> <path d="M15 22v-8" /> <path d="M15 2v4" /> <path d="M2 10h2" /> <path d="M20 10h2" /> <path d="M3 19h18" /> <path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" /> <path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" /> <path d="M8 10h2" /> <path d="M9 22v-8" /> <path d="M9 2v4" />', "spreadsheet grid cut break divide separate segment text files"], ["table", '<path d="M12 3v18" /> <rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 9h18" /> <path d="M3 15h18" />', "spreadsheet grid text files"], ["tablet-smartphone", '<rect width="10" height="14" x="3" y="8" rx="2" /> <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /> <path d="M8 18h.01" />', "responsive screens browser testing mobile devices design development tools"], ["tablet", '<rect width="16" height="20" x="4" y="2" rx="2" ry="2" /> <line x1="12" x2="12.01" y1="18" y2="18" />', "device devices"], ["tablets", '<circle cx="7" cy="7" r="5" /> <circle cx="17" cy="17" r="5" /> <path d="M12 17h10" /> <path d="m3.46 10.54 7.08-7.08" />', "medicine medication drug prescription pills pharmacy medical"], ["tag", '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /> <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />', "label badge ticket mark account"], ["tags", '<path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" /> <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" /> <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" />', "labels badges tickets marks copy multiple account"], ["tally-1", '<path d="M4 4v16" />', "count score enumerate days one 1 first bar math gaming"], ["tally-2", '<path d="M4 4v16" /> <path d="M9 4v16" />', "count score enumerate days two 2 second double math gaming"], ["tally-3", '<path d="M4 4v16" /> <path d="M9 4v16" /> <path d="M14 4v16" />', "count score enumerate days three 3 third triple math gaming"], ["tally-4", '<path d="M4 4v16" /> <path d="M9 4v16" /> <path d="M14 4v16" /> <path d="M19 4v16" />', "count score enumerate days 4 fourth quadruple bars math gaming"], ["tally-5", '<path d="M4 4v16" /> <path d="M9 4v16" /> <path d="M14 4v16" /> <path d="M19 4v16" /> <path d="M22 6 2 18" />', "count score enumerate days five 5 fifth bars math gaming"], ["tangent", '<circle cx="17" cy="4" r="2" /> <path d="M15.59 5.41 5.41 15.59" /> <circle cx="4" cy="17" r="2" /> <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />', "tangential shape circle geometry trigonometry bezier curve shapes math design tools"], ["target", '<circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" />', "logo bullseye deadline projects overview work productivity brands gaming"], ["telescope", '<path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" /> <path d="m13.56 11.747 4.332-.924" /> <path d="m16 21-3.105-6.21" /> <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" /> <path d="m6.158 8.633 1.114 4.456" /> <path d="m8 21 3.105-6.21" /> <circle cx="12" cy="13" r="2" />', "astronomy space discovery exploration explore vision perspective focus science development tools"], ["tent-tree", '<circle cx="4" cy="4" r="2" /> <path d="m14 5 3-3 3 3" /> <path d="m14 10 3-3 3 3" /> <path d="M17 14V2" /> <path d="M17 14H7l-5 8h20Z" /> <path d="M8 14v8" /> <path d="m9 14 5 8" />', "camping campsite holiday retreat nomadic wilderness outdoors travel nature"], ["tent", '<path d="M3.5 21 14 3" /> <path d="M20.5 21 10 3" /> <path d="M15.5 21 12 15l-3.5 6" /> <path d="M2 21h20" />', "tipi teepee wigwam lodge camping campsite holiday retreat travel nature sustainability"], ["terminal", '<path d="M12 19h8" /> <path d="m4 17 6-6-6-6" />', "code command line prompt shell development"], ["test-tube-diagonal", '<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" /> <path d="m16 2 6 6" /> <path d="M12 16H4" />', "tube vial phial flask ampoule ampule lab chemistry science"], ["test-tube", '<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" /> <path d="M8.5 2h7" /> <path d="M14.5 16h-5" />', "tube vial phial flask ampoule ampule lab chemistry science"], ["test-tubes", '<path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" /> <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" /> <path d="M3 2h7" /> <path d="M14 2h7" /> <path d="M9 16H4" /> <path d="M20 16h-5" />', "tubes vials phials flasks ampoules ampules lab chemistry science"], ["text-align-center", '<path d="M21 5H3" /> <path d="M17 12H7" /> <path d="M19 19H5" />', "text alignment center text"], ["text-align-end", '<path d="M21 5H3" /> <path d="M21 12H9" /> <path d="M21 19H7" />', "text alignment right text"], ["text-align-justify", '<path d="M3 5h18" /> <path d="M3 12h18" /> <path d="M3 19h18" />', "text alignment justified menu list text"], ["text-align-start", '<path d="M21 5H3" /> <path d="M15 12H3" /> <path d="M17 19H3" />', "text alignment left list text"], ["text-cursor-input", '<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" /> <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" /> <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" /> <path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" /> <path d="M9 6v12" />', "select text layout"], ["text-cursor", '<path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" /> <path d="M7 22h1a4 4 0 0 0 4-4v-1" /> <path d="M7 2h1a4 4 0 0 1 4 4v1" />', "select text cursors"], ["text-initial", '<path d="M15 5h6" /> <path d="M15 12h6" /> <path d="M3 19h18" /> <path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" /> <path d="M3.92 10h6.16" />', "drop cap text format typography letter font size text"], ["text-quote", '<path d="M17 5H3" /> <path d="M21 12H8" /> <path d="M21 19H8" /> <path d="M3 12v7" />', "blockquote quotation indent reply response text"], ["text-search", '<path d="M21 5H3" /> <path d="M10 12H3" /> <path d="M10 19H3" /> <circle cx="17" cy="15" r="3" /> <path d="m21 19-1.9-1.9" />', "find data copy txt pdf document scan magnifier text"], ["text-select", '<path d="M14 21h1" /> <path d="M14 3h1" /> <path d="M19 3a2 2 0 0 1 2 2" /> <path d="M21 14v1" /> <path d="M21 19a2 2 0 0 1-2 2" /> <path d="M21 9v1" /> <path d="M3 14v1" /> <path d="M3 9v1" /> <path d="M5 21a2 2 0 0 1-2-2" /> <path d="M5 3a2 2 0 0 0-2 2" /> <path d="M7 12h10" /> <path d="M7 16h6" /> <path d="M7 8h8" /> <path d="M9 21h1" /> <path d="M9 3h1" />', "find search selection dashed text cursors"], ["text-wrap", '<path d="m16 16-3 3 3 3" /> <path d="M3 12h14.5a1 1 0 0 1 0 7H13" /> <path d="M3 19h6" /> <path d="M3 5h18" />', "words lines break paragraph text arrows"], ["theater", '<path d="M2 10s3-3 3-8" /> <path d="M22 10s-3-3-3-8" /> <path d="M10 2c0 4.4-3.6 8-8 8" /> <path d="M14 2c0 4.4 3.6 8 8 8" /> <path d="M2 10s2 2 2 5" /> <path d="M22 10s-2 2-2 5" /> <path d="M8 15h8" /> <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" /> <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />', "theater theatre entertainment podium stage musical buildings social"], ["thermometer-snowflake", '<path d="m10 20-1.25-2.5L6 18" /> <path d="M10 4 8.75 6.5 6 6" /> <path d="M10.585 15H10" /> <path d="M2 12h6.5L10 9" /> <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /> <path d="m4 10 1.5 2L4 14" /> <path d="m7 21 3-6-1.5-3" /> <path d="m7 3 3 6h2" />', "temperature celsius fahrenheit weather cold freeze freezing weather"], ["thermometer-sun", '<path d="M12 2v2" /> <path d="M12 8a4 4 0 0 0-1.645 7.647" /> <path d="M2 12h2" /> <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m6.34 17.66-1.41 1.41" />', "temperature celsius fahrenheit weather warm hot weather"], ["thermometer", '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />', "temperature celsius fahrenheit weather weather"], ["thumbs-down", '<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" /> <path d="M17 14V2" />', "dislike bad emotion account social emoji"], ["thumbs-up", '<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /> <path d="M7 10v12" />', "like good emotion account social emoji"], ["ticket-check", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /> <path d="m9 12 2 2 4-4" />', "entry pass voucher event concert show booked purchased transportation"], ["ticket-minus", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /> <path d="M9 12h6" />', "entry pass voucher event concert show remove cancel transportation"], ["ticket-percent", '<path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /> <path d="M9 9h.01" /> <path d="m15 9-6 6" /> <path d="M15 15h.01" />', "discount reduced offer voucher entry pass event concert transportation shopping"], ["ticket-plus", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /> <path d="M9 12h6" /> <path d="M12 9v6" />', "entry pass voucher event concert show book purchase transportation"], ["ticket-slash", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /> <path d="m9.5 14.5 5-5" />', "entry pass voucher event concert show redeemed used transportation"], ["ticket-x", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /> <path d="m9.5 14.5 5-5" /> <path d="m9.5 9.5 5 5" />', "entry pass voucher event concert show cancelled cancellation transportation"], ["ticket", '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /> <path d="M13 5v2" /> <path d="M13 17v2" /> <path d="M13 11v2" />', "entry pass voucher event concert show perforated dashed account transportation"], ["tickets-plane", '<path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" /> <path d="m12 13.5 3.794.506" /> <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" /> <path d="M6 10V8" /> <path d="M6 14v1" /> <path d="M6 19v2" /> <rect x="2" y="8" width="20" height="13" rx="2" />', "plane trip airplane flight travel fly takeoff vacation transportation travel"], ["tickets", '<path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" /> <path d="M6 10V8" /> <path d="M6 14v1" /> <path d="M6 19v2" /> <rect x="2" y="8" width="20" height="13" rx="2" />', "trip travel pass entry voucher event concert show travel account transportation"], ["timer-off", '<path d="M10 2h4" /> <path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" /> <path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" /> <path d="m2 2 20 20" /> <path d="M12 12v-2" />', "time timer stopwatch time"], ["timer-reset", '<path d="M10 2h4" /> <path d="M12 14v-4" /> <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" /> <path d="M9 17H4v5" />', "time timer stopwatch time"], ["timer", '<line x1="10" x2="14" y1="2" y2="2" /> <line x1="12" x2="15" y1="14" y2="11" /> <circle cx="12" cy="14" r="8" />', "time timer stopwatch time"], ["toggle-left", '<circle cx="9" cy="12" r="3" /> <rect width="20" height="14" x="2" y="5" rx="7" />', "on off switch boolean layout account development"], ["toggle-right", '<circle cx="15" cy="12" r="3" /> <rect width="20" height="14" x="2" y="5" rx="7" />', "on off switch boolean layout account development"], ["toilet", '<path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" /> <path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />', "toilet potty bathroom washroom devices home"], ["tool-case", '<path d="M10 15h4" /> <path d="m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27" /> <path d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122" /> <path d="M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />', "tools maintenance repair tools development home"], ["toolbox", '<path d="M16 12v4" /> <path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z" /> <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /> <path d="M2 14h20" /> <path d="M8 12v4" />', "toolkit tools trunk chest box storage utility utilities tools home"], ["tornado", '<path d="M21 4H3" /> <path d="M18 8H6" /> <path d="M19 12H9" /> <path d="M16 16h-6" /> <path d="M11 20H9" />', "weather wind storm hurricane weather"], ["torus", '<ellipse cx="12" cy="11" rx="3" ry="2" /> <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />', "donut doughnut ring hollow 3d fast food junk food snack shapes design tools food-beverage"], ["touchpad-off", '<path d="M12 20v-6" /> <path d="M19.656 14H22" /> <path d="M2 14h12" /> <path d="m2 2 20 20" /> <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" /> <path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />', "trackpad cursor devices"], ["touchpad", '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M2 14h20" /> <path d="M12 20v-6" />', "trackpad cursor devices"], ["towel-rack", '<path d="M22 7h-2" /> <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4" /> <path d="M9 7H2" />', "flannel bathroom toiletries sanitation clean fresh dry laundry home travel"], ["tower-control", '<path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" /> <path d="M8 13v9" /> <path d="M16 22v-9" /> <path d="m9 6 1 7" /> <path d="m15 6-1 7" /> <path d="M12 6V2" /> <path d="M13 2h-2" />', "airport travel tower transportation lighthouse travel transportation"], ["toy-brick", '<rect width="18" height="12" x="3" y="8" rx="1" /> <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" /> <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />', "lego block addon plugin integration gaming development"], ["tractor", '<path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" /> <path d="M16 18h-5" /> <path d="M18 5a1 1 0 0 0-1 1v5.573" /> <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" /> <path d="M4 11V4" /> <path d="M7 15h.01" /> <path d="M8 10.1V4" /> <circle cx="18" cy="18" r="2" /> <circle cx="7" cy="15" r="5" />', "farming farmer ranch harvest equipment vehicle transportation sustainability food-beverage"], ["traffic-cone", '<path d="M16.05 10.966a5 2.5 0 0 1-8.1 0" /> <path d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" /> <path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" /> <path d="M9.194 6.57a5 2.5 0 0 0 5.61 0" />', "roadworks tarmac safety block transportation"], ["train-front-tunnel", '<path d="M2 22V12a10 10 0 1 1 20 0v10" /> <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" /> <path d="M10 15h.01" /> <path d="M14 15h.01" /> <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" /> <path d="m9 19-2 3" /> <path d="m15 19 2 3" />', "railway metro subway underground speed bullet fast track transportation navigation"], ["train-front", '<path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" /> <path d="m9 15-1-1" /> <path d="m15 15 1-1" /> <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" /> <path d="m8 19-2 3" /> <path d="m16 19 2 3" />', "railway metro subway underground high-speed bullet fast track transportation"], ["train-track", '<path d="M2 17 17 2" /> <path d="m2 14 8 8" /> <path d="m5 11 8 8" /> <path d="m8 8 8 8" /> <path d="m11 5 8 8" /> <path d="m14 2 8 8" /> <path d="M7 22 22 7" />', "railway line transportation navigation"], ["tram-front", '<rect width="16" height="16" x="4" y="3" rx="2" /> <path d="M4 11h16" /> <path d="M12 3v8" /> <path d="m8 19-2 3" /> <path d="m18 22-2-3" /> <path d="M8 15h.01" /> <path d="M16 15h.01" />', "railway metro subway underground track line tourism transportation"], ["transgender", '<path d="M12 16v6" /> <path d="M14 20h-4" /> <path d="M18 2h4v4" /> <path d="m2 2 7.17 7.17" /> <path d="M2 5.355V2h3.357" /> <path d="m22 2-7.17 7.17" /> <path d="M8 5 5 8" /> <circle cx="12" cy="12" r="4" />', "gender inclusive medical accessibility"], ["trash-2", '<path d="M10 11v6" /> <path d="M14 11v6" /> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /> <path d="M3 6h18" /> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />', "garbage delete remove bin files mail"], ["trash", '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /> <path d="M3 6h18" /> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />', "empty deletion cleanup junk clear garbage delete remove files mail"], ["tree-deciduous", '<path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" /> <path d="M12 19v3" />', "tree forest park nature nature sustainability"], ["tree-palm", '<path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" /> <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" /> <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" /> <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />', "vacation leisure island nature sustainability"], ["tree-pine", '<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" /> <path d="M12 22v-3" />', "tree pine forest park nature nature sustainability"], ["trees", '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" /> <path d="M7 16v6" /> <path d="M13 19v3" /> <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />', "tree forest park nature nature sustainability"], ["trello", '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <rect width="3" height="9" x="7" y="7" /> <rect width="3" height="5" x="14" y="7" />', "logo brand account brands development"], ["trending-down", '<path d="M16 17h6v-6" /> <path d="m22 17-8.5-8.5-5 5L2 7" />', "statistics charts arrows"], ["trending-up-down", '<path d="M14.828 14.828 21 21" /> <path d="M21 16v5h-5" /> <path d="m21 3-9 9-4-4-6 6" /> <path d="M21 8V3h-5" />', "arrows estimated indeterminate data fluctuation uncertain forecast variable prediction charts arrows"], ["trending-up", '<path d="M16 7h6v6" /> <path d="m22 7-8.5 8.5-5-5L2 17" />', "statistics charts arrows"], ["triangle-alert", '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /> <path d="M12 9v4" /> <path d="M12 17h.01" />', "warning alert danger exclamation mark linter notifications shapes development"], ["triangle-dashed", '<path d="M10.17 4.193a2 2 0 0 1 3.666.013" /> <path d="M14 21h2" /> <path d="m15.874 7.743 1 1.732" /> <path d="m18.849 12.952 1 1.732" /> <path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" /> <path d="M4.024 21a2 2 0 0 1-1.839-2.839" /> <path d="m5.136 12.952-1 1.732" /> <path d="M8 21h2" /> <path d="m8.102 7.743-1 1.732" />', "equilateral delta shape pyramid hierarchy dashed shapes"], ["triangle-right", '<path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" />', "volume controls controller tv remote geometry delta ramp slope shapes math"], ["triangle", '<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />', "equilateral delta shape pyramid hierarchy shapes"], ["trophy", '<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" /> <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" /> <path d="M18 9h1.5a1 1 0 0 0 0-5H18" /> <path d="M4 22h16" /> <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" /> <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />', "prize sports winner achievement award champion celebration victory sports gaming"], ["truck-electric", '<path d="M14 19V7a2 2 0 0 0-2-2H9" /> <path d="M15 19H9" /> <path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" /> <path d="M2 13v5a1 1 0 0 0 1 1h2" /> <path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" /> <circle cx="17" cy="19" r="2" /> <circle cx="7" cy="19" r="2" />', "delivery van shipping haulage lorry electric transportation"], ["truck", '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /> <path d="M15 18H9" /> <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /> <circle cx="17" cy="18" r="2" /> <circle cx="7" cy="18" r="2" />', "delivery van shipping haulage lorry transportation"], ["turkish-lira", '<path d="M15 4 5 9" /> <path d="m15 8.5-10 5" /> <path d="M18 12a9 9 0 0 1-9 9V3" />', "currency money payment finance"], ["turntable", '<path d="M10 12.01h.01" /> <path d="M18 8v4a8 8 0 0 1-1.07 4" /> <circle cx="10" cy="12" r="4" /> <rect x="2" y="4" width="20" height="16" rx="2" />', "record player gramophone stereo phonograph vinyl lp disc platter multimedia home"], ["turtle", '<path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" /> <path d="M4.82 7.9 8 10" /> <path d="M15.18 7.9 12 10" /> <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />', "animal pet tortoise slow speed animals"], ["tv-minimal-play", '<path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" /> <path d="M7 21h10" /> <rect width="20" height="14" x="2" y="3" rx="2" />', "flatscreen television stream display widescreen high-definition hd 1080p devices multimedia"], ["tv-minimal", '<path d="M7 21h10" /> <rect width="20" height="14" x="2" y="3" rx="2" />', "flatscreen television stream display widescreen high-definition hd 1080p devices multimedia"], ["tv", '<path d="m17 2-5 5-5-5" /> <rect width="20" height="15" x="2" y="7" rx="2" />', "television stream display widescreen high-definition hd 1080p 4k devices multimedia communication"], ["twitch", '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />', "logo social brands social account gaming"], ["twitter", '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />', "logo social brands social account"], ["type-outline", '<path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" />', "text font typography silhouette profile contour stroke line text"], ["type", '<path d="M12 4v16" /> <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /> <path d="M9 20h6" />', "text font typography text"], ["umbrella-off", '<path d="M12 13v7a2 2 0 0 0 4 0" /> <path d="M12 2v2" /> <path d="M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" /> <path d="m2 2 20 20" /> <path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" />', "rain weather uncovered uninsured antivirus unprotected risky weather"], ["umbrella", '<path d="M12 13v7a2 2 0 0 0 4 0" /> <path d="M12 2v2" /> <path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" />', "rain weather weather"], ["underline", '<path d="M6 4v6a6 6 0 0 0 12 0V4" /> <line x1="4" x2="20" y1="20" y2="20" />', "text format text"], ["undo-2", '<path d="M9 14 4 9l5-5" /> <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />', "redo rerun history back return reverse revert direction text arrows"], ["undo-dot", '<path d="M21 17a9 9 0 0 0-15-6.7L3 13" /> <path d="M3 7v6h6" /> <circle cx="12" cy="17" r="1" />', "redo history step back text arrows"], ["undo", '<path d="M3 7v6h6" /> <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />', "redo rerun history text arrows"], ["unfold-horizontal", '<path d="M16 12h6" /> <path d="M8 12H2" /> <path d="M12 2v2" /> <path d="M12 8v2" /> <path d="M12 14v2" /> <path d="M12 20v2" /> <path d="m19 15 3-3-3-3" /> <path d="m5 9-3 3 3 3" />', "arrow collapse fold vertical dashed arrows layout"], ["unfold-vertical", '<path d="M12 22v-6" /> <path d="M12 8V2" /> <path d="M4 12H2" /> <path d="M10 12H8" /> <path d="M16 12h-2" /> <path d="M22 12h-2" /> <path d="m15 19-3 3-3-3" /> <path d="m15 5-3-3-3 3" />', "arrow expand vertical dashed arrows layout"], ["ungroup", '<rect width="8" height="6" x="5" y="4" rx="1" /> <rect width="8" height="6" x="11" y="14" rx="1" />', "cubes packages parts units collection cluster separate shapes files"], ["university", '<path d="M14 21v-3a2 2 0 0 0-4 0v3" /> <path d="M18 12h.01" /> <path d="M18 16h.01" /> <path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" /> <path d="M6 12h.01" /> <path d="M6 16h.01" /> <circle cx="12" cy="10" r="2" />', "building education childhood school college academy institute buildings navigation"], ["unlink-2", '<path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />', "url unchain text"], ["unlink", '<path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" /> <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" /> <line x1="8" x2="8" y1="2" y2="5" /> <line x1="2" x2="5" y1="8" y2="8" /> <line x1="16" x2="16" y1="19" y2="22" /> <line x1="19" x2="22" y1="16" y2="16" />', "url unchain text"], ["unplug", '<path d="m19 5 3-3" /> <path d="m2 22 3-3" /> <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" /> <path d="M7.5 13.5 10 11" /> <path d="M10.5 16.5 13 14" /> <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />', "electricity energy electronics socket outlet disconnect devices development"], ["upload", '<path d="M12 3v12" /> <path d="m17 8-5-5-5 5" /> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />', "file arrows files"], ["usb", '<circle cx="10" cy="7" r="1" /> <circle cx="4" cy="20" r="1" /> <path d="M4.7 19.3 19 5" /> <path d="m21 3-3 1 2 2Z" /> <path d="M9.26 7.68 5 12l2 5" /> <path d="m10 14 5 2 3.5-3.5" /> <path d="m18 12 1-1 1 1-1 1Z" />', "universal serial bus controller connector interface devices multimedia home"], ["user-check", '<path d="m16 11 2 2 4-4" /> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" />', "followed subscribed done todo tick complete task account"], ["user-cog", '<path d="M10 15H6a4 4 0 0 0-4 4v2" /> <path d="m14.305 16.53.923-.382" /> <path d="m15.228 13.852-.923-.383" /> <path d="m16.852 12.228-.383-.923" /> <path d="m16.852 17.772-.383.924" /> <path d="m19.148 12.228.383-.923" /> <path d="m19.53 18.696-.382-.924" /> <path d="m20.772 13.852.924-.383" /> <path d="m20.772 16.148.924.383" /> <circle cx="18" cy="15" r="3" /> <circle cx="9" cy="7" r="4" />', "settings edit cog gear account"], ["user-key", '<path d="M20 11v6" /> <path d="M20 13h2" /> <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" /> <circle cx="10" cy="7" r="4" /> <circle cx="20" cy="19" r="2" />', "passkey password login authentication authorization roles permissions private account"], ["user-lock", '<path d="M19 16v-2a2 2 0 0 0-4 0v2" /> <path d="M9.5 15H7a4 4 0 0 0-4 4v2" /> <circle cx="10" cy="7" r="4" /> <rect x="13" y="16" width="8" height="5" rx=".899" />', "person lock locked account secure account security"], ["user-minus", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <line x1="22" x2="16" y1="11" y2="11" />', "delete remove unfollow unsubscribe account"], ["user-pen", '<path d="M11.5 15H7a4 4 0 0 0-4 4v2" /> <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /> <circle cx="10" cy="7" r="4" />', "person account contact profile edit change account"], ["user-plus", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <line x1="19" x2="19" y1="8" y2="14" /> <line x1="22" x2="16" y1="11" y2="11" />', "new add create follow subscribe account"], ["user-round-check", '<path d="M2 21a8 8 0 0 1 13.292-6" /> <circle cx="10" cy="8" r="5" /> <path d="m16 19 2 2 4-4" />', "followed subscribed done todo tick complete task account"], ["user-round-cog", '<path d="m14.305 19.53.923-.382" /> <path d="m15.228 16.852-.923-.383" /> <path d="m16.852 15.228-.383-.923" /> <path d="m16.852 20.772-.383.924" /> <path d="m19.148 15.228.383-.923" /> <path d="m19.53 21.696-.382-.924" /> <path d="M2 21a8 8 0 0 1 10.434-7.62" /> <path d="m20.772 16.852.924-.383" /> <path d="m20.772 19.148.924.383" /> <circle cx="10" cy="8" r="5" /> <circle cx="18" cy="18" r="3" />', "settings edit cog gear account"], ["user-round-key", '<path d="M19 11v6" /> <path d="M19 13h2" /> <path d="M2 21a8 8 0 0 1 12.868-6.349" /> <circle cx="10" cy="8" r="5" /> <circle cx="19" cy="19" r="2" />', "passkey password login authentication authorization roles permissions private account"], ["user-round-minus", '<path d="M2 21a8 8 0 0 1 13.292-6" /> <circle cx="10" cy="8" r="5" /> <path d="M22 19h-6" />', "delete remove unfollow unsubscribe account"], ["user-round-pen", '<path d="M2 21a8 8 0 0 1 10.821-7.487" /> <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /> <circle cx="10" cy="8" r="5" />', "person account contact profile edit change account"], ["user-round-plus", '<path d="M2 21a8 8 0 0 1 13.292-6" /> <circle cx="10" cy="8" r="5" /> <path d="M19 16v6" /> <path d="M22 19h-6" />', "new add create follow subscribe account"], ["user-round-search", '<circle cx="10" cy="8" r="5" /> <path d="M2 21a8 8 0 0 1 10.434-7.62" /> <circle cx="18" cy="18" r="3" /> <path d="m22 22-1.9-1.9" />', "person account contact find scan magnifier magnifying glass lens account social"], ["user-round-x", '<path d="M2 21a8 8 0 0 1 11.873-7" /> <circle cx="10" cy="8" r="5" /> <path d="m17 17 5 5" /> <path d="m22 17-5 5" />', "delete remove unfollow unsubscribe unavailable account"], ["user-round", '<circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" />', "person account contact account"], ["user-search", '<circle cx="10" cy="7" r="4" /> <path d="M10.3 15H7a4 4 0 0 0-4 4v2" /> <circle cx="17" cy="17" r="3" /> <path d="m21 21-1.9-1.9" />', "person account contact find scan magnifier magnifying glass lens account social"], ["user-star", '<path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" /> <path d="M8 15H7a4 4 0 0 0-4 4v2" /> <circle cx="10" cy="7" r="4" />', "person account favorite contact like review rating admin account"], ["user-x", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <line x1="17" x2="22" y1="8" y2="13" /> <line x1="22" x2="17" y1="8" y2="13" />', "delete remove unfollow unsubscribe unavailable account"], ["user", '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /> <circle cx="12" cy="7" r="4" />', "person account contact account"], ["users-round", '<path d="M18 21a8 8 0 0 0-16 0" /> <circle cx="10" cy="8" r="5" /> <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />', "group people account"], ["users", '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <path d="M16 3.128a4 4 0 0 1 0 7.744" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <circle cx="9" cy="7" r="4" />', "group people account"], ["utensils-crossed", '<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" /> <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" /> <path d="m2.1 21.8 6.4-6.3" /> <path d="m19 5-7 7" />', "fork knife cutlery flatware tableware silverware food restaurant food-beverage travel navigation"], ["utensils", '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /> <path d="M7 2v20" /> <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />', "fork knife cutlery flatware tableware silverware food restaurant food-beverage travel navigation"], ["utility-pole", '<path d="M12 2v20" /> <path d="M2 5h20" /> <path d="M3 3v2" /> <path d="M7 3v2" /> <path d="M17 3v2" /> <path d="M21 3v2" /> <path d="m19 5-7 7-7-7" />', "electricity energy transmission line telegraph pole power lines phone buildings home sustainability"], ["van", '<path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" /> <path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" /> <path d="M9 18h5" /> <circle cx="16" cy="18" r="2" /> <circle cx="7" cy="18" r="2" />', "minivan cart wagon truck lorry trailer camper vehicle transportation"], ["variable", '<path d="M8 21s-4-3-4-9 4-9 4-9" /> <path d="M16 3s4 3 4 9-4 9-4 9" /> <line x1="15" x2="9" y1="9" y2="15" /> <line x1="9" x2="15" y1="9" y2="15" />', "code coding programming symbol calculate algebra x parentheses development math"], ["vault", '<rect width="18" height="18" x="3" y="3" rx="2" /> <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /> <path d="m7.9 7.9 2.7 2.7" /> <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /> <path d="m13.4 10.6 2.7-2.7" /> <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" /> <path d="m7.9 16.1 2.7-2.7" /> <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" /> <path d="m13.4 13.4 2.7 2.7" /> <circle cx="12" cy="12" r="2" />', "safe lockbox deposit locker coffer strongbox safety secure security travel home"], ["vector-square", '<path d="M19.5 7a24 24 0 0 1 0 10" /> <path d="M4.5 7a24 24 0 0 0 0 10" /> <path d="M7 19.5a24 24 0 0 0 10 0" /> <path d="M7 4.5a24 24 0 0 1 10 0" /> <rect x="17" y="17" width="5" height="5" rx="1" /> <rect x="17" y="2" width="5" height="5" rx="1" /> <rect x="2" y="17" width="5" height="5" rx="1" /> <rect x="2" y="2" width="5" height="5" rx="1" />', "shape geometry art width height size calculate measure shapes math design tools"], ["vegan", '<path d="M16 8q6 0 6-6-6 0-6 6" /> <path d="M17.41 3.59a10 10 0 1 0 3 3" /> <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />', "vegetarian fruitarian herbivorous animal rights diet food-beverage sustainability"], ["venetian-mask", '<path d="M18 11c-1.5 0-2.5.5-3 2" /> <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" /> <path d="M6 11c1.5 0 2.5.5 3 2" />', "mask masquerade impersonate secret incognito account gaming"], ["venus-and-mars", '<path d="M10 20h4" /> <path d="M12 16v6" /> <path d="M17 2h4v4" /> <path d="m21 2-5.46 5.46" /> <circle cx="12" cy="11" r="5" />', "gender sex intersex androgynous hermaphrodite medical"], ["venus", '<path d="M12 15v7" /> <path d="M9 19h6" /> <circle cx="12" cy="9" r="6" />', "gender sex female feminine woman girl medical"], ["vibrate-off", '<path d="m2 8 2 2-2 2 2 2-2 2" /> <path d="m22 8-2 2 2 2-2 2 2 2" /> <path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" /> <path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" /> <line x1="2" x2="22" y1="2" y2="22" />', "smartphone notification rumble haptic feedback notifications screen devices connectivity account"], ["vibrate", '<path d="m2 8 2 2-2 2 2 2-2 2" /> <path d="m22 8-2 2 2 2-2 2 2 2" /> <rect width="8" height="14" x="8" y="5" rx="1" />', "smartphone notification rumble haptic feedback screen devices connectivity account notifications"], ["video-off", '<path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" /> <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" /> <path d="m2 2 20 20" />', "camera movie film devices communication connectivity photography"], ["video", '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /> <rect x="2" y="6" width="14" height="12" rx="2" />', "camera movie film recording motion picture camcorder reel devices communication connectivity photography"], ["videotape", '<rect width="20" height="16" x="2" y="4" rx="2" /> <path d="M2 8h20" /> <circle cx="8" cy="14" r="2" /> <path d="M8 12h8" /> <circle cx="16" cy="14" r="2" />', "vhs movie film recording motion picture showreel cassette devices communication connectivity photography files"], ["view", '<path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /> <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" /> <circle cx="12" cy="12" r="1" /> <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />', "eye look design photography"], ["voicemail", '<circle cx="6" cy="12" r="4" /> <circle cx="18" cy="12" r="4" /> <line x1="6" x2="18" y1="16" y2="16" />', "phone cassette tape reel recording audio connectivity devices social"], ["volleyball", '<path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" /> <path d="M12 12a12.6 12.6 0 0 1-8.7 5" /> <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" /> <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" /> <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" /> <circle cx="12" cy="12" r="10" />', "beach sand net holiday vacation summer soccer football sports gaming travel"], ["volume-1", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" />', "music sound speaker connectivity communication multimedia"], ["volume-2", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />', "music sound speaker connectivity communication multimedia"], ["volume-off", '<path d="M16 9a5 5 0 0 1 .95 2.293" /> <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" /> <path d="m2 2 20 20" /> <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" /> <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />', "music sound mute speaker connectivity communication multimedia"], ["volume-x", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <line x1="22" x2="16" y1="9" y2="15" /> <line x1="16" x2="22" y1="9" y2="15" />', "music sound mute speaker connectivity communication multimedia"], ["volume", '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />', "music sound mute speaker connectivity communication multimedia"], ["vote", '<path d="m9 12 2 2 4-4" /> <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" /> <path d="M22 19H2" />', "vote poll ballot political social check tick social"], ["wallet-cards", '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" /> <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />', "money finance pocket credit purchase payment shopping retail account finance"], ["wallet-minimal", '<path d="M17 14h.01" /> <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />', "finance pocket account finance"], ["wallet", '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /> <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />', "money finance pocket account finance"], ["wallpaper", '<path d="M12 17v4" /> <path d="M8 21h8" /> <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" /> <circle cx="8" cy="9" r="2" /> <rect x="2" y="3" width="20" height="14" rx="2" />', "background texture image art design visual decor pattern account devices"], ["wand-sparkles", '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" /> <path d="m14 7 3 3" /> <path d="M5 6v4" /> <path d="M19 14v4" /> <path d="M10 2v2" /> <path d="M7 8H3" /> <path d="M21 16h-4" /> <path d="M11 3H9" />', "magic wizard magician design gaming cursors photography"], ["wand", '<path d="M15 4V2" /> <path d="M15 16v-2" /> <path d="M8 9h2" /> <path d="M20 9h2" /> <path d="M17.8 11.8 19 13" /> <path d="M15 9h.01" /> <path d="M17.8 6.2 19 5" /> <path d="m3 21 9-9" /> <path d="M12.2 6.2 11 5" />', "magic selection design gaming cursors photography"], ["warehouse", '<path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" /> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" /> <path d="M6 13h12" /> <path d="M6 17h12" />', "storage storehouse depot depository repository stockroom logistics building buildings navigation"], ["washing-machine", '<path d="M3 6h3" /> <path d="M17 6h.01" /> <rect width="18" height="20" x="3" y="2" rx="2" /> <circle cx="12" cy="13" r="5" /> <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />', "tumble dryer amenities electronics cycle clothes rinse spin drum home devices travel"], ["watch", '<path d="M12 10v2.2l1.6 1" /> <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" /> <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" /> <circle cx="12" cy="12" r="6" />', "clock time time"], ["waves-arrow-down", '<path d="M12 10L12 2" /> <path d="M16 6L12 10L8 6" /> <path d="M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15" /> <path d="M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21" />', "water sea level sound hertz wavelength vibrate low weather sustainability"], ["waves-arrow-up", '<path d="M12 2v8" /> <path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="m8 6 4-4 4 4" />', "water sea level sound hertz wavelength vibrate high weather sustainability"], ["waves-ladder", '<path d="M19 5a2 2 0 0 0-2 2v11" /> <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="M7 13h10" /> <path d="M7 9h10" /> <path d="M9 5a2 2 0 0 0-2 2v11" />', "swimming water pool lifeguard ocean \u{1F30A} \u{1F3CA}\u200D\u2642\uFE0F \u{1F3CA}\u200D\u2640\uFE0F sports home"], ["waves", '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /> <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />', "water sea sound hertz wavelength vibrate weather navigation multimedia sustainability"], ["waypoints", '<path d="m10.586 5.414-5.172 5.172" /> <path d="m18.586 13.414-5.172 5.172" /> <path d="M6 12h12" /> <circle cx="12" cy="20" r="2" /> <circle cx="12" cy="4" r="2" /> <circle cx="20" cy="12" r="2" /> <circle cx="4" cy="12" r="2" />', "indirection vpn virtual private network proxy connections bounce reroute path security account navigation development social"], ["webcam", '<circle cx="12" cy="10" r="8" /> <circle cx="12" cy="10" r="3" /> <path d="M7 22h10" /> <path d="M12 22v-4" />', "camera security connectivity devices communication"], ["webhook-off", '<path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" /> <path d="M9 3.4a4 4 0 0 1 6.52.66" /> <path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" /> <path d="M20.3 20.3a4 4 0 0 1-2.3.7" /> <path d="M18.6 13a4 4 0 0 1 3.357 3.414" /> <path d="m12 6 .6 1" /> <path d="m2 2 20 20" />', "push api interface callback development social account"], ["webhook", '<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" /> <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" /> <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />', "push api interface callback development social account"], ["weight-tilde", '<path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" /> <path d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" /> <circle cx="12" cy="5" r="3" />', "measure scale estimate load balance size measurement quantity math"], ["weight", '<circle cx="12" cy="5" r="3" /> <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />', "mass heavy lead metal measure geometry scales balance math"], ["wheat-off", '<path d="m2 22 10-10" /> <path d="m16 8-1.17 1.17" /> <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" /> <path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" /> <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" /> <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /> <path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" /> <path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" /> <line x1="2" x2="22" y1="2" y2="22" />', "corn cereal grain gluten free allergy intolerance diet food-beverage"], ["wheat", '<path d="M2 22 16 8" /> <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /> <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" /> <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /> <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /> <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />', "corn cereal grain gluten food-beverage"], ["whole-word", '<circle cx="7" cy="12" r="3" /> <path d="M10 9v6" /> <circle cx="17" cy="12" r="3" /> <path d="M14 7v8" /> <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />', "text selection letters characters font typography text"], ["wifi-cog", '<path d="m14.305 19.53.923-.382" /> <path d="m15.228 16.852-.923-.383" /> <path d="m16.852 15.228-.383-.923" /> <path d="m16.852 20.772-.383.924" /> <path d="m19.148 15.228.383-.923" /> <path d="m19.53 21.696-.382-.924" /> <path d="M2 7.82a15 15 0 0 1 20 0" /> <path d="m20.772 16.852.924-.383" /> <path d="m20.772 19.148.924.383" /> <path d="M5 11.858a10 10 0 0 1 11.5-1.785" /> <path d="M8.5 15.429a5 5 0 0 1 2.413-1.31" /> <circle cx="18" cy="18" r="3" />', "connection signal wireless directory settings control preferences cog connectivity devices files"], ["wifi-high", '<path d="M12 20h.01" /> <path d="M5 12.859a10 10 0 0 1 14 0" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" />', "connection signal wireless connectivity devices"], ["wifi-low", '<path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" />', "connection signal wireless connectivity devices"], ["wifi-off", '<path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" /> <path d="M5 12.859a10 10 0 0 1 5.17-2.69" /> <path d="M19 12.859a10 10 0 0 0-2.007-1.523" /> <path d="M2 8.82a15 15 0 0 1 4.177-2.643" /> <path d="M22 8.82a15 15 0 0 0-11.288-3.764" /> <path d="m2 2 20 20" />', "disabled connectivity devices"], ["wifi-pen", '<path d="M2 8.82a15 15 0 0 1 20 0" /> <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /> <path d="M5 12.859a10 10 0 0 1 10.5-2.222" /> <path d="M8.5 16.429a5 5 0 0 1 3-1.406" />', "edit wifi pen change network connectivity devices"], ["wifi-sync", '<path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" /> <path d="M11.965 14.105h4" /> <path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" /> <path d="M2 8.82a15 15 0 0 1 20 0" /> <path d="M21.965 22.105v-4" /> <path d="M5 12.86a10 10 0 0 1 3-2.032" /> <path d="M8.5 16.429h.01" />', "connection signal wireless synchronize reconnect reset restart connectivity devices"], ["wifi-zero", '<path d="M12 20h.01" />', "connection signal wireless connectivity devices"], ["wifi", '<path d="M12 20h.01" /> <path d="M2 8.82a15 15 0 0 1 20 0" /> <path d="M5 12.859a10 10 0 0 1 14 0" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" />', "connection signal wireless connectivity devices"], ["wind-arrow-down", '<path d="M10 2v8" /> <path d="M12.8 21.6A2 2 0 1 0 14 18H2" /> <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" /> <path d="m6 6 4 4 4-4" />', "weather air pressure blow weather sustainability"], ["wind", '<path d="M12.8 19.6A2 2 0 1 0 14 16H2" /> <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /> <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />', "weather air blow weather sustainability"], ["wine-off", '<path d="M8 22h8" /> <path d="M7 10h3m7 0h-1.343" /> <path d="M12 15v7" /> <path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" /> <line x1="2" x2="22" y1="2" y2="22" />', "alcohol beverage drink glass alcohol free abstinence abstaining teetotalism food-beverage"], ["wine", '<path d="M8 22h8" /> <path d="M7 10h10" /> <path d="M12 15v7" /> <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />', "alcohol beverage bar drink glass sommelier vineyard winery food-beverage"], ["workflow", '<rect width="8" height="8" x="3" y="3" rx="2" /> <path d="M7 11v4a2 2 0 0 0 2 2h4" /> <rect width="8" height="8" x="13" y="13" rx="2" />', "action continuous integration ci automation devops network node connection development"], ["worm", '<path d="m19 12-1.5 3" /> <path d="M19.63 18.81 22 20" /> <path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" />', "invertebrate grub larva snake crawl wiggle slither pest control animals security"], ["wrench", '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />', "account settings spanner diy toolbox build construction account development tools"], ["x-line-top", '<path d="M18 4H6" /> <path d="M18 8 6 20" /> <path d="m6 8 12 12" />', "line top arrow navigation up pointer direction vector notifications math"], ["x", '<path d="M18 6 6 18" /> <path d="m6 6 12 12" />', "cancel close cross delete ex remove times clear notifications math"], ["youtube", '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /> <path d="m10 15 5-3-5-3z" />', "logo social video play multimedia social brands"], ["zap-off", '<path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" /> <path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" /> <path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" /> <path d="m2 2 20 20" />', "flash camera lightning electricity energy connectivity devices photography weather"], ["zap", '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />', "flash camera lightning electricity energy connectivity devices photography weather"], ["zodiac-aquarius", '<path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10" /> <path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002" />', "water bearer waves innovation air future astrology star sign horoscope social emoji"], ["zodiac-aries", '<path d="M12 7.5a4.5 4.5 0 1 1 5 4.5" /> <path d="M7 12a4.5 4.5 0 1 1 5-4.5V21" />', "ram horns fire energy initiative astrology star sign horoscope social emoji"], ["zodiac-cancer", '<path d="M21 14.5A9 6.5 0 0 1 5.5 19" /> <path d="M3 9.5A9 6.5 0 0 1 18.5 5" /> <circle cx="17.5" cy="14.5" r="3.5" /> <circle cx="6.5" cy="9.5" r="3.5" />', "crab shell protection water intuition astrology star sign horoscope social emoji"], ["zodiac-capricorn", '<path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" /> <path d="M7 19V6a3 3 0 0 0-3-3h0" /> <circle cx="17" cy="17" r="3" />', "goat mountain ambition earth discipline astrology star sign horoscope social emoji"], ["zodiac-gemini", '<path d="M16 4.525v14.948" /> <path d="M20 3A17 17 0 0 1 4 3" /> <path d="M4 21a17 17 0 0 1 16 0" /> <path d="M8 4.525v14.948" />', "twins duality communication air adaptability astrology star sign horoscope social emoji"], ["zodiac-leo", '<path d="M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" /> <circle cx="7" cy="16" r="3" />', "lion crown leadership fire confidence astrology star sign horoscope social emoji"], ["zodiac-libra", '<path d="M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" /> <path d="M3 20h18" />', "scales balance justice air harmony astrology star sign horoscope social emoji"], ["zodiac-ophiuchus", '<path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" /> <path d="M6 3v12a6 6 0 0 0 12 0V3" />', "serpent snake holder healing knowledge astronomy astrology star sign horoscope social emoji"], ["zodiac-pisces", '<path d="M19 21a15 15 0 0 1 0-18" /> <path d="M20 12H4" /> <path d="M5 3a15 15 0 0 1 0 18" />', "fish duality water dreams empathy astrology star sign horoscope social emoji"], ["zodiac-sagittarius", '<path d="M15 3h6v6" /> <path d="M21 3 3 21" /> <path d="m9 9 6 6" />', "archer arrow exploration fire philosophy astrology star sign horoscope social emoji"], ["zodiac-scorpio", '<path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" /> <path d="m22 19-3 3" /> <path d="M5 19V5.5a1 1 0 0 1 5 0" /> <path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" />', "scorpion stinger intensity water transformation astrology star sign horoscope social emoji"], ["zodiac-taurus", '<circle cx="12" cy="15" r="6" /> <path d="M18 3A6 6 0 0 1 6 3" />', "bull strength stability earth endurance astrology star sign horoscope social emoji"], ["zodiac-virgo", '<path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" /> <path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" /> <path d="M6 19V6a3 3 0 0 0-3-3h0" /> <path d="M6 5.5a1 1 0 0 1 5 0V19" />', "virgin maiden harvest precision earth analysis astrology star sign social emoji"], ["zoom-in", '<circle cx="11" cy="11" r="8" /> <line x1="21" x2="16.65" y1="21" y2="16.65" /> <line x1="11" x2="11" y1="8" y2="14" /> <line x1="8" x2="14" y1="11" y2="11" />', "magnifying glass plus accessibility layout design text photography"], ["zoom-out", '<circle cx="11" cy="11" r="8" /> <line x1="21" x2="16.65" y1="21" y2="16.65" /> <line x1="8" x2="14" y1="11" y2="11" />', "magnifying glass plus accessibility layout design text photography"]];
  const LUCIDE_CATS = { "buildings": "Buildings", "arrows": "Arrows", "text": "Text formatting", "accessibility": "Accessibility", "notifications": "Notification", "charts": "Charts", "animals": "Animals", "seasons": "Seasons", "brands": "Brands", "shopping": "Shopping", "home": "Home", "people": "People", "sports": "Sports", "tools": "Tools", "design": "Design", "mail": "Mail", "devices": "Devices", "shapes": "Shapes", "security": "Security", "files": "File icons", "medical": "Medical", "connectivity": "Connectivity", "account": "Accounts & access", "nature": "Nature", "layout": "Layout", "science": "Science", "development": "Coding & development", "emoji": "Emoji", "transportation": "Transportation", "multimedia": "Multimedia", "finance": "Finance", "communication": "Communication", "travel": "Travel", "navigation": "Navigation, Maps, and POIs", "food-beverage": "Food & beverage", "photography": "Photography", "math": "Mathematics", "weather": "Weather", "cursors": "Cursors", "gaming": "Gaming", "time": "Time & calendar", "social": "Social", "sustainability": "Sustainability" };
  function LucideIcon({ name, size, color, strokeWidth }) {
    const entry = LUCIDE_ICONS.find((i) => i[0] === name);
    if (!entry) return null;
    const sz = size || 16;
    const col = color || "currentColor";
    const sw = strokeWidth || 2;
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: sz,
        height: sz,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: col,
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        dangerouslySetInnerHTML: { __html: entry[1] }
      }
    );
  }
  const BASE_THEMES = {
    dark: { name: "VS Code Dark", dark: true, bg: "#1e1e1e", bgDot: "#ffffff08", headerBg: "rgba(30,30,30,0.97)", headerBorder: "#333", colBg: "#252526", colBorder: "#3c3c3c", cardBg: "#2d2d2d", cardBorder: "#3c3c3c", cardBorderHover: "#0078d488", cardText: "#d4d4d4", cardNote: "#6a9955", cardSubText: "#9cdcfe", cardSubDone: "#555", modalBg: "#252526", modalBorder: "#454545", inputBg: "#1e1e1e", inputBorder: "#3c3c3c", text: "#d4d4d4", textMuted: "#858585", textSub: "#9cdcfe", accent: "#0078d4", accentGrad: "linear-gradient(135deg,#0078d4,#005a9e)", progressBg: "#3c3c3c", progressFill: "linear-gradient(90deg,#0078d4,#4fc3f7)", progressDone: "#4ec9b0", danger: "#f44747", scrollThumb: "#424242", colCountBg: "#3c3c3c", addBucketBorder: "#3c3c3c", datePicker: "invert(0.6)" },
    light: { name: "VS Code Light", dark: false, bg: "#f3f3f3", bgDot: "#00000009", headerBg: "rgba(243,243,243,0.97)", headerBorder: "#e0e0e0", colBg: "#fff", colBorder: "#e0e0e0", cardBg: "#fff", cardBorder: "#e0e0e0", cardBorderHover: "#0078d488", cardText: "#1e1e1e", cardNote: "#008000", cardSubText: "#0070c1", cardSubDone: "#aaa", modalBg: "#fff", modalBorder: "#e0e0e0", inputBg: "#f5f5f5", inputBorder: "#d4d4d4", text: "#1e1e1e", textMuted: "#717171", textSub: "#0070c1", accent: "#0078d4", accentGrad: "linear-gradient(135deg,#0078d4,#005a9e)", progressBg: "#e0e0e0", progressFill: "linear-gradient(90deg,#0078d4,#4fc3f7)", progressDone: "#14a085", danger: "#cd3131", scrollThumb: "#c8c8c8", colCountBg: "#ebebeb", addBucketBorder: "#d4d4d4", datePicker: "none" },
    obsidian: { name: "Obsidian Dark", dark: true, bg: "#0d0d1a", bgDot: "#2a2a4022", headerBg: "rgba(13,13,26,0.95)", headerBorder: "#1e1e30", colBg: "#13131f", colBorder: "#23233a", cardBg: "#1e1e2e", cardBorder: "#2e2e45", cardBorderHover: "#7c6fcd88", cardText: "#cdd6f4", cardNote: "#6c6c9a", cardSubText: "#8a94b8", cardSubDone: "#3a3a5a", modalBg: "#1e1e2e", modalBorder: "#3a3a5c", inputBg: "#16162a", inputBorder: "#2a2a45", text: "#cdd6f4", textMuted: "#6c6c9a", textSub: "#a6b0cf", accent: "#7c6fcd", accentGrad: "linear-gradient(135deg,#7c6fcd,#5a51a0)", progressBg: "#2a2a45", progressFill: "linear-gradient(90deg,#7c6fcd,#a89be0)", progressDone: "#2d9e6b", danger: "#e05c5c", scrollThumb: "#3a3a5c", colCountBg: "#2a2a45", addBucketBorder: "#2e2e45", datePicker: "invert(0.6)" },
    nord: { name: "Nord", dark: true, bg: "#2e3440", bgDot: "#ffffff08", headerBg: "rgba(46,52,64,0.97)", headerBorder: "#3b4252", colBg: "#3b4252", colBorder: "#434c5e", cardBg: "#434c5e", cardBorder: "#4c566a", cardBorderHover: "#88c0d088", cardText: "#eceff4", cardNote: "#a3be8c", cardSubText: "#88c0d0", cardSubDone: "#4c566a", modalBg: "#3b4252", modalBorder: "#4c566a", inputBg: "#2e3440", inputBorder: "#434c5e", text: "#eceff4", textMuted: "#616e88", textSub: "#88c0d0", accent: "#88c0d0", accentGrad: "linear-gradient(135deg,#88c0d0,#5e81ac)", progressBg: "#434c5e", progressFill: "linear-gradient(90deg,#88c0d0,#81a1c1)", progressDone: "#a3be8c", danger: "#bf616a", scrollThumb: "#4c566a", colCountBg: "#4c566a", addBucketBorder: "#434c5e", datePicker: "invert(0.6)" },
    dracula: { name: "Dracula", dark: true, bg: "#282a36", bgDot: "#ffffff08", headerBg: "rgba(40,42,54,0.97)", headerBorder: "#44475a", colBg: "#343746", colBorder: "#44475a", cardBg: "#44475a", cardBorder: "#6272a4", cardBorderHover: "#ff79c688", cardText: "#f8f8f2", cardNote: "#50fa7b", cardSubText: "#8be9fd", cardSubDone: "#6272a4", modalBg: "#343746", modalBorder: "#6272a4", inputBg: "#282a36", inputBorder: "#44475a", text: "#f8f8f2", textMuted: "#6272a4", textSub: "#8be9fd", accent: "#bd93f9", accentGrad: "linear-gradient(135deg,#bd93f9,#ff79c6)", progressBg: "#44475a", progressFill: "linear-gradient(90deg,#bd93f9,#ff79c6)", progressDone: "#50fa7b", danger: "#ff5555", scrollThumb: "#6272a4", colCountBg: "#44475a", addBucketBorder: "#44475a", datePicker: "invert(0.6)" },
    solarized: { name: "Solarized Light", dark: false, bg: "#fdf6e3", bgDot: "#00000009", headerBg: "rgba(253,246,227,0.97)", headerBorder: "#eee8d5", colBg: "#eee8d5", colBorder: "#d9cdb4", cardBg: "#fdf6e3", cardBorder: "#d9cdb4", cardBorderHover: "#268bd288", cardText: "#073642", cardNote: "#859900", cardSubText: "#268bd2", cardSubDone: "#93a1a1", modalBg: "#eee8d5", modalBorder: "#d9cdb4", inputBg: "#fdf6e3", inputBorder: "#d9cdb4", text: "#073642", textMuted: "#93a1a1", textSub: "#268bd2", accent: "#268bd2", accentGrad: "linear-gradient(135deg,#268bd2,#2aa198)", progressBg: "#d9cdb4", progressFill: "linear-gradient(90deg,#268bd2,#2aa198)", progressDone: "#859900", danger: "#dc322f", scrollThumb: "#c5bba4", colCountBg: "#e8e1ce", addBucketBorder: "#d9cdb4", datePicker: "none" },
    monokai: { name: "Monokai", dark: true, bg: "#272822", bgDot: "#ffffff08", headerBg: "rgba(39,40,34,0.97)", headerBorder: "#3e3d32", colBg: "#3e3d32", colBorder: "#49483e", cardBg: "#49483e", cardBorder: "#75715e", cardBorderHover: "#a6e22e88", cardText: "#f8f8f2", cardNote: "#a6e22e", cardSubText: "#66d9e8", cardSubDone: "#75715e", modalBg: "#3e3d32", modalBorder: "#75715e", inputBg: "#272822", inputBorder: "#49483e", text: "#f8f8f2", textMuted: "#75715e", textSub: "#66d9e8", accent: "#a6e22e", accentGrad: "linear-gradient(135deg,#a6e22e,#66d9e8)", progressBg: "#49483e", progressFill: "linear-gradient(90deg,#a6e22e,#66d9e8)", progressDone: "#a6e22e", danger: "#f92672", scrollThumb: "#75715e", colCountBg: "#49483e", addBucketBorder: "#49483e", datePicker: "invert(0.6)" },
    tokyo: { name: "Tokyo Night", dark: true, bg: "#1a1b26", bgDot: "#ffffff08", headerBg: "rgba(26,27,38,0.97)", headerBorder: "#2f3549", colBg: "#24283b", colBorder: "#2f3549", cardBg: "#2f3549", cardBorder: "#3b4261", cardBorderHover: "#7aa2f788", cardText: "#c0caf5", cardNote: "#9ece6a", cardSubText: "#7dcfff", cardSubDone: "#3b4261", modalBg: "#24283b", modalBorder: "#3b4261", inputBg: "#1a1b26", inputBorder: "#2f3549", text: "#c0caf5", textMuted: "#565f89", textSub: "#7dcfff", accent: "#7aa2f7", accentGrad: "linear-gradient(135deg,#7aa2f7,#bb9af7)", progressBg: "#2f3549", progressFill: "linear-gradient(90deg,#7aa2f7,#bb9af7)", progressDone: "#9ece6a", danger: "#f7768e", scrollThumb: "#3b4261", colCountBg: "#2f3549", addBucketBorder: "#2f3549", datePicker: "invert(0.6)" },
    rose: { name: "Rose Pine", dark: true, bg: "#191724", bgDot: "#ffffff08", headerBg: "rgba(25,23,36,0.97)", headerBorder: "#26233a", colBg: "#1f1d2e", colBorder: "#26233a", cardBg: "#26233a", cardBorder: "#403d52", cardBorderHover: "#ebbcba88", cardText: "#e0def4", cardNote: "#9ccfd8", cardSubText: "#c4a7e7", cardSubDone: "#403d52", modalBg: "#1f1d2e", modalBorder: "#403d52", inputBg: "#191724", inputBorder: "#26233a", text: "#e0def4", textMuted: "#6e6a86", textSub: "#c4a7e7", accent: "#ebbcba", accentGrad: "linear-gradient(135deg,#ebbcba,#c4a7e7)", progressBg: "#26233a", progressFill: "linear-gradient(90deg,#ebbcba,#c4a7e7)", progressDone: "#9ccfd8", danger: "#eb6f92", scrollThumb: "#403d52", colCountBg: "#26233a", addBucketBorder: "#26233a", datePicker: "invert(0.6)" },
    // Material You themes — M3 tonal system
    // Surface tones use additive colour layering
    m3blue: {
      name: "M3 Blue",
      dark: true,
      bg: "#0f0f13",
      bgDot: "#ffffff06",
      headerBg: "rgba(15,15,19,0.97)",
      headerBorder: "#2a2d3a",
      colBg: "#1a1c24",
      colBorder: "#2a2d3a",
      cardBg: "#21232e",
      cardBorder: "#2a2d3a",
      cardBorderHover: "#5b9bd588",
      cardText: "#e2e2f0",
      cardNote: "#9db4cc",
      cardSubText: "#9ecaff",
      cardSubDone: "#3a3d4a",
      modalBg: "#21232e",
      modalBorder: "#3a3d4a",
      inputBg: "#161820",
      inputBorder: "#2a2d3a",
      text: "#e2e2f0",
      textMuted: "#8e9099",
      textSub: "#9ecaff",
      accent: "#5b9bd5",
      accentGrad: "linear-gradient(135deg,#5b9bd5,#3d7ab5)",
      progressBg: "#2a2d3a",
      progressFill: "linear-gradient(90deg,#5b9bd5,#9ecaff)",
      progressDone: "#6fcf97",
      danger: "#f28b82",
      scrollThumb: "#3a3d4a",
      colCountBg: "#2a2d3a",
      addBucketBorder: "#2a2d3a",
      datePicker: "invert(0.6)",
      // M3 specific
      m3: true,
      radius: "16px",
      surfaceTint: "#5b9bd5"
    },
    m3purple: {
      name: "M3 Purple",
      dark: true,
      bg: "#110f18",
      bgDot: "#ffffff06",
      headerBg: "rgba(17,15,24,0.97)",
      headerBorder: "#2d2a3a",
      colBg: "#1c192a",
      colBorder: "#2d2a3a",
      cardBg: "#242133",
      cardBorder: "#2d2a3a",
      cardBorderHover: "#b69df888",
      cardText: "#e5e0f0",
      cardNote: "#c3b8d8",
      cardSubText: "#cbbdff",
      cardSubDone: "#3a3747",
      modalBg: "#242133",
      modalBorder: "#3a3747",
      inputBg: "#181525",
      inputBorder: "#2d2a3a",
      text: "#e5e0f0",
      textMuted: "#918ea1",
      textSub: "#cbbdff",
      accent: "#b69df8",
      accentGrad: "linear-gradient(135deg,#b69df8,#8470c2)",
      progressBg: "#2d2a3a",
      progressFill: "linear-gradient(90deg,#b69df8,#cbbdff)",
      progressDone: "#7de8c2",
      danger: "#f28b82",
      scrollThumb: "#3a3747",
      colCountBg: "#2d2a3a",
      addBucketBorder: "#2d2a3a",
      datePicker: "invert(0.6)",
      m3: true,
      radius: "16px",
      surfaceTint: "#b69df8"
    },
    m3green: {
      name: "M3 Green",
      dark: true,
      bg: "#0d1410",
      bgDot: "#ffffff06",
      headerBg: "rgba(13,20,16,0.97)",
      headerBorder: "#253329",
      colBg: "#172019",
      colBorder: "#253329",
      cardBg: "#1e2920",
      cardBorder: "#253329",
      cardBorderHover: "#6fcf9788",
      cardText: "#ddeee4",
      cardNote: "#a3c9a9",
      cardSubText: "#9cdcb0",
      cardSubDone: "#333d35",
      modalBg: "#1e2920",
      modalBorder: "#333d35",
      inputBg: "#111a13",
      inputBorder: "#253329",
      text: "#ddeee4",
      textMuted: "#8aaa90",
      textSub: "#9cdcb0",
      accent: "#6fcf97",
      accentGrad: "linear-gradient(135deg,#6fcf97,#48a77a)",
      progressBg: "#253329",
      progressFill: "linear-gradient(90deg,#6fcf97,#9cdcb0)",
      progressDone: "#7de8c2",
      danger: "#f28b82",
      scrollThumb: "#333d35",
      colCountBg: "#253329",
      addBucketBorder: "#253329",
      datePicker: "invert(0.6)",
      m3: true,
      radius: "16px",
      surfaceTint: "#6fcf97"
    },
    m3amoled: {
      name: "M3 Amoled",
      dark: true,
      bg: "#000000",
      bgDot: "#ffffff05",
      headerBg: "rgba(0,0,0,0.98)",
      headerBorder: "#1a1a2e",
      colBg: "#0a0a14",
      colBorder: "#1a1a2e",
      cardBg: "#0f0f1e",
      cardBorder: "#1a1a2e",
      cardBorderHover: "#7c6fcd88",
      cardText: "#e8e8ff",
      cardNote: "#a0a0c8",
      cardSubText: "#b0b0f0",
      cardSubDone: "#2a2a40",
      modalBg: "#0f0f1e",
      modalBorder: "#2a2a40",
      inputBg: "#050510",
      inputBorder: "#1a1a2e",
      text: "#e8e8ff",
      textMuted: "#7070a0",
      textSub: "#b0b0f0",
      accent: "#7c6fcd",
      accentGrad: "linear-gradient(135deg,#7c6fcd,#5a51a0)",
      progressBg: "#1a1a2e",
      progressFill: "linear-gradient(90deg,#7c6fcd,#b0b0f0)",
      progressDone: "#6fcf97",
      danger: "#f28b82",
      scrollThumb: "#2a2a40",
      colCountBg: "#1a1a2e",
      addBucketBorder: "#1a1a2e",
      datePicker: "invert(0.6)",
      m3: true,
      radius: "16px",
      surfaceTint: "#7c6fcd"
    }
  };
  function loadCustomThemes() {
    try {
      return JSON.parse(localStorage.getItem("taskboard_customThemes") || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveCustomThemes(ct) {
    try {
      localStorage.setItem("taskboard_customThemes", JSON.stringify(ct));
    } catch (e) {
    }
  }
  const THEMES = { ...BASE_THEMES, ...loadCustomThemes() };
  const ThemeCtx = createContext(BASE_THEMES.dark);
  const useT = () => useContext(ThemeCtx);
  const BUNDLED_FONTS = [
    { name: "JetBrains Mono", family: "'JetBrains Mono',monospace", category: "monospace" },
    { name: "Fira Code", family: "'Fira Code',monospace", category: "monospace" },
    { name: "Source Code Pro", family: "'Source Code Pro',monospace", category: "monospace" },
    { name: "IBM Plex Mono", family: "'IBM Plex Mono',monospace", category: "monospace" },
    { name: "Roboto Mono", family: "'Roboto Mono',monospace", category: "monospace" },
    { name: "Space Mono", family: "'Space Mono',monospace", category: "monospace" },
    { name: "Ubuntu Mono", family: "'Ubuntu Mono',monospace", category: "monospace" },
    { name: "Inconsolata", family: "'Inconsolata',monospace", category: "monospace" },
    { name: "Cascadia Code", family: "'Cascadia Code',monospace", category: "monospace" },
    { name: "Inter", family: "'Inter',sans-serif", category: "sans-serif" },
    { name: "System UI", family: "system-ui,sans-serif", category: "sans-serif" },
    { name: "Georgia", family: "Georgia,serif", category: "serif" }
  ];
  const FONT_SIZES = [
    { label: "XS", base: 10 },
    { label: "S", base: 11 },
    { label: "M", base: 12 },
    { label: "L", base: 13 },
    { label: "XL", base: 14 },
    { label: "2XL", base: 16 }
  ];
  const FontCtx = createContext({ font: "'JetBrains Mono',monospace", size: 12 });
  const PRIORITIES = {
    high: { label: "High", color: "#e05c5c" },
    medium: { label: "Medium", color: "#e6a817" },
    low: { label: "Low", color: "#4a9e6b" }
  };
  const STATUSES = {
    none: { label: "No Status", color: "#858585", bg: "#85858520" },
    todo: { label: "To Do", color: "#9cdcfe", bg: "#9cdcfe20" },
    inprogress: { label: "In Progress", color: "#e6a817", bg: "#e6a81720" },
    blocked: { label: "Blocked", color: "#f44747", bg: "#f4474720" },
    review: { label: "In Review", color: "#c586c0", bg: "#c586c020" },
    done: { label: "Done", color: "#4ec9b0", bg: "#4ec9b020" }
  };
  const CARD_COLORS = ["none", "#e05c5c", "#e6a817", "#4a9e6b", "#0078d4", "#c586c0", "#9e6fcd", "#e6906c", "#2d9e9e"];
  const RECUR_OPTIONS = { none: "None", daily: "Daily", weekly: "Weekly", monthly: "Monthly" };
  const INITIAL_BOARDS = [
    { id: "b1", name: "Taskboard", archive: [], trash: [], cols: [
      { id: "backlog", title: "Backlog", color: "#6c757d", cards: [
        { id: "c1", title: "Refactor vault structure", tags: ["#vault", "#meta"], priority: "low", status: "todo", cardColor: "none", note: "Consider PARA method.", due: "", recur: "none", subtasks: [{ id: "s1", text: "Audit existing folders", done: false }, { id: "s2", text: "Map to PARA structure", done: false }] },
        { id: "c2", title: "Set up daily notes template", tags: ["#templates"], priority: "medium", status: "inprogress", cardColor: "none", note: "Include mood tracker.", due: "2026-03-20", recur: "weekly", subtasks: [{ id: "s3", text: "Design template layout", done: true }, { id: "s4", text: "Add mood tracker section", done: false }] }
      ] },
      { id: "todo", title: "To Do", color: "#7c6fcd", cards: [
        { id: "c3", title: "Write weekly review note", tags: ["#review"], priority: "high", status: "todo", cardColor: "#e6a817", note: "Link to [[Projects MOC]].", due: "2026-03-16", recur: "weekly", subtasks: [{ id: "s5", text: "Review last week tasks", done: false }, { id: "s6", text: "Write wins and lessons", done: false }] }
      ] },
      { id: "inprogress", title: "In Progress", color: "#e6a817", cards: [
        { id: "c5", title: "Build Zettelkasten index", tags: ["#zettelkasten"], priority: "high", status: "inprogress", cardColor: "none", note: "40+ atomic notes ready.", due: "2026-03-18", recur: "none", subtasks: [{ id: "s8", text: "Collect atomic notes", done: true }, { id: "s9", text: "Write index note", done: true }, { id: "s10", text: "Link related clusters", done: false }] }
      ] },
      { id: "done", title: "Done", color: "#2d9e6b", cards: [
        { id: "c6", title: "Install Obsidian plugins", tags: ["#setup"], priority: "low", status: "done", cardColor: "#4a9e6b", note: "Dataview, Templater done", due: "", recur: "none", subtasks: [{ id: "s11", text: "Install Kanban", done: true }, { id: "s12", text: "Install Dataview", done: true }] }
      ] }
    ] },
    { id: "b2", name: "Research Topics", archive: [], trash: [], cols: [
      { id: "r1", title: "Ideas", color: "#9e6fcd", cards: [
        { id: "r_c1", title: "Explore PKM systems", tags: ["#pkm"], priority: "medium", status: "todo", cardColor: "none", note: "Zettelkasten vs PARA vs LYT", due: "", recur: "none", subtasks: [{ id: "r_s1", text: "Read about Zettelkasten", done: false }, { id: "r_s2", text: "Try PARA for a week", done: false }] }
      ] },
      { id: "r2", title: "Reading", color: "#e6a817", cards: [] },
      { id: "r3", title: "Notes Written", color: "#2d9e6b", cards: [] }
    ] }
  ];
  function hashColor(str) {
    let h = 0;
    for (let c of str) h = c.charCodeAt(0) + ((h << 5) - h);
    return `hsl(${Math.abs(h) % 360},45%,55%)`;
  }
  function smartDue(due) {
    if (!due) return null;
    const todayStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    const tomorrowDate = /* @__PURE__ */ new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowStr = tomorrowDate.toLocaleDateString("en-CA");
    const weekDate = /* @__PURE__ */ new Date();
    weekDate.setDate(weekDate.getDate() + 7);
    const weekStr = weekDate.toLocaleDateString("en-CA");
    if (due < todayStr) {
      const today = new Date(todayStr);
      const d = new Date(due);
      const diff = Math.round((today - d) / (1e3 * 60 * 60 * 24));
      return { label: `${diff}d overdue`, color: "#f44747", urgent: true };
    }
    if (due === todayStr) return { label: "Due today", color: "#e6a817", urgent: true };
    if (due === tomorrowStr) return { label: "Tomorrow", color: "#e6a817", urgent: false };
    if (due <= weekStr) {
      const today = new Date(todayStr);
      const d = new Date(due);
      const diff = Math.round((d - today) / (1e3 * 60 * 60 * 24));
      return { label: `${diff} days`, color: "#858585", urgent: false };
    }
    return { label: due, color: "#858585", urgent: false };
  }
  function renderNote(note, accentColor, onCardLink) {
    if (!note) return null;
    const parts = note.split(/(\[\[[^\]]+\]\])/g);
    const ac = accentColor || "#7c6fcd";
    return parts.map((p, i) => {
      if (p.match(/^\[\[.+\]\]$/)) {
        const title = p.slice(2, -2);
        return /* @__PURE__ */ React.createElement(
          "span",
          {
            key: i,
            onClick: onCardLink ? (e) => {
              e.stopPropagation();
              onCardLink(title);
            } : void 0,
            style: {
              color: ac,
              background: ac + "22",
              borderRadius: "3px",
              padding: "0 3px",
              cursor: onCardLink ? "pointer" : "default",
              textDecoration: "underline",
              textDecorationStyle: "dotted"
            },
            title: onCardLink ? "Open linked card: " + title : title
          },
          p
        );
      }
      return /* @__PURE__ */ React.createElement("span", { key: i }, p);
    });
  }
  const ICON_LIBRARY = {
    "Work & Tasks": ["\u{1F4CB}", "\u2705", "\u{1F4CC}", "\u{1F3AF}", "\u26A1", "\u{1F525}", "\u{1F4A1}", "\u{1F527}", "\u2699\uFE0F", "\u{1F6E0}\uFE0F", "\u{1F4CA}", "\u{1F4C8}", "\u{1F4C9}", "\u{1F4BC}", "\u{1F5C2}\uFE0F", "\u{1F4C1}", "\u{1F4C2}", "\u{1F5C3}\uFE0F", "\u{1F4DD}", "\u270F\uFE0F"],
    "Status": ["\u{1F680}", "\u23F3", "\u231B", "\u{1F504}", "\u2714\uFE0F", "\u274C", "\u26D4", "\u{1F6AB}", "\u{1F534}", "\u{1F7E1}", "\u{1F7E2}", "\u{1F535}", "\u26A0\uFE0F", "\u{1F4AF}", "\u{1F3C1}", "\u{1F396}\uFE0F"],
    "People & Teams": ["\u{1F464}", "\u{1F465}", "\u{1F9D1}\u200D\u{1F4BB}", "\u{1F468}\u200D\u{1F4BC}", "\u{1F469}\u200D\u{1F4BC}", "\u{1F9E0}", "\u{1F91D}", "\u{1FAC2}", "\u{1F451}", "\u{1F393}", "\u{1F9D1}\u200D\u{1F3A8}", "\u{1F9D1}\u200D\u{1F52C}", "\u{1F9D1}\u200D\u{1F3EB}", "\u{1F9D1}\u200D\u2695\uFE0F", "\u{1F64B}", "\u{1F64C}"],
    "Tech & Dev": ["\u{1F4BB}", "\u{1F5A5}\uFE0F", "\u{1F4F1}", "\u2328\uFE0F", "\u{1F5B1}\uFE0F", "\u{1F5A8}\uFE0F", "\u{1F4BE}", "\u{1F4BF}", "\u{1F4E1}", "\u{1F50C}", "\u{1F9E9}", "\u{1F510}", "\u{1F511}", "\u{1F6E1}\uFE0F", "\u{1F41B}", "\u{1F52C}", "\u{1F9EA}", "\u{1F916}", "\u{1F9EC}", "\u{1F310}"],
    "Communication": ["\u{1F4E7}", "\u{1F4E8}", "\u{1F4E9}", "\u{1F4AC}", "\u{1F4AD}", "\u{1F514}", "\u{1F515}", "\u{1F4E3}", "\u{1F4E2}", "\u260E\uFE0F", "\u{1F4DE}", "\u{1F4DF}", "\u{1F4E0}", "\u{1F5E8}\uFE0F", "\u2709\uFE0F"],
    "Nature & Life": ["\u{1F331}", "\u{1F33F}", "\u{1F332}", "\u{1F338}", "\u{1F33A}", "\u2B50", "\u{1F319}", "\u2600\uFE0F", "\u{1F30A}", "\u{1F525}", "\u2744\uFE0F", "\u{1F308}", "\u26A1", "\u{1F340}", "\u{1F98B}", "\u{1F98A}", "\u{1F41D}", "\u{1F33B}", "\u{1F341}", "\u{1F30D}"],
    "Objects": ["\u{1F3E0}", "\u{1F3E2}", "\u{1F697}", "\u2708\uFE0F", "\u{1F682}", "\u26F5", "\u{1F392}", "\u{1F9F3}", "\u{1F381}", "\u{1F48E}", "\u{1F3C6}", "\u{1F947}", "\u{1F3AA}", "\u{1F3A8}", "\u{1F3AD}", "\u{1F3AC}", "\u{1F3B5}", "\u{1F3B8}", "\u{1F4F7}", "\u{1F52D}"],
    "Arrows & Math": ["\u27A1\uFE0F", "\u2B05\uFE0F", "\u2B06\uFE0F", "\u2B07\uFE0F", "\u2197\uFE0F", "\u2198\uFE0F", "\u{1F501}", "\u{1F503}", "\u2795", "\u2796", "\u2716\uFE0F", "\u2797", "\u267E\uFE0F", "\u{1F517}", "\u{1F4CE}", "\u{1F9F2}"]
  };
  function newCard(title) {
    return { id: "c" + Date.now(), title, icon: "", tags: [], priority: "medium", status: "none", cardColor: "none", note: "", due: "", recur: "none", reminder: false, reminderMins: 30, subtasks: [], blockedBy: [], blocking: [] };
  }
  const PICKER_CATS = Object.entries(LUCIDE_CATS);
  function IconPicker({ value, onChange, onClose }) {
    const T = useT();
    const [tab, setTab] = useState("lucide");
    const [search, setSearch] = useState("");
    const [activeCat, setActiveCat] = useState("all");
    const [customInput, setCustomInput] = useState("");
    const [page, setPage] = useState(0);
    const searchRef = useRef();
    const COLS = 8, PAGE_SIZE = 120;
    useEffect(() => {
      searchRef.current?.focus();
    }, []);
    useEffect(() => {
      setPage(0);
    }, [search, activeCat]);
    const isLucide = value && value.startsWith("lucide:");
    const lucideName = isLucide ? value.slice(7) : null;
    const filtered = search.trim().length > 0 ? LUCIDE_ICONS.filter((i) => {
      const q = search.toLowerCase();
      return i[0].includes(q) || i[2].includes(q);
    }) : activeCat === "all" ? LUCIDE_ICONS : LUCIDE_ICONS.filter((i) => i[2].includes(activeCat));
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const pageIcons = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    const inp = {
      background: T.inputBg,
      border: "1px solid " + T.inputBorder,
      borderRadius: "6px",
      color: T.text,
      fontFamily: "var(--app-font)",
      outline: "none",
      fontSize: "12px",
      padding: "6px 10px",
      width: "100%",
      boxSizing: "border-box"
    };
    const IconBtn = ({ iconName, isSelected }) => /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          onChange("lucide:" + iconName);
          onClose();
        },
        title: iconName,
        style: {
          width: "36px",
          height: "36px",
          borderRadius: "7px",
          border: "2px solid " + (isSelected ? T.accent : "transparent"),
          background: isSelected ? T.accent + "22" : T.inputBg,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          flexShrink: 0,
          transition: "all 0.1s"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = T.accent + "22";
          e.currentTarget.style.borderColor = T.accent + "66";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = isSelected ? T.accent + "22" : T.inputBg;
          e.currentTarget.style.borderColor = isSelected ? T.accent : "transparent";
        }
      },
      /* @__PURE__ */ React.createElement(LucideIcon, { name: iconName, size: 18, color: isSelected ? T.accent : T.textMuted })
    );
    return /* @__PURE__ */ React.createElement("div", { "data-tb-overlay": true, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 2100, overflowY: "auto", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "110px 20px 40px" }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
      background: T.modalBg,
      border: "1px solid " + T.modalBorder,
      borderRadius: "14px",
      width: "600px",
      maxWidth: "calc(100vw - 40px)",
      height: "560px",
      maxHeight: "calc(100vh - 170px)",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
      color: T.text,
      fontFamily: "var(--app-font)",
      overflow: "hidden"
    } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 10px", borderBottom: "1px solid " + T.colBorder, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: 700 } }, "Choose Icon"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", alignItems: "center" } }, value && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          onChange("");
          onClose();
        },
        style: { background: T.danger + "22", border: "1px solid " + T.danger + "44", color: T.danger, borderRadius: "6px", padding: "3px 10px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" }
      },
      "Remove"
    ), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "18px", lineHeight: 1 } }, "\u2715"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", marginBottom: "10px" } }, [["lucide", "\u2B21 Lucide Icons (1,703)"], ["emoji", "\u{1F600} Emoji"]].map(([id, label]) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: id,
        onClick: () => {
          setTab(id);
          setSearch("");
          setActiveCat("all");
        },
        style: {
          padding: "5px 12px",
          borderRadius: "6px",
          border: "1px solid " + (tab === id ? T.accent : T.inputBorder),
          background: tab === id ? T.accent + "22" : "transparent",
          color: tab === id ? T.accent : T.textMuted,
          cursor: "pointer",
          fontSize: "11px",
          fontFamily: "var(--app-font)",
          fontWeight: tab === id ? 700 : 400
        }
      },
      label
    ))), /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: searchRef,
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: tab === "lucide" ? "Search 1,703 icons by name or tag\u2026" : "Paste any emoji or text\u2026",
        style: { ...inp }
      }
    )), tab === "lucide" && /* @__PURE__ */ React.createElement(React.Fragment, null, !search && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", padding: "8px 14px", overflowX: "auto", flexShrink: 0, borderBottom: "1px solid " + T.colBorder } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setActiveCat("all"),
        style: {
          padding: "3px 10px",
          borderRadius: "5px",
          border: "1px solid " + (activeCat === "all" ? T.accent : T.inputBorder),
          background: activeCat === "all" ? T.accent + "22" : "transparent",
          color: activeCat === "all" ? T.accent : T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)",
          whiteSpace: "nowrap",
          flexShrink: 0
        }
      },
      "All (",
      LUCIDE_ICONS.length,
      ")"
    ), PICKER_CATS.map(([key, title]) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key,
        onClick: () => setActiveCat(key),
        style: {
          padding: "3px 10px",
          borderRadius: "5px",
          border: "1px solid " + (activeCat === key ? T.accent : T.inputBorder),
          background: activeCat === key ? T.accent + "22" : "transparent",
          color: activeCat === key ? T.accent : T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)",
          whiteSpace: "nowrap",
          flexShrink: 0
        }
      },
      title
    ))), isLucide && /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 14px", borderBottom: "1px solid " + T.colBorder, flexShrink: 0, display: "flex", alignItems: "center", gap: "10px", background: T.accent + "0a" } }, /* @__PURE__ */ React.createElement(LucideIcon, { name: lucideName, size: 22, color: T.accent }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.accent, fontWeight: 600 } }, lucideName), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted } }, "currently selected")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "10px 14px" } }, search && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted, marginBottom: "8px" } }, filtered.length, " result", filtered.length !== 1 ? "s" : "", ' for "', search, '"'), pageIcons.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "30px", color: T.textMuted, fontSize: "12px" } }, "No icons found"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(" + COLS + ",36px)", gap: "4px", justifyContent: "start" } }, pageIcons.map((icon) => /* @__PURE__ */ React.createElement(IconBtn, { key: icon[0], iconName: icon[0], isSelected: lucideName === icon[0] }))), totalPages > 1 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "12px", paddingTop: "10px", borderTop: "1px solid " + T.colBorder } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setPage((p) => Math.max(0, p - 1)),
        disabled: page === 0,
        style: { padding: "4px 10px", borderRadius: "5px", border: "1px solid " + T.inputBorder, background: "transparent", color: page === 0 ? T.textMuted + "44" : T.textMuted, cursor: page === 0 ? "default" : "pointer", fontSize: "11px", fontFamily: "var(--app-font)" }
      },
      "\u2039 Prev"
    ), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.textMuted } }, page + 1, " / ", totalPages, " (", filtered.length, " icons)"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
        disabled: page >= totalPages - 1,
        style: { padding: "4px 10px", borderRadius: "5px", border: "1px solid " + T.inputBorder, background: "transparent", color: page >= totalPages - 1 ? T.textMuted + "44" : T.textMuted, cursor: page >= totalPages - 1 ? "default" : "pointer", fontSize: "11px", fontFamily: "var(--app-font)" }
      },
      "Next \u203A"
    )))), tab === "emoji" && /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "14px 18px", display: "flex", flexDirection: "column", gap: "10px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "11px", color: T.textMuted } }, "Type or paste any emoji, symbol, or short text:"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: customInput,
        onChange: (e) => setCustomInput(e.target.value),
        placeholder: "e.g. \u{1F680}  \u2605  \u2713  ABC",
        style: { ...inp, fontSize: "16px", letterSpacing: "0.05em" },
        onKeyDown: (e) => {
          if (e.key === "Enter" && customInput.trim()) {
            onChange(customInput.trim());
            onClose();
          }
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          if (customInput.trim()) {
            onChange(customInput.trim());
            onClose();
          }
        },
        style: { background: T.accent + "22", border: "1px solid " + T.accent + "55", color: T.accent, borderRadius: "6px", padding: "6px 16px", cursor: "pointer", fontSize: "12px", fontFamily: "var(--app-font)", whiteSpace: "nowrap", fontWeight: 700 }
      },
      "Use"
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "10px", color: T.textMuted, marginBottom: "7px", letterSpacing: "0.08em", textTransform: "uppercase" } }, "Quick picks"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "5px" } }, Object.entries(ICON_LIBRARY).map(([cat, emojis]) => emojis.map((em) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: em,
        onClick: () => {
          onChange(em);
          onClose();
        },
        style: { width: "34px", height: "34px", fontSize: "18px", borderRadius: "6px", border: "1px solid " + (value === em ? T.accent : T.inputBorder), background: value === em ? T.accent + "22" : T.inputBg, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }
      },
      em
    ))))))));
  }
  function Tag({ label }) {
    const c = hashColor(label);
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", padding: "1px 7px", borderRadius: "10px", background: c + "22", color: c, border: `1px solid ${c}44`, fontFamily: "var(--app-font)" } }, label);
  }
  function StatusBadge({ status }) {
    const s = STATUSES[status || "none"];
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", padding: "1px 8px", borderRadius: "10px", background: s.bg, color: s.color, border: `1px solid ${s.color}44`, fontFamily: "var(--app-font)", whiteSpace: "nowrap" } }, s.label);
  }
  function InlineRename({ value, onSave, spanStyle = {}, inputStyle = {} }) {
    const T = useT();
    const [editing, setEditing] = useState(false);
    const [val, setVal] = useState(value);
    const ref = useRef();
    useEffect(() => {
      if (editing) ref.current?.select();
    }, [editing]);
    useEffect(() => setVal(value), [value]);
    const commit = () => {
      if (val.trim()) onSave(val.trim());
      setEditing(false);
    };
    if (editing) return /* @__PURE__ */ React.createElement("input", { ref, value: val, onChange: (e) => setVal(e.target.value), onKeyDown: (e) => {
      if (e.key === "Enter") commit();
      if (e.key === "Escape") {
        setVal(value);
        setEditing(false);
      }
    }, onBlur: commit, style: { background: T.inputBg, border: `1px solid ${T.accent}`, borderRadius: "4px", color: T.text, fontFamily: "var(--app-font)", outline: "none", padding: "2px 6px", ...inputStyle } });
    return /* @__PURE__ */ React.createElement("span", { onDoubleClick: () => setEditing(true), title: "Double-click to rename", style: { cursor: "text", ...spanStyle } }, value);
  }
  function BoardTab({ board, active, onClick, onRename, onContextMenu }) {
    const T = useT();
    const [editing, setEditing] = useState(false);
    const [val, setVal] = useState(board.name);
    const ref = useRef();
    useEffect(() => setVal(board.name), [board.name]);
    useEffect(() => {
      if (editing) ref.current?.select();
    }, [editing]);
    const commit = () => {
      if (val.trim()) onRename(val.trim());
      setEditing(false);
    };
    if (editing) return /* @__PURE__ */ React.createElement("input", { ref, value: val, onChange: (e) => setVal(e.target.value), onKeyDown: (e) => {
      if (e.key === "Enter") commit();
      if (e.key === "Escape") {
        setVal(board.name);
        setEditing(false);
      }
    }, onBlur: commit, style: { fontSize: "11px", fontWeight: 700, color: T.accent, width: "110px", padding: "4px 8px", border: `1px solid ${T.accent}66`, borderRadius: "6px", background: T.inputBg, fontFamily: "var(--app-font)", outline: "none" } });
    return /* @__PURE__ */ React.createElement("span", { onClick, onDoubleClick: () => setEditing(true), onContextMenu, title: "Click to switch \xB7 Double-click to rename \xB7 Right-click for options", style: { padding: "5px 12px", borderRadius: "6px", fontSize: "11px", fontWeight: active ? 700 : 400, color: active ? T.accent : T.textMuted, cursor: "grab", whiteSpace: "nowrap", display: "block", userSelect: "none", background: active ? T.accent + "22" : "transparent", transition: "all 0.15s" } }, board.name);
  }
  function CardModal({ card, onSave, onClose, onTrash, onArchive, onCardLink, allCards }) {
    const T = useT();
    const [form, setForm] = useState({ ...card, subtasks: (card.subtasks || []).map((s) => ({ ...s })), status: card.status || "none", cardColor: card.cardColor || "none", recur: card.recur || "none" });
    const [tagInput, setTagInput] = useState("");
    const [subtaskInput, setSubtaskInput] = useState("");
    const [showIconPicker, setShowIconPicker] = useState(false);
    const subtaskRef = useRef();
    const addTag = () => {
      const v = tagInput.trim();
      if (v && !form.tags.includes(v)) setForm((f) => ({ ...f, tags: [...f.tags, v.startsWith("#") ? v : "#" + v] }));
      setTagInput("");
    };
    const addSubtask = () => {
      const v = subtaskInput.trim();
      if (!v) return;
      setForm((f) => ({ ...f, subtasks: [...f.subtasks, { id: "s" + Date.now(), text: v, done: false }] }));
      setSubtaskInput("");
      subtaskRef.current?.focus();
    };
    const toggleSub = (id) => setForm((f) => ({ ...f, subtasks: f.subtasks.map((s) => s.id === id ? { ...s, done: !s.done } : s) }));
    const deleteSub = (id) => setForm((f) => ({ ...f, subtasks: f.subtasks.filter((s) => s.id !== id) }));
    const editSub = (id, text) => setForm((f) => ({ ...f, subtasks: f.subtasks.map((s) => s.id === id ? { ...s, text } : s) }));
    const [editingSubId, setEditingSubId] = useState(null);
    const done = form.subtasks.filter((s) => s.done).length;
    const pct = form.subtasks.length > 0 ? Math.round(done / form.subtasks.length * 100) : 0;
    const inp = { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: T.text, fontFamily: "var(--app-font)", outline: "none", fontSize: "12px" };
    const lbl = { fontSize: "10px", color: T.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "5px" };
    return /* @__PURE__ */ React.createElement("div", { "data-tb-overlay": true, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1e3, overflowY: "scroll", paddingBottom: "40px" }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "14px", padding: 0, width: "540px", minWidth: "320px", maxWidth: "calc(100vw - 24px)", marginTop: "100px", marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column", boxShadow: "0 24px 80px rgba(0,0,0,0.6)", color: T.text, fontFamily: "var(--app-font)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 26px 14px", borderBottom: `1px solid ${T.colBorder}`, flexShrink: 0, background: T.modalBg, borderRadius: "14px 14px 0 0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, letterSpacing: "0.15em", textTransform: "uppercase" } }, "TASK CARD"), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "16px" } }, "\u2715")), /* @__PURE__ */ React.createElement("div", { style: { overflowY: "auto", flex: 1, padding: "20px 26px", minHeight: 0, scrollbarWidth: "thin" } }, form.cardColor !== "none" && /* @__PURE__ */ React.createElement("div", { style: { height: "6px", borderRadius: "4px", background: form.cardColor, marginBottom: "14px" } }), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: form.title,
        onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
        placeholder: "Title\u2026",
        style: { width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${T.modalBorder}`, color: T.text, fontSize: "16px", fontFamily: "var(--app-font)", fontWeight: 700, padding: "4px 0 10px", marginBottom: "10px", outline: "none", boxSizing: "border-box" }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowIconPicker(true),
        style: { display: "flex", alignItems: "center", gap: "10px", background: T.inputBg, border: "1px solid " + (form.icon ? T.accent + "66" : T.inputBorder), borderRadius: "8px", padding: "8px 14px", cursor: "pointer", fontFamily: "var(--app-font)", transition: "all 0.15s", minWidth: "140px" },
        onMouseEnter: (e) => {
          e.currentTarget.style.borderColor = T.accent;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.borderColor = form.icon ? T.accent + "66" : T.inputBorder;
        }
      },
      form.icon ? form.icon.startsWith("lucide:") ? /* @__PURE__ */ React.createElement(LucideIcon, { name: form.icon.slice(7), size: 22, color: T.accent }) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: "22px", lineHeight: 1 } }, form.icon) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: "18px", color: T.textMuted, lineHeight: 1 } }, "\u2B21"),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: form.icon ? T.accent : T.textMuted, fontWeight: form.icon ? 600 : 400 } }, form.icon ? form.icon.startsWith("lucide:") ? "lucide: " + form.icon.slice(7) : form.icon : "Add icon"), !form.icon && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: T.textMuted } }, "1,703 icons + emoji"))
    ), form.icon && /* @__PURE__ */ React.createElement("button", { onClick: () => setForm((f) => ({ ...f, icon: "" })), style: { background: "none", border: `1px solid ${T.danger}44`, color: T.danger, borderRadius: "6px", padding: "5px 9px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Remove")), showIconPicker && /* @__PURE__ */ React.createElement(IconPicker, { value: form.icon || "", onChange: (icon) => setForm((f) => ({ ...f, icon })), onClose: () => setShowIconPicker(false) }), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value: form.note,
        onChange: (e) => setForm((f) => ({ ...f, note: e.target.value })),
        placeholder: "Notes\u2026 [[wikilinks]] *markdown*",
        rows: 3,
        style: { ...inp, width: "100%", padding: "9px 11px", resize: "vertical", marginBottom: "14px", boxSizing: "border-box" }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Card Color"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" } }, CARD_COLORS.map((c) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: c,
        onClick: () => setForm((f) => ({ ...f, cardColor: c })),
        style: { width: "22px", height: "22px", borderRadius: "50%", background: c === "none" ? T.inputBg : c, border: `2px solid ${form.cardColor === c ? T.accent : "transparent"}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border 0.15s" }
      },
      c === "none" && /* @__PURE__ */ React.createElement("span", { style: { color: T.textMuted, fontSize: "12px" } }, "\u2715")
    )))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", marginBottom: "14px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: "120px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Status"), /* @__PURE__ */ React.createElement("select", { value: form.status, onChange: (e) => setForm((f) => ({ ...f, status: e.target.value })), style: { ...inp, width: "100%", padding: "6px 9px" } }, Object.entries(STATUSES).map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, v.label)))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: "120px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Priority"), /* @__PURE__ */ React.createElement("select", { value: form.priority, onChange: (e) => setForm((f) => ({ ...f, priority: e.target.value })), style: { ...inp, width: "100%", padding: "6px 9px" } }, Object.entries(PRIORITIES).map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, v.label)))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: "120px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Recur"), /* @__PURE__ */ React.createElement("select", { value: form.recur, onChange: (e) => setForm((f) => ({ ...f, recur: e.target.value })), style: { ...inp, width: "100%", padding: "6px 9px" } }, Object.entries(RECUR_OPTIONS).map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, v)))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: "120px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Due Date"), /* @__PURE__ */ React.createElement("input", { type: "date", value: form.due, onChange: (e) => setForm((f) => ({ ...f, due: e.target.value })), style: { ...inp, width: "100%", padding: "6px 9px", boxSizing: "border-box" } }))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px", background: T.inputBg, borderRadius: "9px", padding: "12px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: "10px", color: T.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" } }, "Reminder & Calendar"), form.due && /* @__PURE__ */ React.createElement("button", { onClick: () => {
      downloadICS(cardToICS(form), form.title.replace(/\s+/g, "-") + ".ics");
    }, style: { background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "5px", padding: "3px 10px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "\u{1F4C5} Add to Calendar")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: "7px", cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { onClick: () => setForm((f) => ({ ...f, reminder: !f.reminder })), style: { width: "16px", height: "16px", borderRadius: "3px", border: `1.5px solid ${form.reminder ? T.accent : T.inputBorder}`, background: form.reminder ? T.accent + "22" : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" } }, form.reminder && /* @__PURE__ */ React.createElement("span", { style: { color: T.accent, fontSize: "9px" } }, "\u2713")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: T.text } }, "Enable reminder")), form.reminder && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "7px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.textMuted } }, "Notify"), /* @__PURE__ */ React.createElement("select", { value: form.reminderMins || 30, onChange: (e) => setForm((f) => ({ ...f, reminderMins: parseInt(e.target.value) })), style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "5px", color: T.text, fontSize: "11px", fontFamily: "var(--app-font)", padding: "4px 8px", outline: "none" } }, [[5, "5 min"], [10, "10 min"], [15, "15 min"], [30, "30 min"], [60, "1 hour"], [120, "2 hours"], [1440, "1 day"]].map(([v, l]) => /* @__PURE__ */ React.createElement("option", { key: v, value: v }, l))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.textMuted } }, "before due"))), form.reminder && !form.due && /* @__PURE__ */ React.createElement("p", { style: { fontSize: "10px", color: T.danger, marginTop: "7px" } }, "\u26A0 Set a due date to enable reminders")), form.subtasks.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Progress"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: pct === 100 ? T.progressDone : T.accent } }, done, "/", form.subtasks.length, " \xB7 ", pct, "%")), /* @__PURE__ */ React.createElement("div", { style: { height: "6px", background: T.progressBg, borderRadius: "3px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: `${pct}%`, background: pct === 100 ? T.progressDone : T.progressFill, borderRadius: "3px", transition: "width 0.3s" } }))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Subtasks"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "5px", marginBottom: "8px" } }, form.subtasks.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.id, style: { display: "flex", alignItems: "center", gap: "9px", background: T.inputBg, border: `1px solid ${editingSubId === s.id ? T.accent : T.inputBorder}`, borderRadius: "7px", padding: "6px 9px", transition: "border-color 0.15s" } }, /* @__PURE__ */ React.createElement("div", { onClick: () => toggleSub(s.id), style: { width: "15px", height: "15px", borderRadius: "3px", border: `1.5px solid ${s.done ? T.accent : T.inputBorder}`, background: s.done ? T.accent + "22" : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" } }, s.done && /* @__PURE__ */ React.createElement("span", { style: { color: T.accent, fontSize: "9px" } }, "\u2713")), editingSubId === s.id ? /* @__PURE__ */ React.createElement("input", { autoFocus: true, value: s.text, onChange: (e) => editSub(s.id, e.target.value), onBlur: () => setEditingSubId(null), onKeyDown: (e) => { if (e.key === "Enter" || e.key === "Escape") setEditingSubId(null); }, style: { flex: 1, fontSize: "12px", background: "transparent", border: "none", outline: "none", color: T.text, fontFamily: "var(--app-font)", padding: 0 } }) : /* @__PURE__ */ React.createElement("span", { onClick: () => { if (!s.done) setEditingSubId(s.id); }, title: s.done ? "" : "Click to edit", style: { flex: 1, fontSize: "12px", color: s.done ? T.textMuted : T.textSub, textDecoration: s.done ? "line-through" : "none", cursor: s.done ? "default" : "text" } }, s.text), /* @__PURE__ */ React.createElement("button", { onClick: () => deleteSub(s.id), style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "11px", padding: 0 }, onMouseEnter: (e) => e.currentTarget.style.color = T.danger, onMouseLeave: (e) => e.currentTarget.style.color = T.textMuted }, "\u2715"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "7px" } }, /* @__PURE__ */ React.createElement("input", { ref: subtaskRef, value: subtaskInput, onChange: (e) => setSubtaskInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && addSubtask(), placeholder: "Add subtask\u2026 (Enter)", style: { ...inp, flex: 1, padding: "6px 9px" } }), /* @__PURE__ */ React.createElement("button", { onClick: addSubtask, style: { background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "6px", padding: "5px 12px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "+ Add"))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Tags"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "7px" } }, form.tags.map((tag) => /* @__PURE__ */ React.createElement("span", { key: tag, style: { display: "flex", alignItems: "center", gap: "3px" } }, /* @__PURE__ */ React.createElement(Tag, { label: tag }), /* @__PURE__ */ React.createElement("button", { onClick: () => setForm((f) => ({ ...f, tags: f.tags.filter((x) => x !== tag) })), style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "9px", padding: 0 } }, "\u2715")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "7px" } }, /* @__PURE__ */ React.createElement("input", { value: tagInput, onChange: (e) => setTagInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && addTag(), placeholder: "#tag", style: { ...inp, flex: 1, padding: "5px 9px" } }), /* @__PURE__ */ React.createElement("button", { onClick: addTag, style: { background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "6px", padding: "5px 12px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "Add"))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("label", { style: lbl }, "Dependencies"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: "160px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "10px", color: T.textMuted, marginBottom: "5px" } }, "\u{1F6AB} Blocked by"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "5px" } }, (form.blockedBy || []).map((id) => {
      const c2 = (allCards || []).find((c) => c.id === id);
      return c2 ? /* @__PURE__ */ React.createElement("span", { key: id, style: { display: "flex", alignItems: "center", gap: "4px", background: T.danger + "15", border: `1px solid ${T.danger}44`, borderRadius: "5px", padding: "2px 7px", fontSize: "10px", color: T.danger } }, c2.title.slice(0, 18), c2.title.length > 18 ? "\u2026" : "", /* @__PURE__ */ React.createElement("button", { onClick: () => setForm((f) => ({ ...f, blockedBy: (f.blockedBy || []).filter((x) => x !== id) })), style: { background: "none", border: "none", color: T.danger, cursor: "pointer", fontSize: "9px", padding: 0, lineHeight: 1 } }, "\u2715")) : null;
    })), /* @__PURE__ */ React.createElement(
      "select",
      {
        onChange: (e) => {
          const v = e.target.value;
          if (v && !(form.blockedBy || []).includes(v)) setForm((f) => ({ ...f, blockedBy: [...f.blockedBy || [], v] }));
          e.target.value = "";
        },
        defaultValue: "",
        style: { ...inp, width: "100%", padding: "5px 8px", fontSize: "10px" }
      },
      /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "+ Add blocker\u2026"),
      (allCards || []).filter((c) => c.id !== card.id && !(form.blockedBy || []).includes(c.id)).map((c) => /* @__PURE__ */ React.createElement("option", { key: c.id, value: c.id }, c.title.slice(0, 40)))
    )), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: "160px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "10px", color: T.textMuted, marginBottom: "5px" } }, "\u26D4 Blocking"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "5px" } }, (form.blocking || []).map((id) => {
      const c2 = (allCards || []).find((c) => c.id === id);
      return c2 ? /* @__PURE__ */ React.createElement("span", { key: id, style: { display: "flex", alignItems: "center", gap: "4px", background: T.accent + "15", border: `1px solid ${T.accent}44`, borderRadius: "5px", padding: "2px 7px", fontSize: "10px", color: T.accent } }, c2.title.slice(0, 18), c2.title.length > 18 ? "\u2026" : "", /* @__PURE__ */ React.createElement("button", { onClick: () => setForm((f) => ({ ...f, blocking: (f.blocking || []).filter((x) => x !== id) })), style: { background: "none", border: "none", color: T.accent, cursor: "pointer", fontSize: "9px", padding: 0, lineHeight: 1 } }, "\u2715")) : null;
    })), /* @__PURE__ */ React.createElement(
      "select",
      {
        onChange: (e) => {
          const v = e.target.value;
          if (v && !(form.blocking || []).includes(v)) setForm((f) => ({ ...f, blocking: [...f.blocking || [], v] }));
          e.target.value = "";
        },
        defaultValue: "",
        style: { ...inp, width: "100%", padding: "5px 8px", fontSize: "10px" }
      },
      /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "+ Add blocked card\u2026"),
      (allCards || []).filter((c) => c.id !== card.id && !(form.blocking || []).includes(c.id)).map((c) => /* @__PURE__ */ React.createElement("option", { key: c.id, value: c.id }, c.title.slice(0, 40)))
    ))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", padding: "12px 26px 16px", borderTop: `1px solid ${T.colBorder}`, flexShrink: 0, background: T.modalBg, borderRadius: "0 0 14px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => onTrash(card.id),
        title: "Move to trash (recoverable)",
        style: { background: "none", border: `1px solid ${T.danger}44`, color: T.danger + "99", borderRadius: "7px", padding: "7px 14px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)", display: "flex", alignItems: "center", gap: "5px" },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = T.danger + "15";
          e.currentTarget.style.color = T.danger;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "none";
          e.currentTarget.style.color = T.danger + "99";
        }
      },
      "\u{1F5D1}\uFE0F Trash"
    ), /* @__PURE__ */ React.createElement("button", { onClick: () => onArchive(card.id), style: { background: "none", border: `1px solid ${T.textMuted}44`, color: T.textMuted, borderRadius: "7px", padding: "7px 14px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "Archive")), /* @__PURE__ */ React.createElement("button", { onClick: () => onSave(form), style: { background: T.accentGrad, border: "none", color: "#fff", borderRadius: "7px", padding: "7px 20px", cursor: "pointer", fontSize: "12px", fontFamily: "var(--app-font)", fontWeight: 700 } }, "Save")))))
  }
  function ArchivePanel({ archive, onRestore, onDeletePermanent, onClose }) {
    const T = useT();
    return /* @__PURE__ */ React.createElement("div", { "data-tb-overlay": true, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1e3, overflowY: "scroll", paddingBottom: "40px" }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "14px", padding: "24px 28px", width: "500px", maxWidth: "95vw", marginTop: "100px", marginLeft: "auto", marginRight: "auto", overflowY: "auto", boxShadow: "0 24px 80px rgba(0,0,0,0.5)", color: T.text, fontFamily: "var(--app-font)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: 700, color: T.text } }, "\u{1F5C3}\uFE0F Archive"), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "16px" } }, "\u2715")), archive.length === 0 ? /* @__PURE__ */ React.createElement("p", { style: { color: T.textMuted, fontSize: "12px", textAlign: "center", padding: "30px 0" } }, "No archived cards yet.") : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } }, archive.map((card) => /* @__PURE__ */ React.createElement("div", { key: card.id, style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "9px", padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", fontWeight: 600, color: T.text, marginBottom: "3px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, card.title), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(StatusBadge, { status: card.status }), card.tags.slice(0, 3).map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => onRestore(card.id), style: { background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "5px", padding: "4px 10px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Restore"), /* @__PURE__ */ React.createElement("button", { onClick: () => onDeletePermanent(card.id), style: { background: "none", border: `1px solid ${T.danger}44`, color: T.danger, borderRadius: "5px", padding: "4px 8px", cursor: "pointer", fontSize: "10px" }, title: "Delete permanently" }, "\u2715")))))));
  }
  function TrashPanel({ trash, onRestore, onDeletePermanent, onEmpty, onClose }) {
    const T = useT();
    return /* @__PURE__ */ React.createElement("div", { "data-tb-overlay": true, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1e3, overflowY: "scroll", paddingBottom: "40px" }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "14px", padding: "24px 28px", width: "500px", maxWidth: "95vw", marginTop: "100px", marginLeft: "auto", marginRight: "auto", maxHeight: "80vh", overflowY: "auto", boxShadow: "0 24px 80px rgba(0,0,0,0.5)", color: T.text, fontFamily: "var(--app-font)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: 700, color: T.text } }, "\u{1F5D1}\uFE0F Trash"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", alignItems: "center" } }, trash.length > 0 && /* @__PURE__ */ React.createElement("button", { onClick: onEmpty, style: { background: "none", border: `1px solid ${T.danger}55`, color: T.danger, borderRadius: "6px", padding: "4px 10px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Empty Trash"), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "16px" } }, "\u2715"))), trash.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "32px", marginBottom: "10px" } }, "\u{1F5D1}\uFE0F"), /* @__PURE__ */ React.createElement("p", { style: { color: T.textMuted, fontSize: "12px" } }, "Trash is empty")) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "10px", color: T.textMuted, marginBottom: "4px" } }, "Items here are deleted permanently when you empty the trash."), trash.map((card) => /* @__PURE__ */ React.createElement("div", { key: card.id, style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "9px", padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", fontWeight: 600, color: T.text, marginBottom: "3px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, card.title), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement(StatusBadge, { status: card.status || "none" }), card.tags.slice(0, 3).map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t })), card.trashedAt && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted } }, "Deleted ", new Date(card.trashedAt).toLocaleDateString()))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => onRestore(card.id), style: { background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "5px", padding: "4px 10px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Restore"), /* @__PURE__ */ React.createElement("button", { onClick: () => onDeletePermanent(card.id), style: { background: "none", border: `1px solid ${T.danger}44`, color: T.danger, borderRadius: "5px", padding: "4px 8px", cursor: "pointer", fontSize: "10px" }, title: "Delete permanently" }, "\u2715")))))));
  }
  const THEME_FIELDS = [
    { key: "name", label: "Theme Name", type: "text" },
    { key: "bg", label: "Background", type: "color" },
    { key: "headerBg", label: "Header Bg", type: "color" },
    { key: "colBg", label: "Column Bg", type: "color" },
    { key: "cardBg", label: "Card Bg", type: "color" },
    { key: "modalBg", label: "Modal Bg", type: "color" },
    { key: "inputBg", label: "Input Bg", type: "color" },
    { key: "text", label: "Primary Text", type: "color" },
    { key: "textMuted", label: "Muted Text", type: "color" },
    { key: "accent", label: "Accent Color", type: "color" },
    { key: "progressDone", label: "Done Color", type: "color" },
    { key: "danger", label: "Danger Color", type: "color" },
    { key: "cardText", label: "Card Title", type: "color" },
    { key: "cardNote", label: "Card Note", type: "color" }
  ];
  function CustomThemeBuilder({ onSave, onClose }) {
    const T = useT();
    const [baseName, setBaseName] = useState("dark");
    const [customThemes, setCustomThemes] = useState(() => loadCustomThemes());
    const [form, setForm] = useState({ ...BASE_THEMES.dark, name: "My Theme" });
    const updateField = (key, val) => {
      setForm((f) => {
        const u = { ...f, [key]: val };
        if (key === "accent") {
          u.accentGrad = "linear-gradient(135deg," + val + "," + val + "cc)";
          u.progressFill = "linear-gradient(90deg," + val + "," + val + "99)";
          u.cardBorderHover = val + "88";
          u.textSub = val;
          u.cardSubText = val;
        }
        if (key === "bg") {
          u.inputBg = val;
        }
        if (key === "colBg") {
          u.cardBg = val;
          u.modalBg = val;
        }
        return u;
      });
    };
    const handleSelectBase = (k) => {
      setBaseName(k);
      setForm((f) => ({ ...BASE_THEMES[k], name: f.name }));
    };
    const handleSave = () => {
      if (!form.name.trim()) {
        alert("Please enter a theme name.");
        return;
      }
      const key = "custom_" + form.name.toLowerCase().replace(/[^a-z0-9]/g, "_");
      const newTheme = {
        ...form,
        dark: true,
        datePicker: "invert(0.6)",
        headerBorder: form.colBg,
        colBorder: form.colBg,
        cardBorder: form.inputBg,
        modalBorder: form.inputBg,
        inputBorder: form.inputBg,
        progressBg: form.inputBg,
        scrollThumb: form.inputBg,
        colCountBg: form.inputBg,
        addBucketBorder: form.inputBg,
        bgDot: form.text + "08"
      };
      const updated = { ...customThemes, [key]: newTheme };
      setCustomThemes(updated);
      saveCustomThemes(updated);
      Object.assign(THEMES, updated);
      onSave(key, newTheme);
    };
    const handleDelete = (key) => {
      if (!window.confirm("Delete this custom theme?")) return;
      const updated = { ...customThemes };
      delete updated[key];
      delete THEMES[key];
      setCustomThemes(updated);
      saveCustomThemes(updated);
      onSave(null, null);
    };
    const inp = { background: T.inputBg, border: "1px solid " + T.inputBorder, borderRadius: "6px", color: T.text, fontFamily: "var(--app-font)", outline: "none", fontSize: "12px", padding: "6px 9px" };
    return /* @__PURE__ */ React.createElement("div", { "data-tb-overlay": true, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1100, overflowY: "scroll", paddingBottom: "40px" }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { background: T.modalBg, border: "1px solid " + T.modalBorder, borderRadius: "14px", padding: "24px 28px", width: "560px", maxWidth: "96vw", maxHeight: "88vh", overflowY: "auto", boxShadow: "0 24px 80px rgba(0,0,0,0.6)", color: T.text, fontFamily: "var(--app-font)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: 700 } }, "\u{1F3A8} Custom Theme Builder"), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "16px" } }, "\u2715")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: "10px", color: T.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "7px" } }, "Start From"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" } }, Object.entries(BASE_THEMES).map(([k, v]) => /* @__PURE__ */ React.createElement("button", { key: k, onClick: () => handleSelectBase(k), style: { padding: "5px 10px", borderRadius: "6px", border: "1px solid " + (baseName === k ? T.accent : T.inputBorder), background: baseName === k ? T.accent + "22" : "transparent", color: baseName === k ? T.accent : T.textMuted, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: v.accent } }), v.name)))), /* @__PURE__ */ React.createElement("div", { style: { height: "6px", borderRadius: "4px", background: "linear-gradient(90deg," + form.bg + "," + form.colBg + "," + form.accent + "," + form.progressDone + ")", marginBottom: "14px" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "18px" } }, THEME_FIELDS.map(function(f2) {
      return /* @__PURE__ */ React.createElement("div", { key: f2.key }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: "10px", color: T.textMuted, display: "block", marginBottom: "4px" } }, f2.label), f2.type === "color" ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", alignItems: "center" } }, /* @__PURE__ */ React.createElement("input", { type: "color", value: form[f2.key] || "#000000", onChange: (e) => updateField(f2.key, e.target.value), style: { width: "32px", height: "32px", border: "1px solid " + T.inputBorder, borderRadius: "4px", cursor: "pointer", background: "none", padding: "1px" } }), /* @__PURE__ */ React.createElement("input", { value: form[f2.key] || "", onChange: (e) => updateField(f2.key, e.target.value), style: { ...inp, flex: 1, padding: "4px 7px", fontSize: "11px" }, placeholder: "#000000" })) : /* @__PURE__ */ React.createElement("input", { value: form[f2.key] || "", onChange: (e) => updateField(f2.key, e.target.value), style: { ...inp, width: "100%" }, placeholder: "Theme name..." }));
    })), Object.keys(customThemes).length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: "10px", color: T.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "8px" } }, "Saved Custom Themes"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "5px" } }, Object.entries(customThemes).map(([key, theme]) => /* @__PURE__ */ React.createElement("div", { key, style: { display: "flex", alignItems: "center", gap: "8px", background: T.inputBg, borderRadius: "7px", padding: "7px 10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "14px", height: "14px", borderRadius: "50%", background: theme.accent, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: "12px", color: T.text } }, theme.name), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setForm({ ...theme });
    }, style: { background: T.accent + "22", border: "1px solid " + T.accent + "55", color: T.accent, borderRadius: "5px", padding: "3px 8px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Edit"), /* @__PURE__ */ React.createElement("button", { onClick: () => handleDelete(key), style: { background: "none", border: "1px solid " + T.danger + "44", color: T.danger, borderRadius: "5px", padding: "3px 7px", cursor: "pointer", fontSize: "10px" } }, "\u2715"))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: "8px" } }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "1px solid " + T.inputBorder, color: T.textMuted, borderRadius: "7px", padding: "8px 16px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "Cancel"), /* @__PURE__ */ React.createElement("button", { onClick: handleSave, style: { background: T.accentGrad, border: "none", color: "#fff", borderRadius: "7px", padding: "8px 20px", cursor: "pointer", fontSize: "12px", fontFamily: "var(--app-font)", fontWeight: 700 } }, "Save Theme"))));
  }
  function SettingsPanel({ themeKey, onTheme, boards, activeBoard, onExport, onImport, onExcelExport, autoExportInterval, onSetAutoExport, lastAutoExport, exportFolderName, fsaSupported, onPickFolder, onClearFolder, onClose, onOpenThemeBuilder, appFont, appFontSize, onSetFont, onSetFontSize, systemFonts, displayPrefs, updatePref }) {
    const T = useT();
    const fileRef = React.useRef();
    const [activeTab, setActiveTab] = React.useState("appearance");
    const totalCards = boards.reduce((s, b) => s + b.cols.reduce((ss, c) => ss + c.cards.length, 0), 0);
    const totalArchived = boards.reduce((s, b) => s + (b.archive || []).length, 0);
    const dp = displayPrefs || {};

    const tabs = [
      { id: "appearance", icon: "🎨", label: "Appearance" },
      { id: "display", icon: "🃏", label: "Cards & Board" },
      { id: "data", icon: "💾", label: "Data" },
      { id: "shortcuts", icon: "⌨️", label: "Shortcuts" },
    ];

    const sec = (title) => /* @__PURE__ */ React.createElement("div", {
      style: { fontSize: "9px", fontWeight: 800, color: T.accent, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px", marginTop: "4px", display: "flex", alignItems: "center", gap: "8px" }
    }, title, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: "1px", background: `linear-gradient(90deg, ${T.accent}44, transparent)` } }));

    const tog = (label, key, desc) => /* @__PURE__ */ React.createElement("div", {
      style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", borderRadius: "8px", background: T.inputBg, marginBottom: "6px" }
    },
      /* @__PURE__ */ React.createElement("div", null,
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: 600, color: T.text } }, label),
        desc && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted, marginTop: "1px" } }, desc)
      ),
      /* @__PURE__ */ React.createElement("div", {
        onClick: () => updatePref(key, dp[key] === false ? true : false),
        style: { width: "36px", height: "20px", borderRadius: "10px", cursor: "pointer", flexShrink: 0,
          background: dp[key] === false ? T.inputBorder : T.accent,
          position: "relative", transition: "background 0.2s" }
      },
        /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute", top: "2px",
          left: dp[key] === false ? "2px" : "18px",
          width: "16px", height: "16px", borderRadius: "50%",
          background: "#fff", transition: "left 0.2s",
          boxShadow: "0 1px 4px rgba(0,0,0,0.4)"
        } })
      )
    );

    const tabContent = {
      appearance: /* @__PURE__ */ React.createElement("div", null,
        sec("Theme"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "10px" } },
          /* @__PURE__ */ React.createElement("button", { onClick: onOpenThemeBuilder, style: { background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "7px", padding: "5px 12px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "🎨 Custom Theme Builder")
        ),
        /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "18px" } },
          Object.entries(THEMES).map(([k, v]) => /* @__PURE__ */ React.createElement("button", {
            key: k, onClick: () => onTheme(k),
            style: { padding: "8px 12px", borderRadius: "8px", border: `1px solid ${themeKey === k ? T.accent : T.inputBorder}`,
              background: themeKey === k ? T.accent + "22" : T.inputBg, color: themeKey === k ? T.accent : T.textMuted,
              cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)", transition: "all 0.15s",
              display: "flex", alignItems: "center", gap: "8px", textAlign: "left" }
          },
            /* @__PURE__ */ React.createElement("div", { style: { width: "10px", height: "10px", borderRadius: "50%", background: v.accent, boxShadow: `0 0 6px ${v.accent}88`, flexShrink: 0 } }),
            /* @__PURE__ */ React.createElement("span", null, v.name),
            themeKey === k && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontSize: "10px" } }, "✓")
          ))
        ),
        sec("Font Family"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" } },
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.textMuted } }, "Current:"),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.accent, fontFamily: appFont } }, appFont.split(",")[0].replace(/'/g, ""))
        ),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "150px", overflowY: "auto", marginBottom: "10px" } },
          BUNDLED_FONTS.map(f => /* @__PURE__ */ React.createElement("button", {
            key: f.name, onClick: () => onSetFont(f.family),
            style: { padding: "7px 11px", borderRadius: "7px", border: `1px solid ${appFont === f.family ? T.accent : T.inputBorder}`,
              background: appFont === f.family ? T.accent + "22" : "transparent",
              color: appFont === f.family ? T.accent : T.text, cursor: "pointer",
              textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.12s" }
          },
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: appFontSize + "px", fontFamily: f.family, fontWeight: 500 } }, f.name),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted, background: T.colCountBg, borderRadius: "4px", padding: "1px 5px" } }, f.category)
          ))
        ),
        sec("Font Size"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "6px" } },
          FONT_SIZES.map(s => /* @__PURE__ */ React.createElement("button", {
            key: s.label, onClick: () => onSetFontSize(s.base),
            style: { flex: 1, padding: "6px", borderRadius: "7px", border: `1px solid ${appFontSize === s.base ? T.accent : T.inputBorder}`,
              background: appFontSize === s.base ? T.accent + "22" : "transparent",
              color: appFontSize === s.base ? T.accent : T.textMuted, cursor: "pointer",
              fontSize: s.base + "px", fontFamily: "var(--app-font)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" }
          },
            /* @__PURE__ */ React.createElement("span", null, s.label),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", opacity: 0.6 } }, s.base + "px")
          ))
        )
      ),

      display: /* @__PURE__ */ React.createElement("div", null,
        sec("Card Density"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "18px" } },
          [["compact","Compact","Tight padding"], ["normal","Normal","Default view"], ["comfortable","Comfortable","Spacious feel"]].map(([val, label, desc]) =>
            /* @__PURE__ */ React.createElement("button", {
              key: val,
              onClick: () => updatePref("density", val),
              style: { flex: 1, padding: "8px 6px", borderRadius: "8px", cursor: "pointer",
                border: `1px solid ${(dp.density || "normal") === val ? T.accent : T.inputBorder}`,
                background: (dp.density || "normal") === val ? T.accent + "22" : T.inputBg,
                color: (dp.density || "normal") === val ? T.accent : T.textMuted,
                fontFamily: "var(--app-font)", transition: "all 0.15s", textAlign: "center" }
            },
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: 700 } }, label),
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", opacity: 0.7, marginTop: "2px" } }, desc)
            )
          )
        ),

        sec("Column Width"),
        /* @__PURE__ */ React.createElement("div", { style: { padding: "0 4px", marginBottom: "18px" } },
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "6px" } },
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.textMuted } }, "Width"),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.accent, fontWeight: 700 } }, (dp.colWidth || 268) + "px")
          ),
          /* @__PURE__ */ React.createElement("input", {
            type: "range", min: 200, max: 420, step: 10,
            value: dp.colWidth || 268,
            onChange: (e) => updatePref("colWidth", parseInt(e.target.value)),
            style: { width: "100%", accentColor: T.accent }
          }),
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: "4px" } },
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted } }, "200px"),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted } }, "420px")
          )
        ),

        sec("Card Elements"),
        tog("Show Note / Description", "showNote", "Preview card notes under the title"),
        tog("Show Tags", "showTags", "Display tag badges on cards"),
        tog("Show Subtask Progress", "showSubtasks", "Checklist items and progress bar"),
        tog("Show Due Dates", "showDue", "Due date label on cards"),
        tog("Show Priority Bar", "showPriorityBar", "Coloured left-edge priority indicator"),
        tog("Show Colour Stripe", "showColorStripe", "Top colour stripe on cards"),
        tog("Show Column Health", "showColumnHealth", "Show WIP badges and limit warnings"),
        tog("Show Board Health Chips", "showBoardHealth", "Overdue, due soon and blocked summary chips"),

        sec("Board Display"),
        /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "6px" } },
          /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 12px", borderRadius: "8px", background: T.inputBg, marginBottom: "6px" } },
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: 600, color: T.text, marginBottom: "6px" } }, "Card Sort Order"),
            /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", flexWrap: "wrap" } },
              [["none","Default"],["priority","Priority"],["due","Due Date"],["title","Title"],["status","Status"]].map(([val, label]) =>
                /* @__PURE__ */ React.createElement("button", {
                  key: val, onClick: () => updatePref("sortCards", val),
                  style: { padding: "4px 10px", borderRadius: "6px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)",
                    border: `1px solid ${(dp.sortCards || "none") === val ? T.accent : T.inputBorder}`,
                    background: (dp.sortCards || "none") === val ? T.accent + "22" : "transparent",
                    color: (dp.sortCards || "none") === val ? T.accent : T.textMuted }
                }, label)
              )
            )
          )
        )
      ),

      data: /* @__PURE__ */ React.createElement("div", null,
        sec("Stats"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "18px" } },
          [["Boards", boards.length], ["Active Cards", totalCards], ["Archived", totalArchived], ["Columns", boards.reduce((s,b)=>s+b.cols.length,0)]].map(([l,v]) =>
            /* @__PURE__ */ React.createElement("div", { key: l, style: { background: T.inputBg, borderRadius: "8px", padding: "10px 14px" } },
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: "20px", fontWeight: 800, color: T.accent } }, v),
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted } }, l)
            )
          )
        ),
        sec("Backup & Export"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", marginBottom: "10px", flexWrap: "wrap" } },
          /* @__PURE__ */ React.createElement("button", { onClick: () => onExport(false), style: { flex: 1, background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "8px", padding: "10px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "⬇ Export JSON"),
          /* @__PURE__ */ React.createElement("button", { onClick: onExcelExport, style: { flex: 1, background: "#1d6f4222", border: "1px solid #1d6f4255", color: "#4ec9b0", borderRadius: "8px", padding: "10px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "📊 Export Excel"),
          /* @__PURE__ */ React.createElement("button", { onClick: () => fileRef.current.click(), style: { flex: 1, background: T.inputBg, border: `1px solid ${T.inputBorder}`, color: T.text, borderRadius: "8px", padding: "10px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "⬆ Import JSON"),
          /* @__PURE__ */ React.createElement("input", { ref: fileRef, type: "file", accept: ".json", style: { display: "none" }, onChange: (e) => {
            const f = e.target.files[0]; if (!f) return;
            const r = new FileReader();
            r.onload = (ev) => { try { onImport(JSON.parse(ev.target.result)); onClose(); } catch(e2) { alert("Invalid JSON"); } };
            r.readAsText(f); e.target.value = "";
          } })
        ),
        sec("Auto Export"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" } },
          [[0,"Off"],[5,"5 min"],[15,"15 min"],[30,"30 min"],[60,"1 hr"]].map(([v,l]) =>
            /* @__PURE__ */ React.createElement("button", { key: v, onClick: () => onSetAutoExport(v),
              style: { padding: "5px 12px", borderRadius: "6px", fontSize: "11px", fontFamily: "var(--app-font)", cursor: "pointer",
                border: `1px solid ${autoExportInterval === v ? T.accent : T.inputBorder}`,
                background: autoExportInterval === v ? T.accent + "22" : "transparent",
                color: autoExportInterval === v ? T.accent : T.textMuted }
            }, l)
          )
        ),
        sec("Export Folder"),
        /* @__PURE__ */ React.createElement("div", { style: { background: T.inputBg, borderRadius: "9px", padding: "12px 14px", marginBottom: "18px" } },
          exportFolderName
            ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
                /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px" } }, "📁"),
                /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: "11px", color: T.progressDone, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis" } }, exportFolderName),
                /* @__PURE__ */ React.createElement("button", { onClick: onClearFolder, style: { background: "none", border: `1px solid ${T.danger}44`, color: T.danger, borderRadius: "6px", padding: "4px 8px", cursor: "pointer", fontSize: "10px" } }, "✕")
              )
            : /* @__PURE__ */ React.createElement("button", { onClick: onPickFolder, style: { width: "100%", background: fsaSupported ? T.accent + "15" : "transparent", border: `1px dashed ${fsaSupported ? T.accent : T.inputBorder}`, borderRadius: "8px", color: fsaSupported ? T.accent : T.textMuted, padding: "12px", cursor: fsaSupported ? "pointer" : "not-allowed", fontSize: "11px", fontFamily: "var(--app-font)" } },
                fsaSupported ? "📁 Choose Export Folder…" : "Folder picking needs Chrome/Edge"
              )
        ),
        sec("Calendar Sync"),
        /* @__PURE__ */ React.createElement("button", { onClick: () => {
          const ics = boardToICS(activeBoard);
          if (ics) downloadICS(ics, (activeBoard.name||"board").replace(/\s+/g,"-")+".ics");
          else alert("No tasks with due dates found.");
        }, style: { width: "100%", background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "8px", padding: "10px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)", marginBottom: "6px" } }, "📅 Export Board as .ics Calendar")
      ),

      shortcuts: /* @__PURE__ */ React.createElement("div", null,
        sec("Keyboard Shortcuts"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } },
          [
            ["N", "New card in focused column"],
            ["F  or  /", "Focus search / filter"],
            ["Escape", "Close modal / clear search"],
            ["?", "Open settings"],
            ["Ctrl+E", "Export data as JSON"],
            ["Ctrl+Z", "Undo last action"],
            ["Ctrl+Y", "Redo last action"],
            ["Ctrl+K", "Global search across all boards"],
            ["Ctrl+Shift+K", "Open command palette"],
            ["I", "Open board insights"],
            ["V", "Cycle through views"],
            ["G", "Jump to Kanban view"],
            ["Tab", "Cycle through columns"],
            ["Delete", "Delete selected card"],
          ].map(([k, d]) => /* @__PURE__ */ React.createElement("div", { key: k,
            style: { display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", borderRadius: "7px", background: T.inputBg }
          },
            /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: T.accent, background: T.accent + "18", border: `1px solid ${T.accent}44`, borderRadius: "5px", padding: "2px 7px", whiteSpace: "nowrap" } }, k),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.textMuted } }, d)
          ))
        )
      )
    };

    return /* @__PURE__ */ React.createElement("div", { "data-tb-overlay": true, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 1000, overflowY: "scroll", paddingBottom: "40px" }, onClick: onClose },
      /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "16px", width: "540px", maxWidth: "96vw", maxHeight: "88vh", display: "flex", flexDirection: "column", boxShadow: "0 32px 100px rgba(0,0,0,0.6)", color: T.text, fontFamily: "var(--app-font)", overflow: "hidden", marginTop: "100px", marginLeft: "auto", marginRight: "auto" } },
        /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 22px 0", borderBottom: `1px solid ${T.modalBorder}`, flexShrink: 0 } },
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } },
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "14px", fontWeight: 800, color: T.text } }, "⚙️ Settings"),
            /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "16px" } }, "✕")
          ),
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "2px", marginBottom: "-1px" } },
            tabs.map(tab => /* @__PURE__ */ React.createElement("button", {
              key: tab.id, onClick: () => setActiveTab(tab.id),
              style: { padding: "8px 14px", borderRadius: "8px 8px 0 0", border: "none", cursor: "pointer",
                background: activeTab === tab.id ? T.colBg : "transparent",
                color: activeTab === tab.id ? T.accent : T.textMuted,
                fontFamily: "var(--app-font)", fontSize: "11px", fontWeight: activeTab === tab.id ? 700 : 400,
                borderBottom: activeTab === tab.id ? `2px solid ${T.accent}` : "2px solid transparent",
                display: "flex", alignItems: "center", gap: "5px", transition: "all 0.15s" }
            },
              /* @__PURE__ */ React.createElement("span", null, tab.icon),
              /* @__PURE__ */ React.createElement("span", null, tab.label)
            ))
          )
        ),
        /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 22px", overflowY: "auto", flex: 1 } }, tabContent[activeTab])
      )
    );
  }


  function Card({ card, onOpen, onDragStart, onToggleSubtask, selected, onSelect, bulkMode, onContextMenu, displayPrefs = {}, collapsed, onToggleCollapse }) {
    const T = useT();
    const subtasks = card.subtasks || [];
    const done = subtasks.filter((s) => s.done).length;
    const pct = subtasks.length > 0 ? Math.round(done / subtasks.length * 100) : 0;
    const status = card.status || "none";
    const priority = card.priority && PRIORITIES[card.priority] ? card.priority : "medium";
    const dueInfo = smartDue(card.due || "");
    const hasColor = card.cardColor && card.cardColor !== "none";
    const density = displayPrefs.density || "normal";
    const pad = density === "compact" ? "7px 10px" : density === "comfortable" ? "14px 16px" : "11px 13px";
    const showNote = displayPrefs.showNote !== false;
    const showTags = displayPrefs.showTags !== false;
    const showSubtasks = displayPrefs.showSubtasks !== false;
    const showDue = displayPrefs.showDue !== false;
    const showPriorityBar = displayPrefs.showPriorityBar !== false;
    const showColorStripe = displayPrefs.showColorStripe !== false;
    const collapseSummaryParts = [];
    if (showSubtasks && subtasks.length > 0) collapseSummaryParts.push(`\u2611 ${done}/${subtasks.length} \u00B7 ${pct}%`);
    if (showDue && dueInfo) collapseSummaryParts.push(dueInfo.label);
    if (showNote && card.note) collapseSummaryParts.push("Note");
    if (showTags && card.tags && card.tags.length > 0) collapseSummaryParts.push(`${card.tags.length} tag${card.tags.length === 1 ? "" : "s"}`);
    if (status !== "none") collapseSummaryParts.push((STATUSES[status] && STATUSES[status].label) || status);
    const collapseSummary = collapseSummaryParts.join(" \u00B7 ");
    const handleClick = (e) => {
      if (bulkMode) {
        e.stopPropagation();
        onSelect(card.id);
        return;
      }
      onOpen(card);
    };
    const handleCardContextMenu = onContextMenu;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        draggable: true,
        onDragStart,
        onClick: handleClick,
        onContextMenu: handleCardContextMenu,
        style: { background: T.cardBg, border: `2px solid ${selected ? T.accent : T.cardBorder}`, borderRadius: "9px", cursor: bulkMode ? "pointer" : "grab", transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s", userSelect: "none", position: "relative", opacity: selected ? 0.95 : 1 },
        onMouseEnter: (e) => {
          if (!bulkMode) {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
          }
          e.currentTarget.style.borderColor = selected ? T.accent : T.cardBorderHover;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
          e.currentTarget.style.borderColor = selected ? T.accent : T.cardBorder;
        }
      },
      selected && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: T.accent + "10", zIndex: 1, pointerEvents: "none", borderRadius: "7px" } }),
      (hasColor && showColorStripe) && /* @__PURE__ */ React.createElement("div", { style: { height: "4px", background: card.cardColor, width: "100%", borderRadius: "7px 7px 0 0" } }),
      bulkMode && /* @__PURE__ */ React.createElement("div", { onClick: (e) => {
        e.stopPropagation();
        onSelect(card.id);
      }, style: { position: "absolute", top: "8px", right: "8px", zIndex: 2, width: "18px", height: "18px", borderRadius: "4px", border: "2px solid " + (selected ? T.accent : T.textMuted), background: selected ? T.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.15s" } }, selected && /* @__PURE__ */ React.createElement("span", { style: { color: "#fff", fontSize: "11px", lineHeight: 1, fontWeight: 700 } }, "\u2713")),
      /* @__PURE__ */ React.createElement("div", { style: { padding: pad } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, top: hasColor ? "4px" : "0", bottom: 0, width: "3px", background: showPriorityBar ? PRIORITIES[priority].color : "transparent", borderRadius: hasColor ? "0" : "9px 0 0 9px" } }), /* @__PURE__ */ React.createElement("div", { style: { paddingLeft: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "6px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: "6px", flex: 1, minWidth: 0 } }, card.icon && (card.icon.startsWith("lucide:") ? /* @__PURE__ */ React.createElement(LucideIcon, { name: card.icon.slice(7), size: 14, color: T.accent }) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: "14px", lineHeight: 1, flexShrink: 0 } }, card.icon)), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", color: T.cardText, fontWeight: 600, lineHeight: 1.4, fontFamily: "var(--app-font)", flex: 1 } }, card.title || "Untitled")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: (e) => {
        e.stopPropagation();
        onToggleCollapse && onToggleCollapse();
      }, title: collapsed ? "Expand card details" : "Collapse card details", style: { padding: "0 5px", minWidth: "22px", height: "20px", borderRadius: "4px", border: `1px solid ${T.inputBorder}`, background: T.inputBg, color: T.textMuted, cursor: "pointer", fontSize: "10px", lineHeight: 1, fontFamily: "var(--app-font)", flexShrink: 0 } }, collapsed ? "\u25B6" : "\u25BC"), card.recur && card.recur !== "none" && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted, background: T.colCountBg, borderRadius: "4px", padding: "1px 5px", flexShrink: 0 } }, "\u21BB", card.recur[0].toUpperCase()))), collapsed && collapseSummary && /* @__PURE__ */ React.createElement("p", { style: { margin: "2px 0 0", fontSize: "9px", color: T.textMuted, lineHeight: 1.35 } }, collapseSummary), !collapsed && /* @__PURE__ */ React.createElement(React.Fragment, null, (card.note && showNote) && /* @__PURE__ */ React.createElement("p", { style: { margin: "0 0 6px", fontSize: "10px", color: T.cardNote, lineHeight: 1.5, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, renderNote(card.note, T.accent)), (status !== "none" || (showTags && card.tags && card.tags.length > 0)) && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "6px", alignItems: "center" } }, status !== "none" && /* @__PURE__ */ React.createElement(StatusBadge, { status }), showTags && (card.tags || []).map((tag) => /* @__PURE__ */ React.createElement(Tag, { key: tag, label: tag }))), (subtasks.length > 0 && showSubtasks) && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted } }, "\u2611 ", done, "/", subtasks.length), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: pct === 100 ? T.progressDone : T.textMuted } }, pct, "%")), /* @__PURE__ */ React.createElement("div", { style: { height: "2px", background: T.progressBg, borderRadius: "2px", marginBottom: "6px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: `${pct}%`, background: pct === 100 ? T.progressDone : T.progressFill, borderRadius: "2px", transition: "width 0.3s" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "3px" } }, subtasks.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.id, onClick: (e) => {
        e.stopPropagation();
        onToggleSubtask(card.id, s.id);
      }, style: { display: "flex", alignItems: "center", gap: "7px", cursor: "pointer", padding: "1px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "12px", height: "12px", borderRadius: "3px", border: `1.5px solid ${s.done ? T.accent : T.cardBorder}`, background: s.done ? T.accent + "22" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" } }, s.done && /* @__PURE__ */ React.createElement("span", { style: { color: T.accent, fontSize: "8px" } }, "\u2713")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: s.done ? T.cardSubDone : T.cardSubText, textDecoration: s.done ? "line-through" : "none", lineHeight: 1.3 } }, s.text))))), (dueInfo && showDue) && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "6px", display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: dueInfo.color, fontWeight: dueInfo.urgent ? 600 : 400 } }, dueInfo.urgent ? "\u26A0 " : "\u{1F4C5} ", dueInfo.label), card.reminder && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.accent, background: T.accent + "15", borderRadius: "4px", padding: "1px 5px" } }, "\u{1F514}")), card.blockedBy && card.blockedBy.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.danger, background: T.danger + "15", borderRadius: "4px", padding: "1px 6px", fontWeight: 600 } }, "\u{1F6AB} Blocked \xD7", card.blockedBy.length)), card.blocking && card.blocking.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.accent, background: T.accent + "15", borderRadius: "4px", padding: "1px 6px" } }, "\u26D4 Blocking \xD7", card.blocking.length)))))
    );
  }
  const drag_type = { current: "" };
  const drag_card_data = { current: null };
  function Column({ col, colIdx, onAddCard, onOpenCard, onDragStart, onDrop, onDragOver, onToggleSubtask, onRenameCol, onReorderCol, onDeleteCol, onRecolorCol, searchQuery, filterStatus, filterPriority, selectedCards, onSelectCard, bulkMode, onContextMenu, displayPrefs = {}, collapsedCards, onToggleCardCollapse }) {
    const T = useT();
    const [adding, setAdding] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const inputRef = useRef();
    useEffect(() => {
      if (adding) inputRef.current?.focus();
    }, [adding]);
    const filteredCards = col.cards.filter((card) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const inTitle = card.title.toLowerCase().includes(q);
        const inNote = (card.note || "").toLowerCase().includes(q);
        const inTags = card.tags.some((t) => t.toLowerCase().includes(q));
        if (!inTitle && !inNote && !inTags) return false;
      }
      if (filterStatus && filterStatus !== "all" && card.status !== filterStatus) return false;
      if (filterPriority && filterPriority !== "all" && card.priority !== filterPriority) return false;
      return true;
    });
    const sortCards = displayPrefs.sortCards || "none";
    const sortedCards = [...filteredCards].sort((a, b) => {
      if (sortCards === "priority") {
        const ord = { high: 0, medium: 1, low: 2 };
        return (ord[a.priority || "medium"] ?? 1) - (ord[b.priority || "medium"] ?? 1);
      }
      if (sortCards === "due") {
        const ad = a.due || "9999-12-31";
        const bd = b.due || "9999-12-31";
        return ad.localeCompare(bd);
      }
      if (sortCards === "title") return (a.title || "").localeCompare(b.title || "");
      if (sortCards === "status") {
        const ord = { blocked: 0, inprogress: 1, review: 2, todo: 3, none: 4, done: 5 };
        return (ord[a.status || "none"] ?? 4) - (ord[b.status || "none"] ?? 4);
      }
      return 0;
    });
    const showColumnHealth = displayPrefs.showColumnHealth !== false;
    const wipLimit = typeof col.wipLimit === "number" && col.wipLimit > 0 ? col.wipLimit : null;
    const wipExceeded = !!wipLimit && col.cards.length > wipLimit;
    useEffect(() => {
      if (!Column.addMap) Column.addMap = {};
      Column.addMap[col.id] = () => setAdding(true);
      return () => {
        if (Column.addMap) delete Column.addMap[col.id];
      };
    }, [col.id]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        "data-colid": col.id, "data-tb-col": true,
        onDrop: (e) => {
          if (drag_type.current === "card") {
            onDrop(e, col.id);
            return;
          }
          e.preventDefault();
          const fi = parseInt(e.dataTransfer.getData("colIdx") || "-1");
          if (fi >= 0 && fi !== colIdx) onReorderCol(fi, colIdx);
          e.currentTarget.style.borderColor = T.colBorder;
        },
        onDragOver: (e) => {
          e.preventDefault();
          if (drag_type.current === "col") e.currentTarget.style.borderColor = T.accent + "88";
        },
        onDragLeave: (e) => {
          e.currentTarget.style.borderColor = T.colBorder;
        },
        style: { width: (displayPrefs.colWidth || 268) + "px", minWidth: (displayPrefs.colWidth || 268) + "px", background: T.colBg, border: `1px solid ${wipExceeded ? T.danger : T.colBorder}`, borderRadius: "12px", display: "flex", flexDirection: "column", transition: "border-color 0.15s", boxShadow: wipExceeded ? `0 0 0 1px ${T.danger}33` : "none" }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          draggable: true,
          onDragStart: (e) => {
            drag_type.current = "col";
            e.dataTransfer.setData("colIdx", colIdx);
            e.currentTarget.parentElement.style.opacity = "0.5";
          },
          onDragEnd: (e) => {
            drag_type.current = "";
            e.currentTarget.parentElement.style.opacity = "1";
          },
          style: { padding: "12px 14px 9px", borderBottom: `1px solid ${T.colBorder}`, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "grab" },
          onContextMenu
        },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "7px", flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
          "div",
          {
            style: { width: "10px", height: "10px", borderRadius: "50%", background: col.color, boxShadow: `0 0 7px ${col.color}88`, cursor: "pointer", flexShrink: 0 },
            onClick: (e) => {
              e.stopPropagation();
              e.currentTarget.nextSibling.click();
            },
            title: "Change column colour"
          }
        ), /* @__PURE__ */ React.createElement(
          "input",
          {
            type: "color",
            value: col.color,
            onChange: (e) => onRecolorCol(col.id, e.target.value),
            style: { position: "absolute", opacity: 0, width: "1px", height: "1px", top: 0, left: 0, cursor: "pointer" }
          }
        )), /* @__PURE__ */ React.createElement(
          InlineRename,
          {
            value: col.title,
            onSave: (v) => onRenameCol(col.id, v),
            spanStyle: { fontSize: "11px", fontWeight: 700, color: T.textSub, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--app-font)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
            inputStyle: { fontSize: "11px", fontWeight: 700, color: T.textSub, width: "120px", textTransform: "uppercase" }
          }
        ), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", background: T.colCountBg, color: T.textMuted, borderRadius: "9px", padding: "1px 6px", fontFamily: "var(--app-font)", flexShrink: 0 } }, sortedCards.length, sortedCards.length !== col.cards.length && `/${col.cards.length}`), showColumnHealth && wipLimit && /* @__PURE__ */ React.createElement("span", { title: "WIP limit", style: { fontSize: "9px", background: wipExceeded ? T.danger + "22" : T.accent + "1c", color: wipExceeded ? T.danger : T.accent, borderRadius: "9px", padding: "1px 6px", fontFamily: "var(--app-font)", flexShrink: 0, border: `1px solid ${wipExceeded ? T.danger + "55" : T.accent + "33"}` } }, "WIP ", col.cards.length, "/", wipLimit)),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              setAdding(true);
            },
            style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "17px", lineHeight: 1, padding: "0 2px" },
            onMouseEnter: (e) => e.currentTarget.style.color = T.accent,
            onMouseLeave: (e) => e.currentTarget.style.color = T.textMuted
          },
          "\uFF0B"
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onDeleteCol(col.id);
            },
            title: "Delete column",
            style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "12px", lineHeight: 1, padding: "0 2px", opacity: 0.5 },
            onMouseEnter: (e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.color = T.danger;
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.opacity = 0.5;
              e.currentTarget.style.color = T.textMuted;
            }
          },
          "\u{1F5D1}"
        ))
      ),
      /* @__PURE__ */ React.createElement("div", { style: { padding: "9px", display: "flex", flexDirection: "column", gap: "7px" } }, sortedCards.map((card) => /* @__PURE__ */ React.createElement(Card, { key: card.id, card, onOpen: onOpenCard, onDragStart: (e) => {
        drag_type.current = "card";
        drag_card_data.current = { card, sourceColId: col.id };
        onDragStart(e, card.id, col.id);
      }, onToggleSubtask, selected: selectedCards && selectedCards.has(card.id), onSelect: onSelectCard, bulkMode, displayPrefs,
      collapsed: collapsedCards && collapsedCards.has(card.id),
      onToggleCollapse: () => onToggleCardCollapse(card.id),
      onContextMenu: (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (typeof onContextMenu === "function") onContextMenu(e, "card", card.id, col.id);
      }
    })), adding && /* @__PURE__ */ React.createElement("div", { style: { background: T.modalBg, border: `1px solid ${T.accent}55`, borderRadius: "9px", padding: "9px 11px" } }, /* @__PURE__ */ React.createElement(
        "input",
        {
          ref: inputRef,
          value: newTitle,
          onChange: (e) => setNewTitle(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && newTitle.trim()) {
              onAddCard(col.id, newTitle.trim());
              setNewTitle("");
              setAdding(false);
            }
            if (e.key === "Escape") {
              setAdding(false);
              setNewTitle("");
            }
          },
          placeholder: "Card title\u2026",
          style: { width: "100%", background: "transparent", border: "none", color: T.text, fontSize: "12px", fontFamily: "var(--app-font)", outline: "none", boxSizing: "border-box" }
        }
      ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", marginTop: "7px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => {
        if (newTitle.trim()) {
          onAddCard(col.id, newTitle.trim());
          setNewTitle("");
          setAdding(false);
        }
      }, style: { flex: 1, background: T.accent, border: "none", color: "#fff", borderRadius: "5px", padding: "5px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "Add"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
        setAdding(false);
        setNewTitle("");
      }, style: { background: "none", border: `1px solid ${T.colBorder}`, color: T.textMuted, borderRadius: "5px", padding: "5px 8px", cursor: "pointer", fontSize: "11px" } }, "\u2715"))))
    );
  }
  function Board({ board, onUpdate, searchQuery, filterStatus, filterPriority, onRecurReset, onMoveCardsToBoard, boards, showToastRef: showToastRefProp, displayPrefs = {} }) {
    const T = useT();
    const [editCard, setEditCard] = useState(null);
    const [addColMode, setAddColMode] = useState(false);
    const [boardCtxMenu, setBoardCtxMenu] = useState(null);
    const [newColName, setNewColName] = useState("");
    const [showTrash, setShowTrash] = useState(false);
    const [bulkMode, setBulkMode] = useState(false);
    const [selectedCards, setSelectedCards] = useState(/* @__PURE__ */ new Set());
    const [collapsedCards, setCollapsedCards] = useState(/* @__PURE__ */ new Set());
    const drag = useRef({});
    const lastPointerRef = useRef({ x: 0, y: 0 });
    const getPointerPos = () => ({ x: lastPointerRef.current.x, y: lastPointerRef.current.y });
    useEffect(() => {
      const trackPointer = (ev) => {
        lastPointerRef.current = { x: ev.clientX, y: ev.clientY };
      };
      window.addEventListener("mousemove", trackPointer, true);
      window.addEventListener("pointermove", trackPointer, true);
      window.addEventListener("contextmenu", trackPointer, true);
      return () => {
        window.removeEventListener("mousemove", trackPointer, true);
        window.removeEventListener("pointermove", trackPointer, true);
        window.removeEventListener("contextmenu", trackPointer, true);
      };
    }, []);
    const toggleBulkMode = () => {
      setBulkMode((v) => {
        if (v) setSelectedCards(/* @__PURE__ */ new Set());
        return !v;
      });
    };
    const toggleCardCollapse = (cardId) => {
      setCollapsedCards((prev) => {
        const n = new Set(prev);
        if (n.has(cardId)) n.delete(cardId);
        else n.add(cardId);
        return n;
      });
    };
    const expandAllCards = () => setCollapsedCards(/* @__PURE__ */ new Set());
    const collapseAllCards = () => {
      const ids = board.cols.flatMap((col2) => col2.cards.map((x) => x.id));
      setCollapsedCards(new Set(ids));
    };
    const toggleSelectCard = (id) => setSelectedCards((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
    const selectAll = () => {
      const all = board.cols.flatMap((c) => c.cards).map((c) => c.id);
      setSelectedCards(new Set(all));
    };
    const clearSelection = () => setSelectedCards(/* @__PURE__ */ new Set());
    const bulkSetStatus = (status) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((card) => selectedCards.has(card.id) ? { ...card, status } : card) })) });
      showToastRef.current && showToastRef.current(`Updated ${selectedCards.size} cards \u2192 ${STATUSES[status].label}`, "success");
      clearSelection();
    };
    const bulkSetPriority = (priority) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((card) => selectedCards.has(card.id) ? { ...card, priority } : card) })) });
      showToastRef.current && showToastRef.current(`Updated ${selectedCards.size} cards priority`, "success");
      clearSelection();
    };
    const bulkMoveToCol = (colId) => {
      const toMove = board.cols.flatMap((c) => c.cards).filter((c) => selectedCards.has(c.id));
      const newCols = board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => !selectedCards.has(x.id)) })).map((c) => c.id === colId ? { ...c, cards: [...c.cards, ...toMove] } : c);
      onUpdate({ ...board, cols: newCols });
      showToastRef.current && showToastRef.current(`Moved ${toMove.length} cards to ${board.cols.find((c) => c.id === colId)?.title}`, "success");
      clearSelection();
    };
    const bulkTrash = () => {
      const toTrash = board.cols.flatMap((c) => c.cards).filter((c) => selectedCards.has(c.id)).map((c) => ({ ...c, trashedAt: (/* @__PURE__ */ new Date()).toISOString() }));
      onUpdate({ ...board, trash: [...board.trash || [], ...toTrash], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => !selectedCards.has(x.id)) })) });
      showToastRef.current && showToastRef.current(`Moved ${toTrash.length} cards to trash`, "info");
      clearSelection();
      setBulkMode(false);
    };
    const bulkArchive = () => {
      const toArchive = board.cols.flatMap((c) => c.cards).filter((c) => selectedCards.has(c.id)).map((c) => ({ ...c, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }));
      onUpdate({ ...board, archive: [...board.archive || [], ...toArchive], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => !selectedCards.has(x.id)) })) });
      showToastRef.current && showToastRef.current(`Archived ${toArchive.length} cards`, "info");
      clearSelection();
      setBulkMode(false);
    };
    const bulkMoveToBoard = (targetBoardId) => {
      const toMove = board.cols.flatMap((c) => c.cards).filter((c) => selectedCards.has(c.id));
      onMoveCardsToBoard(toMove, board.id, targetBoardId);
      showToastRef.current && showToastRef.current(`Moved ${toMove.length} cards to board`, "success");
      clearSelection();
      setBulkMode(false);
    };
    const showToastRef = useRef(null);
    useEffect(() => {
      if (typeof showToastRefProp !== "undefined" && showToastRefProp) showToastRef.current = showToastRefProp.current;
    }, []);
    const saveCard = (updated) => {
      let updatedCard = { ...updated };
      if (updated.status === "done" && updated.recur && updated.recur !== "none") {
        updatedCard = { ...updated, status: "todo", subtasks: updated.subtasks.map((s) => ({ ...s, done: false })) };
        if (onRecurReset) onRecurReset(`\u21BB "${updated.title}" reset \u2014 recurring ${updated.recur} task`);
      }
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === updatedCard.id ? updatedCard : x) })) });
      setEditCard(null);
    };
    const trashCard = (cardId) => {
      const card = board.cols.flatMap((c) => c.cards).find((c) => c.id === cardId);
      if (!card) return;
      const trashedCard = { ...card, trashedAt: (/* @__PURE__ */ new Date()).toISOString() };
      onUpdate({ ...board, trash: [...board.trash || [], trashedCard], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
      setEditCard(null);
    };
    const deleteCardPermanent = (cardId) => onUpdate({ ...board, trash: (board.trash || []).filter((c) => c.id !== cardId) });
    const restoreFromTrash = (cardId) => {
      const card = (board.trash || []).find((c) => c.id === cardId);
      if (!card || !board.cols.length) return;
      const { trashedAt, ...restored } = card;
      onUpdate({ ...board, trash: (board.trash || []).filter((c) => c.id !== cardId), cols: board.cols.map((c, i) => i === 0 ? { ...c, cards: [...c.cards, restored] } : c) });
    };
    const archiveCard = (cardId) => {
      const card = board.cols.flatMap((c) => c.cards).find((c) => c.id === cardId);
      if (!card) return;
      onUpdate({ ...board, archive: [...board.archive || [], { ...card, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
      setEditCard(null);
    };
    const addCard = (colId, title) => {
      const card = newCard(title);
      onUpdate({ ...board, cols: board.cols.map((c) => c.id === colId ? { ...c, cards: [...c.cards, card] } : c) });
    };
    const toggleSubtask = (cardId, subtaskId) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((card) => card.id !== cardId ? card : { ...card, subtasks: card.subtasks.map((s) => s.id === subtaskId ? { ...s, done: !s.done } : s) }) })) });
    };
    const renameCol = (colId, title) => onUpdate({ ...board, cols: board.cols.map((c) => c.id === colId ? { ...c, title } : c) });
    const recolorCol = (colId, color) => onUpdate({ ...board, cols: board.cols.map((c) => c.id === colId ? { ...c, color } : c) });
    const deleteCol = (colId) => {
      if (board.cols.length <= 1) {
        alert("Can't delete the last column.");
        return;
      }
      if (!window.confirm("Delete this column and all its cards? Cards will be moved to trash.")) return;
      const col = board.cols.find((c) => c.id === colId);
      const trashedCards = (col?.cards || []).map((card) => ({ ...card, trashedAt: (/* @__PURE__ */ new Date()).toISOString() }));
      onUpdate({ ...board, trash: [...board.trash || [], ...trashedCards], cols: board.cols.filter((c) => c.id !== colId) });
    };
    const reorderCol = (fi, ti) => {
      const cols = [...board.cols];
      const [m] = cols.splice(fi, 1);
      cols.splice(ti, 0, m);
      onUpdate({ ...board, cols });
    };
    const onDragStart = (e, cardId, colId) => {
      drag.current = { cardId, colId };
      e.dataTransfer.effectAllowed = "move";
    };
    const onDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    };
    const onDrop = (e, targetColId) => {
      e.preventDefault();
      const { cardId, colId } = drag.current;
      if (!cardId || colId === targetColId) return;
      let moved;
      const newCols = board.cols.map((c) => {
        if (c.id === colId) {
          moved = c.cards.find((x) => x.id === cardId);
          return { ...c, cards: c.cards.filter((x) => x.id !== cardId) };
        }
        return c;
      }).map((c) => c.id === targetColId && moved ? { ...c, cards: [...c.cards, moved] } : c);
      onUpdate({ ...board, cols: newCols });
      drag.current = {};
    };
    const addColumnWithName = (name) => {
      if (!name || !name.trim()) return false;
      const colors = ["#e05c5c", "#e6906c", "#2d9e9e", "#9e6fcd", "#e6a817", "#4a9e6b"];
      onUpdate({ ...board, cols: [...board.cols, { id: "col" + Date.now(), title: name.trim(), color: colors[board.cols.length % colors.length], cards: [] }] });
      return true;
    };
    const addColumn = () => {
      if (!addColumnWithName(newColName)) return;
      setNewColName("");
      setAddColMode(false);
    };
    const openBoardMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const p = getPointerPos();
      setBoardCtxMenu({ x: e.clientX ?? p.x, y: e.clientY ?? p.y, type: "board" });
    };
    const allCards = board.cols.flatMap((c) => c.cards);
    const doneCards = allCards.filter((c) => c.status === "done").length;
    const boardPct = allCards.length > 0 ? Math.round(doneCards / allCards.length * 100) : 0;
    const todayStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    const overdueCount = allCards.filter((c) => c.due && c.due < todayStr && c.status !== "done").length;
    const dueSoonCount = allCards.filter((c) => {
      if (!c.due || c.status === "done") return false;
      const d = new Date(c.due + "T00:00:00");
      const td = new Date(todayStr + "T00:00:00");
      const diffDays = Math.round((d - td) / 864e5);
      return diffDays >= 0 && diffDays <= 2;
    }).length;
    const blockedCount = allCards.filter((c) => c.status === "blocked" || (c.blockedBy && c.blockedBy.length > 0)).length;
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0, minHeight: 0 }, onContextMenu: openBoardMenu }, /* @__PURE__ */ React.createElement("div", { "data-tb-toolbar": true, style: { padding: "5px 16px 4px", flexShrink: 0, display: "flex", alignItems: "center", gap: "6px", flexWrap: "nowrap", overflowX: "auto", scrollbarWidth: "none", borderBottom: `1px solid ${T.colBorder}` } }, /* @__PURE__ */ React.createElement("button", { onClick: toggleBulkMode, style: { padding: "4px 11px", borderRadius: "6px", border: `1px solid ${bulkMode ? T.accent : T.inputBorder}`, background: bulkMode ? T.accent + "22" : "transparent", color: bulkMode ? T.accent : T.textMuted, cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)", display: "flex", alignItems: "center", gap: "5px", transition: "all 0.15s" }, title: "Toggle bulk select mode" }, "\u2611 ", bulkMode ? "Exit Bulk" : "Bulk Select"), !bulkMode && allCards.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: expandAllCards, style: { padding: "4px 9px", borderRadius: "6px", border: `1px solid ${T.inputBorder}`, background: "transparent", color: T.textMuted, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" }, title: "Show full details on every card" }, "Expand all"), /* @__PURE__ */ React.createElement("button", { onClick: collapseAllCards, style: { padding: "4px 9px", borderRadius: "6px", border: `1px solid ${T.inputBorder}`, background: "transparent", color: T.textMuted, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" }, title: "Compact cards to title + summary only" }, "Collapse all")), displayPrefs.showBoardHealth !== false && !bulkMode && allCards.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", borderRadius: "999px", padding: "2px 8px", background: overdueCount > 0 ? T.danger + "20" : T.inputBg, color: overdueCount > 0 ? T.danger : T.textMuted, border: `1px solid ${overdueCount > 0 ? T.danger + "44" : T.inputBorder}` } }, "\u26A0 Overdue ", overdueCount), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", borderRadius: "999px", padding: "2px 8px", background: dueSoonCount > 0 ? T.accent + "22" : T.inputBg, color: dueSoonCount > 0 ? T.accent : T.textMuted, border: `1px solid ${dueSoonCount > 0 ? T.accent + "44" : T.inputBorder}` } }, "\u{1F4C5} Due Soon ", dueSoonCount), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", borderRadius: "999px", padding: "2px 8px", background: blockedCount > 0 ? T.danger + "20" : T.inputBg, color: blockedCount > 0 ? T.danger : T.textMuted, border: `1px solid ${blockedCount > 0 ? T.danger + "44" : T.inputBorder}` } }, "\u{1F6AB} Blocked ", blockedCount)), bulkMode && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.textMuted } }, selectedCards.size, " selected"), /* @__PURE__ */ React.createElement("button", { onClick: selectAll, style: { padding: "4px 9px", borderRadius: "6px", border: `1px solid ${T.inputBorder}`, background: "transparent", color: T.textMuted, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Select All"), /* @__PURE__ */ React.createElement("button", { onClick: clearSelection, style: { padding: "4px 9px", borderRadius: "6px", border: `1px solid ${T.inputBorder}`, background: "transparent", color: T.textMuted, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Clear"), selectedCards.size > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("select", { onChange: (e) => {
      if (e.target.value) bulkMoveToCol(e.target.value);
      e.target.value = "";
    }, defaultValue: "", style: { padding: "4px 8px", borderRadius: "6px", border: `1px solid ${T.accent}55`, background: T.inputBg, color: T.accent, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", outline: "none" } }, /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "\u2192 Move to Column"), board.cols.map((c) => /* @__PURE__ */ React.createElement("option", { key: c.id, value: c.id }, c.title))), boards && boards.length > 1 && /* @__PURE__ */ React.createElement("select", { onChange: (e) => {
      if (e.target.value) bulkMoveToBoard(e.target.value);
      e.target.value = "";
    }, defaultValue: "", style: { padding: "4px 8px", borderRadius: "6px", border: `1px solid ${T.accent}55`, background: T.inputBg, color: T.accent, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", outline: "none" } }, /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "\u2192 Move to Board"), boards.filter((b) => b.id !== board.id).map((b) => /* @__PURE__ */ React.createElement("option", { key: b.id, value: b.id }, b.name))), /* @__PURE__ */ React.createElement("select", { onChange: (e) => {
      if (e.target.value) bulkSetStatus(e.target.value);
      e.target.value = "";
    }, defaultValue: "", style: { padding: "4px 8px", borderRadius: "6px", border: `1px solid ${T.inputBorder}`, background: T.inputBg, color: T.text, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", outline: "none" } }, /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "Set Status"), Object.entries(STATUSES).map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, v.label))), /* @__PURE__ */ React.createElement("select", { onChange: (e) => {
      if (e.target.value) bulkSetPriority(e.target.value);
      e.target.value = "";
    }, defaultValue: "", style: { padding: "4px 8px", borderRadius: "6px", border: `1px solid ${T.inputBorder}`, background: T.inputBg, color: T.text, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", outline: "none" } }, /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "Set Priority"), Object.entries(PRIORITIES).map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, v.label))), /* @__PURE__ */ React.createElement("button", { onClick: bulkArchive, style: { padding: "4px 9px", borderRadius: "6px", border: `1px solid ${T.textMuted}44`, color: T.textMuted, background: "transparent", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Archive"), /* @__PURE__ */ React.createElement("button", { onClick: bulkTrash, style: { padding: "4px 9px", borderRadius: "6px", border: `1px solid ${T.danger}55`, color: T.danger, background: "transparent", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "\u{1F5D1} Trash")))), allCards.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "5px 16px 4px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted } }, "Board Progress"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: boardPct === 100 ? T.progressDone : T.accent } }, doneCards, "/", allCards.length, " done \xB7 ", boardPct, "%")), /* @__PURE__ */ React.createElement("div", { style: { height: "3px", background: T.progressBg, borderRadius: "2px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: `${boardPct}%`, background: boardPct === 100 ? T.progressDone : T.progressFill, borderRadius: "2px", transition: "width 0.4s" } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflowX: "auto", overflowY: "auto", padding: "16px 24px 20px", display: "flex", gap: "14px", alignItems: "flex-start" } }, board.cols.map((col, idx) => /* @__PURE__ */ React.createElement(
      Column,
      {
        key: col.id,
        col,
        colIdx: idx,
        onAddCard: addCard,
        onOpenCard: setEditCard,
        onDragStart,
        onDrop,
        onDragOver,
        onToggleSubtask: toggleSubtask,
        onRenameCol: renameCol,
        onReorderCol: reorderCol,
        onDeleteCol: deleteCol,
        onRecolorCol: recolorCol,
        searchQuery,
        filterStatus,
        filterPriority,
        displayPrefs,
        onContextMenu: (e, subType, cardId, sourceColId) => {
          e.preventDefault();
          e.stopPropagation();
          const p = getPointerPos();
          if (subType === "card") {
            setBoardCtxMenu({ x: e.clientX ?? p.x, y: e.clientY ?? p.y, type: "card", cardId, colId: sourceColId });
          } else {
            setBoardCtxMenu({ x: e.clientX ?? p.x, y: e.clientY ?? p.y, type: "col", colId: col.id });
          }
        },
        selectedCards,
        onSelectCard: toggleSelectCard,
        bulkMode,
        collapsedCards,
        onToggleCardCollapse: toggleCardCollapse
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { minWidth: "200px", flexShrink: 0 } }, addColMode ? /* @__PURE__ */ React.createElement("div", { style: { background: T.colBg, border: `1px solid ${T.accent}55`, borderRadius: "12px", padding: "14px" } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: newColName,
        onChange: (e) => setNewColName(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") addColumn();
          if (e.key === "Escape") setAddColMode(false);
        },
        placeholder: "Column name\u2026",
        autoFocus: true,
        style: { width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${T.colBorder}`, color: T.text, fontSize: "12px", fontFamily: "var(--app-font)", padding: "3px 0 7px", outline: "none", marginBottom: "9px", boxSizing: "border-box" }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, /* @__PURE__ */ React.createElement("button", { onClick: addColumn, style: { flex: 1, background: T.accent, border: "none", color: "#fff", borderRadius: "5px", padding: "6px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)" } }, "Create"), /* @__PURE__ */ React.createElement("button", { onClick: () => setAddColMode(false), style: { background: "none", border: `1px solid ${T.colBorder}`, color: T.textMuted, borderRadius: "5px", padding: "6px 8px", cursor: "pointer", fontSize: "11px" } }, "\u2715"))) : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setAddColMode(true),
        style: { width: "100%", background: "transparent", border: `1px dashed ${T.addBucketBorder}`, borderRadius: "12px", color: T.textMuted, fontSize: "11px", padding: "14px", cursor: "pointer", fontFamily: "var(--app-font)", letterSpacing: "0.06em", transition: "all 0.2s" },
        onMouseEnter: (e) => {
          e.currentTarget.style.borderColor = T.accent + "77";
          e.currentTarget.style.color = T.accent;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.borderColor = T.addBucketBorder;
          e.currentTarget.style.color = T.textMuted;
        }
      },
      "+ New Column"
    ))), boardCtxMenu && /* @__PURE__ */ React.createElement(BoardCtxMenu, {
      menu: boardCtxMenu,
      onClose: () => setBoardCtxMenu(null),
      board,
      onUpdate,
      boards,
      onMoveCardsToBoard,
      renameCol,
      reorderCol,
      deleteCol,
      setSelectedCards,
      setBulkMode,
      setEditCard,
      Column,
      addColumnWithName,
      toggleBulkMode,
      selectAll,
      clearSelection,
      bulkMode,
      selectedCardsCount: selectedCards.size
    }), editCard && /* @__PURE__ */ React.createElement(
      CardModal,
      {
        card: editCard,
        onSave: saveCard,
        onClose: () => setEditCard(null),
        onTrash: trashCard,
        onArchive: archiveCard,
        allCards: board.cols.flatMap((c) => c.cards),
        onCardLink: (title) => {
          const found = board.cols.flatMap((c) => c.cards).find((c) => c.title.toLowerCase() === title.toLowerCase());
          if (found) setEditCard(found);
        }
      }
    ), showTrash && /* @__PURE__ */ React.createElement(TrashPanel, { trash: board.trash || [], onRestore: restoreFromTrash, onDeletePermanent: deleteCardPermanent, onClose: () => setShowTrash(false) }));
  }
  const CONN_TYPES = {
    relates: { label: "Relates to", color: "#858585", dash: "" },
    blocks: { label: "Blocks", color: "#f44747", dash: "6,3" },
    dependson: { label: "Depends on", color: "#e6a817", dash: "4,4" },
    leadsto: { label: "Leads to", color: "#4ec9b0", dash: "" },
    similar: { label: "Similar to", color: "#c586c0", dash: "2,3" }
  };
  function CanvasView({ boards, canvasData, onCanvasChange, onBoardsUpdate }) {
    const T = useT();
    const [nodes, setNodes] = useState(canvasData.nodes || []);
    const [conns, setConns] = useState(canvasData.connections || []);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [selected, setSelected] = useState(null);
    const [drawing, setDrawing] = useState(null);
    const [drawEnd, setDrawEnd] = useState(null);
    const [connDialog, setConnDialog] = useState(null);
    const [editNote, setEditNote] = useState(null);
    const [showCardPicker, setShowCardPicker] = useState(false);
    const [editCardNode, setEditCardNode] = useState(null);
    const [draggingNode, setDraggingNode] = useState(null);
    const [resizingNode, setResizingNode] = useState(null);
    const [isPanning, setIsPanning] = useState(false);
    const panStart = useRef(null);
    const svgRef = useRef(null);
    const dirty = useRef(false);
    const [snapGrid, setSnapGrid] = useState(() => {
      try { return localStorage.getItem("taskboard_canvas_snap") === "1"; } catch (e) { return false; }
    });
    const [showMinimap, setShowMinimap] = useState(() => {
      try {
        const v = localStorage.getItem("taskboard_canvas_minimap");
        return v === null ? true : v === "1";
      } catch (e) { return true; }
    });
    const [showGrid, setShowGrid] = useState(() => {
      try {
        const v = localStorage.getItem("taskboard_canvas_grid");
        return v === null ? true : v === "1";
      } catch (e) { return true; }
    });
    const [canvasSearch, setCanvasSearch] = useState("");
    const [searchFocused, setSearchFocused] = useState(null);
    const [selectionRect, setSelectionRect] = useState(null);
    const [selectionStart, setSelectionStart] = useState(null);
    const [multiSelected, setMultiSelected] = useState(/* @__PURE__ */ new Set());
    const [frames, setFrames] = useState(canvasData.frames || []);
    const [draggingFrame, setDraggingFrame] = useState(null);
    const [addingFrame, setAddingFrame] = useState(false);
    const [frameStart, setFrameStart] = useState(null);
    const [frameRect, setFrameRect] = useState(null);
    const [contextMenu, setContextMenu] = useState(null);
    const [hiddenConnTypes, setHiddenConnTypes] = useState(/* @__PURE__ */ new Set());
    const [editingConnId, setEditingConnId] = useState(null);
    const lastTouchDist = useRef(null);
    const lastTouchCenter = useRef(null);
    useEffect(() => {
      if (dirty.current) {
        onCanvasChange({ nodes, connections: conns });
        dirty.current = false;
      }
    }, [nodes, conns]);
    const save = (newNodes, newConns, newFrames) => {
      dirty.current = true;
      if (newNodes !== void 0) setNodes(newNodes);
      if (newConns !== void 0) setConns(newConns);
      if (newFrames !== void 0) setFrames(newFrames);
    };
    useEffect(() => {
      try { localStorage.setItem("taskboard_canvas_snap", snapGrid ? "1" : "0"); } catch (e) {}
    }, [snapGrid]);
    useEffect(() => {
      try { localStorage.setItem("taskboard_canvas_minimap", showMinimap ? "1" : "0"); } catch (e) {}
    }, [showMinimap]);
    useEffect(() => {
      try { localStorage.setItem("taskboard_canvas_grid", showGrid ? "1" : "0"); } catch (e) {}
    }, [showGrid]);
    useEffect(() => {
      if (dirty.current) {
        onCanvasChange({ nodes, connections: conns, frames });
        dirty.current = false;
      }
    }, [frames]);
    const snapVal = (v) => snapGrid ? Math.round(v / 20) * 20 : v;
    const autoLayout = (mode) => {
      if (!nodes.length) return;
      if (mode === "grid") {
        const cols = Math.ceil(Math.sqrt(nodes.length));
        const W = 240, H = 140, GAP = 24;
        const newNodes = nodes.map((n, i) => ({
          ...n,
          x: i % cols * (W + GAP),
          y: Math.floor(i / cols) * (H + GAP)
        }));
        save(newNodes, void 0);
      } else if (mode === "tree") {
        const roots = nodes.filter((n) => !conns.some((c) => c.toId === n.id));
        if (!roots.length) {
          autoLayout("grid");
          return;
        }
        const placed = /* @__PURE__ */ new Map();
        const levelW = 260, levelH = 160;
        const place = (nodeId, level, col, colCount) => {
          const node = nodes.find((n) => n.id === nodeId);
          if (!node || placed.has(nodeId)) return;
          placed.set(nodeId, {
            x: col * levelW - colCount * levelW / 2 + 400,
            y: level * levelH + 50
          });
          const children = conns.filter((c) => c.fromId === nodeId).map((c) => c.toId);
          children.forEach((cid, i) => place(cid, level + 1, i, children.length));
        };
        roots.forEach((r, i) => place(r.id, 0, i, roots.length));
        const newNodes = nodes.map((n) => placed.has(n.id) ? { ...n, ...placed.get(n.id) } : n);
        save(newNodes, void 0);
      } else if (mode === "force") {
        let pos = nodes.map((n) => ({ id: n.id, x: n.x + (n.w || 200) / 2, y: n.y + (n.h || 100) / 2 }));
        for (let iter = 0; iter < 80; iter++) {
          const forces = pos.map(() => ({ fx: 0, fy: 0 }));
          for (let i = 0; i < pos.length; i++) for (let j = i + 1; j < pos.length; j++) {
            const dx = pos[i].x - pos[j].x, dy = pos[i].y - pos[j].y;
            const dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
            const f = Math.min(8e3 / (dist * dist), 60);
            forces[i].fx += dx / dist * f;
            forces[i].fy += dy / dist * f;
            forces[j].fx -= dx / dist * f;
            forces[j].fy -= dy / dist * f;
          }
          conns.forEach((c) => {
            const fi = pos.findIndex((p) => p.id === c.fromId), ti = pos.findIndex((p) => p.id === c.toId);
            if (fi < 0 || ti < 0) return;
            const dx = pos[ti].x - pos[fi].x, dy = pos[ti].y - pos[fi].y;
            const dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
            const ideal = 280, f = (dist - ideal) * 0.05;
            forces[fi].fx += dx / dist * f;
            forces[fi].fy += dy / dist * f;
            forces[ti].fx -= dx / dist * f;
            forces[ti].fy -= dy / dist * f;
          });
          pos = pos.map((p, i) => ({ ...p, x: p.x + Math.max(-20, Math.min(20, forces[i].fx)), y: p.y + Math.max(-20, Math.min(20, forces[i].fy)) }));
        }
        const newNodes = nodes.map((n) => {
          const p = pos.find((p2) => p2.id === n.id);
          if (!p) return n;
          const w = n.w || 200, h = n.h || 100;
          return { ...n, x: p.x - w / 2, y: p.y - h / 2 };
        });
        save(newNodes, void 0);
      }
      setTimeout(zoomToFit, 50);
    };
    const zoomToFit = () => {
      if (!nodes.length || !svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const vw = rect.width, vh = rect.height;
      const xs = nodes.map((n) => n.x), ys = nodes.map((n) => n.y);
      const xe = nodes.map((n) => n.x + (n.w || 200)), ye = nodes.map((n) => n.y + (n.h || 100));
      const minX = Math.min(...xs) - 40, minY = Math.min(...ys) - 40;
      const maxX = Math.max(...xe) + 40, maxY = Math.max(...ye) + 40;
      const bw = maxX - minX, bh = maxY - minY;
      const newZoom = Math.min(3, Math.max(0.15, Math.min(vw / bw, vh / bh)));
      setZoom(newZoom);
      setPan({ x: vw / 2 - (minX + bw / 2) * newZoom, y: vh / 2 - (minY + bh / 2) * newZoom });
    };
    const jumpToNode = (nodeId) => {
      const node = nodes.find((n) => n.id === nodeId);
      if (!node || !svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const cx = node.x + (node.w || 200) / 2, cy = node.y + (node.h || 100) / 2;
      setPan({ x: rect.width / 2 - cx * zoom, y: rect.height / 2 - cy * zoom });
      setSelected(nodeId);
      setSearchFocused(nodeId);
      setTimeout(() => setSearchFocused(null), 1500);
    };
    const screenToCanvas = (sx, sy) => ({
      x: (sx - pan.x) / zoom,
      y: (sy - pan.y) / zoom
    });
    const getCardData = (node) => {
      if (!node.cardRef) return null;
      const board = boards.find((b) => b.id === node.cardRef.boardId);
      if (!board) return null;
      return board.cols.flatMap((c) => c.cards).find((c) => c.id === node.cardRef.cardId) || null;
    };
    const handleWheel = (e) => {
      e.preventDefault();
      const rect = svgRef.current.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newZoom = Math.min(3, Math.max(0.2, zoom * delta));
      setPan((p) => ({
        x: mx - (mx - p.x) * (newZoom / zoom),
        y: my - (my - p.y) * (newZoom / zoom)
      }));
      setZoom(newZoom);
    };
    const handleBgMouseDown = (e) => {
      setContextMenu(null);
      if (e.button === 2) return;
      if (e.target !== svgRef.current && e.target.dataset.bg !== "1" && e.target.dataset.frame !== "1") return;
      if (addingFrame) {
        const rect = svgRef.current.getBoundingClientRect();
        const cp = screenToCanvas(e.clientX - rect.left, e.clientY - rect.top);
        setFrameStart({ sx: e.clientX, sy: e.clientY, cx: cp.x, cy: cp.y });
        return;
      }
      if (e.shiftKey) {
        const rect = svgRef.current.getBoundingClientRect();
        setSelectionStart({ sx: e.clientX, sy: e.clientY });
        setSelectionRect(null);
        return;
      }
      setSelected(null);
      setMultiSelected(/* @__PURE__ */ new Set());
      setDrawing(null);
      setDrawEnd(null);
      setIsPanning(true);
      panStart.current = { mx: e.clientX, my: e.clientY, px: pan.x, py: pan.y };
    };
    const handleBgContextMenu = (e) => {
      e.preventDefault();
      if (e.target !== svgRef.current && e.target.dataset.bg !== "1") return;
      const rect = svgRef.current.getBoundingClientRect();
      const cp = screenToCanvas(e.clientX - rect.left, e.clientY - rect.top);
      setContextMenu({ x: e.clientX, y: e.clientY, canvasX: cp.x, canvasY: cp.y, type: "bg" });
    };
    const handleNodeContextMenu = (e, nodeId) => {
      e.preventDefault();
      e.stopPropagation();
      setContextMenu({ x: e.clientX, y: e.clientY, nodeId, type: "node" });
      setSelected(nodeId);
    };
    const handleConnContextMenu = (e, connId) => {
      e.preventDefault();
      e.stopPropagation();
      setContextMenu({ x: e.clientX, y: e.clientY, connId, type: "conn" });
    };
    const handleMouseMove = (e) => {
      if (isPanning && panStart.current) {
        setPan({
          x: panStart.current.px + (e.clientX - panStart.current.mx),
          y: panStart.current.py + (e.clientY - panStart.current.my)
        });
      }
      if (draggingNode) {
        const dx = (e.clientX - draggingNode.startX) / zoom;
        const dy = (e.clientY - draggingNode.startY) / zoom;
        const newX = snapVal(draggingNode.origX + dx);
        const newY = snapVal(draggingNode.origY + dy);
        if (multiSelected.size > 1 && multiSelected.has(draggingNode.nodeId)) {
          const ddx = newX - draggingNode.origX, ddy = newY - draggingNode.origY;
          setNodes((ns) => ns.map((n) => {
            if (!multiSelected.has(n.id)) return n;
            const orig = draggingNode.multiOrig?.[n.id];
            if (!orig) return n;
            return { ...n, x: snapVal(orig.x + ddx), y: snapVal(orig.y + ddy) };
          }));
        } else {
          setNodes((ns) => ns.map((n) => n.id === draggingNode.nodeId ? { ...n, x: newX, y: newY } : n));
        }
      }
      if (resizingNode) {
        const dx = (e.clientX - resizingNode.startX) / zoom;
        const dy = (e.clientY - resizingNode.startY) / zoom;
        const c = resizingNode.corner;
        setNodes((ns) => ns.map((n) => {
          if (n.id !== resizingNode.nodeId) return n;
          let newW = resizingNode.origW, newH = resizingNode.origH;
          let newX = resizingNode.origX, newY = resizingNode.origY;
          if (c === "se") {
            newW = Math.max(120, resizingNode.origW + dx);
            newH = Math.max(60, resizingNode.origH + dy);
          }
          if (c === "sw") {
            newW = Math.max(120, resizingNode.origW - dx);
            newH = Math.max(60, resizingNode.origH + dy);
            newX = resizingNode.origX + (resizingNode.origW - newW);
          }
          if (c === "ne") {
            newW = Math.max(120, resizingNode.origW + dx);
            newH = Math.max(60, resizingNode.origH - dy);
            newY = resizingNode.origY + (resizingNode.origH - newH);
          }
          if (c === "nw") {
            newW = Math.max(120, resizingNode.origW - dx);
            newH = Math.max(60, resizingNode.origH - dy);
            newX = resizingNode.origX + (resizingNode.origW - newW);
            newY = resizingNode.origY + (resizingNode.origH - newH);
          }
          return { ...n, x: newX, y: newY, w: newW, h: newH };
        }));
      }
      if (drawing) {
        const rect = svgRef.current.getBoundingClientRect();
        setDrawEnd({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
      if (draggingFrame) {
        const dx = (e.clientX - draggingFrame.startX) / zoom;
        const dy = (e.clientY - draggingFrame.startY) / zoom;
        setFrames((fs) => fs.map((f) => f.id === draggingFrame.id ? { ...f, x: draggingFrame.origX + dx, y: draggingFrame.origY + dy } : f));
      }
      if (selectionStart && !draggingNode) {
        const rect = svgRef.current.getBoundingClientRect();
        const sx = Math.min(e.clientX, selectionStart.sx) - rect.left;
        const sy = Math.min(e.clientY, selectionStart.sy) - rect.top;
        const sw = Math.abs(e.clientX - selectionStart.sx);
        const sh = Math.abs(e.clientY - selectionStart.sy);
        setSelectionRect({ sx, sy, sw, sh });
      }
      if (frameStart) {
        const rect = svgRef.current.getBoundingClientRect();
        const cp = screenToCanvas(e.clientX - rect.left, e.clientY - rect.top);
        setFrameRect({
          x: Math.min(frameStart.cx, cp.x),
          y: Math.min(frameStart.cy, cp.y),
          w: Math.abs(cp.x - frameStart.cx),
          h: Math.abs(cp.y - frameStart.cy)
        });
      }
    };
    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDist.current = Math.sqrt(dx * dx + dy * dy);
        lastTouchCenter.current = {
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2
        };
      }
    };
    const handleTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const center = {
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2
        };
        if (lastTouchDist.current) {
          const scale = dist / lastTouchDist.current;
          const rect = svgRef.current.getBoundingClientRect();
          const mx = center.x - rect.left, my = center.y - rect.top;
          const newZoom = Math.min(3, Math.max(0.15, zoom * scale));
          setPan((p) => ({
            x: mx - (mx - p.x) * (newZoom / zoom),
            y: my - (my - p.y) * (newZoom / zoom)
          }));
          setZoom(newZoom);
        }
        if (lastTouchCenter.current) {
          setPan((p) => ({
            x: p.x + (center.x - lastTouchCenter.current.x),
            y: p.y + (center.y - lastTouchCenter.current.y)
          }));
        }
        lastTouchDist.current = dist;
        lastTouchCenter.current = center;
      }
    };
    const handleTouchEnd = () => {
      lastTouchDist.current = null;
      lastTouchCenter.current = null;
    };
    const handleMouseUp = () => {
      if (draggingNode || resizingNode) {
        dirty.current = true;
        onCanvasChange({ nodes, connections: conns, frames });
      }
      if (selectionStart && selectionRect && selectionRect.sw > 5) {
        const rect = svgRef.current?.getBoundingClientRect();
        if (rect) {
          const tl = screenToCanvas(selectionRect.sx, selectionRect.sy);
          const br = screenToCanvas(selectionRect.sx + selectionRect.sw, selectionRect.sy + selectionRect.sh);
          const selected2 = new Set(nodes.filter((n) => {
            const nrx = n.x, nry = n.y, nrw = nrx + (n.w || 200), nrh = nry + (n.h || 100);
            return nrx < br.x && nrw > tl.x && nry < br.y && nrh > tl.y;
          }).map((n) => n.id));
          setMultiSelected(selected2);
          if (selected2.size > 0) setSelected([...selected2][0]);
        }
      }
      if (frameStart && frameRect && frameRect.w > 30 && frameRect.h > 30) {
        const newFrame = {
          id: "f" + Date.now(),
          label: "Group",
          x: frameRect.x,
          y: frameRect.y,
          w: frameRect.w,
          h: frameRect.h,
          color: "#5b9bd5"
        };
        save(void 0, void 0, [...frames, newFrame]);
        setAddingFrame(false);
      }
      setIsPanning(false);
      setDraggingNode(null);
      setResizingNode(null);
      if (draggingFrame) {
        dirty.current = true;
        onCanvasChange({ nodes, connections: conns, frames });
      }
      setDraggingFrame(null);
      setSelectionStart(null);
      setSelectionRect(null);
      setFrameStart(null);
      setFrameRect(null);
      panStart.current = null;
    };
    const addStickyNote = () => {
      const cx = -pan.x / zoom + 200 + Math.random() * 100;
      const cy = -pan.y / zoom + 150 + Math.random() * 100;
      const node = {
        id: "n" + Date.now(),
        type: "note",
        x: cx,
        y: cy,
        w: 180,
        h: 120,
        text: "New note",
        color: "#e6a817"
      };
      save([...nodes, node], void 0);
      setEditNote(node.id);
    };
    const addCardNode = (boardId, card) => {
      const cx = -pan.x / zoom + 160 + Math.random() * 120;
      const cy = -pan.y / zoom + 120 + Math.random() * 100;
      if (nodes.find((n) => n.cardRef?.cardId === card.id)) return;
      const autoH2 = 80 + (card.note ? 24 : 0) + (card.tags?.length > 0 ? 18 : 0) + (card.subtasks?.length || 0) * 16 + (card.due ? 16 : 0);
      const node = {
        id: "n" + Date.now(),
        type: "card",
        x: cx,
        y: cy,
        w: 220,
        h: Math.max(90, Math.min(autoH2, 320)),
        cardRef: { boardId, cardId: card.id }
      };
      save([...nodes, node], void 0);
      setShowCardPicker(false);
    };
    const deleteNode = (nodeId) => {
      save(
        nodes.filter((n) => n.id !== nodeId),
        conns.filter((c) => c.fromId !== nodeId && c.toId !== nodeId)
      );
      setSelected(null);
    };
    const startDrawing = (e, nodeId) => {
      e.stopPropagation();
      setDrawing({ fromId: nodeId });
      const rect = svgRef.current.getBoundingClientRect();
      setDrawEnd({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const finishDrawing = (toId) => {
      if (!drawing || drawing.fromId === toId) {
        setDrawing(null);
        setDrawEnd(null);
        return;
      }
      setConnDialog({ fromId: drawing.fromId, toId });
      setDrawing(null);
      setDrawEnd(null);
    };
    const addConnection = (type, label) => {
      if (!connDialog) return;
      const conn = {
        id: "c" + Date.now(),
        fromId: connDialog.fromId,
        toId: connDialog.toId,
        type,
        label: label || ""
      };
      const exactDup = conns.find((c) => c.fromId === conn.fromId && c.toId === conn.toId && c.type === conn.type);
      if (!exactDup) save(void 0, [...conns, conn]);
      setConnDialog(null);
    };
    const deleteConn = (connId) => {
      save(void 0, conns.filter((c) => c.id !== connId));
    };
    const nodeCenter = (node) => ({
      x: node.x + (node.w || 200) / 2,
      y: node.y + (node.h || 80) / 2
    });
    const nodeEdgePoint = (node, targetX, targetY) => {
      const cx = node.x + (node.w || 200) / 2;
      const cy = node.y + (node.h || 80) / 2;
      const hw = (node.w || 200) / 2;
      const hh = (node.h || 80) / 2;
      const dx = targetX - cx;
      const dy = targetY - cy;
      if (dx === 0 && dy === 0) return { x: cx + hw, y: cy };
      const absDx = Math.abs(dx), absDy = Math.abs(dy);
      if (absDx / hw > absDy / hh) {
        const t = hw / absDx;
        return { x: cx + dx * t, y: cy + dy * t };
      } else {
        const t = hh / absDy;
        return { x: cx + dx * t, y: cy + dy * t };
      }
    };
    const cs = (x, y) => ({ x: x * zoom + pan.x, y: y * zoom + pan.y });
    const renderArrow = (conn, idx) => {
      const from = nodes.find((n) => n.id === conn.fromId);
      const to = nodes.find((n) => n.id === conn.toId);
      if (!from || !to) return null;
      const fromC = nodeCenter(from);
      const toC = nodeCenter(to);
      const fromEdge = nodeEdgePoint(from, toC.x, toC.y);
      const toEdge = nodeEdgePoint(to, fromC.x, fromC.y);
      const fc = cs(fromEdge.x, fromEdge.y);
      const tc = cs(toEdge.x, toEdge.y);
      const ct = CONN_TYPES[conn.type] || CONN_TYPES.relates;
      const mid = { x: (fc.x + tc.x) / 2, y: (fc.y + tc.y) / 2 };
      const dx = tc.x - fc.x, dy = tc.y - fc.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const ux = dx / len, uy = dy / len;
      const arrSize = 10;
      const ax = tc.x - ux * arrSize * 2;
      const ay = tc.y - uy * arrSize * 2;
      const arrowPts = `${tc.x},${tc.y} ${ax - uy * arrSize * 0.6},${ay + ux * arrSize * 0.6} ${ax + uy * arrSize * 0.6},${ay - ux * arrSize * 0.6}`;
      const dashArr = ct.dash ? ct.dash.split(",").map((n) => parseFloat(n) * zoom).join(",") : "";
      const getEdgeNormal = (node, edgePt) => {
        const cx2 = node.x + (node.w || 200) / 2;
        const cy2 = node.y + (node.h || 80) / 2;
        const hw = (node.w || 200) / 2;
        const hh = (node.h || 80) / 2;
        const ex = edgePt.x - cx2, ey = edgePt.y - cy2;
        if (Math.abs(ex) >= Math.abs(ey) * (hw / hh)) {
          return ex > 0 ? { nx: 1, ny: 0 } : { nx: -1, ny: 0 };
        } else {
          return ey > 0 ? { nx: 0, ny: 1 } : { nx: 0, ny: -1 };
        }
      };
      const fromNorm = getEdgeNormal(from, fromEdge);
      const toNorm = getEdgeNormal(to, toEdge);
      const dist = Math.sqrt((tc.x - fc.x) ** 2 + (tc.y - fc.y) ** 2);
      const parallelConns = conns.filter((c) =>
        (c.fromId === conn.fromId && c.toId === conn.toId) ||
        (c.fromId === conn.toId && c.toId === conn.fromId)
      );
      const parallelIdx = parallelConns.findIndex((c) => c.id === conn.id);
      const parallelCount = parallelConns.length;
      const spreadStep = 60 * zoom;
      const spreadOffset = parallelCount > 1 ? (parallelIdx - (parallelCount - 1) / 2) * spreadStep : 0;
      const perpX = -uy, perpY = ux;
      const handleLen = Math.max(40 * zoom, dist * 0.4);
      const cp1x = fc.x + fromNorm.nx * handleLen + perpX * spreadOffset;
      const cp1y = fc.y + fromNorm.ny * handleLen + perpY * spreadOffset;
      const cp2x = tc.x + toNorm.nx * handleLen + perpX * spreadOffset;
      const cp2y = tc.y + toNorm.ny * handleLen + perpY * spreadOffset;
      const pathD = `M${fc.x},${fc.y} C${cp1x},${cp1y} ${cp2x},${cp2y} ${tc.x},${tc.y}`;
      const t = 0.97;
      const tx2 = (1-t)**3*fc.x + 3*(1-t)**2*t*cp1x + 3*(1-t)*t**2*cp2x + t**3*tc.x;
      const ty2 = (1-t)**3*fc.y + 3*(1-t)**2*t*cp1y + 3*(1-t)*t**2*cp2y + t**3*tc.y;
      const tdx = tc.x - tx2, tdy = tc.y - ty2, tlen = Math.sqrt(tdx * tdx + tdy * tdy) || 1;
      const tux = tdx / tlen, tuy = tdy / tlen;
      const arrSize2 = 9;
      const ax2 = tc.x - tux * arrSize2 * 2, ay2 = tc.y - tuy * arrSize2 * 2;
      const arrowPts2 = `${tc.x},${tc.y} ${ax2 - tuy * arrSize2 * 0.6},${ay2 + tux * arrSize2 * 0.6} ${ax2 + tuy * arrSize2 * 0.6},${ay2 - tux * arrSize2 * 0.6}`;
      const midBx = (1/8)*fc.x + (3/8)*cp1x + (3/8)*cp2x + (1/8)*tc.x;
      const midBy = (1/8)*fc.y + (3/8)*cp1y + (3/8)*cp2y + (1/8)*tc.y;
      if (hiddenConnTypes.has(conn.type)) return null;
      return /* @__PURE__ */ React.createElement(
        "g",
        {
          key: conn.id,
          style: { cursor: "pointer" },
          onClick: () => setEditingConnId(conn.id === editingConnId ? null : conn.id),
          onContextMenu: (e) => handleConnContextMenu(e, conn.id)
        },
        /* @__PURE__ */ React.createElement(
          "path",
          {
            d: pathD,
            fill: "none",
            stroke: ct.color,
            strokeWidth: 2 * zoom,
            strokeDasharray: dashArr,
            opacity: 0.85
          }
        ),
        /* @__PURE__ */ React.createElement("polygon", { points: arrowPts2, fill: ct.color, opacity: 0.9 }),
        conn.bidir && (() => {
          const bt = 0.03;
          const bx2 = (1-bt)**3*fc.x + 3*(1-bt)**2*bt*cp1x + 3*(1-bt)*bt**2*cp2x + bt**3*tc.x;
          const by2 = (1-bt)**3*fc.y + 3*(1-bt)**2*bt*cp1y + 3*(1-bt)*bt**2*cp2y + bt**3*tc.y;
          const bdx = fc.x - bx2, bdy = fc.y - by2, blen = Math.sqrt(bdx * bdx + bdy * bdy) || 1;
          const bux = bdx / blen, buy = bdy / blen, bs = 9;
          const bax2 = fc.x - bux * bs * 2, bay2 = fc.y - buy * bs * 2;
          return /* @__PURE__ */ React.createElement("polygon", { points: `${fc.x},${fc.y} ${bax2 - buy * bs * 0.6},${bay2 + bux * bs * 0.6} ${bax2 + buy * bs * 0.6},${bay2 - bux * bs * 0.6}`, fill: ct.color, opacity: 0.9 });
        })(),
        /* @__PURE__ */ React.createElement("path", { d: pathD, fill: "none", stroke: "transparent", strokeWidth: 14 }),
        (conn.label || conn.type !== "relates") && /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: midBx - 28,
            y: midBy - 9,
            width: 56,
            height: 16,
            rx: 4,
            fill: T.modalBg,
            opacity: 0.88
          }
        ), /* @__PURE__ */ React.createElement(
          "text",
          {
            x: midBx,
            y: midBy + 3,
            textAnchor: "middle",
            fontSize: 10 * zoom,
            fill: ct.color,
            fontFamily: "var(--app-font)"
          },
          conn.label || ct.label
        ))
      );
    };
    const renderNode = (node) => {
      const sc = cs(node.x, node.y);
      const sw = (node.w || 200) * zoom;
      const sh = (node.h || 80) * zoom;
      const isSel = selected === node.id;
      const isDrawingFrom = drawing?.fromId === node.id;
      if (node.type === "note") {
        const noteColor = node.color || "#e6a817";
        const RS2 = [{ corner: "se", cx: sc.x + sw, cy: sc.y + sh }, { corner: "sw", cx: sc.x, cy: sc.y + sh }, { corner: "ne", cx: sc.x + sw, cy: sc.y }, { corner: "nw", cx: sc.x, cy: sc.y }];
        return /* @__PURE__ */ React.createElement(
          "g",
          {
            key: node.id,
            onMouseUp: () => {
              if (drawing) finishDrawing(node.id);
            }
          },
          /* @__PURE__ */ React.createElement("rect", { x: sc.x + 3 * zoom, y: sc.y + 3 * zoom, width: sw, height: sh, rx: 6 * zoom, fill: "rgba(0,0,0,0.22)" }),
          /* @__PURE__ */ React.createElement(
            "rect",
            {
              x: sc.x,
              y: sc.y,
              width: sw,
              height: sh,
              rx: 6 * zoom,
              fill: noteColor,
              opacity: 0.93,
              stroke: isSel ? "rgba(255,255,255,0.8)" : noteColor,
              strokeWidth: isSel ? 2 * zoom : 1 * zoom,
              style: { cursor: "move" },
              onMouseDown: (e) => {
                if (e.button !== 0) return;
                e.stopPropagation();
                setSelected(node.id);
                setDraggingNode({ nodeId: node.id, startX: e.clientX, startY: e.clientY, origX: node.x, origY: node.y });
              }
            }
          ),
          /* @__PURE__ */ React.createElement(
            "rect",
            {
              x: sc.x,
              y: sc.y,
              width: sw,
              height: 22 * zoom,
              rx: 6 * zoom,
              fill: "rgba(0,0,0,0.15)",
              style: { cursor: "move" },
              onMouseDown: (e) => {
                if (e.button !== 0) return;
                e.stopPropagation();
                setSelected(node.id);
                setDraggingNode({ nodeId: node.id, startX: e.clientX, startY: e.clientY, origX: node.x, origY: node.y });
              }
            }
          ),
          /* @__PURE__ */ React.createElement(
            "polygon",
            {
              points: `${sc.x + sw - 14 * zoom},${sc.y} ${sc.x + sw},${sc.y + 14 * zoom} ${sc.x + sw},${sc.y}`,
              fill: "rgba(0,0,0,0.18)"
            }
          ),
          /* @__PURE__ */ React.createElement(
            "foreignObject",
            {
              x: sc.x + 8 * zoom,
              y: sc.y + 26 * zoom,
              width: sw - 16 * zoom,
              height: sh - 34 * zoom,
              style: { pointerEvents: "none" }
            },
            /* @__PURE__ */ React.createElement(
              "div",
              {
                xmlns: "http://www.w3.org/1999/xhtml",
                style: {
                  fontSize: Math.max(10, 11 * zoom) + "px",
                  color: "rgba(0,0,0,0.85)",
                  fontFamily: "var(--app-font)",
                  lineHeight: 1.5,
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                  height: "100%",
                  overflow: "hidden",
                  userSelect: "none"
                }
              },
              node.text || "Double-click to edit\u2026"
            )
          ),
          /* @__PURE__ */ React.createElement(
            "rect",
            {
              x: sc.x,
              y: sc.y,
              width: sw,
              height: sh,
              rx: 6 * zoom,
              fill: "transparent",
              style: { cursor: "move" },
              onMouseDown: (e) => {
                if (e.button !== 0) return;
                e.stopPropagation();
                setSelected(node.id);
                setDraggingNode({ nodeId: node.id, startX: e.clientX, startY: e.clientY, origX: node.x, origY: node.y });
              },
              onDoubleClick: (e) => {
                e.stopPropagation();
                setEditNote(node.id);
              },
              onContextMenu: (e) => handleNodeContextMenu(e, node.id)
            }
          ),
          [{ cx: sc.x + sw / 2, cy: sc.y }, { cx: sc.x + sw, cy: sc.y + sh / 2 }, { cx: sc.x + sw / 2, cy: sc.y + sh }, { cx: sc.x, cy: sc.y + sh / 2 }].map((pt, i) => /* @__PURE__ */ React.createElement(
            "circle",
            {
              key: i,
              cx: pt.cx,
              cy: pt.cy,
              r: 5 * zoom,
              fill: isDrawingFrom ? "#fff" : T.accent,
              opacity: 0.9,
              cursor: "crosshair",
              onMouseDown: (e) => {
                e.stopPropagation();
                startDrawing(e, node.id);
              }
            }
          )),
          isSel && RS2.map((r) => /* @__PURE__ */ React.createElement(
            "rect",
            {
              key: r.corner,
              x: r.cx - 5 * zoom,
              y: r.cy - 5 * zoom,
              width: 10 * zoom,
              height: 10 * zoom,
              rx: 2 * zoom,
              fill: T.accent,
              opacity: 0.9,
              style: { cursor: r.corner + "-resize" },
              onMouseDown: (e) => {
                e.stopPropagation();
                setResizingNode({ nodeId: node.id, corner: r.corner, startX: e.clientX, startY: e.clientY, origW: node.w || 180, origH: node.h || 120, origX: node.x, origY: node.y });
              }
            }
          )),
          isSel && /* @__PURE__ */ React.createElement("g", { onClick: (e) => {
            e.stopPropagation();
            deleteNode(node.id);
          }, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("circle", { cx: sc.x + 12 * zoom, cy: sc.y + 11 * zoom, r: 8 * zoom, fill: "#f44747", opacity: 0.9 }), /* @__PURE__ */ React.createElement(
            "text",
            {
              x: sc.x + 12 * zoom,
              y: sc.y + 11 * zoom + 3.5 * zoom,
              textAnchor: "middle",
              fontSize: 9 * zoom,
              fill: "#fff",
              fontFamily: "var(--app-font)",
              style: { pointerEvents: "none" }
            },
            "\u2715"
          ))
        );
      }
      const card = getCardData(node);
      const title = card ? card.title : "Card not found";
      const pri = card ? PRIORITIES[card.priority || "medium"]?.color || "#858585" : "#555";
      const statusInfo = card ? STATUSES[card.status || "none"] : null;
      const hasColor = card?.cardColor && card.cardColor !== "none";
      const effSh = node.collapsed ? Math.min(sh, 38 * zoom) : sh;
      const subtasks = card?.subtasks || [];
      const stDone = subtasks.filter((s) => s.done).length;
      const stPct = subtasks.length > 0 ? Math.round(stDone / subtasks.length * 100) : 0;
      const dueInfo = card?.due ? smartDue(card.due) : null;
      const tags = card?.tags || [];
      const RS = [{ corner: "se", cx: sc.x + sw, cy: sc.y + sh }, { corner: "sw", cx: sc.x, cy: sc.y + sh }, { corner: "ne", cx: sc.x + sw, cy: sc.y }, { corner: "nw", cx: sc.x, cy: sc.y }];
      const PAD = 10 * zoom;
      const STRIPE = 4 * zoom;
      let curY = sc.y + PAD;
      return /* @__PURE__ */ React.createElement(
        "g",
        {
          key: node.id,
          onMouseUp: () => {
            if (drawing) finishDrawing(node.id);
          }
        },
        /* @__PURE__ */ React.createElement("rect", { x: sc.x + 3 * zoom, y: sc.y + 3 * zoom, width: sw, height: sh, rx: 8 * zoom, fill: "rgba(0,0,0,0.25)" }),
        /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: sc.x,
            y: sc.y,
            width: sw,
            height: sh,
            rx: 8 * zoom,
            fill: T.cardBg,
            stroke: searchFocused === node.id ? T.progressDone : multiSelected.has(node.id) ? T.progressDone : isSel ? T.accent : T.cardBorder,
            strokeWidth: (searchFocused === node.id ? 3 : multiSelected.has(node.id) ? 2 : isSel ? 2 : 1) * zoom,
            style: { cursor: "move", filter: searchFocused === node.id ? "drop-shadow(0 0 8px " + T.progressDone + ")" : "" },
            onMouseDown: (e) => {
              if (e.button !== 0) return;
              e.stopPropagation();
              setSelected(node.id);
              setDraggingNode({ nodeId: node.id, startX: e.clientX, startY: e.clientY, origX: node.x, origY: node.y });
            },
            onDoubleClick: (e) => {
              e.stopPropagation();
              save(nodes.map((n) => n.id === node.id ? { ...n, collapsed: !n.collapsed } : n), void 0);
            },
            onContextMenu: (e) => handleNodeContextMenu(e, node.id)
          }
        ),
        node.collapsed && /* @__PURE__ */ React.createElement(
          "line",
          {
            x1: sc.x + 8 * zoom,
            y1: sc.y + sh * 0.5,
            x2: sc.x + sw - 8 * zoom,
            y2: sc.y + sh * 0.5,
            stroke: T.textMuted,
            strokeWidth: zoom,
            strokeDasharray: 3 * zoom + "," + 3 * zoom,
            opacity: 0.5
          }
        ),
        hasColor && /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: sc.x,
            y: sc.y,
            width: sw,
            height: STRIPE,
            rx: 0,
            fill: card.cardColor,
            style: { borderRadius: `${8 * zoom}px ${8 * zoom}px 0 0` }
          }
        ),
        /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: sc.x,
            y: sc.y + (hasColor ? STRIPE : 0),
            width: 3 * zoom,
            height: sh - (hasColor ? STRIPE : 0),
            fill: pri,
            style: { borderRadius: `0 0 0 ${8 * zoom}px` }
          }
        ),
        /* @__PURE__ */ React.createElement(
          "foreignObject",
          {
            x: sc.x + 3 * zoom + PAD * 0.6,
            y: sc.y + (hasColor ? STRIPE : 0) + PAD * 0.7,
            width: sw - 3 * zoom - PAD,
            height: effSh - (hasColor ? STRIPE : 0) - PAD * 0.5,
            style: { pointerEvents: "none" }
          },
          /* @__PURE__ */ React.createElement("div", { xmlns: "http://www.w3.org/1999/xhtml", style: { fontFamily: "var(--app-font)", userSelect: "none", overflow: "hidden", height: "100%", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: Math.max(10, 12 * zoom) + "px", fontWeight: 700, color: T.cardText, lineHeight: 1.35, marginBottom: 5 * zoom + "px", overflow: "hidden", display: "flex", alignItems: "flex-start", gap: 4 * zoom + "px" } }, card && card.icon && (card.icon.startsWith("lucide:") ? /* @__PURE__ */ React.createElement("span", { style: { flexShrink: 0, display: "inline-flex", alignItems: "center", verticalAlign: "middle" } }, /* @__PURE__ */ React.createElement(LucideIcon, { name: card.icon.slice(7), size: Math.max(12, 14 * zoom), color: T.accent })) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(12, 14 * zoom) + "px", lineHeight: 1, flexShrink: 0 } }, card.icon)), /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" } }, title)), card?.note && effSh > 100 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: Math.max(9, 10 * zoom) + "px", color: T.cardNote, lineHeight: 1.4, marginBottom: 4 * zoom + "px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", whiteSpace: "pre-wrap" } }, card.note), tags.length > 0 && effSh > 120 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 3 * zoom + "px", marginBottom: 4 * zoom + "px" } }, tags.slice(0, 4).map((t) => {
            const hue = t.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
            const hsl = `hsl(${hue % 360},55%,55%)`;
            return /* @__PURE__ */ React.createElement("span", { key: t, style: { fontSize: Math.max(8, 9 * zoom) + "px", padding: `${1 * zoom}px ${4 * zoom}px`, borderRadius: 8 * zoom + "px", background: hsl + "22", color: hsl, border: "1px solid " + hsl + "44" } }, t);
          })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 * zoom + "px", flexWrap: "wrap", marginBottom: 4 * zoom + "px" } }, statusInfo && statusInfo !== STATUSES.none && /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(8, 9 * zoom) + "px", padding: `${1 * zoom}px ${5 * zoom}px`, borderRadius: 6 * zoom + "px", background: statusInfo.color + "22", color: statusInfo.color, border: "1px solid " + statusInfo.color + "44", whiteSpace: "nowrap" } }, statusInfo.label), card?.recur && card.recur !== "none" && /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(8, 9 * zoom) + "px", color: T.textMuted, background: T.colCountBg, padding: `${1 * zoom}px ${4 * zoom}px`, borderRadius: 4 * zoom + "px" } }, "\u21BB", card.recur[0].toUpperCase())), subtasks.length > 0 && effSh > 110 && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 4 * zoom + "px" } }, sh > 160 ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 * zoom + "px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(8, 9 * zoom) + "px", color: T.textMuted, fontWeight: 600 } }, "Subtasks"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(7, 8 * zoom) + "px", color: stPct === 100 ? T.progressDone : T.textMuted } }, stDone, "/", subtasks.length)), subtasks.slice(0, Math.floor((effSh - 140 * zoom) / Math.max(1, 16 * zoom)) + 1).map(function(s) {
            return /* @__PURE__ */ React.createElement("div", { key: s.id, style: { display: "flex", alignItems: "center", gap: 4 * zoom + "px", marginBottom: 3 * zoom + "px", opacity: s.done ? 0.5 : 1 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 10 * zoom + "px", height: 10 * zoom + "px", borderRadius: 2 * zoom + "px", flexShrink: 0, border: "1.5px solid " + (s.done ? T.accent : T.cardBorder), background: s.done ? T.accent + "33" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" } }, s.done && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 7 * zoom + "px", color: T.accent, lineHeight: 1 } }, "\u2713")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(8, 9 * zoom) + "px", color: s.done ? T.textMuted : T.cardSubText, textDecoration: s.done ? "line-through" : "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 } }, s.text));
          }), subtasks.length > Math.floor((effSh - 140 * zoom) / Math.max(1, 16 * zoom)) + 1 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: Math.max(7, 8 * zoom) + "px", color: T.textMuted, marginTop: 2 * zoom + "px" } }, "+", subtasks.length - Math.floor((effSh - 140 * zoom) / Math.max(1, 16 * zoom)) - 1, " more\u2026"), /* @__PURE__ */ React.createElement("div", { style: { height: 2 * zoom + "px", background: T.progressBg, borderRadius: 2 * zoom + "px", overflow: "hidden", marginTop: 4 * zoom + "px" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: stPct + "%", background: stPct === 100 ? T.progressDone : T.progressFill } }))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 2 * zoom + "px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(8, 9 * zoom) + "px", color: T.textMuted } }, "\u2611 " + stDone + "/" + subtasks.length), /* @__PURE__ */ React.createElement("span", { style: { fontSize: Math.max(8, 9 * zoom) + "px", color: stPct === 100 ? T.progressDone : T.textMuted } }, stPct + "%")), /* @__PURE__ */ React.createElement("div", { style: { height: 3 * zoom + "px", background: T.progressBg, borderRadius: 2 * zoom + "px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: stPct + "%", background: stPct === 100 ? T.progressDone : T.progressFill } })))), dueInfo && effSh > 100 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: Math.max(8, 9 * zoom) + "px", color: dueInfo.color, fontWeight: dueInfo.urgent ? 700 : 400 } }, dueInfo.urgent ? "\u26A0 " : "\u{1F4C5} ", dueInfo.label, card?.reminder && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: 4 * zoom + "px", fontSize: Math.max(7, 8 * zoom) + "px", color: T.accent } }, "\u{1F514}")))
        ),
        [{ cx: sc.x + sw / 2, cy: sc.y }, { cx: sc.x + sw, cy: sc.y + sh / 2 }, { cx: sc.x + sw / 2, cy: sc.y + sh }, { cx: sc.x, cy: sc.y + sh / 2 }].map((pt, i) => /* @__PURE__ */ React.createElement(
          "circle",
          {
            key: i,
            cx: pt.cx,
            cy: pt.cy,
            r: 5 * zoom,
            fill: isDrawingFrom ? "#fff" : T.accent,
            opacity: 0.85,
            cursor: "crosshair",
            onMouseDown: (e) => {
              e.stopPropagation();
              startDrawing(e, node.id);
            }
          }
        )),
        isSel && RS.map((r) => /* @__PURE__ */ React.createElement(
          "rect",
          {
            key: r.corner,
            x: r.cx - 5 * zoom,
            y: r.cy - 5 * zoom,
            width: 10 * zoom,
            height: 10 * zoom,
            rx: 2 * zoom,
            fill: T.accent,
            opacity: 0.9,
            style: { cursor: r.corner + "-resize" },
            onMouseDown: (e) => {
              e.stopPropagation();
              setResizingNode({ nodeId: node.id, corner: r.corner, startX: e.clientX, startY: e.clientY, origW: node.w || 200, origH: node.h || 80, origX: node.x, origY: node.y });
            }
          }
        )),
        isSel && /* @__PURE__ */ React.createElement("g", { onClick: (e) => {
          e.stopPropagation();
          deleteNode(node.id);
        }, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("circle", { cx: sc.x + sw - 10 * zoom, cy: sc.y + 10 * zoom, r: 9 * zoom, fill: "#f44747", opacity: 0.9 }), /* @__PURE__ */ React.createElement(
          "text",
          {
            x: sc.x + sw - 10 * zoom,
            y: sc.y + 10 * zoom + 3.5 * zoom,
            textAnchor: "middle",
            fontSize: 9 * zoom,
            fill: "#fff",
            fontFamily: "var(--app-font)",
            style: { pointerEvents: "none" }
          },
          "\u2715"
        ))
      );
    };
    const handleCanvasDrop = (e) => {
      e.preventDefault();
      if (drag_type.current === "card" && drag_card_data.current) {
        const { card } = drag_card_data.current;
        const rect = svgRef.current.getBoundingClientRect();
        const cp = screenToCanvas(e.clientX - rect.left, e.clientY - rect.top);
        const bid = boards.find((b) => b.cols.some((c) => c.cards.some((x) => x.id === card.id)))?.id;
        if (!bid) return;
        if (nodes.find((n) => n.cardRef?.cardId === card.id)) return;
        const autoH = 80 + (card.note ? 24 : 0) + (card.tags?.length > 0 ? 18 : 0) + (card.subtasks?.length || 0) * 16 + (card.due ? 16 : 0);
        const node = {
          id: "n" + Date.now(),
          type: "card",
          x: cp.x - 100,
          y: cp.y - autoH / 2,
          w: 220,
          h: Math.max(90, Math.min(autoH, 320)),
          cardRef: { boardId: bid, cardId: card.id }
        };
        save([...nodes, node], void 0);
        drag_card_data.current = null;
        drag_type.current = "";
      }
    };
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
      padding: "6px 8px",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: "4px",
      flexWrap: "nowrap",
      overflowX: "auto",
      borderBottom: `1px solid ${T.colBorder}`,
      background: T.headerBg
    } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: addStickyNote,
        style: {
          padding: "4px 10px",
          borderRadius: "6px",
          border: `1px solid ${T.accent}55`,
          background: T.accent + "22",
          color: T.accent,
          cursor: "pointer",
          fontSize: "11px",
          fontFamily: "var(--app-font)",
          whiteSpace: "nowrap"
        }
      },
      "+ Note"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowCardPicker(true),
        style: {
          padding: "4px 10px",
          borderRadius: "6px",
          border: `1px solid ${T.inputBorder}`,
          background: "transparent",
          color: T.textMuted,
          cursor: "pointer",
          fontSize: "11px",
          fontFamily: "var(--app-font)",
          whiteSpace: "nowrap"
        }
      },
      "+ Card"
    ), /* @__PURE__ */ React.createElement("div", { style: { width: "1px", height: "18px", background: T.colBorder, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: "7px", fontSize: "11px", color: T.textMuted, pointerEvents: "none" } }, "\u{1F50D}"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: canvasSearch,
        onChange: (e) => setCanvasSearch(e.target.value),
        placeholder: "Search nodes\u2026",
        style: {
          paddingLeft: "24px",
          paddingRight: "8px",
          paddingTop: "3px",
          paddingBottom: "3px",
          background: T.inputBg,
          border: `1px solid ${T.inputBorder}`,
          borderRadius: "6px",
          color: T.text,
          fontSize: "11px",
          fontFamily: "var(--app-font)",
          outline: "none",
          width: "130px"
        }
      }
    )), canvasSearch && (() => {
      const q = canvasSearch.toLowerCase();
      const hits = nodes.filter((n) => {
        if (n.type === "note") return (n.text || "").toLowerCase().includes(q);
        const cd = getCardData(n);
        return cd && (cd.title.toLowerCase().includes(q) || (cd.note || "").toLowerCase().includes(q));
      });
      if (!hits.length) return /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted } }, "No match");
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" } }, hits.slice(0, 5).map((n) => {
        const label = n.type === "note" ? n.text?.slice(0, 20) : getCardData(n)?.title?.slice(0, 20);
        return /* @__PURE__ */ React.createElement(
          "button",
          {
            key: n.id,
            onClick: () => {
              setCanvasSearch("");
              jumpToNode(n.id);
            },
            style: {
              padding: "2px 8px",
              borderRadius: "5px",
              background: T.accent + "22",
              border: `1px solid ${T.accent}55`,
              color: T.accent,
              cursor: "pointer",
              fontSize: "10px",
              fontFamily: "var(--app-font)"
            }
          },
          label,
          "\u2026"
        );
      }));
    })(), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px", flexWrap: "nowrap", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setSnapGrid((v) => !v),
        title: "Snap to grid",
        style: {
          padding: "3px 8px",
          borderRadius: "5px",
          border: `1px solid ${snapGrid ? T.accent : T.inputBorder}`,
          background: snapGrid ? T.accent + "22" : "transparent",
          color: snapGrid ? T.accent : T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)"
        }
      },
      "\u229E Snap"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowGrid((v) => !v),
        title: "Toggle canvas grid",
        style: {
          padding: "3px 8px",
          borderRadius: "5px",
          border: `1px solid ${showGrid ? T.accent : T.inputBorder}`,
          background: showGrid ? T.accent + "22" : "transparent",
          color: showGrid ? T.accent : T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)"
        }
      },
      "\u22C5 Grid"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowMinimap((v) => !v),
        title: "Toggle minimap",
        style: {
          padding: "3px 8px",
          borderRadius: "5px",
          border: `1px solid ${showMinimap ? T.accent : T.inputBorder}`,
          background: showMinimap ? T.accent + "22" : "transparent",
          color: showMinimap ? T.accent : T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)"
        }
      },
      "\u25A3 Map"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setZoom((z) => Math.min(3, +(z * 1.2).toFixed(2))),
        style: {
          padding: "3px 7px",
          borderRadius: "5px",
          border: `1px solid ${T.inputBorder}`,
          background: "transparent",
          color: T.textMuted,
          cursor: "pointer",
          fontSize: "14px"
        }
      },
      "+"
    ), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, minWidth: "32px", textAlign: "center" } }, Math.round(zoom * 100), "%"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setZoom((z) => Math.max(0.15, +(z / 1.2).toFixed(2))),
        style: {
          padding: "3px 7px",
          borderRadius: "5px",
          border: `1px solid ${T.inputBorder}`,
          background: "transparent",
          color: T.textMuted,
          cursor: "pointer",
          fontSize: "14px"
        }
      },
      "\u2212"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: zoomToFit,
        title: "Zoom to fit all nodes",
        style: {
          padding: "3px 8px",
          borderRadius: "5px",
          border: `1px solid ${T.inputBorder}`,
          background: "transparent",
          color: T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)",
          whiteSpace: "nowrap"
        }
      },
      "\u22A1 Fit"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          setPan({ x: 0, y: 0 });
          setZoom(1);
        },
        style: {
          padding: "3px 8px",
          borderRadius: "5px",
          border: `1px solid ${T.inputBorder}`,
          background: "transparent",
          color: T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)"
        }
      },
      "\u21BA Reset"
    )), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, whiteSpace: "nowrap" } }, nodes.length, "n \xB7 ", conns.length, "c \xB7 ", frames.length, "f"), drawing && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.accent, whiteSpace: "nowrap" } }, "\u{1F517} Click node to connect"), addingFrame && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.accent, whiteSpace: "nowrap", fontWeight: 700 } }, "\u2B1C Drag to draw frame \u2014 Esc to cancel"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setAddingFrame((v) => !v),
        title: "Add frame/group",
        style: {
          padding: "3px 8px",
          borderRadius: "5px",
          border: "1px solid " + (addingFrame ? T.accent : T.inputBorder),
          background: addingFrame ? T.accent + "22" : "transparent",
          color: addingFrame ? T.accent : T.textMuted,
          cursor: "pointer",
          fontSize: "10px",
          fontFamily: "var(--app-font)",
          whiteSpace: "nowrap"
        }
      },
      "\u2B1C Frame"
    ), /* @__PURE__ */ React.createElement(
      "select",
      {
        onChange: (e) => {
          if (e.target.value) autoLayout(e.target.value);
          e.target.value = "";
        },
        defaultValue: "",
        style: {
          padding: "3px 7px",
          borderRadius: "5px",
          border: "1px solid " + T.inputBorder,
          background: T.inputBg,
          color: T.textMuted,
          fontSize: "10px",
          fontFamily: "var(--app-font)",
          cursor: "pointer",
          outline: "none"
        }
      },
      /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "\u2699 Layout"),
      /* @__PURE__ */ React.createElement("option", { value: "grid" }, "Grid"),
      /* @__PURE__ */ React.createElement("option", { value: "tree" }, "Tree"),
      /* @__PURE__ */ React.createElement("option", { value: "force" }, "Force")
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted } }, "Layers:"), Object.entries(CONN_TYPES).map(([key, ct]) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key,
        onClick: () => setHiddenConnTypes((prev) => {
          const n = new Set(prev);
          n.has(key) ? n.delete(key) : n.add(key);
          return n;
        }),
        title: (hiddenConnTypes.has(key) ? "Show " : "Hide ") + ct.label,
        style: {
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: hiddenConnTypes.has(key) ? T.inputBg : ct.color,
          border: "2px solid " + ct.color,
          cursor: "pointer",
          padding: 0,
          opacity: hiddenConnTypes.has(key) ? 0.3 : 1,
          transition: "all 0.15s"
        }
      }
    )))), /* @__PURE__ */ React.createElement(
      "svg",
      {
        ref: svgRef,
        style: {
          flex: 1,
          cursor: addingFrame ? "crosshair" : isPanning ? "grabbing" : drawing ? "crosshair" : "default",
          background: T.bg,
          display: "block",
          touchAction: "none"
        },
        onWheel: handleWheel,
        onMouseDown: handleBgMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onContextMenu: handleBgContextMenu,
        onDragOver: (e) => e.preventDefault(),
        onDrop: handleCanvasDrop,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd
      },
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
        "pattern",
        {
          id: "dotgrid",
          x: pan.x % (20 * zoom),
          y: pan.y % (20 * zoom),
          width: 20 * zoom,
          height: 20 * zoom,
          patternUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React.createElement("circle", { cx: 1, cy: 1, r: 0.8, fill: T.textMuted, opacity: 0.25 })
      )),
      /* @__PURE__ */ React.createElement("rect", { width: "100%", height: "100%", fill: showGrid ? "url(#dotgrid)" : "transparent", "data-bg": "1" }),
      conns.map(renderArrow),
      drawing && drawEnd && (() => {
        const from = nodes.find((n) => n.id === drawing.fromId);
        if (!from) return null;
        const fc = cs(nodeCenter(from).x, nodeCenter(from).y);
        return /* @__PURE__ */ React.createElement(
          "line",
          {
            x1: fc.x,
            y1: fc.y,
            x2: drawEnd.x,
            y2: drawEnd.y,
            stroke: T.accent,
            strokeWidth: 2,
            strokeDasharray: "6,3",
            opacity: 0.7
          }
        );
      })(),
      frames.map((frame) => {
        const fsc = cs(frame.x, frame.y);
        const fsw = frame.w * zoom, fsh = frame.h * zoom;
        return /* @__PURE__ */ React.createElement("g", { key: frame.id }, /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: fsc.x,
            y: fsc.y,
            width: fsw,
            height: fsh,
            rx: 8 * zoom,
            fill: frame.color + "12",
            stroke: frame.color,
            strokeWidth: 1.5 * zoom,
            strokeDasharray: 6 * zoom + "," + 4 * zoom,
            "data-frame": "1",
            style: { cursor: "move" },
            onMouseDown: (e) => {
              if (e.button !== 0) return;
              e.stopPropagation();
              setDraggingFrame({ id: frame.id, startX: e.clientX, startY: e.clientY, origX: frame.x, origY: frame.y });
            }
          }
        ), /* @__PURE__ */ React.createElement(
          "text",
          {
            x: fsc.x + 10 * zoom,
            y: fsc.y - 6 * zoom,
            fontSize: 11 * zoom,
            fill: frame.color,
            fontFamily: "var(--app-font)",
            fontWeight: 700,
            style: { userSelect: "none", pointerEvents: "none" }
          },
          frame.label
        ), /* @__PURE__ */ React.createElement(
          "g",
          {
            onClick: (e) => {
              e.stopPropagation();
              save(void 0, void 0, frames.filter((f) => f.id !== frame.id));
            },
            style: { cursor: "pointer" }
          },
          /* @__PURE__ */ React.createElement("circle", { cx: fsc.x + fsw - 8 * zoom, cy: fsc.y + 8 * zoom, r: 8 * zoom, fill: T.danger, opacity: 0.8 }),
          /* @__PURE__ */ React.createElement(
            "text",
            {
              x: fsc.x + fsw - 8 * zoom,
              y: fsc.y + 8 * zoom + 3.5 * zoom,
              textAnchor: "middle",
              fontSize: 8 * zoom,
              fill: "#fff",
              fontFamily: "var(--app-font)",
              style: { pointerEvents: "none" }
            },
            "\u2715"
          )
        ));
      }),
      frameRect && frameStart && /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: cs(frameRect.x, 0).x,
          y: cs(0, frameRect.y).y,
          width: frameRect.w * zoom,
          height: frameRect.h * zoom,
          rx: 8 * zoom,
          fill: T.accent + "15",
          stroke: T.accent,
          strokeWidth: 2 * zoom,
          strokeDasharray: 8 * zoom + "," + 4 * zoom
        }
      ),
      nodes.map(renderNode),
      selectionRect && selectionRect.sw > 5 && /* @__PURE__ */ React.createElement(
        "rect",
        {
          x: selectionRect.sx,
          y: selectionRect.sy,
          width: selectionRect.sw,
          height: selectionRect.sh,
          fill: T.accent + "18",
          stroke: T.accent,
          strokeWidth: 1.5,
          strokeDasharray: "6,3",
          rx: 4
        }
      )
    ), connDialog && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1e3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        onClick: () => setConnDialog(null)
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            background: T.modalBg,
            border: `1px solid ${T.modalBorder}`,
            borderRadius: "12px",
            padding: "22px 26px",
            width: "320px",
            boxShadow: "0 16px 60px rgba(0,0,0,0.5)",
            color: T.text,
            fontFamily: "var(--app-font)"
          }
        },
        /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", fontWeight: 700, marginBottom: "14px" } }, "Choose connection type"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" } }, Object.entries(CONN_TYPES).map(([key, ct]) => /* @__PURE__ */ React.createElement(
          "button",
          {
            key,
            onClick: () => addConnection(key),
            style: {
              padding: "8px 12px",
              borderRadius: "7px",
              textAlign: "left",
              border: `1px solid ${ct.color}55`,
              background: ct.color + "15",
              color: ct.color,
              cursor: "pointer",
              fontSize: "11px",
              fontFamily: "var(--app-font)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }
          },
          /* @__PURE__ */ React.createElement("div", { style: {
            width: "24px",
            height: "2px",
            background: ct.color,
            borderTop: ct.dash ? "2px dashed " + ct.color : "none",
            borderBottom: "none",
            opacity: 0.9
          } }),
          ct.label
        ))),
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setConnDialog(null),
            style: {
              width: "100%",
              padding: "7px",
              borderRadius: "7px",
              border: `1px solid ${T.inputBorder}`,
              background: "transparent",
              color: T.textMuted,
              cursor: "pointer",
              fontSize: "11px",
              fontFamily: "var(--app-font)"
            }
          },
          "Cancel"
        )
      )
    ), showCardPicker && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1e3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        onClick: () => setShowCardPicker(false)
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            background: T.modalBg,
            border: `1px solid ${T.modalBorder}`,
            borderRadius: "12px",
            padding: "20px 24px",
            width: "440px",
            maxHeight: "70vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 16px 60px rgba(0,0,0,0.5)",
            color: T.text,
            fontFamily: "var(--app-font)"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: 700 } }, "Add Card to Canvas"), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setShowCardPicker(false),
            style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "16px" }
          },
          "\u2715"
        )),
        /* @__PURE__ */ React.createElement("div", { style: { overflowY: "auto", display: "flex", flexDirection: "column", gap: "12px" } }, boards.map((board) => /* @__PURE__ */ React.createElement("div", { key: board.id }, /* @__PURE__ */ React.createElement("p", { style: {
          fontSize: "10px",
          color: T.accent,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "6px"
        } }, board.name), board.cols.flatMap((col) => col.cards.map((card) => ({ ...card, _col: col }))).filter(
          (card) => !nodes.find((n) => n.cardRef?.cardId === card.id)
        ).map((card) => /* @__PURE__ */ React.createElement(
          "div",
          {
            key: card.id,
            onClick: () => addCardNode(board.id, card),
            style: {
              padding: "7px 10px",
              borderRadius: "7px",
              cursor: "pointer",
              border: `1px solid ${T.inputBorder}`,
              background: T.inputBg,
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.15s"
            },
            onMouseEnter: (e) => e.currentTarget.style.borderColor = T.accent,
            onMouseLeave: (e) => e.currentTarget.style.borderColor = T.inputBorder
          },
          /* @__PURE__ */ React.createElement("div", { style: {
            width: "3px",
            height: "32px",
            borderRadius: "2px",
            background: PRIORITIES[card.priority || "medium"]?.color || "#858585",
            flexShrink: 0
          } }),
          /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("p", { style: {
            fontSize: "12px",
            color: T.text,
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          } }, card.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "10px", color: T.textMuted } }, card._col?.title || "", " \u2014 ", STATUSES[card.status || "none"]?.label))
        )))))
      )
    ), contextMenu && /* @__PURE__ */ React.createElement("div", { onClick: () => setContextMenu(null), style: { position: "fixed", inset: 0, zIndex: 800 } }), contextMenu && (() => {
      const menuStyle = {
        position: "fixed",
        left: Math.max(8, Math.min(contextMenu.x, window.innerWidth - 240)),
        top: Math.max(8, Math.min(contextMenu.y, window.innerHeight - 360)),
        background: T.modalBg,
        border: "1px solid " + T.modalBorder,
        borderRadius: "10px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        zIndex: 900,
        padding: "4px",
        minWidth: "180px",
        maxHeight: "calc(100vh - 16px)",
        overflowY: "auto",
        fontFamily: "var(--app-font)",
        fontSize: "12px",
        color: T.text
      };
      const item = (label, action, danger, icon) => /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: (e) => {
            e.stopPropagation();
            if (typeof action === "function") action();
            setContextMenu(null);
          },
          style: { padding: "7px 12px", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", color: danger ? T.danger : T.text, transition: "background 0.1s" },
          onMouseEnter: (e) => e.currentTarget.style.background = danger ? T.danger + "22" : T.accent + "18",
          onMouseLeave: (e) => e.currentTarget.style.background = "transparent"
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", width: "16px", textAlign: "center" } }, icon),
        label
      );
      const sep = () => /* @__PURE__ */ React.createElement("div", { style: { height: "1px", background: T.colBorder, margin: "3px 6px" } });
      if (contextMenu.type === "bg") return /* @__PURE__ */ React.createElement("div", { style: menuStyle },
        /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, "Canvas"),
        item("Add Card Node", () => setShowCardPicker(true), false, "🃏"),
        item("Add Sticky Note", () => addStickyNote(), false, "📝"),
        item("Add Frame / Group", () => { setAddingFrame(true); setContextMenu(null); }, false, "⬜"),
        sep(),
        /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, "View"),
        item("Zoom to Fit", () => zoomToFit(), false, "⊡"),
        item("Reset View", () => { setPan({ x: 0, y: 0 }); setZoom(1); }, false, "↺"),
        item("Zoom In", () => setZoom(z => Math.min(z * 1.25, 4)), false, "🔍"),
        item("Zoom Out", () => setZoom(z => Math.max(z / 1.25, 0.15)), false, "🔎"),
        sep(),
        /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, "Layout"),
        item("Auto Layout: Grid", () => autoLayout("grid"), false, "⊞"),
        item("Auto Layout: Tree", () => autoLayout("tree"), false, "🌲"),
        item("Auto Layout: Force", () => autoLayout("force"), false, "⚛"),
        sep(),
        item("Select All Nodes", () => { setMultiSelected(new Set(nodes.map(n => n.id))); }, false, "⬡"),
        item("Delete All Connections", () => save(void 0, []), true, "🗑")
      );
      if (contextMenu.type === "node") {
        const node = nodes.find((n) => n.id === contextMenu.nodeId);
        if (!node) return null;
        const isLocked = node.locked;
        const isCollapsed = node.collapsed;
        const nodeConns = conns.filter(c => c.fromId === node.id || c.toId === node.id);
        return /* @__PURE__ */ React.createElement("div", { style: menuStyle },
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, node.type === "card" ? "Card Node" : "Note"),
          node.type === "card" && item("Edit Card", () => { const cd = getCardData(node); if (cd) setEditCardNode({ card: cd, boardId: node.cardRef?.boardId }); }, false, "✏️"),
          node.type === "note" && item("Edit Note", () => setEditNote(node.id), false, "✏️"),
          item("Duplicate", () => { const clone = { ...node, id: "n" + Date.now(), x: node.x + 30, y: node.y + 30 }; save([...nodes, clone], void 0); }, false, "⧉"),
          item(isCollapsed ? "Expand Node" : "Collapse Node", () => { save(nodes.map((n) => n.id === contextMenu.nodeId ? { ...n, collapsed: !n.collapsed } : n), void 0); }, false, isCollapsed ? "⊞" : "⊟"),
          sep(),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, "Position & Size"),
          item("Bring to Front", () => { save([...nodes.filter(n => n.id !== node.id), node], void 0); }, false, "⬆"),
          item("Send to Back", () => { save([node, ...nodes.filter(n => n.id !== node.id)], void 0); }, false, "⬇"),
          item("Reset Size", () => { save(nodes.map((n) => n.id === contextMenu.nodeId ? { ...n, w: 220, h: 100 } : n), void 0); }, false, "⤢"),
          item(isLocked ? "🔓 Unlock Node" : "🔒 Lock Node", () => { save(nodes.map((n) => n.id === contextMenu.nodeId ? { ...n, locked: !n.locked } : n), void 0); }, false, isLocked ? "🔓" : "🔒"),
          sep(),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, `Connections (${nodeConns.length})`),
          item("Disconnect All", () => { save(void 0, conns.filter(c => c.fromId !== node.id && c.toId !== node.id)); }, nodeConns.length > 0, "✂️"),
          sep(),
          item("Delete Node", () => deleteNode(contextMenu.nodeId), true, "🗑")
        );
      }
      if (contextMenu.type === "conn") {
        const conn = conns.find((c) => c.id === contextMenu.connId);
        if (!conn) return null;
        const ct = CONN_TYPES[conn.type] || CONN_TYPES.relates;
        const fromNode = nodes.find(n => n.id === conn.fromId);
        const toNode = nodes.find(n => n.id === conn.toId);
        return /* @__PURE__ */ React.createElement("div", { style: menuStyle },
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 6px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, "Connection"),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 10px 6px", fontSize: "11px", color: ct.color, display: "flex", alignItems: "center", gap: "6px" } },
            /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: ct.color, display: "inline-block" } }),
            ct.label, conn.label ? ` — "${conn.label}"` : ""
          ),
          item("Edit Label", () => setEditingConnId(conn.id), false, "✏️"),
          item(conn.bidir ? "Make One-Way →" : "Make Bidirectional ↔", () => { save(void 0, conns.map((c) => c.id === contextMenu.connId ? { ...c, bidir: !c.bidir } : c)); }, false, "↔"),
          sep(),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, "Change Type"),
          ...Object.entries(CONN_TYPES).map(([key, ct2]) =>
            item(`${ct2.label}${conn.type === key ? " ✓" : ""}`, () => { save(void 0, conns.map((c) => c.id === contextMenu.connId ? { ...c, type: key } : c)); }, false,
              /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: ct2.color, display: "inline-block", flexShrink: 0 } })
            )
          ),
          sep(),
          item("Reverse Direction", () => { save(void 0, conns.map((c) => c.id === contextMenu.connId ? { ...c, fromId: c.toId, toId: c.fromId } : c)); }, false, "⇄"),
          item("Select From Node", () => { setSelected(conn.fromId); setContextMenu(null); }, false, "◎"),
          item("Select To Node", () => { setSelected(conn.toId); setContextMenu(null); }, false, "◉"),
          sep(),
          item("Delete Connection", () => deleteConn(contextMenu.connId), true, "🗑")
        );
      }
      return null;
    })(), editingConnId && (() => {
      const conn = conns.find((c) => c.id === editingConnId);
      if (!conn) return null;
      const ct = CONN_TYPES[conn.type] || CONN_TYPES.relates;
      const fc2 = cs(
        nodeCenter(nodes.find((n) => n.id === conn.fromId) || { x: 0, y: 0, w: 200, h: 100 }).x,
        nodeCenter(nodes.find((n) => n.id === conn.fromId) || { x: 0, y: 0, w: 200, h: 100 }).y
      );
      const tc2 = cs(
        nodeCenter(nodes.find((n) => n.id === conn.toId) || { x: 0, y: 0, w: 200, h: 100 }).x,
        nodeCenter(nodes.find((n) => n.id === conn.toId) || { x: 0, y: 0, w: 200, h: 100 }).y
      );
      const midX = (fc2.x + tc2.x) / 2, midY = (fc2.y + tc2.y) / 2;
      return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: midX - 100, top: midY - 16, zIndex: 600, display: "flex", gap: "4px" } }, /* @__PURE__ */ React.createElement(
        "input",
        {
          autoFocus: true,
          defaultValue: conn.label || "",
          onBlur: (e) => {
            save(void 0, conns.map((c) => c.id === editingConnId ? { ...c, label: e.target.value } : c));
            setEditingConnId(null);
          },
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              e.currentTarget.blur();
            }
          },
          style: {
            width: "200px",
            background: T.modalBg,
            border: "2px solid " + ct.color,
            borderRadius: "6px",
            color: T.text,
            fontSize: "12px",
            fontFamily: "var(--app-font)",
            padding: "4px 8px",
            outline: "none"
          },
          placeholder: "Connection label\u2026"
        }
      ));
    })(), addingFrame && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, cursor: "crosshair", zIndex: 10, pointerEvents: "none", border: "2px dashed " + T.accent, borderRadius: "4px" } }), multiSelected.size > 1 && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      bottom: "70px",
      left: "50%",
      transform: "translateX(-50%)",
      background: T.modalBg,
      border: "1px solid " + T.accent,
      borderRadius: "8px",
      padding: "7px 16px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      zIndex: 60,
      fontFamily: "var(--app-font)"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: T.accent, fontWeight: 700 } }, multiSelected.size, " nodes selected"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      const toDelete = [...multiSelected];
      save(
        nodes.filter((n) => !toDelete.includes(n.id)),
        conns.filter((c) => !toDelete.includes(c.fromId) && !toDelete.includes(c.toId))
      );
      setMultiSelected(/* @__PURE__ */ new Set());
    }, style: {
      background: T.danger + "22",
      border: "1px solid " + T.danger + "55",
      color: T.danger,
      borderRadius: "5px",
      padding: "3px 10px",
      cursor: "pointer",
      fontSize: "11px",
      fontFamily: "var(--app-font)"
    } }, "Delete all"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setMultiSelected(/* @__PURE__ */ new Set()),
        style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "14px" }
      },
      "\u2715"
    )), showMinimap && nodes.length > 0 && (() => {
      const MM_W = 160, MM_H = 100;
      const allX = nodes.map((n) => n.x), allY = nodes.map((n) => n.y);
      const allXE = nodes.map((n) => n.x + (n.w || 200)), allYE = nodes.map((n) => n.y + (n.h || 100));
      const bx = Math.min(...allX) - 20, by = Math.min(...allY) - 20;
      const bw = Math.max(...allXE) - bx + 20, bh = Math.max(...allYE) - by + 20;
      const scX = MM_W / bw, scY = MM_H / bh, sc2 = Math.min(scX, scY);
      const offX = (MM_W - bw * sc2) / 2, offY = (MM_H - bh * sc2) / 2;
      const toMM = (x, y) => ({ x: (x - bx) * sc2 + offX, y: (y - by) * sc2 + offY });
      return /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        bottom: "16px",
        right: "16px",
        background: T.modalBg,
        border: `1px solid ${T.modalBorder}`,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        zIndex: 50,
        userSelect: "none"
      } }, /* @__PURE__ */ React.createElement("svg", { width: MM_W, height: MM_H, style: { display: "block" } }, nodes.map((n) => {
        const p = toMM(n.x, n.y);
        const nw = Math.max(4, (n.w || 200) * sc2), nh = Math.max(3, (n.h || 100) * sc2);
        const col = n.type === "note" ? n.color || "#e6a817" : T.accent;
        const cd = n.type === "card" ? getCardData(n) : null;
        const priCol = cd ? PRIORITIES[cd.priority || "medium"]?.color || T.accent : T.accent;
        return /* @__PURE__ */ React.createElement("g", { key: n.id, onClick: () => {
          jumpToNode(n.id);
        }, style: { cursor: "pointer" }, title: n.type === "note" ? n.text : getCardData(n)?.title }, /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: p.x,
            y: p.y,
            width: nw,
            height: nh,
            rx: 2,
            fill: n.type === "note" ? col : T.cardBg,
            opacity: 0.9,
            stroke: selected === n.id ? T.accent : n.type === "note" ? col : T.cardBorder,
            strokeWidth: selected === n.id ? 1.5 : 0.5
          }
        ), n.type === "card" && /* @__PURE__ */ React.createElement("rect", { x: p.x, y: p.y, width: 2, height: nh, fill: priCol }));
      }), conns.map((c) => {
        const fn = nodes.find((n) => n.id === c.fromId), tn = nodes.find((n) => n.id === c.toId);
        if (!fn || !tn) return null;
        const fp = toMM(fn.x + (fn.w || 200) / 2, fn.y + (fn.h || 100) / 2);
        const tp = toMM(tn.x + (tn.w || 200) / 2, tn.y + (tn.h || 100) / 2);
        const ct2 = CONN_TYPES[c.type] || CONN_TYPES.relates;
        return /* @__PURE__ */ React.createElement(
          "line",
          {
            key: c.id,
            x1: fp.x,
            y1: fp.y,
            x2: tp.x,
            y2: tp.y,
            stroke: ct2.color,
            strokeWidth: 0.8,
            opacity: 0.6
          }
        );
      }), (() => {
        if (!svgRef.current) return null;
        const r = svgRef.current.getBoundingClientRect();
        const tl = toMM(-pan.x / zoom, -pan.y / zoom);
        const br = toMM((-pan.x + r.width) / zoom, (-pan.y + r.height) / zoom);
        return /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: tl.x,
            y: tl.y,
            width: Math.max(4, br.x - tl.x),
            height: Math.max(4, br.y - tl.y),
            fill: T.accent + "22",
            stroke: T.accent,
            strokeWidth: 1.5,
            opacity: 0.8,
            rx: 1,
            style: { cursor: "move" },
            onMouseDown: (e) => {
              e.stopPropagation();
              const startPan = { ...pan };
              const sx = e.clientX, sy = e.clientY;
              const mmEl = e.currentTarget.closest("svg");
              const mmRect = mmEl?.getBoundingClientRect();
              if (!mmRect) return;
              const onMove = (mv) => {
                const ddx = (mv.clientX - sx) / sc2, ddy = (mv.clientY - sy) / sc2;
                setPan({ x: startPan.x - ddx * zoom, y: startPan.y - ddy * zoom });
              };
              const onUp = () => {
                window.removeEventListener("mousemove", onMove);
                window.removeEventListener("mouseup", onUp);
              };
              window.addEventListener("mousemove", onMove);
              window.addEventListener("mouseup", onUp);
            }
          }
        );
      })()));
    })(), snapGrid && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", style: { position: "absolute", inset: 0 } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "pattern",
      {
        id: "snapgrid",
        x: pan.x % (20 * zoom),
        y: pan.y % (20 * zoom),
        width: 20 * zoom,
        height: 20 * zoom,
        patternUnits: "userSpaceOnUse"
      },
      /* @__PURE__ */ React.createElement("circle", { cx: 1, cy: 1, r: 1, fill: T.accent, opacity: 0.2 })
    )), /* @__PURE__ */ React.createElement("rect", { width: "100%", height: "100%", fill: "url(#snapgrid)" }))), editCardNode && onBoardsUpdate && (() => {
      const { card, boardId } = editCardNode;
      const board = boards.find((b) => b.id === boardId);
      if (!board) return null;
      const allCards = board.cols.flatMap((c) => c.cards);
      return /* @__PURE__ */ React.createElement(
        CardModal,
        {
          card,
          allCards,
          onSave: (updated) => {
            const newBoard = { ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === updated.id ? updated : x) })) };
            onBoardsUpdate(newBoard);
            setEditCardNode(null);
          },
          onClose: () => setEditCardNode(null),
          onTrash: (id) => {
            const trashed = { ...allCards.find((c) => c.id === id), trashedAt: (/* @__PURE__ */ new Date()).toISOString() };
            onBoardsUpdate({ ...board, trash: [...board.trash || [], trashed], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
            setEditCardNode(null);
          },
          onArchive: (id) => {
            const arc = { ...allCards.find((c) => c.id === id), archivedAt: (/* @__PURE__ */ new Date()).toISOString() };
            onBoardsUpdate({ ...board, archive: [...board.archive || [], arc], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
            setEditCardNode(null);
          },
          onCardLink: (title) => {
            const found = allCards.find((c) => c.title.toLowerCase() === title.toLowerCase());
            if (found) setEditCardNode({ card: found, boardId });
          }
        }
      );
    })(), editNote && (() => {
      const node = nodes.find((n) => n.id === editNote);
      if (!node) return null;
      const NOTE_COLORS = ["#e6a817", "#4ec9b0", "#0078d4", "#c586c0", "#f44747", "#4a9e6b", "#e6906c"];
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 1e3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          onClick: () => setEditNote(null)
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            onClick: (e) => e.stopPropagation(),
            style: {
              background: T.modalBg,
              border: `1px solid ${T.modalBorder}`,
              borderRadius: "12px",
              padding: "20px 24px",
              width: "320px",
              boxShadow: "0 16px 60px rgba(0,0,0,0.5)",
              color: T.text,
              fontFamily: "var(--app-font)"
            }
          },
          /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", fontWeight: 700, marginBottom: "12px" } }, "Edit Sticky Note"),
          /* @__PURE__ */ React.createElement(
            "textarea",
            {
              defaultValue: node.text || "",
              autoFocus: true,
              rows: 4,
              onChange: (e) => {
                const v = e.target.value;
                setNodes((ns) => ns.map((n) => n.id === editNote ? { ...n, text: v } : n));
                dirty.current = true;
              },
              style: {
                width: "100%",
                background: T.inputBg,
                border: `1px solid ${T.inputBorder}`,
                borderRadius: "7px",
                color: T.text,
                fontSize: "13px",
                fontFamily: "var(--app-font)",
                padding: "9px 11px",
                outline: "none",
                resize: "vertical",
                marginBottom: "12px",
                boxSizing: "border-box"
              }
            }
          ),
          /* @__PURE__ */ React.createElement("p", { style: { fontSize: "10px", color: T.textMuted, marginBottom: "7px" } }, "Color"),
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "14px" } }, NOTE_COLORS.map((col) => /* @__PURE__ */ React.createElement(
            "div",
            {
              key: col,
              onClick: () => {
                setNodes((ns) => ns.map((n) => n.id === editNote ? { ...n, color: col } : n));
                dirty.current = true;
              },
              style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: col,
                cursor: "pointer",
                border: `2px solid ${node.color === col ? "#fff" : "transparent"}`,
                transition: "border 0.15s"
              }
            }
          ))),
          /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: () => setEditNote(null),
              style: {
                width: "100%",
                padding: "7px",
                borderRadius: "7px",
                background: T.accentGrad,
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "12px",
                fontFamily: "var(--app-font)",
                fontWeight: 700
              }
            },
            "Done"
          )
        )
      );
    })());
  }
  function ListView({ board, onUpdate, allBoards, searchQuery, filterStatus, filterPriority }) {
    const T = useT();
    const [editCard, setEditCard] = useState(null);
    const [rowCtxMenu, setRowCtxMenu] = useState(null);
    const [sortBy, setSortBy] = useState("col");
    const [sortDir, setSortDir] = useState(1);
    const allCards = board.cols.flatMap((col) => col.cards.map((c) => ({ ...c, _col: col })));
    const filtered = allCards.filter((c) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!c.title.toLowerCase().includes(q) && !(c.note || "").toLowerCase().includes(q) && !c.tags.some((t) => t.toLowerCase().includes(q))) return false;
      }
      if (filterStatus !== "all" && c.status !== filterStatus) return false;
      if (filterPriority !== "all" && c.priority !== filterPriority) return false;
      return true;
    });
    const priOrd = { high: 0, medium: 1, low: 2 };
    const stOrd = { blocked: 0, inprogress: 1, review: 2, todo: 3, none: 4, done: 5 };
    const sorted = [...filtered].sort((a, b) => {
      let r = 0;
      if (sortBy === "col") r = board.cols.findIndex((c) => c.id === a._col.id) - board.cols.findIndex((c) => c.id === b._col.id);
      else if (sortBy === "priority") r = (priOrd[a.priority] || 1) - (priOrd[b.priority] || 1);
      else if (sortBy === "status") r = (stOrd[a.status] || 4) - (stOrd[b.status] || 4);
      else if (sortBy === "due") r = (a.due || "9999") > (b.due || "9999") ? 1 : -1;
      else if (sortBy === "title") r = a.title.localeCompare(b.title);
      return r * sortDir;
    });
    const SortBtn = ({ field, label }) => /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          if (sortBy === field) setSortDir((d) => -d);
          else {
            setSortBy(field);
            setSortDir(1);
          }
        },
        style: { background: "none", border: "none", color: sortBy === field ? T.accent : T.textMuted, cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", display: "flex", alignItems: "center", gap: "3px", padding: "4px 8px", borderRadius: "4px", whiteSpace: "nowrap" }
      },
      label,
      sortBy === field ? /* @__PURE__ */ React.createElement("span", null, sortDir === 1 ? "\u2191" : "\u2193") : /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.3 } }, "\u2195")
    );
    const quickUpdateCard = (cardId, patch) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === cardId ? { ...x, ...patch } : x) })) });
    };
    const moveCardToArchive = (cardId) => {
      const c2 = allCards.find((c) => c.id === cardId);
      if (!c2) return;
      onUpdate({ ...board, archive: [...board.archive || [], { ...c2, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
    };
    const moveCardToTrash = (cardId) => {
      const c2 = allCards.find((c) => c.id === cardId);
      if (!c2) return;
      onUpdate({ ...board, trash: [...board.trash || [], { ...c2, trashedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
    };
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "16px 24px" } },
      rowCtxMenu && /* @__PURE__ */ React.createElement("div", { onClick: () => setRowCtxMenu(null), style: { position: "fixed", inset: 0, zIndex: 1790 } }),
      rowCtxMenu && (() => {
      const card = allCards.find((x) => x.id === rowCtxMenu.cardId);
      if (!card) return null;
      const ms = { position: "fixed", left: Math.max(8, Math.min(rowCtxMenu.x, window.innerWidth - 16)), top: Math.max(8, Math.min(rowCtxMenu.y, window.innerHeight - 16)), background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.45)", zIndex: 1800, minWidth: "190px", maxHeight: "calc(100vh - 16px)", overflowY: "auto", padding: "4px" };
      const it = (label, action, danger, icon) => /* @__PURE__ */ React.createElement("div", { onClick: (e) => { e.stopPropagation(); action(); setRowCtxMenu(null); }, style: { padding: "7px 10px", borderRadius: "6px", cursor: "pointer", fontSize: "11px", color: danger ? T.danger : T.text, display: "flex", alignItems: "center", gap: "7px" }, onMouseEnter: (e) => e.currentTarget.style.background = danger ? T.danger + "22" : T.accent + "18", onMouseLeave: (e) => e.currentTarget.style.background = "transparent" }, /* @__PURE__ */ React.createElement("span", { style: { width: "14px", textAlign: "center" } }, icon), label);
      return /* @__PURE__ */ React.createElement("div", { style: ms }, it("Open / Edit", () => setEditCard(card), false, "✏"), it("Mark as Done", () => quickUpdateCard(card.id, { status: "done" }), false, "✓"), it("Archive", () => moveCardToArchive(card.id), false, "🗃"), it("Move to Trash", () => moveCardToTrash(card.id), true, "🗑"));
    })(),
      editCard && /* @__PURE__ */ React.createElement(CardModal, { card: editCard, onSave: (updated) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === updated.id ? updated : x) })) });
      setEditCard(null);
    }, onClose: () => setEditCard(null), onTrash: (id) => {
      onUpdate({ ...board, trash: [...board.trash || [], { ...allCards.find((c) => c.id === id), trashedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
      setEditCard(null);
    }, onArchive: (id) => {
      const c2 = allCards.find((c) => c.id === id);
      onUpdate({ ...board, archive: [...board.archive || [], { ...c2, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
      setEditCard(null);
    }, allCards }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "2px", marginBottom: "12px", background: T.headerBg, borderRadius: "8px", padding: "4px 8px", border: `1px solid ${T.colBorder}`, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, marginRight: "6px" } }, "Sort:"), /* @__PURE__ */ React.createElement(SortBtn, { field: "col", label: "Column" }), /* @__PURE__ */ React.createElement(SortBtn, { field: "priority", label: "Priority" }), /* @__PURE__ */ React.createElement(SortBtn, { field: "status", label: "Status" }), /* @__PURE__ */ React.createElement(SortBtn, { field: "due", label: "Due" }), /* @__PURE__ */ React.createElement(SortBtn, { field: "title", label: "Title" }), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontSize: "10px", color: T.textMuted } }, sorted.length, " cards")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "4px" } }, sorted.map((card) => {
      const pri = PRIORITIES[card.priority || "medium"];
      const st = STATUSES[card.status || "none"];
      const di = smartDue(card.due);
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: card.id,
          onClick: () => setEditCard(card),
          onContextMenu: (e) => {
            e.preventDefault();
            e.stopPropagation();
            setRowCtxMenu({ x: e.clientX, y: e.clientY, cardId: card.id });
          },
          style: { display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "8px", background: T.cardBg, border: `1px solid ${T.cardBorder}`, cursor: "pointer", transition: "border-color 0.15s" },
          onMouseEnter: (e) => e.currentTarget.style.borderColor = T.accent + "88",
          onMouseLeave: (e) => e.currentTarget.style.borderColor = T.cardBorder
        },
        /* @__PURE__ */ React.createElement("div", { style: { width: "3px", height: "32px", borderRadius: "2px", background: pri.color, flexShrink: 0 } }),
        /* @__PURE__ */ React.createElement("div", { style: { flex: 2, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: 600, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, card.title), card.blockedBy && card.blockedBy.length > 0 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.danger } }, "\u{1F6AB} Blocked")),
        /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, minWidth: "80px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, background: T.colCountBg, padding: "2px 7px", borderRadius: "5px" } }, card._col.title)),
        /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, minWidth: "80px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", padding: "2px 7px", borderRadius: "5px", background: st.bg, color: st.color } }, st.label)),
        /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, minWidth: "60px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: pri.color } }, pri.label)),
        /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, minWidth: "80px" } }, di && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: di.color } }, di.label)),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px", flexShrink: 0, maxWidth: "120px", overflow: "hidden" } }, card.tags.slice(0, 2).map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t }))),
        card.subtasks && card.subtasks.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, fontSize: "10px", color: T.textMuted, whiteSpace: "nowrap" } }, "\u2611 ", card.subtasks.filter((s) => s.done).length, "/", card.subtasks.length)
      );
    }), sorted.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px", color: T.textMuted, fontSize: "12px" } }, "No cards match current filters")));
  }
  function TableView({ board, onUpdate, searchQuery, filterStatus, filterPriority }) {
    const T = useT();
    const [editCard, setEditCard] = useState(null);
    const [rowCtxMenu, setRowCtxMenu] = useState(null);
    const [sortBy, setSortBy] = useState("col");
    const [sortDir, setSortDir] = useState(1);
    const allCards = board.cols.flatMap((col) => col.cards.map((c) => ({ ...c, _col: col })));
    const filtered = allCards.filter((c) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!c.title.toLowerCase().includes(q) && !(c.note || "").toLowerCase().includes(q)) return false;
      }
      if (filterStatus !== "all" && c.status !== filterStatus) return false;
      if (filterPriority !== "all" && c.priority !== filterPriority) return false;
      return true;
    });
    const priOrd = { high: 0, medium: 1, low: 2 };
    const sorted = [...filtered].sort((a, b) => {
      let r = 0;
      if (sortBy === "col") r = board.cols.findIndex((c) => c.id === a._col.id) - board.cols.findIndex((c) => c.id === b._col.id);
      else if (sortBy === "priority") r = (priOrd[a.priority] || 1) - (priOrd[b.priority] || 1);
      else if (sortBy === "status") r = (a.status || "").localeCompare(b.status || "");
      else if (sortBy === "due") r = (a.due || "9999") > (b.due || "9999") ? 1 : -1;
      else if (sortBy === "title") r = a.title.localeCompare(b.title);
      else if (sortBy === "subtasks") r = (b.subtasks || []).length - (a.subtasks || []).length;
      return r * sortDir;
    });
    const TH = ({ field, label, w }) => /* @__PURE__ */ React.createElement(
      "th",
      {
        onClick: () => {
          if (sortBy === field) setSortDir((d) => -d);
          else {
            setSortBy(field);
            setSortDir(1);
          }
        },
        style: { padding: "8px 12px", textAlign: "left", fontSize: "10px", fontWeight: 700, color: sortBy === field ? T.accent : T.textMuted, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap", borderBottom: `1px solid ${T.colBorder}`, background: T.headerBg, width: w, userSelect: "none", fontFamily: "var(--app-font)" }
      },
      label,
      sortBy === field ? sortDir === 1 ? " \u2191" : " \u2193" : ""
    );
    const quickUpdateCard = (cardId, patch) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === cardId ? { ...x, ...patch } : x) })) });
    };
    const moveCardToArchive = (cardId) => {
      const c2 = allCards.find((c) => c.id === cardId);
      if (!c2) return;
      onUpdate({ ...board, archive: [...board.archive || [], { ...c2, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
    };
    const moveCardToTrash = (cardId) => {
      const c2 = allCards.find((c) => c.id === cardId);
      if (!c2) return;
      onUpdate({ ...board, trash: [...board.trash || [], { ...c2, trashedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
    };
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", overflowX: "auto", padding: "16px 24px" } },
      rowCtxMenu && /* @__PURE__ */ React.createElement("div", { onClick: () => setRowCtxMenu(null), style: { position: "fixed", inset: 0, zIndex: 1790 } }),
      rowCtxMenu && (() => {
      const card = allCards.find((x) => x.id === rowCtxMenu.cardId);
      if (!card) return null;
      const ms = { position: "fixed", left: Math.max(8, Math.min(rowCtxMenu.x, window.innerWidth - 16)), top: Math.max(8, Math.min(rowCtxMenu.y, window.innerHeight - 16)), background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.45)", zIndex: 1800, minWidth: "190px", maxHeight: "calc(100vh - 16px)", overflowY: "auto", padding: "4px" };
      const it = (label, action, danger, icon) => /* @__PURE__ */ React.createElement("div", { onClick: (e) => { e.stopPropagation(); action(); setRowCtxMenu(null); }, style: { padding: "7px 10px", borderRadius: "6px", cursor: "pointer", fontSize: "11px", color: danger ? T.danger : T.text, display: "flex", alignItems: "center", gap: "7px" }, onMouseEnter: (e) => e.currentTarget.style.background = danger ? T.danger + "22" : T.accent + "18", onMouseLeave: (e) => e.currentTarget.style.background = "transparent" }, /* @__PURE__ */ React.createElement("span", { style: { width: "14px", textAlign: "center" } }, icon), label);
      return /* @__PURE__ */ React.createElement("div", { style: ms }, it("Open / Edit", () => setEditCard(card), false, "✏"), it("Mark as Done", () => quickUpdateCard(card.id, { status: "done" }), false, "✓"), it("Archive", () => moveCardToArchive(card.id), false, "🗃"), it("Move to Trash", () => moveCardToTrash(card.id), true, "🗑"));
    })(),
      editCard && /* @__PURE__ */ React.createElement(CardModal, { card: editCard, onSave: (updated) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === updated.id ? updated : x) })) });
      setEditCard(null);
    }, onClose: () => setEditCard(null), onTrash: (id) => {
      onUpdate({ ...board, trash: [...board.trash || [], { ...allCards.find((c) => c.id === id), trashedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
      setEditCard(null);
    }, onArchive: (id) => {
      const c2 = allCards.find((c) => c.id === id);
      onUpdate({ ...board, archive: [...board.archive || [], { ...c2, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
      setEditCard(null);
    }, allCards }), /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "11px", fontFamily: "var(--app-font)" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(TH, { field: "title", label: "Title", w: "30%" }), /* @__PURE__ */ React.createElement(TH, { field: "col", label: "Column", w: "10%" }), /* @__PURE__ */ React.createElement(TH, { field: "status", label: "Status", w: "10%" }), /* @__PURE__ */ React.createElement(TH, { field: "priority", label: "Priority", w: "8%" }), /* @__PURE__ */ React.createElement(TH, { field: "due", label: "Due", w: "10%" }), /* @__PURE__ */ React.createElement(TH, { field: "subtasks", label: "Subtasks", w: "8%" }), /* @__PURE__ */ React.createElement("th", { style: { padding: "8px 12px", textAlign: "left", fontSize: "10px", fontWeight: 700, color: T.textMuted, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `1px solid ${T.colBorder}`, background: T.headerBg, fontFamily: "var(--app-font)" } }, "Tags"), /* @__PURE__ */ React.createElement("th", { style: { padding: "8px 12px", textAlign: "left", fontSize: "10px", fontWeight: 700, color: T.textMuted, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `1px solid ${T.colBorder}`, background: T.headerBg, fontFamily: "var(--app-font)" } }, "Note"))), /* @__PURE__ */ React.createElement("tbody", null, sorted.map((card, i) => {
      const pri = PRIORITIES[card.priority || "medium"];
      const st = STATUSES[card.status || "none"];
      const di = smartDue(card.due);
      const stDone = (card.subtasks || []).filter((s) => s.done).length;
      const stTotal = (card.subtasks || []).length;
      return /* @__PURE__ */ React.createElement(
        "tr",
        {
          key: card.id,
          onClick: () => setEditCard(card),
          onContextMenu: (e) => {
            e.preventDefault();
            e.stopPropagation();
            setRowCtxMenu({ x: e.clientX, y: e.clientY, cardId: card.id });
          },
          style: { background: i % 2 === 0 ? T.cardBg : T.colBg, cursor: "pointer", transition: "background 0.1s" },
          onMouseEnter: (e) => e.currentTarget.style.background = T.accent + "15",
          onMouseLeave: (e) => e.currentTarget.style.background = i % 2 === 0 ? T.cardBg : T.colBg
        },
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}`, maxWidth: "280px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "3px", height: "20px", borderRadius: "2px", background: pri.color, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: T.text, fontWeight: 600 } }, card.title), card.blockedBy && card.blockedBy.length > 0 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.danger, flexShrink: 0 } }, "\u{1F6AB}"))),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}`, whiteSpace: "nowrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted } }, card._col.title)),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}` } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", padding: "2px 7px", borderRadius: "5px", background: st.bg, color: st.color, whiteSpace: "nowrap" } }, st.label)),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}` } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: pri.color, fontWeight: 600 } }, pri.label)),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}`, whiteSpace: "nowrap" } }, di && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: di.color, fontWeight: di.urgent ? 700 : 400 } }, di.urgent ? "\u26A0 " : "", di.label)),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}` } }, stTotal > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted, marginBottom: "2px" } }, stDone, "/", stTotal), /* @__PURE__ */ React.createElement("div", { style: { height: "3px", background: T.progressBg, borderRadius: "2px", width: "60px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: (stTotal > 0 ? Math.round(stDone / stTotal * 100) : 0) + "%", background: stDone === stTotal ? T.progressDone : T.progressFill } })))),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px", flexWrap: "wrap" } }, (card.tags || []).slice(0, 3).map((t) => /* @__PURE__ */ React.createElement(Tag, { key: t, label: t })))),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 12px", borderBottom: `1px solid ${T.colBorder}`, maxWidth: "200px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" } }, card.note || ""))
      );
    }))), sorted.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px", color: T.textMuted, fontSize: "12px" } }, "No cards match current filters"));
  }
  function CalendarView({ board, onUpdate, allBoards }) {
    const T = useT();
    const [editCard, setEditCard] = useState(null);
    const [dayCtxMenu, setDayCtxMenu] = useState(null);
    const today = /* @__PURE__ */ new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const allCards = board.cols.flatMap((col) => col.cards.map((c) => ({ ...c, _col: col })));
    const cardsWithDue = allCards.filter((c) => c.due);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDow = new Date(year, month, 1).getDay();
    const todayStr = today.toLocaleDateString("en-CA");
    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const getCardsForDay = (d) => {
      const ds = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      return cardsWithDue.filter((c) => c.due === ds);
    };
    const quickUpdateCard = (cardId, patch) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === cardId ? { ...x, ...patch } : x) })) });
    };
    const moveCardToArchive = (cardId) => {
      const c2 = allCards.find((c) => c.id === cardId);
      if (!c2) return;
      onUpdate({ ...board, archive: [...board.archive || [], { ...c2, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
    };
    const moveCardToTrash = (cardId) => {
      const c2 = allCards.find((c) => c.id === cardId);
      if (!c2) return;
      onUpdate({ ...board, trash: [...board.trash || [], { ...c2, trashedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== cardId) })) });
    };
    return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", padding: "16px 24px", overflowY: "auto" } },
      dayCtxMenu && /* @__PURE__ */ React.createElement("div", { onClick: () => setDayCtxMenu(null), style: { position: "fixed", inset: 0, zIndex: 1790 } }),
      dayCtxMenu && (() => {
      const card = allCards.find((x) => x.id === dayCtxMenu.cardId);
      if (!card) return null;
      const ms = { position: "fixed", left: Math.max(8, Math.min(dayCtxMenu.x, window.innerWidth - 16)), top: Math.max(8, Math.min(dayCtxMenu.y, window.innerHeight - 16)), background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "8px", boxShadow: "0 8px 24px rgba(0,0,0,0.45)", zIndex: 1800, minWidth: "190px", maxHeight: "calc(100vh - 16px)", overflowY: "auto", padding: "4px" };
      const it = (label, action, danger, icon) => /* @__PURE__ */ React.createElement("div", { onClick: (e) => { e.stopPropagation(); action(); setDayCtxMenu(null); }, style: { padding: "7px 10px", borderRadius: "6px", cursor: "pointer", fontSize: "11px", color: danger ? T.danger : T.text, display: "flex", alignItems: "center", gap: "7px" }, onMouseEnter: (e) => e.currentTarget.style.background = danger ? T.danger + "22" : T.accent + "18", onMouseLeave: (e) => e.currentTarget.style.background = "transparent" }, /* @__PURE__ */ React.createElement("span", { style: { width: "14px", textAlign: "center" } }, icon), label);
      return /* @__PURE__ */ React.createElement("div", { style: ms }, it("Open / Edit", () => setEditCard(card), false, "✏"), it("Mark as Done", () => quickUpdateCard(card.id, { status: "done" }), false, "✓"), it("Archive", () => moveCardToArchive(card.id), false, "🗃"), it("Move to Trash", () => moveCardToTrash(card.id), true, "🗑"));
    })(),
      editCard && /* @__PURE__ */ React.createElement(CardModal, { card: editCard, onSave: (updated) => {
      onUpdate({ ...board, cols: board.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === updated.id ? updated : x) })) });
      setEditCard(null);
    }, onClose: () => setEditCard(null), onTrash: (id) => {
      onUpdate({ ...board, trash: [...board.trash || [], { ...allCards.find((c) => c.id === id), trashedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
      setEditCard(null);
    }, onArchive: (id) => {
      const c2 = allCards.find((c) => c.id === id);
      onUpdate({ ...board, archive: [...board.archive || [], { ...c2, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
      setEditCard(null);
    }, allCards }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          if (month === 0) {
            setMonth(11);
            setYear((y) => y - 1);
          } else setMonth((m) => m - 1);
        },
        style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, color: T.text, borderRadius: "6px", padding: "5px 12px", cursor: "pointer", fontSize: "13px" }
      },
      "\u2039"
    ), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "14px", fontWeight: 700, color: T.text, minWidth: "140px", textAlign: "center" } }, MONTHS[month], " ", year), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          if (month === 11) {
            setMonth(0);
            setYear((y) => y + 1);
          } else setMonth((m) => m + 1);
        },
        style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, color: T.text, borderRadius: "6px", padding: "5px 12px", cursor: "pointer", fontSize: "13px" }
      },
      "\u203A"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          setYear(today.getFullYear());
          setMonth(today.getMonth());
        },
        style: { background: T.accent + "22", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "6px", padding: "5px 10px", cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)", marginLeft: "4px" }
      },
      "Today"
    ), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, marginLeft: "auto" } }, cardsWithDue.length, " cards with due dates")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "2px", marginBottom: "2px" } }, DAYS.map((d) => /* @__PURE__ */ React.createElement("div", { key: d, style: { textAlign: "center", fontSize: "10px", fontWeight: 700, color: T.textMuted, padding: "4px", letterSpacing: "0.08em", fontFamily: "var(--app-font)" } }, d))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "2px", flex: 1 } }, Array.from({ length: firstDow }, (_, i) => /* @__PURE__ */ React.createElement("div", { key: "e" + i, style: { background: T.inputBg + "44", borderRadius: "6px", minHeight: "80px" } })), Array.from({ length: daysInMonth }, (_, i) => {
      const d = i + 1;
      const ds = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const dayCards = getCardsForDay(d);
      const isToday = ds === todayStr;
      const isPast = ds < todayStr;
      return /* @__PURE__ */ React.createElement("div", { key: d, style: { background: isToday ? T.accent + "22" : T.colBg, border: `1px solid ${isToday ? T.accent : T.colBorder}`, borderRadius: "6px", padding: "4px", minHeight: "80px", display: "flex", flexDirection: "column", gap: "2px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: isToday ? 700 : 400, color: isToday ? T.accent : isPast ? T.textMuted : T.text, marginBottom: "2px", textAlign: "right" } }, d), dayCards.map((c) => {
        const pri = PRIORITIES[c.priority || "medium"];
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: c.id,
            onClick: () => setEditCard(c),
            onContextMenu: (e) => {
              e.preventDefault();
              e.stopPropagation();
              setDayCtxMenu({ x: e.clientX, y: e.clientY, cardId: c.id });
            },
            style: { fontSize: "9px", padding: "2px 5px", borderRadius: "3px", background: pri.color + "22", color: pri.color, border: `1px solid ${pri.color}44`, cursor: "pointer", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--app-font)" },
            title: c.title
          },
          c.title
        );
      }));
    })));
  }
  function GlobalSearch({ boards, onClose, onOpenCard, onNavigate }) {
    const T = useT();
    const [q, setQ] = useState("");
    const inputRef = useRef();
    useEffect(() => {
      inputRef.current?.focus();
    }, []);
    const results = q.trim().length < 2 ? [] : (() => {
      const ql = q.toLowerCase();
      const hits = [];
      boards.forEach((board) => {
        board.cols.forEach((col) => {
          col.cards.forEach((card) => {
            const score = (card.title.toLowerCase().includes(ql) ? 3 : 0) + ((card.note || "").toLowerCase().includes(ql) ? 2 : 0) + (card.tags.some((t) => t.toLowerCase().includes(ql)) ? 1 : 0);
            if (score > 0) hits.push({ card, board, col, score, type: "card" });
          });
        });
        (board.archive || []).forEach((card) => {
          if (card.title.toLowerCase().includes(ql) || (card.note || "").toLowerCase().includes(ql))
            hits.push({ card, board, col: null, score: 1, type: "archive" });
        });
        (board.trash || []).forEach((card) => {
          if (card.title.toLowerCase().includes(ql))
            hits.push({ card, board, col: null, score: 1, type: "trash" });
        });
      });
      return hits.sort((a, b) => b.score - a.score).slice(0, 30);
    })();
    const highlight = (text, q2) => {
      if (!q2 || !text) return text;
      var idx2 = text.toLowerCase().indexOf(q2.toLowerCase());
      if (idx2 < 0) return text;
      var parts = [text.slice(0, idx2), text.slice(idx2, idx2 + q2.length), text.slice(idx2 + q2.length)];
      return parts.map((p, i) => p.toLowerCase() === q2.toLowerCase() ? /* @__PURE__ */ React.createElement("mark", { key: i, style: { background: T.accent + "44", color: T.accent, borderRadius: "2px", padding: "0 1px" } }, p) : /* @__PURE__ */ React.createElement("span", { key: i }, p));
    };
    return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 2e3, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "80px" }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: { background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "14px", width: "580px", maxWidth: "95vw", maxHeight: "75vh", display: "flex", flexDirection: "column", boxShadow: "0 24px 80px rgba(0,0,0,0.6)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px", borderBottom: `1px solid ${T.colBorder}`, display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "16px", color: T.textMuted } }, "\u{1F50D}"), /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: inputRef,
        value: q,
        onChange: (e) => setQ(e.target.value),
        placeholder: "Search all boards, archive, trash\u2026",
        style: { flex: 1, background: "transparent", border: "none", color: T.text, fontSize: "14px", fontFamily: "var(--app-font)", outline: "none" },
        onKeyDown: (e) => {
          if (e.key === "Escape") onClose();
        }
      }
    ), q && /* @__PURE__ */ React.createElement("button", { onClick: () => setQ(""), style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "14px" } }, "\u2715"), /* @__PURE__ */ React.createElement("kbd", { style: { fontSize: "10px", color: T.textMuted, background: T.colCountBg, padding: "2px 6px", borderRadius: "4px" } }, "Esc")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto" } }, q.trim().length < 2 && /* @__PURE__ */ React.createElement("div", { style: { padding: "30px", textAlign: "center", color: T.textMuted, fontSize: "12px", fontFamily: "var(--app-font)" } }, "Type at least 2 characters to search\u2026"), q.trim().length >= 2 && results.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "30px", textAlign: "center", color: T.textMuted, fontSize: "12px" } }, 'No results found for "', q, '"'), results.map((r, i) => {
      const pri = PRIORITIES[r.card.priority || "medium"];
      const st = STATUSES[r.card.status || "none"];
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: r.card.id + i,
          onClick: () => {
            onNavigate(r.board.id);
            onOpenCard(r.card);
            onClose();
          },
          style: { display: "flex", alignItems: "center", gap: "10px", padding: "10px 20px", cursor: "pointer", borderBottom: `1px solid ${T.colBorder}`, transition: "background 0.1s" },
          onMouseEnter: (e) => e.currentTarget.style.background = T.accent + "12",
          onMouseLeave: (e) => e.currentTarget.style.background = "transparent"
        },
        /* @__PURE__ */ React.createElement("div", { style: { width: "3px", height: "36px", background: pri.color, borderRadius: "2px", flexShrink: 0 } }),
        /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: 600, color: T.text, marginBottom: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, highlight(r.card.title, q)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted, display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: T.accent } }, r.board.name), r.col && /* @__PURE__ */ React.createElement("span", null, r.col.title), r.type !== "card" && /* @__PURE__ */ React.createElement("span", { style: { color: T.danger, background: T.danger + "15", padding: "1px 5px", borderRadius: "3px" } }, r.type), r.card.note && /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "200px" } }, highlight((r.card.note || "").slice(0, 60), q)))),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", padding: "2px 7px", borderRadius: "5px", background: st.bg, color: st.color, flexShrink: 0 } }, st.label)
      );
    })), results.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px", borderTop: `1px solid ${T.colBorder}`, fontSize: "10px", color: T.textMuted, fontFamily: "var(--app-font)" } }, results.length, " result", results.length !== 1 ? "s" : "")));
  }
  function BoardCtxMenu({ menu, onClose, board, onUpdate, boards, onMoveCardsToBoard, renameCol, reorderCol, deleteCol, setSelectedCards, setBulkMode, setEditCard, Column, addColumnWithName, toggleBulkMode, selectAll, clearSelection, bulkMode, selectedCardsCount = 0 }) {
    const T = useT();
    const overlay = /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 1800 } });
    const cssZoom = parseFloat(document.documentElement.style.zoom) || 1;
    const mx = menu.x / cssZoom, my = menu.y / cssZoom;
    const vw = window.innerWidth / cssZoom, vh = window.innerHeight / cssZoom;
    const MENU_W = 240, MENU_MAX_H = Math.min(520, vh - 32);
    const flipX = mx + MENU_W + 8 > vw;
    const flipY = my + MENU_MAX_H + 8 > vh;
    const menuBase = {
      position: "fixed", zIndex: 1900,
      background: `linear-gradient(145deg, ${T.modalBg}, ${T.colBg})`,
      border: `1px solid ${T.accent}33`,
      borderRadius: "12px",
      boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px ${T.accent}11, inset 0 1px 0 ${T.accent}22`,
      padding: "6px",
      minWidth: "220px",
      fontFamily: "var(--app-font)",
      fontSize: "12px",
      color: T.text,
      backdropFilter: "blur(12px)",
      left: flipX ? Math.max(8, mx - MENU_W) : Math.min(mx, vw - MENU_W - 8),
      top: flipY ? Math.max(8, my - MENU_MAX_H) : my,
      maxHeight: MENU_MAX_H + "px",
      overflowY: "auto",
    };

    const hd = (label, extra) => /* @__PURE__ */ React.createElement("div", {
      style: { padding: "5px 10px 3px", fontSize: "9px", color: T.accent, fontWeight: 800,
        letterSpacing: "0.12em", textTransform: "uppercase", display: "flex",
        justifyContent: "space-between", alignItems: "center", marginTop: "2px" }
    }, label, extra && /* @__PURE__ */ React.createElement("span", { style: { color: T.textMuted, fontWeight: 400, fontSize: "9px", textTransform: "none", letterSpacing: 0 } }, extra));

    const sp = () => /* @__PURE__ */ React.createElement("div", {
      style: { height: "1px", background: `linear-gradient(90deg, transparent, ${T.accent}33, transparent)`, margin: "4px 8px" }
    });

    const it = (icon, label, action, danger, sub, disabled, hint) => /* @__PURE__ */ React.createElement("div", {
      onClick: disabled ? undefined : (e) => { e.stopPropagation(); if (typeof action === "function") action(); onClose(); },
      style: {
        padding: "7px 10px", borderRadius: "7px", cursor: disabled ? "default" : "pointer",
        display: "flex", alignItems: "center", gap: "9px", opacity: disabled ? 0.4 : 1,
        color: danger ? T.danger : T.text, transition: "all 0.1s", position: "relative"
      },
      onMouseEnter: disabled ? undefined : (e) => {
        e.currentTarget.style.background = danger ? `${T.danger}20` : `${T.accent}18`;
        e.currentTarget.style.transform = "translateX(2px)";
      },
      onMouseLeave: disabled ? undefined : (e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.transform = "translateX(0)";
      }
    },
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", width: "18px", textAlign: "center", flexShrink: 0 } }, icon),
      /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: "11px", fontWeight: 500 } }, label),
      hint && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted, marginRight: "4px" } }, hint),
      sub && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: T.textMuted, background: T.colCountBg, borderRadius: "4px", padding: "1px 5px", flexShrink: 0 } }, sub)
    );

    if (menu.type === "board") {
      const totalCards = board.cols.reduce((s, c) => s + c.cards.length, 0);
      const doneCards = board.cols.reduce((s, c) => s + c.cards.filter((x) => x.status === "done").length, 0);
      return ReactDOM.createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, overlay,
        /* @__PURE__ */ React.createElement("div", { style: menuBase },
          hd("Kanban Board", `${board.cols.length} cols · ${totalCards} cards`),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 6px", fontSize: "11px", color: T.textMuted } }, board.name || "Untitled board"),
          sp(),
          it("➕", "Add Column", () => {
            const n = prompt("Column name:", "New Column");
            if (n && n.trim()) addColumnWithName(n.trim());
          }, false),
          it("☑", bulkMode ? "Exit Bulk Mode" : "Enter Bulk Mode", () => toggleBulkMode(), false),
          it("✅", "Select All Cards", () => { selectAll(); setBulkMode(true); }, false, `${totalCards}`, totalCards === 0),
          it("🧹", "Clear Selection", () => clearSelection(), false, `${selectedCardsCount}`, selectedCardsCount === 0),
          sp(),
          it("📦", "Archive Completed Cards", () => {
            const doneSet = new Set(board.cols.flatMap((c) => c.cards).filter((x) => x.status === "done").map((x) => x.id));
            if (!doneSet.size) return;
            onUpdate({
              ...board,
              archive: [...(board.archive || []), ...board.cols.flatMap((c) => c.cards).filter((x) => doneSet.has(x.id)).map((x) => ({ ...x, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }))],
              cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => !doneSet.has(x.id)) }))
            });
          }, false, `${doneCards}`, doneCards === 0),
          it("🗑", "Move Completed to Trash", () => {
            const doneSet = new Set(board.cols.flatMap((c) => c.cards).filter((x) => x.status === "done").map((x) => x.id));
            if (!doneSet.size) return;
            onUpdate({
              ...board,
              trash: [...(board.trash || []), ...board.cols.flatMap((c) => c.cards).filter((x) => doneSet.has(x.id)).map((x) => ({ ...x, trashedAt: (/* @__PURE__ */ new Date()).toISOString() }))],
              cols: board.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => !doneSet.has(x.id)) }))
            });
          }, true, `${doneCards}`, doneCards === 0)
        )
      ), document.body);
    }

    if (menu.type === "col") {
      const col = board.cols.find(c => c.id === menu.colId);
      if (!col) return null;
      const colIdx2 = board.cols.findIndex(c => c.id === col.id);
      return ReactDOM.createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, overlay,
        /* @__PURE__ */ React.createElement("div", { style: menuBase },
          hd("Column", `${col.cards.length} cards`),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 6px", display: "flex", alignItems: "center", gap: "8px" } },
            /* @__PURE__ */ React.createElement("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: col.color || T.accent, boxShadow: `0 0 6px ${col.color || T.accent}` } }),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: 700, color: T.text } }, col.title)
          ),
          sp(),
          it("➕", "Add Card Here", () => { if (Column.addMap?.[col.id]) Column.addMap[col.id](); }, false),
          it("✏️", "Rename Column", () => { const n = prompt("Rename column:", col.title); if (n?.trim()) renameCol(col.id, n.trim()); }, false),
          it("🎯", col.wipLimit ? "Edit WIP Limit" : "Set WIP Limit", () => {
            const cur = typeof col.wipLimit === "number" && col.wipLimit > 0 ? String(col.wipLimit) : "";
            const v = prompt("Set WIP limit for this column (cards):", cur);
            if (v === null) return;
            const n = parseInt(v, 10);
            if (!Number.isFinite(n) || n <= 0) {
              alert("Enter a positive number.");
              return;
            }
            onUpdate({ ...board, cols: board.cols.map((c) => c.id === col.id ? { ...c, wipLimit: n } : c) });
          }, false, col.wipLimit ? `${col.cards.length}/${col.wipLimit}` : null),
          it("♻️", "Clear WIP Limit", () => {
            onUpdate({ ...board, cols: board.cols.map((c) => c.id === col.id ? (({ wipLimit, ...rest }) => rest)(c) : c) });
          }, false, null, !(typeof col.wipLimit === "number" && col.wipLimit > 0)),
          sp(),
          hd("Move"),
          it("⬅", "Move Left", () => reorderCol(colIdx2, colIdx2 - 1), false, null, colIdx2 === 0),
          it("➡", "Move Right", () => reorderCol(colIdx2, colIdx2 + 1), false, null, colIdx2 === board.cols.length - 1),
          sp(),
          hd("Select"),
          it("☑", "Select All Cards", () => { setSelectedCards(new Set(col.cards.map(c => c.id))); setBulkMode(true); }, false, `${col.cards.length}`, col.cards.length === 0),
          sp(),
          it("🗑", "Delete Column", () => deleteCol(col.id), true)
        )
      ), document.body);
    }

    if (menu.type === "card") {
      const col = board.cols.find(c => c.id === menu.colId);
      const card = col?.cards.find(c => c.id === menu.cardId);
      if (!card || !col) return null;
      const priority = card.priority || "medium";
      const pColor = PRIORITIES[priority]?.color || T.accent;
      return ReactDOM.createPortal(/* @__PURE__ */ React.createElement(React.Fragment, null, overlay,
        /* @__PURE__ */ React.createElement("div", { style: menuBase },
          hd("Card"),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 6px" } },
            /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: "8px" } },
              /* @__PURE__ */ React.createElement("div", { style: { width: "3px", height: "36px", borderRadius: "3px", background: pColor, flexShrink: 0, marginTop: "2px" } }),
              /* @__PURE__ */ React.createElement("div", null,
                /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: 700, color: T.text, lineHeight: 1.3, maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, card.title || "Untitled"),
                /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted, marginTop: "2px", display: "flex", alignItems: "center", gap: "5px" } },
                  /* @__PURE__ */ React.createElement("span", { style: { color: pColor } }, PRIORITIES[priority]?.label || priority),
                  /* @__PURE__ */ React.createElement("span", null, "·"),
                  /* @__PURE__ */ React.createElement("span", null, col.title)
                )
              )
            )
          ),
          sp(),
          it("✏️", "Open / Edit", () => setEditCard(card), false),
          it("⧉", "Duplicate", () => {
            const clone = { ...card, id: "card" + Date.now(), title: card.title + " (copy)" };
            onUpdate({ ...board, cols: board.cols.map(c => c.id === col.id ? { ...c, cards: [...c.cards, clone] } : c) });
          }, false),
          sp(),
          hd("Set Priority"),
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", padding: "3px 8px 5px" } },
            ...Object.entries(PRIORITIES).map(([k, pv]) =>
              /* @__PURE__ */ React.createElement("div", {
                key: k,
                onClick: (e) => { e.stopPropagation(); onUpdate({ ...board, cols: board.cols.map(c => ({ ...c, cards: c.cards.map(x => x.id === card.id ? { ...x, priority: k } : x) })) }); onClose(); },
                style: { flex: 1, padding: "4px", borderRadius: "6px", cursor: "pointer", textAlign: "center",
                  background: card.priority === k ? pv.color + "33" : "transparent",
                  border: `1px solid ${card.priority === k ? pv.color : T.inputBorder}`,
                  color: pv.color, fontSize: "9px", fontWeight: 700, transition: "all 0.1s" },
                onMouseEnter: (e) => e.currentTarget.style.background = pv.color + "22",
                onMouseLeave: (e) => e.currentTarget.style.background = card.priority === k ? pv.color + "33" : "transparent"
              }, pv.label)
            )
          ),
          sp(),
          board.cols.filter(c => c.id !== col.id).length > 0 && hd("Move to Column"),
          ...board.cols.filter(c => c.id !== col.id).map(tc =>
            it("→", tc.title, () => onUpdate({ ...board, cols: board.cols.map(c =>
              c.id === col.id ? { ...c, cards: c.cards.filter(x => x.id !== card.id) } :
              c.id === tc.id ? { ...c, cards: [...c.cards, card] } : c
            )}), false, `${tc.cards.length}`)
          ),
          boards.filter(b => b.id !== board.id).length > 0 && sp(),
          boards.filter(b => b.id !== board.id).length > 0 && hd("Move to Board"),
          ...boards.filter(b => b.id !== board.id).map(tb =>
            it("📋", tb.name, () => onMoveCardsToBoard([card], board.id, tb.id), false)
          ),
          sp(),
          it("🗃", "Archive Card", () => onUpdate({ ...board,
            cols: board.cols.map(c => c.id === col.id ? { ...c, cards: c.cards.filter(x => x.id !== card.id) } : c),
            archive: [...(board.archive || []), card]
          }), false),
          it("🗑", "Move to Trash", () => onUpdate({ ...board,
            cols: board.cols.map(c => c.id === col.id ? { ...c, cards: c.cards.filter(x => x.id !== card.id) } : c),
            trash: [...(board.trash || []), card]
          }), true)
        )
      ), document.body);
    }
    return null;
  }


  function GlobalCtxMenu({ menu, onClose, boards, activeBoardId, setActiveBoardId, renameBoard, deleteBoard, setBoards, addBoard, VIEWS, activeView, setActiveView }) {
    const T = useT();
    const cssZoom2 = parseFloat(document.documentElement.style.zoom) || 1;
    const gmx = menu.x / cssZoom2, gmy = menu.y / cssZoom2;
    const gvw = window.innerWidth / cssZoom2, gvh = window.innerHeight / cssZoom2;
    const ms = {
      position: "fixed",
      left: gmx + 216 > gvw ? Math.max(8, gmx - 210) : Math.min(gmx, gvw - 216),
      top: gmy + 300 > gvh ? Math.max(8, gmy - 300) : gmy,
      background: T.modalBg, border: `1px solid ${T.modalBorder}`,
      borderRadius: "10px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", zIndex: 1900,
      padding: "4px", minWidth: "200px", maxHeight: "calc(100vh - 16px)", overflowY: "auto", fontFamily: "var(--app-font)", fontSize: "12px", color: T.text
    };
    const it = (label, action, danger, icon) => /* @__PURE__ */ React.createElement("div", {
      onClick: (e) => { e.stopPropagation(); if (typeof action === "function") action(); onClose(); },
      style: { padding: "7px 12px", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", color: danger ? T.danger : T.text },
      onMouseEnter: (e) => e.currentTarget.style.background = danger ? T.danger + "22" : T.accent + "18",
      onMouseLeave: (e) => e.currentTarget.style.background = "transparent"
    }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", width: "16px", textAlign: "center" } }, icon), label);
    const sp = () => /* @__PURE__ */ React.createElement("div", { style: { height: "1px", background: T.colBorder, margin: "3px 6px" } });
    const hd = (label) => /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 4px", fontSize: "10px", color: T.textMuted, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" } }, label);

    if (menu.type === "board") {
      const board = boards.find(b => b.id === menu.boardId);
      if (!board) return null;
      const cardCount = board.cols.reduce((s, c) => s + c.cards.length, 0);
      return /* @__PURE__ */ React.createElement(React.Fragment, null,
        /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 1800 } }),
        /* @__PURE__ */ React.createElement("div", { style: ms },
          hd("Board"),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 10px 6px", fontSize: "11px", color: T.accent, fontWeight: 600 } }, board.name),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "0 10px 6px", fontSize: "10px", color: T.textMuted } }, board.cols.length, " columns · ", cardCount, " cards"),
          it("Switch to Board", () => setActiveBoardId(board.id), false, "🎯"),
          it("Rename Board", () => { const n = prompt("Rename board:", board.name); if (n && n.trim()) renameBoard(board.id, n.trim()); }, false, "✏️"),
          sp(),
          hd("Add Content"),
          it("Add Column", () => {
            setActiveBoardId(board.id);
            const title = prompt("Column name:", "New Column");
            if (!title || !title.trim()) return;
            const colors = ["#e05c5c", "#e6906c", "#2d9e9e", "#9e6fcd", "#e6a817", "#4a9e6b"];
            setBoards((prev) => prev.map((b) => b.id !== board.id ? b : {
              ...b,
              cols: [...b.cols, {
                id: "col" + Date.now(),
                title: title.trim(),
                color: colors[b.cols.length % colors.length],
                cards: []
              }]
            }));
          }, false, "➕"),
          sp(),
          hd("Export"),
          it("Export as JSON", () => {
            const data = JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), boards: [board] }, null, 2);
            const a = document.createElement("a");
            a.href = URL.createObjectURL(new Blob([data], { type: "application/json" }));
            a.download = (board.name || "board").replace(/\s+/g, "-") + ".json";
            a.click();
          }, false, "📥"),
          sp(),
          it("Duplicate Board", () => {
            const clone = { ...board, id: "b" + Date.now(), name: board.name + " (copy)",
              cols: board.cols.map(c => ({ ...c, id: "c" + Date.now() + Math.random(),
                cards: c.cards.map(x => ({ ...x, id: "card" + Date.now() + Math.random() })) })) };
            setBoards(bs => [...bs, clone]);
          }, false, "⧉"),
          boards.length > 1 && sp(),
          boards.length > 1 && it("Delete Board", () => deleteBoard(board.id), true, "🗑")
        )
      );
    }

    if (menu.type === "view") {
      const view = VIEWS.find(v => v.id === menu.viewId);
      if (!view) return null;
      return /* @__PURE__ */ React.createElement(React.Fragment, null,
        /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 1800 } }),
        /* @__PURE__ */ React.createElement("div", { style: ms },
          hd("View"),
          /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 10px 6px", fontSize: "11px", color: T.accent, fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" } },
            /* @__PURE__ */ React.createElement("span", null, view.icon), view.label, activeView === view.id ? " (active)" : ""
          ),
          it("Switch to " + view.label, () => setActiveView(view.id), false, view.icon),
          view.id !== "board" && it("Open Kanban View", () => setActiveView("board"), false, "▦"),
          sp(),
          hd("All Views"),
          ...VIEWS.map(v => it(v.icon + "  " + v.label + (activeView === v.id ? " ✓" : ""), () => setActiveView(v.id), false, null))
        )
      );
    }
    return null;
  }


  function CommandPalette({ open, onClose, actions }) {
    const T = useT();
    const [q, setQ] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
      if (open) {
        setQ("");
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }, [open]);
    if (!open) return null;
    const items = actions.filter((a) => !q.trim() || (a.label || "").toLowerCase().includes(q.trim().toLowerCase()));
    const runFirst = () => {
      if (!items[0]) return;
      items[0].action();
      onClose();
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 2200, background: "rgba(0,0,0,0.65)", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "80px" } },
      /* @__PURE__ */ React.createElement(
        "div",
        { onClick: (e) => e.stopPropagation(), style: { width: "640px", maxWidth: "94vw", background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "14px", boxShadow: "0 24px 80px rgba(0,0,0,0.6)", overflow: "hidden" } },
        /* @__PURE__ */ React.createElement(
          "div",
          { style: { padding: "12px 14px", borderBottom: `1px solid ${T.colBorder}`, display: "flex", alignItems: "center", gap: "8px" } },
          /* @__PURE__ */ React.createElement("span", { style: { color: T.textMuted } }, "\u2318"),
          /* @__PURE__ */ React.createElement("input", {
            ref: inputRef,
            value: q,
            onChange: (e) => setQ(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Escape") onClose();
              if (e.key === "Enter") runFirst();
            },
            placeholder: "Type a command...",
            style: { flex: 1, border: "none", outline: "none", background: "transparent", color: T.text, fontSize: "13px", fontFamily: "var(--app-font)" }
          }),
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted } }, "Enter to run")
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          { style: { maxHeight: "50vh", overflowY: "auto", padding: "6px" } },
          items.map((a, idx) => /* @__PURE__ */ React.createElement(
            "div",
            {
              key: a.id || idx,
              onClick: () => {
                a.action();
                onClose();
              },
              style: { padding: "9px 10px", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", color: T.text },
              onMouseEnter: (e) => e.currentTarget.style.background = T.accent + "16",
              onMouseLeave: (e) => e.currentTarget.style.background = "transparent"
            },
            /* @__PURE__ */ React.createElement("span", { style: { width: "18px", textAlign: "center" } }, a.icon || "\u25CF"),
            /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: "12px" } }, a.label),
            a.hint && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted } }, a.hint)
          )),
          items.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "24px", textAlign: "center", color: T.textMuted, fontSize: "12px" } }, "No commands found")
        )
      )
    );
  }

  function InsightsModal({ open, onClose, board }) {
    const T = useT();
    if (!open || !board) return null;
    const cards = board.cols.flatMap((c) => c.cards);
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    const done = cards.filter((c) => c.status === "done").length;
    const blocked = cards.filter((c) => c.status === "blocked" || (c.blockedBy && c.blockedBy.length > 0)).length;
    const overdue = cards.filter((c) => c.due && c.due < today && c.status !== "done").length;
    const noDue = cards.filter((c) => !c.due).length;
    const byStatus = Object.entries(STATUSES).map(([k, v]) => ({ key: k, label: v.label, n: cards.filter((c) => (c.status || "none") === k).length, color: v.color }));
    return /* @__PURE__ */ React.createElement(
      "div",
      { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 2150, background: "rgba(0,0,0,0.62)", display: "flex", alignItems: "center", justifyContent: "center" } },
      /* @__PURE__ */ React.createElement(
        "div",
        { onClick: (e) => e.stopPropagation(), style: { width: "760px", maxWidth: "95vw", maxHeight: "86vh", overflowY: "auto", background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "14px", padding: "16px", color: T.text } },
        /* @__PURE__ */ React.createElement(
          "div",
          { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" } },
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: "14px", fontWeight: 700 } }, "\u{1F4CA} Board Insights · ", board.name),
          /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "18px" } }, "\u2715")
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px", marginBottom: "12px" } },
          [["Cards", cards.length, T.accent], ["Done", done, T.progressDone], ["Blocked", blocked, T.danger], ["Overdue", overdue, T.danger]].map(([l, v, c]) => /* @__PURE__ */ React.createElement(
            "div",
            { key: l, style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "8px", padding: "10px" } },
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: "18px", fontWeight: 800, color: c } }, v),
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted } }, l)
          ))
        ),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: T.textMuted, marginBottom: "10px" } }, "Completion: ", cards.length ? Math.round(done / cards.length * 100) : 0, "% · No due date: ", noDue),
        /* @__PURE__ */ React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: "6px" } },
          byStatus.map((s) => /* @__PURE__ */ React.createElement(
            "div",
            { key: s.key, style: { display: "flex", alignItems: "center", gap: "8px" } },
            /* @__PURE__ */ React.createElement("div", { style: { width: "88px", fontSize: "10px", color: T.textMuted } }, s.label),
            /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: "8px", background: T.progressBg, borderRadius: "5px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: cards.length ? `${Math.max(2, Math.round(s.n / cards.length * 100))}%` : "0%", height: "100%", background: s.color } })),
            /* @__PURE__ */ React.createElement("div", { style: { width: "36px", textAlign: "right", fontSize: "10px", color: T.text } }, s.n)
          ))
        )
      )
    );
  }

  function FilterPresetsModal({ open, onClose, presets, onApply, onRename, onDelete }) {
    const T = useT();
    if (!open) return null;
    return /* @__PURE__ */ React.createElement(
      "div",
      { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 2160, background: "rgba(0,0,0,0.62)", display: "flex", alignItems: "center", justifyContent: "center" } },
      /* @__PURE__ */ React.createElement(
        "div",
        { onClick: (e) => e.stopPropagation(), style: { width: "520px", maxWidth: "95vw", maxHeight: "82vh", overflowY: "auto", background: T.modalBg, border: `1px solid ${T.modalBorder}`, borderRadius: "14px", padding: "14px", color: T.text } },
        /* @__PURE__ */ React.createElement(
          "div",
          { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" } },
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", fontWeight: 700 } }, "\u{1F5C2}\uFE0F Filter Presets"),
          /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "18px" } }, "\u2715")
        ),
        presets.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "18px", textAlign: "center", color: T.textMuted, fontSize: "11px", background: T.inputBg, borderRadius: "8px" } }, "No presets yet. Create one from active filters."),
        presets.map((p) => /* @__PURE__ */ React.createElement(
          "div",
          { key: p.id, style: { display: "flex", alignItems: "center", gap: "7px", padding: "8px", borderRadius: "8px", background: T.inputBg, border: `1px solid ${T.inputBorder}`, marginBottom: "6px" } },
          /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: 600, color: T.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: T.textMuted, marginTop: "1px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, `q:${p.searchQuery || "-"} · s:${p.filterStatus || "all"} · p:${p.filterPriority || "all"}`)),
          /* @__PURE__ */ React.createElement("button", { onClick: () => onApply(p.id), style: { border: `1px solid ${T.accent}55`, background: T.accent + "22", color: T.accent, borderRadius: "6px", cursor: "pointer", fontSize: "10px", padding: "4px 8px", fontFamily: "var(--app-font)" } }, "Apply"),
          /* @__PURE__ */ React.createElement("button", { onClick: () => onRename(p.id), style: { border: `1px solid ${T.inputBorder}`, background: "transparent", color: T.textMuted, borderRadius: "6px", cursor: "pointer", fontSize: "10px", padding: "4px 8px", fontFamily: "var(--app-font)" } }, "Rename"),
          /* @__PURE__ */ React.createElement("button", { onClick: () => onDelete(p.id), style: { border: `1px solid ${T.danger}55`, background: "transparent", color: T.danger, borderRadius: "6px", cursor: "pointer", fontSize: "10px", padding: "4px 8px", fontFamily: "var(--app-font)" } }, "Delete")
        ))
      )
    );
  }

  function App() {
    const [boards, setBoards] = useState(function() {
      try {
        const s = localStorage.getItem("taskboard_boards");
        return s ? JSON.parse(s) : INITIAL_BOARDS;
      } catch (e) {
        return INITIAL_BOARDS;
      }
    });
    const [activeBoardId, setActiveBoardId] = useState(function() {
      try {
        return localStorage.getItem("taskboard_activeBoard") || "b1";
      } catch (e) {
        return "b1";
      }
    });
    const [themeKey, setThemeKey] = useState(function() {
      try {
        return localStorage.getItem("taskboard_theme") || "dark";
      } catch (e) {
        return "dark";
      }
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterPriority, setFilterPriority] = useState("all");
    const [showArchive, setShowArchive] = useState(false);
    const [showTrashPanel, setShowTrashPanel] = useState(false);
    const [showThemeBuilder, setShowThemeBuilder] = useState(false);
    const [showGlobalSearch, setShowGlobalSearch] = useState(false);
    const [showCommandPalette, setShowCommandPalette] = useState(false);
    const [showInsights, setShowInsights] = useState(false);
    const [showPresetManager, setShowPresetManager] = useState(false);
    const [globalSearchOpenCard, setGlobalSearchOpenCard] = useState(null);
    const [activeView, setActiveView] = useState(function() {
      try {
        return localStorage.getItem("taskboard_view") || "board";
      } catch (e) {
        return "board";
      }
    });
    const VIEWS = [{ id: "board", icon: "\u25A6", label: "Kanban" }, { id: "list", icon: "\u2630", label: "List" }, { id: "table", icon: "\u229E", label: "Table" }, { id: "calendar", icon: "\u{1F4C5}", label: "Calendar" }, { id: "canvas", icon: "\u{1F5FA}", label: "Canvas" }];
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_view", activeView);
      } catch (e) {
      }
    }, [activeView]);
    const cycleView = () => setActiveView((v) => {
      const i = VIEWS.findIndex((x) => x.id === v);
      return VIEWS[(i + 1) % VIEWS.length].id;
    });
    const [canvasData, setCanvasData] = useState(function() {
      var _s = localStorage.getItem("taskboard_canvas");
      try {
        return JSON.parse(_s || "null") || { nodes: [], connections: [], frames: [] };
      } catch (e) {
        return { nodes: [], connections: [], frames: [] };
      }
    });
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_canvas", JSON.stringify(canvasData));
      } catch (e) {
      }
    }, [canvasData]);
    const [displayPrefs, setDisplayPrefs] = useState(function() {
      try { return JSON.parse(localStorage.getItem("taskboard_displayPrefs") || "{}"); } catch(e) { return {}; }
    });
    const [filterPresets, setFilterPresets] = useState(function() {
      try { return JSON.parse(localStorage.getItem("taskboard_filterPresets") || "[]"); } catch(e) { return []; }
    });
    const updatePref = (key, val) => setDisplayPrefs(p => { const n = {...p, [key]: val}; localStorage.setItem("taskboard_displayPrefs", JSON.stringify(n)); return n; });
        const [appFont, setAppFont] = useState(function() {
      try {
        return localStorage.getItem("taskboard_font") || "'JetBrains Mono',monospace";
      } catch (e) {
        return "'JetBrains Mono',monospace";
      }
    });
    const [appFontSize, setAppFontSize] = useState(function() {
      try {
        return parseInt(localStorage.getItem("taskboard_fontSize") || "12");
      } catch (e) {
        return 12;
      }
    });
    const [systemFonts, setSystemFonts] = useState([]);
    const [toast, setToast] = useState(null);
    const [autoExportInterval, setAutoExportIntervalState] = useState(function() {
      try {
        return parseInt(localStorage.getItem("taskboard_autoExport") || "0");
      } catch (e) {
        return 0;
      }
    });
    const [exportFolderName, setExportFolderName] = useState(function() {
      try {
        return localStorage.getItem("taskboard_exportFolder") || "";
      } catch (e) {
        return "";
      }
    });
    const [fsaSupported] = useState(() => typeof window !== "undefined" && ("showSaveFilePicker" in window || !!window.electronAPI));
    const dirHandleRef = useRef(null);
    const lastAutoExport = useRef(null);
    useEffect(() => {
      try {
        lastAutoExport.current = localStorage.getItem("taskboard_lastAutoExport") || null;
      } catch (e) {
      }
    }, []);
    const showToast = (msg, type) => {
      setToast({ msg, type: type || "info" });
      setTimeout(() => setToast(null), 3500);
    };
    const [showSettings, setShowSettings] = useState(false);
    const [addBoardMode, setAddBoardMode] = useState(false);
    const [newBoardName, setNewBoardName] = useState("");
    const [globalCtxMenu, setGlobalCtxMenu] = useState(null);
    const undoStackRef = useRef([]);
    const redoStackRef = useRef([]);
    const HISTORY_LIMIT = 80;
    const cloneBoards = (val) => {
      try {
        return typeof structuredClone === "function" ? structuredClone(val) : JSON.parse(JSON.stringify(val));
      } catch (e) {
        return JSON.parse(JSON.stringify(val));
      }
    };
    const setBoardsTracked = (updater) => setBoards((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      if (!next || next === prev) return prev;
      undoStackRef.current.push(cloneBoards(prev));
      if (undoStackRef.current.length > HISTORY_LIMIT) undoStackRef.current.shift();
      redoStackRef.current = [];
      return next;
    });
    const canUndo = undoStackRef.current.length > 0;
    const canRedo = redoStackRef.current.length > 0;
    const undoBoards = () => {
      setBoards((prev) => {
        if (undoStackRef.current.length === 0) return prev;
        const snap = undoStackRef.current.pop();
        redoStackRef.current.push(cloneBoards(prev));
        return cloneBoards(snap);
      });
    };
    const redoBoards = () => {
      setBoards((prev) => {
        if (redoStackRef.current.length === 0) return prev;
        const snap = redoStackRef.current.pop();
        undoStackRef.current.push(cloneBoards(prev));
        return cloneBoards(snap);
      });
    };
    const handleBoardTabCtx = (e, boardId) => {
      e.preventDefault();
      e.stopPropagation();
      setGlobalCtxMenu({ x: e.clientX, y: e.clientY, type: "board", boardId });
    };
    const handleViewCtx = (e, viewId) => {
      e.preventDefault();
      e.stopPropagation();
      setGlobalCtxMenu({ x: e.clientX, y: e.clientY, type: "view", viewId });
    };
    const searchRef = useRef();
    const showToastGlobal = useRef(null);
    useEffect(() => {
      showToastGlobal.current = showToast;
    }, [showToast]);
    const allThemes = { ...BASE_THEMES, ...loadCustomThemes() };
    const T = allThemes[themeKey] || allThemes.dark || THEMES.dark;
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_boards", JSON.stringify(boards));
      } catch (e) {
      }
    }, [boards]);
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_activeBoard", activeBoardId);
      } catch (e) {
      }
    }, [activeBoardId]);
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_theme", themeKey);
      } catch (e) {
      }
    }, [themeKey]);
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_filterPresets", JSON.stringify(filterPresets));
      } catch (e) {
      }
    }, [filterPresets]);
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_autoExport", autoExportInterval);
      } catch (e) {
      }
    }, [autoExportInterval]);
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_font", appFont);
      } catch (e) {
      }
    }, [appFont]);
    useEffect(() => {
      try {
        localStorage.setItem("taskboard_fontSize", appFontSize);
      } catch (e) {
      }
    }, [appFontSize]);
    useEffect(() => {
      document.documentElement.style.setProperty("--app-font", appFont);
      document.documentElement.style.setProperty("--app-font-size", appFontSize + "px");
      document.body.style.fontFamily = appFont;
      const scale = (appFontSize / 12).toFixed(4);
      document.documentElement.style.zoom = scale;

    }, [appFont, appFontSize]);
    useEffect(() => {
      const detect = async () => {
        try {
          if (!window.queryLocalFonts) return;
          const fonts = await window.queryLocalFonts();
          const families = [...new Set(fonts.map((f) => f.family))].sort();
          setSystemFonts(families.slice(0, 200));
        } catch (e) {
        }
      };
      detect();
    }, []);
    useEffect(() => {
      if (!autoExportInterval || autoExportInterval === 0) return;
      const intervalMs = autoExportInterval * 60 * 1e3;
      const timer = setInterval(async () => {
        await handleExport(true);
        const now = (/* @__PURE__ */ new Date()).toISOString();
        localStorage.setItem("taskboard_lastAutoExport", now);
        lastAutoExport.current = now;
        const dest = exportFolderName ? `\u{1F4C1} ${exportFolderName}` : "\u{1F4E5} Downloads";
        showToast(`Auto-export \u2192 ${dest} (every ${autoExportInterval} min)`, "success");
      }, intervalMs);
      return () => clearInterval(timer);
    }, [autoExportInterval, boards, exportFolderName]);
    useEffect(() => {
      const check = async () => {
        const allCards = boards.flatMap((b) => b.cols.flatMap((c) => c.cards));
        const reminded = JSON.parse(localStorage.getItem("taskboard_reminded") || "{}");
        const nowMs = Date.now();
        for (const card of allCards) {
          if (!card.reminder || !card.due) continue;
          const dueMs = new Date(card.due).getTime();
          const notifyMs = dueMs - (card.reminderMins || 30) * 60 * 1e3;
          const key = card.id + "_" + card.due;
          if (nowMs >= notifyMs && nowMs < dueMs + 6e4 && !reminded[key]) {
            const granted = await requestNotifPermission();
            if (granted) {
              fireNotification(card.title, `Due: ${card.due} \u2014 ${card.reminderMins || 30} min reminder`, card.id);
              reminded[key] = true;
              localStorage.setItem("taskboard_reminded", JSON.stringify(reminded));
            }
          }
        }
      };
      check();
      const t = setInterval(check, 6e4);
      return () => clearInterval(t);
    }, [boards]);
    useEffect(() => {
      document.body.style.background = T.bg;
      let st = document.getElementById("tb-dynamic");
      if (!st) {
        st = document.createElement("style");
        st.id = "tb-dynamic";
        document.head.appendChild(st);
      }
      st.textContent = `::-webkit-scrollbar-thumb{background:${T.scrollThumb};border-radius:4px}input[type=date]::-webkit-calendar-picker-indicator{filter:${T.datePicker}}select option{background:${T.inputBg};color:${T.text}}.kbd{background:${T.colCountBg};border-color:${T.inputBorder};color:${T.text};font-family:var(--app-font)}*{font-family:var(--app-font)}`;
    }, [T]);
    const headerDivRef = useRef(null);
    useEffect(() => {
      const el = headerDivRef.current;
      if (!el) return;
      const upd = () => document.documentElement.style.setProperty('--header-h', el.getBoundingClientRect().height + 'px');
      upd();
      const ro = new ResizeObserver(upd);
      ro.observe(el);
      return () => ro.disconnect();
    }, []);
    useEffect(() => {
      const handler = (e) => {
        const tag = document.activeElement?.tagName;
        const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
        if (e.key === "Escape") {
          setShowArchive(false);
          setShowSettings(false);
          setShowCommandPalette(false);
          setShowInsights(false);
          setShowPresetManager(false);
          setSearchQuery("");
          return;
        }
        if (e.key === "?" && !typing) {
          setShowSettings(true);
          return;
        }
        if ((e.key === "f" || e.key === "/" && !typing) && !typing) {
          e.preventDefault();
          searchRef.current?.focus();
          return;
        }
        if (e.key === "n" && !typing) {
          const board = boards.find((b) => b.id === activeBoardId);
          if (board?.cols?.length > 0 && Column.addMap?.[board.cols[0].id]) Column.addMap[board.cols[0].id]();
          return;
        }
        if (e.ctrlKey && e.key === "e") {
          e.preventDefault();
          handleExport(false);
          return;
        }
        if (e.ctrlKey && e.key === "k") {
          e.preventDefault();
          if (e.shiftKey) setShowCommandPalette(true);
          else setShowGlobalSearch(true);
          return;
        }
        if (e.ctrlKey && e.key === "f") {
          e.preventDefault();
          setShowGlobalSearch(true);
          return;
        }
        if (e.ctrlKey && !e.shiftKey && (e.key === "z" || e.key === "Z")) {
          e.preventDefault();
          undoBoards();
          return;
        }
        if ((e.ctrlKey && (e.key === "y" || e.key === "Y")) || (e.ctrlKey && e.shiftKey && (e.key === "z" || e.key === "Z"))) {
          e.preventDefault();
          redoBoards();
          return;
        }
        if ((e.key === "v" || e.key === "V") && !typing) {
          e.preventDefault();
          cycleView();
          return;
        }
        if ((e.key === "g" || e.key === "G") && !typing) {
          e.preventDefault();
          setActiveView("board");
          return;
        }
        if ((e.key === "i" || e.key === "I") && !typing) {
          e.preventDefault();
          setShowInsights(true);
          return;
        }
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [boards, activeBoardId]);
    const activeBoard = boards.find((b) => b.id === activeBoardId) || boards[0];
    const updateBoard = (updated) => setBoardsTracked((bs) => bs.map((b) => b.id === updated.id ? updated : b));
    const moveCardsToBoard = (cards, sourceBoardId, targetBoardId) => {
      if (sourceBoardId === targetBoardId) return;
      const cardIds = new Set(cards.map((c) => c.id));
      setBoardsTracked((bs) => bs.map((b) => {
        if (b.id === sourceBoardId) {
          return { ...b, cols: b.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => !cardIds.has(x.id)) })) };
        }
        if (b.id === targetBoardId) {
          const newCols = [...b.cols];
          if (newCols.length > 0) newCols[0] = { ...newCols[0], cards: [...newCols[0].cards, ...cards] };
          return { ...b, cols: newCols };
        }
        return b;
      }));
    };
    const renameBoard = (id, name) => setBoardsTracked((bs) => bs.map((b) => b.id === id ? { ...b, name } : b));
    const addBoard = () => {
      if (!newBoardName.trim()) return;
      const id = "b" + Date.now();
      setBoardsTracked((bs) => [...bs, { id, name: newBoardName.trim(), archive: [], trash: [], cols: [{ id: id + "_1", title: "To Do", color: "#7c6fcd", cards: [] }, { id: id + "_2", title: "In Progress", color: "#e6a817", cards: [] }, { id: id + "_3", title: "Done", color: "#2d9e6b", cards: [] }] }]);
      setActiveBoardId(id);
      setNewBoardName("");
      setAddBoardMode(false);
    };
    const deleteBoard = (id) => {
      if (boards.length <= 1) return;
      const remaining = boards.filter((b) => b.id !== id);
      setBoardsTracked(remaining);
      if (activeBoardId === id) setActiveBoardId(remaining[0].id);
    };
    const reorderBoards = (fi, ti) => {
      const bs = [...boards];
      const [m] = bs.splice(fi, 1);
      bs.splice(ti, 0, m);
      setBoardsTracked(bs);
    };
    const getExportData = () => JSON.stringify({
      version: 3,
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      app: {
        boards,
        activeBoardId,
        activeView,
        themeKey,
        canvasData,
        filterPresets,
        displayPrefs,
        appFont,
        appFontSize,
        autoExportInterval,
        customThemes: loadCustomThemes(),
        reminded: JSON.parse(localStorage.getItem("taskboard_reminded") || "{}"),
        lastAutoExport: localStorage.getItem("taskboard_lastAutoExport") || null
      }
    }, null, 2);
    const getExportFilename = () => `taskboard-backup-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19)}.json`;
    const writeToDir = async (dirHandle, data, filename) => {
      if (dirHandle._electronPath && window.electronAPI) {
        const sep = dirHandle._electronPath.includes("\\") ? "\\" : "/";
        await window.electronAPI.saveFile(`${dirHandle._electronPath}${sep}${filename}`, data);
        return;
      }
      const fileHandle = await dirHandle.getFileHandle(filename, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(data);
      await writable.close();
    };
    const handlePickFolder = async () => {
      if (window.electronAPI) {
        try {
          const folderPath = await window.electronAPI.pickFolder();
          if (!folderPath) return;
          dirHandleRef.current = { _electronPath: folderPath, name: folderPath.split(/[\\/]/).pop() };
          setExportFolderName(dirHandleRef.current.name);
          localStorage.setItem("taskboard_exportFolder", dirHandleRef.current.name);
          const data = JSON.stringify({ boards, exportedAt: new Date().toISOString() }, null, 2);
          const filename = `taskboard-backup-${new Date().toISOString().slice(0,10)}.json`;
          await window.electronAPI.saveFile(`${folderPath}/${filename}`, data);
          showToast(`📁 Folder set: ${dirHandleRef.current.name} — first backup saved!`, "success");
        } catch (e) {
          showToast("Could not set folder: " + e.message, "error");
        }
        return;
      }
      if (!fsaSupported) {
        alert("Your browser doesn't support folder picking. Use Chrome or Edge on desktop.");
        return;
      }
      try {
        const dirHandle = await window.showDirectoryPicker({ mode: "readwrite", startIn: "documents" });
        dirHandleRef.current = dirHandle;
        setExportFolderName(dirHandle.name);
        localStorage.setItem("taskboard_exportFolder", dirHandle.name);
        const data = getExportData();
        const filename = getExportFilename();
        await writeToDir(dirHandle, data, filename);
        showToast(`\u{1F4C1} Folder set: ${dirHandle.name} \u2014 first backup saved!`, "success");
      } catch (e) {
        if (e.name !== "AbortError") showToast("Could not access folder: " + e.message, "warn");
      }
    };
    const handleClearFolder = () => {
      dirHandleRef.current = null;
      setExportFolderName("");
      localStorage.removeItem("taskboard_exportFolder");
      showToast("Folder removed \u2014 exports will use browser downloads", "info");
    };
    const handleExport = async (silent) => {
      const data = getExportData();
      const filename = getExportFilename();
      if (dirHandleRef.current) {
        try {
          await writeToDir(dirHandleRef.current, data, filename);
          if (!silent) showToast(`\u{1F4BE} Saved to ${exportFolderName}/${filename}`, "success");
          return;
        } catch (e) {
          dirHandleRef.current = null;
          setExportFolderName("");
          localStorage.removeItem("taskboard_exportFolder");
          showToast("Folder access lost \u2014 falling back to download", "warn");
        }
      }
      const a = document.createElement("a");
      a.href = "data:application/json;charset=utf-8," + encodeURIComponent(data);
      a.download = filename;
      a.click();
      if (!silent) showToast("\u{1F4E5} Download started", "info");
    };
    const handleExcelExport = () => {
      try {
        if (typeof XLSX === "undefined") {
          alert("Excel export requires internet to load the XLSX library. Use JSON export for offline use.");
          return;
        }
        const wb = XLSX.utils.book_new();
        boards.forEach((board) => {
          const rows = [];
          rows.push(["Title", "Column", "Status", "Priority", "Due Date", "Tags", "Note", "Subtasks Done", "Subtasks Total", "Blocked By", "Blocking", "Recur", "Reminder"]);
          board.cols.forEach((col) => {
            col.cards.forEach((card) => {
              const stDone = (card.subtasks || []).filter((s) => s.done).length;
              const stTotal = (card.subtasks || []).length;
              const allCds = board.cols.flatMap((c) => c.cards);
              const blockedByTitles = (card.blockedBy || []).map((id) => allCds.find((c) => c.id === id)?.title || id).join(", ");
              const blockingTitles = (card.blocking || []).map((id) => allCds.find((c) => c.id === id)?.title || id).join(", ");
              rows.push([
                card.title,
                col.title,
                STATUSES[card.status || "none"]?.label || "",
                PRIORITIES[card.priority || "medium"]?.label || "",
                card.due || "",
                (card.tags || []).join(", "),
                card.note || "",
                stDone,
                stTotal,
                blockedByTitles,
                blockingTitles,
                card.recur || "none",
                card.reminder ? "Yes" : "No"
              ]);
            });
          });
          const ws = XLSX.utils.aoa_to_sheet(rows);
          const range = XLSX.utils.decode_range(ws["!ref"]);
          ws["!cols"] = [{ wch: 30 }, { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 12 }, { wch: 20 }, { wch: 40 }, { wch: 8 }, { wch: 8 }, { wch: 20 }, { wch: 20 }, { wch: 8 }, { wch: 8 }];
          const safeName = board.name.replace(/[\/*?[\]:]/g, "").slice(0, 31) || "Board";
          XLSX.utils.book_append_sheet(wb, ws, safeName);
        });
        XLSX.writeFile(wb, "taskboard-" + (/* @__PURE__ */ new Date()).toISOString().split("T")[0] + ".xlsx");
      } catch (e) {
        alert("Export failed: " + e.message);
      }
    };
    const migrateCard = (c) => ({ id: "c" + Date.now(), title: "Untitled", icon: "", tags: [], priority: "medium", status: "none", cardColor: "none", note: "", due: "", recur: "none", reminder: false, reminderMins: 30, subtasks: [], blockedBy: [], blocking: [], ...c });
    const migrateBoard = (b) => ({ archive: [], trash: [], ...b, cols: (b.cols || []).map((col) => ({ ...col, cards: (col.cards || []).map(migrateCard) })) });
    const handleImport = (data) => {
      const appData = data?.app && typeof data.app === "object" ? data.app : data;
      let bds = null;
      if (appData?.boards && Array.isArray(appData.boards)) bds = appData.boards;
      else if (Array.isArray(appData)) bds = appData;
      if (!bds || bds.length === 0) {
        alert("Unrecognised format");
        return;
      }
      const migrated = bds.map(migrateBoard);
      setBoards(migrated);
      undoStackRef.current = [];
      redoStackRef.current = [];
      const validBoardId = appData?.activeBoardId && migrated.some((b) => b.id === appData.activeBoardId) ? appData.activeBoardId : migrated[0]?.id || "b1";
      setActiveBoardId(validBoardId);
      if (typeof appData?.activeView === "string") setActiveView(appData.activeView);
      if (typeof appData?.themeKey === "string") setThemeKey(appData.themeKey);
      if (appData?.canvasData && typeof appData.canvasData === "object") setCanvasData(appData.canvasData);
      if (Array.isArray(appData?.filterPresets)) setFilterPresets(appData.filterPresets);
      if (appData?.displayPrefs && typeof appData.displayPrefs === "object") setDisplayPrefs(appData.displayPrefs);
      if (typeof appData?.appFont === "string") setAppFont(appData.appFont);
      if (typeof appData?.appFontSize === "number" && Number.isFinite(appData.appFontSize)) setAppFontSize(appData.appFontSize);
      if (typeof appData?.autoExportInterval === "number" && Number.isFinite(appData.autoExportInterval)) setAutoExportIntervalState(appData.autoExportInterval);
      if (appData?.customThemes && typeof appData.customThemes === "object") localStorage.setItem("taskboard_customThemes", JSON.stringify(appData.customThemes));
      if (appData?.reminded && typeof appData.reminded === "object") localStorage.setItem("taskboard_reminded", JSON.stringify(appData.reminded));
      if (appData?.lastAutoExport) localStorage.setItem("taskboard_lastAutoExport", appData.lastAutoExport);
      showToast("Backup imported: boards, canvas, settings, and themes restored.", "success");
    };
    const restoreFromTrash = (cardId) => {
      const card = (activeBoard?.trash || []).find((c) => c.id === cardId);
      if (!card || !activeBoard?.cols?.length) return;
      const { trashedAt, ...restored } = card;
      updateBoard({ ...activeBoard, trash: (activeBoard.trash || []).filter((c) => c.id !== cardId), cols: activeBoard.cols.map((c, i) => i === 0 ? { ...c, cards: [...c.cards, restored] } : c) });
    };
    const deleteFromTrash = (cardId) => updateBoard({ ...activeBoard, trash: (activeBoard?.trash || []).filter((c) => c.id !== cardId) });
    const emptyTrash = () => {
      if (window.confirm("Permanently delete all trashed cards? This cannot be undone.")) updateBoard({ ...activeBoard, trash: [] });
    };
    const restoreArchived = (cardId) => {
      const card = (activeBoard.archive || []).find((c) => c.id === cardId);
      if (!card || !activeBoard.cols.length) return;
      const { archivedAt, ...restored } = card;
      updateBoard({ ...activeBoard, archive: (activeBoard.archive || []).filter((c) => c.id !== cardId), cols: activeBoard.cols.map((c, i) => i === 0 ? { ...c, cards: [...c.cards, restored] } : c) });
    };
    const deleteArchived = (cardId) => updateBoard({ ...activeBoard, archive: (activeBoard.archive || []).filter((c) => c.id !== cardId) });
    const totalCards = activeBoard?.cols.reduce((s, c) => s + c.cards.length, 0) || 0;
    const archiveCount = (activeBoard?.archive || []).length;
    const trashCount = (activeBoard?.trash || []).length;
    const hasFilters = searchQuery || filterStatus !== "all" || filterPriority !== "all";
    const saveCurrentFilterPreset = () => {
      const name = prompt("Preset name:", `Preset ${filterPresets.length + 1}`);
      if (!name || !name.trim()) return;
      const preset = {
        id: "fp" + Date.now(),
        name: name.trim(),
        searchQuery,
        filterStatus,
        filterPriority
      };
      setFilterPresets((p) => [preset, ...p.slice(0, 11)]);
      showToast("Filter preset saved", "success");
    };
    const applyFilterPreset = (id) => {
      const p = filterPresets.find((x) => x.id === id);
      if (!p) return;
      setSearchQuery(p.searchQuery || "");
      setFilterStatus(p.filterStatus || "all");
      setFilterPriority(p.filterPriority || "all");
    };
    const removeFilterPreset = (id) => setFilterPresets((p) => p.filter((x) => x.id !== id));
    const renameFilterPreset = (id) => {
      const p = filterPresets.find((x) => x.id === id);
      if (!p) return;
      const n = prompt("Rename preset:", p.name);
      if (!n || !n.trim()) return;
      setFilterPresets((prev) => prev.map((x) => x.id === id ? { ...x, name: n.trim() } : x));
    };
    const commandActions = [
      { id: "undo", icon: "↶", label: "Undo last board change", hint: "Ctrl+Z", action: () => undoBoards() },
      { id: "redo", icon: "↷", label: "Redo last undone change", hint: "Ctrl+Y", action: () => redoBoards() },
      { id: "manage-presets", icon: "🗂", label: "Manage filter presets", action: () => setShowPresetManager(true) },
      { id: "new-board", icon: "➕", label: "Create new board", hint: "B", action: () => setAddBoardMode(true) },
      { id: "open-settings", icon: "⚙️", label: "Open settings", hint: "?", action: () => setShowSettings(true) },
      { id: "open-insights", icon: "📊", label: "Open board insights", hint: "I", action: () => setShowInsights(true) },
      { id: "switch-kanban", icon: "▦", label: "Switch to Kanban view", action: () => setActiveView("board") },
      { id: "switch-list", icon: "☰", label: "Switch to List view", action: () => setActiveView("list") },
      { id: "switch-table", icon: "⊞", label: "Switch to Table view", action: () => setActiveView("table") },
      { id: "switch-calendar", icon: "📅", label: "Switch to Calendar view", action: () => setActiveView("calendar") },
      { id: "switch-canvas", icon: "🗺", label: "Switch to Canvas view", action: () => setActiveView("canvas") },
      { id: "global-search", icon: "🔎", label: "Open global search", hint: "Ctrl+K", action: () => setShowGlobalSearch(true) },
      { id: "clear-filters", icon: "🧹", label: "Clear current filters", action: () => { setSearchQuery(""); setFilterStatus("all"); setFilterPriority("all"); } },
      { id: "export-json", icon: "💾", label: "Export JSON backup", hint: "Ctrl+E", action: () => handleExport(false) }
    ];
    return /* @__PURE__ */ React.createElement(FontCtx.Provider, { value: { font: appFont, size: appFontSize } }, /* @__PURE__ */ React.createElement(ThemeCtx.Provider, { value: T }, /* @__PURE__ */ React.createElement("div", { style: { height: "100vh", display: "flex", flexDirection: "column", background: T.bg, fontFamily: "var(--app-font)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, backgroundImage: `radial-gradient(circle, ${T.bgDot} 1px, transparent 1px)`, backgroundSize: "26px 26px", pointerEvents: "none", zIndex: 0 } }), /* @__PURE__ */ React.createElement("div", { ref: headerDivRef, "data-tb-header": true, style: { position: "relative", zIndex: 2, background: T.headerBg, borderBottom: `1px solid ${T.headerBorder}`, backdropFilter: "blur(10px)", padding: "6px 8px", display: "flex", alignItems: "center", minHeight: "84px", flexShrink: 0, gap: "6px", rowGap: "8px", overflowX: "hidden", overflowY: "hidden", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingRight: "10px", borderRight: `1px solid ${T.headerBorder}`, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { width: "26px", height: "26px", borderRadius: "7px", background: T.accentGrad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" } }, "\u{1F4CB}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: 700, color: T.text } }, "Taskboard"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: T.textMuted, letterSpacing: "0.1em" } }, "TASK MANAGER"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "2px", overflowX: "auto", padding: "0 4px", flex: 1, minWidth: 0, flexWrap: "nowrap" } }, boards.map((b, idx) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: b.id,
        draggable: true,
        onDragStart: (e) => {
          e.dataTransfer.setData("boardIdx", idx);
          e.currentTarget.style.opacity = "0.4";
        },
        onDragEnd: (e) => {
          e.currentTarget.style.opacity = "1";
        },
        onDragOver: (e) => {
          e.preventDefault();
          if (drag_type.current === "card" && b.id !== activeBoardId) {
            e.currentTarget.style.background = T.progressDone + "33";
            e.currentTarget.style.outline = "2px solid " + T.progressDone;
          } else {
            e.currentTarget.style.background = T.accent + "18";
          }
        },
        onDragLeave: (e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.outline = "none";
        },
        onDrop: (e) => {
          e.preventDefault();
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.outline = "none";
          if (drag_type.current === "card" && drag_card_data.current && b.id !== activeBoardId) {
            const { card, sourceColId } = drag_card_data.current;
            moveCardsToBoard([card], activeBoardId, b.id);
            drag_card_data.current = null;
            drag_type.current = "";
            return;
          }
          const fi = parseInt(e.dataTransfer.getData("boardIdx"));
          if (fi !== idx) reorderBoards(fi, idx);
        },
        style: { display: "flex", alignItems: "center", gap: "2px", flexShrink: 0, borderRadius: "6px", transition: "background 0.15s,outline 0.1s" }
      },
      /* @__PURE__ */ React.createElement(BoardTab, { board: b, active: activeBoardId === b.id, onClick: () => setActiveBoardId(b.id), onRename: (v) => renameBoard(b.id, v), onContextMenu: (e) => handleBoardTabCtx(e, b.id) }),
      boards.length > 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => deleteBoard(b.id), style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "9px", padding: "0 2px", opacity: 0.4, lineHeight: 1 }, onMouseEnter: (e) => {
        e.currentTarget.style.opacity = 1;
        e.currentTarget.style.color = T.danger;
      }, onMouseLeave: (e) => {
        e.currentTarget.style.opacity = 0.4;
        e.currentTarget.style.color = T.textMuted;
      } }, "\u2715")
    )), addBoardMode ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "5px", marginLeft: "4px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: newBoardName,
        onChange: (e) => setNewBoardName(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") addBoard();
          if (e.key === "Escape") {
            setAddBoardMode(false);
            setNewBoardName("");
          }
        },
        placeholder: "Board name\u2026",
        autoFocus: true,
        style: { background: T.inputBg, border: `1px solid ${T.accent}66`, borderRadius: "6px", color: T.text, fontSize: "11px", fontFamily: "var(--app-font)", padding: "4px 9px", outline: "none", width: "120px" }
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: addBoard, style: { background: T.accent, border: "none", color: "#fff", borderRadius: "5px", padding: "4px 9px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)" } }, "Add"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setAddBoardMode(false);
      setNewBoardName("");
    }, style: { background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "12px" } }, "\u2715")) : /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setAddBoardMode(true),
        style: { padding: "4px 9px", borderRadius: "6px", border: `1px dashed ${T.addBucketBorder}`, cursor: "pointer", fontSize: "11px", fontFamily: "var(--app-font)", background: "transparent", color: T.textMuted, marginLeft: "4px", flexShrink: 0, whiteSpace: "nowrap", transition: "all 0.15s" },
        onMouseEnter: (e) => {
          e.currentTarget.style.borderColor = T.accent;
          e.currentTarget.style.color = T.accent;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.borderColor = T.addBucketBorder;
          e.currentTarget.style.color = T.textMuted;
        }
      },
      "+ Board"
    )), /* @__PURE__ */ React.createElement("div", { "data-tb-views": true, style: { display: "flex", alignItems: "center", gap: "2px", background: T.inputBg, borderRadius: "8px", padding: "2px", border: `1px solid ${T.inputBorder}`, flexShrink: 0, overflowX: "auto", maxWidth: "460px" } }, VIEWS.map((v) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: v.id,
        onClick: () => setActiveView(v.id),
        onContextMenu: (e) => handleViewCtx(e, v.id),
        title: v.label,
        style: {
          padding: "4px 9px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontSize: "11px",
          fontFamily: "var(--app-font)",
          fontWeight: activeView === v.id ? 700 : 400,
          background: activeView === v.id ? T.accent + "33" : "transparent",
          color: activeView === v.id ? T.accent : T.textMuted,
          display: "flex",
          alignItems: "center",
          gap: "4px",
          whiteSpace: "nowrap",
          transition: "all 0.15s"
        }
      },
      /* @__PURE__ */ React.createElement("span", null, v.icon),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px" } }, v.label)
    ))), /* @__PURE__ */ React.createElement("div", { "data-tb-row2": true, style: { display: "flex", alignItems: "center", gap: "10px", rowGap: "8px", paddingTop: "6px", borderTop: `1px solid ${T.headerBorder}`, flexBasis: "100%", minWidth: 0, overflowX: "auto", overflowY: "hidden", flexWrap: "nowrap" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowGlobalSearch(true),
        title: "Global search (Ctrl+K)",
        style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: T.textMuted, cursor: "pointer", fontSize: "11px", padding: "5px 10px", fontFamily: "var(--app-font)", display: "flex", alignItems: "center", gap: "5px", whiteSpace: "nowrap", flexShrink: 0, minWidth: "98px", justifyContent: "center" }
      },
      "\u{1F50D} Search ",
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", opacity: 0.6 } }, "Ctrl+K")
    ), /* @__PURE__ */ React.createElement("button", { onClick: undoBoards, disabled: !canUndo, title: "Undo (Ctrl+Z)", style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: canUndo ? T.textMuted : T.textMuted + "88", cursor: canUndo ? "pointer" : "not-allowed", fontSize: "11px", padding: "5px 10px", fontFamily: "var(--app-font)", whiteSpace: "nowrap", minWidth: "74px" } }, "↶ Undo"), /* @__PURE__ */ React.createElement("button", { onClick: redoBoards, disabled: !canRedo, title: "Redo (Ctrl+Y)", style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: canRedo ? T.textMuted : T.textMuted + "88", cursor: canRedo ? "pointer" : "not-allowed", fontSize: "11px", padding: "5px 10px", fontFamily: "var(--app-font)", whiteSpace: "nowrap", minWidth: "74px" } }, "↷ Redo"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowCommandPalette(true), title: "Command palette (Ctrl+Shift+K)", style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: T.textMuted, cursor: "pointer", fontSize: "11px", padding: "5px 10px", fontFamily: "var(--app-font)", whiteSpace: "nowrap", minWidth: "84px" } }, "\u2318 Cmd"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowInsights(true), title: "Board insights (I)", style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: T.textMuted, cursor: "pointer", fontSize: "11px", padding: "5px 10px", fontFamily: "var(--app-font)", whiteSpace: "nowrap", minWidth: "96px" } }, "\u{1F4CA} Insights"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: searchRef,
        value: searchQuery,
        onChange: (e) => setSearchQuery(e.target.value),
        placeholder: "Board filter\u2026 (F)",
        style: { background: T.inputBg, border: `1px solid ${searchQuery ? T.accent : T.inputBorder}`, borderRadius: "6px", color: T.text, fontSize: "11px", fontFamily: "var(--app-font)", padding: "4px 9px 4px 9px", outline: "none", width: "110px", transition: "border-color 0.15s" }
      }
    ), searchQuery && /* @__PURE__ */ React.createElement("button", { onClick: () => setSearchQuery(""), style: { position: "absolute", right: "6px", background: "none", border: "none", color: T.textMuted, cursor: "pointer", fontSize: "11px", padding: 0 } }, "\u2715")), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: filterStatus,
        onChange: (e) => setFilterStatus(e.target.value),
        style: { background: T.inputBg, border: `1px solid ${filterStatus !== "all" ? T.accent : T.inputBorder}`, borderRadius: "6px", color: filterStatus !== "all" ? T.accent : T.textMuted, fontSize: "11px", fontFamily: "var(--app-font)", padding: "4px 7px", outline: "none", cursor: "pointer" }
      },
      /* @__PURE__ */ React.createElement("option", { value: "all" }, "All Status"),
      Object.entries(STATUSES).map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, v.label))
    ), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: filterPriority,
        onChange: (e) => setFilterPriority(e.target.value),
        style: { background: T.inputBg, border: `1px solid ${filterPriority !== "all" ? T.accent : T.inputBorder}`, borderRadius: "6px", color: filterPriority !== "all" ? T.accent : T.textMuted, fontSize: "11px", fontFamily: "var(--app-font)", padding: "4px 7px", outline: "none", cursor: "pointer" }
      },
      /* @__PURE__ */ React.createElement("option", { value: "all" }, "All Priority"),
      Object.entries(PRIORITIES).map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, v.label))
    ), filterPresets.length > 0 && /* @__PURE__ */ React.createElement("select", { defaultValue: "", onChange: (e) => {
      if (e.target.value) applyFilterPreset(e.target.value);
      e.target.value = "";
    }, style: { background: T.inputBg, border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: T.textMuted, fontSize: "11px", fontFamily: "var(--app-font)", padding: "4px 7px", outline: "none", cursor: "pointer", maxWidth: "160px" } }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Presets"), filterPresets.map((p) => /* @__PURE__ */ React.createElement("option", { key: p.id, value: p.id }, p.name))), hasFilters && /* @__PURE__ */ React.createElement("button", { onClick: saveCurrentFilterPreset, style: { background: "none", border: `1px solid ${T.accent}55`, color: T.accent, borderRadius: "6px", padding: "4px 8px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", whiteSpace: "nowrap" } }, "Save Preset"), filterPresets.length > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => setShowPresetManager(true), style: { background: "none", border: `1px solid ${T.inputBorder}`, color: T.textMuted, borderRadius: "6px", padding: "4px 8px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", whiteSpace: "nowrap" } }, "Manage"), hasFilters && /* @__PURE__ */ React.createElement("button", { onClick: () => {
      setSearchQuery("");
      setFilterStatus("all");
      setFilterPriority("all");
    }, style: { background: "none", border: `1px solid ${T.danger}55`, color: T.danger, borderRadius: "6px", padding: "4px 8px", cursor: "pointer", fontSize: "10px", fontFamily: "var(--app-font)", whiteSpace: "nowrap" } }, "Clear"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: T.textMuted, whiteSpace: "nowrap" } }, totalCards, " cards"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowTrashPanel(true), title: "Trash bin", style: { background: "none", border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: trashCount > 0 ? T.danger : T.textMuted, cursor: "pointer", fontSize: "11px", padding: "4px 8px", fontFamily: "var(--app-font)", whiteSpace: "nowrap" } }, "\u{1F5D1}\uFE0F", trashCount > 0 && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "3px", fontSize: "10px" } }, trashCount)), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowArchive(true), title: "Archive", style: { background: "none", border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: archiveCount > 0 ? T.accent : T.textMuted, cursor: "pointer", fontSize: "11px", padding: "4px 8px", fontFamily: "var(--app-font)", whiteSpace: "nowrap", position: "relative" } }, "\u{1F5C3}\uFE0F", archiveCount > 0 && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "3px", fontSize: "10px" } }, archiveCount)), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowSettings(true), title: "Settings (?)", style: { background: "none", border: `1px solid ${T.inputBorder}`, borderRadius: "6px", color: T.textMuted, cursor: "pointer", fontSize: "13px", padding: "3px 7px" } }, "\u2699\uFE0F"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "hidden", position: "relative", zIndex: 1, display: "flex", flexDirection: "column" } }, activeView === "canvas" && /* @__PURE__ */ React.createElement(CanvasView, { boards, canvasData, onCanvasChange: setCanvasData, onBoardsUpdate: updateBoard }), activeView === "board" && activeBoard && /* @__PURE__ */ React.createElement(Board, { key: activeBoard.id, board: activeBoard, onUpdate: updateBoard, searchQuery, filterStatus, filterPriority, onRecurReset: showToast, onMoveCardsToBoard: moveCardsToBoard, boards, showToastRef: showToastGlobal, displayPrefs }), activeView === "list" && activeBoard && /* @__PURE__ */ React.createElement(ListView, { board: activeBoard, onUpdate: updateBoard, allBoards: boards, searchQuery, filterStatus, filterPriority, onOpenCard: (card) => {
    } }), activeView === "table" && activeBoard && /* @__PURE__ */ React.createElement(TableView, { board: activeBoard, onUpdate: updateBoard, allBoards: boards, searchQuery, filterStatus, filterPriority }), activeView === "calendar" && activeBoard && /* @__PURE__ */ React.createElement(CalendarView, { board: activeBoard, onUpdate: updateBoard, allBoards: boards }))), globalCtxMenu && /* @__PURE__ */ React.createElement(GlobalCtxMenu, {
        menu: globalCtxMenu, onClose: () => setGlobalCtxMenu(null),
        boards, activeBoardId, setActiveBoardId, renameBoard, deleteBoard, setBoards: setBoardsTracked, addBoard, VIEWS, activeView, setActiveView
      }), toast && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", bottom: "24px", left: "50%", transform: "translateX(-50%)", background: toast.type === "success" ? "#1a3a1a" : toast.type === "warn" ? "#3a2a00" : "#1a2a3a", border: `1px solid ${toast.type === "success" ? "#4ec9b0" : toast.type === "warn" ? "#e6a817" : "#0078d4"}`, color: toast.type === "success" ? "#4ec9b0" : toast.type === "warn" ? "#e6a817" : "#9cdcfe", padding: "10px 20px", borderRadius: "8px", fontSize: "12px", fontFamily: "var(--app-font)", zIndex: 2e3, boxShadow: "0 4px 20px rgba(0,0,0,0.5)", whiteSpace: "nowrap", maxWidth: "90vw", textOverflow: "ellipsis", overflow: "hidden" } }, toast.msg), showArchive && /* @__PURE__ */ React.createElement(ArchivePanel, { archive: activeBoard?.archive || [], onRestore: restoreArchived, onDeletePermanent: deleteArchived, onClose: () => setShowArchive(false) }), showTrashPanel && /* @__PURE__ */ React.createElement(
      TrashPanel,
      {
        trash: activeBoard?.trash || [],
        onRestore: restoreFromTrash,
        onDeletePermanent: deleteFromTrash,
        onEmpty: emptyTrash,
        onClose: () => setShowTrashPanel(false)
      }
    ), showSettings && /* @__PURE__ */ React.createElement(SettingsPanel, { themeKey, onTheme: setThemeKey, boards, activeBoard, onExport: handleExport, onImport: handleImport, onExcelExport: handleExcelExport, autoExportInterval, onSetAutoExport: setAutoExportIntervalState, lastAutoExport: lastAutoExport.current, exportFolderName, fsaSupported, onPickFolder: handlePickFolder, onClearFolder: handleClearFolder, onOpenThemeBuilder: () => {
      setShowSettings(false);
      setShowThemeBuilder(true);
    }, appFont, appFontSize, onSetFont: setAppFont, onSetFontSize: setAppFontSize, systemFonts, displayPrefs, updatePref, onClose: () => setShowSettings(false) }), showThemeBuilder && /* @__PURE__ */ React.createElement(CustomThemeBuilder, { onSave: (key, theme) => {
      if (key) setThemeKey(key);
      setShowThemeBuilder(false);
    }, onClose: () => setShowThemeBuilder(false) }), /* @__PURE__ */ React.createElement(CommandPalette, { open: showCommandPalette, onClose: () => setShowCommandPalette(false), actions: commandActions }), /* @__PURE__ */ React.createElement(InsightsModal, { open: showInsights, onClose: () => setShowInsights(false), board: activeBoard }), /* @__PURE__ */ React.createElement(FilterPresetsModal, { open: showPresetManager, onClose: () => setShowPresetManager(false), presets: filterPresets, onApply: (id) => {
      applyFilterPreset(id);
      setShowPresetManager(false);
    }, onRename: renameFilterPreset, onDelete: (id) => {
      const p = filterPresets.find((x) => x.id === id);
      if (p && window.confirm(`Delete preset "${p.name}"?`)) removeFilterPreset(id);
    } }), showGlobalSearch && /* @__PURE__ */ React.createElement(
      GlobalSearch,
      {
        boards,
        onClose: () => setShowGlobalSearch(false),
        onOpenCard: (card) => setGlobalSearchOpenCard(card),
        onNavigate: (boardId) => setActiveBoardId(boardId)
      }
    ), globalSearchOpenCard && /* @__PURE__ */ React.createElement(
      CardModal,
      {
        card: globalSearchOpenCard,
        onSave: (updated) => {
          const b = boards.find((b2) => b2.cols.some((c) => c.cards.some((x) => x.id === updated.id)));
          if (b) updateBoard({ ...b, cols: b.cols.map((c) => ({ ...c, cards: c.cards.map((x) => x.id === updated.id ? updated : x) })) });
          setGlobalSearchOpenCard(null);
        },
        onClose: () => setGlobalSearchOpenCard(null),
        onTrash: (id) => {
          const b = boards.find((b2) => b2.cols.some((c) => c.cards.some((x) => x.id === id)));
          if (b) {
            const card = b.cols.flatMap((c) => c.cards).find((c) => c.id === id);
            updateBoard({ ...b, trash: [...b.trash || [], { ...card, trashedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: b.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
          }
          setGlobalSearchOpenCard(null);
        },
        onArchive: (id) => {
          const b = boards.find((b2) => b2.cols.some((c) => c.cards.some((x) => x.id === id)));
          if (b) {
            const card = b.cols.flatMap((c) => c.cards).find((c) => c.id === id);
            updateBoard({ ...b, archive: [...b.archive || [], { ...card, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }], cols: b.cols.map((c) => ({ ...c, cards: c.cards.filter((x) => x.id !== id) })) });
          }
          setGlobalSearchOpenCard(null);
        },
        allCards: boards.flatMap((b) => b.cols.flatMap((c) => c.cards))
      }
    )));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
}catch(e){die(e.message||String(e));console.error(e);return;}
  var a=0,p=setInterval(function(){a++;
    if(document.getElementById('root').children.length>0){
      loading.style.transition='opacity 0.3s';loading.style.opacity='0';
      setTimeout(function(){loading.style.display='none';},300);clearInterval(p);
    }else if(a>100){loading.style.display='none';clearInterval(p);}
  },50);
})();
