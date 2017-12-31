const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let splashWindow

function createWindow () {
  // Create the browser window.
  var windowOpts = {
    width: 1100,
    height: 620,
    show: false}
  
  if (process.platform!="win32") {
    windowOpts.icon = __dirname + '/icon.png'
  }
  
  mainWindow = new BrowserWindow(windowOpts)
  // and load the index.html of the app.

  splashWindow = new BrowserWindow({
    width: 500,
    height: 295,
    transparent: false,
    useContentSize: true,
    frame: false,
    alwaysOnTop: false})
  
  var splashUrl = path.join(__dirname, 'splash.html');
  splashWindow.loadURL(url.format({
    pathname: splashUrl,
    protocol: 'file:',
    slashes: true
  }))

  splashWindow.webContents.on('did-finish-load', function() {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  });

  mainWindow.once('ready-to-show', () => {
    splashWindow.webContents.send('close-window', {});
    mainWindow.show();
    
    splashWindow.setAlwaysOnTop(true);
    
    setTimeout( () => {
      splashWindow.destroy();
      //mainWindow.webContents.openDevTools()
    },500);
    
    /*electron.on("cli-toggled", (event, msg) => {
      mainWindow.setContentSize(1100, msg.opened ? 920 : 620);
    });*/
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
