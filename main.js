'use strict';

const {app, globalShortcut, BrowserWindow} = require('electron')
const channels = require('./app/util/channels')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null
var quickNote = null

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {

  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 600, height: 800, frame: false });
  quickNote = new BrowserWindow({ width: 600, height: 300, frame: false, show: false });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  quickNote.loadURL('file://' + __dirname + '/quickNote.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  quickNote.webContents.openDevTools();

  // Register a 'CommandOrControl+X' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+Shift+K', () => {
    console.log('CommandOrControl+K is pressed');
    if (quickNote.isVisible()) {
      quickNote.hide()
    } else {
      quickNote.show()
    }

    
  });

  if (!ret) {
    console.log('registration failed');
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+X'));


  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Emitted when the window is closed.
  quickNote.on('close', function(evt) {
    // never close the quickNote, only hide it
    evt.preventDefault()
    quickNote.hide()
  });
});
