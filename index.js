const electron = require("electron");

const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready', ()=>{
   mainWindow = new BrowserWindow({
      frame: false,
      opacity: 0.9,
      nodeIntegration: true
   });
   mainWindow.loadURL("http://localhost:8080");

   mainWindow.openDevTools();

});