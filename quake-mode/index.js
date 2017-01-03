'use strict';

const { globalShortcut } = require('electron');

const log = (...args) => console.log('[quake-mode]', ...args);

module.exports = {
  onWindow: win => {
    globalShortcut.unregisterAll();
    globalShortcut.register('CommandOrControl+Shift+~', () => log('buttons `ctrl+shift pressed!1!!'));
  },
  onUnload: () => globalShortcut.unregisterAll(),
};
