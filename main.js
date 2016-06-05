'use strict';

const electron = require('electron')
const { app, globalShortcut, BrowserWindow } = electron
const channels = require('./app/util/channels')

// active electron-debug
require('electron-debug')({showDevTools: true});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null
let quickNote = null
let forceQuit = false

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('before-quit', function() {
  forceQuit = true
})

app.on('activate', function() {
  if (mainWindow) {
    mainWindow.show()
  }
})

let MAIN_WINDOW_WIDTH  = 600
let MAIN_WINDOW_HEIGHT = 800
let QUICK_WINDOW_WIDTH  = 600
let QUICK_WINDOW_HEIGHT  = 60

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // let electronScreen = electron.screen
  const { width: screenWidth, height: screenHeight } = electron.screen.getPrimaryDisplay().workAreaSize;
  console.log('widths', screenWidth, screenHeight, screenWidth / 3.5, screenWidth / 3)

  MAIN_WINDOW_WIDTH = Math.floor(screenWidth / 3.5)
  MAIN_WINDOW_HEIGHT = Math.floor(screenHeight / 2)
  QUICK_WINDOW_WIDTH = Math.floor(screenWidth / 3)

  const QUICK_WINDOW_X = Math.floor(screenWidth / 2 - QUICK_WINDOW_WIDTH / 2)
  const QUICK_WINDOW_Y = Math.floor(screenHeight / 2.5 - QUICK_WINDOW_HEIGHT / 2)


  // Create the browser window.
  mainWindow = new BrowserWindow({ 
    width: MAIN_WINDOW_WIDTH,
    height: MAIN_WINDOW_HEIGHT,
    frame: false,
    resizable: false
  });
  quickNote = new BrowserWindow({ 
    width: QUICK_WINDOW_WIDTH,
    height: QUICK_WINDOW_HEIGHT,
    x: QUICK_WINDOW_X,
    y: QUICK_WINDOW_Y,
    frame: false,
    show: false,
    resizable: false
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  quickNote.loadURL('file://' + __dirname + '/quickNote.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  quickNote.webContents.openDevTools();

  // Register a 'CommandOrControl+X' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+Shift+K', () => {
    console.log('CommandOrControl+K is pressed');
    if (quickNote.isVisible() && quickNote.isFocused()) {
      quickNote.hide()
    } else {
      quickNote.show()
    }
  });

  if (!ret) {
    console.log('CommandOrControl+Shift+K registration failed');
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+Shift+X'));

  // Emitted when the window is closed.
  mainWindow.on('closed', () => { mainWindow = null })
  // Emitted when the window is closed.
  quickNote.on('closed', () => { quickNote = null })

  // Emitted when the window is closed.
  mainWindow.on('close', function(evt) {
    if (!forceQuit) {
      evt.preventDefault()
      mainWindow.hide()
    }
  });

  // Emitted when the window is closed.
  quickNote.on('close', function(evt) {
    // never close the quickNote, only hide it
    if (!forceQuit) {
      evt.preventDefault()
      quickNote.hide()
    }
  });
});
