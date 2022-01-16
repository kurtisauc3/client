const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const appData = require('./appData.json');

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
  win.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    win.loadURL(url);
  });
  isDev && win.webContents.openDevTools();
  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`
  );
  win.on('closed', () => {
    win = null;
  });
  const filter = { urls: [appData.api] };
  win.webContents.session.webRequest.onSendHeaders(filter, () => {
    win.webContents.send('requestPending', true);
  });
  win.webContents.session.webRequest.onCompleted(filter, () => {
    win.webContents.send('requestPending', false);
  });
}

app.on('ready', createAppWindow);
app.on('window-all-closed', app.quit);

ipcMain.on('appData', (event, arg) => {
  event.returnValue = appData;
});
