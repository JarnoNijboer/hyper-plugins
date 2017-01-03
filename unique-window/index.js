'use strict';

let window = null;

const log = (...args) => console.log('[unique-window]', ...args);

module.exports = {
  onWindow: win => {
    if (!window) {
      window = win;
      log('window registered');
      return;
    }

    win.close();
    log('new window closed');
  },
  onUnload: () => window = null,
};
