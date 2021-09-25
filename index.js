const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

function createWindow(){
    const win = new BrowserWindow({
        width: 1340,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html').then(function(){
        win.maximize();
        win.webContents.openDevTools();
    })
}

app.whenReady().then(createWindow);