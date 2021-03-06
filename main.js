const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createAppWindow() {
  let win = new BrowserWindow({
    width: 1280,
    height: 800,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  });
  isDev && win.webContents.openDevTools();
  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`
  );
  win.on('closed', () => {
    win = null;
  });
}
app.on('ready', createAppWindow);
app.on('window-all-closed', app.quit);
