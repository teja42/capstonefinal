const electron = require("electron");

const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready', ()=>{
   mainWindow = new BrowserWindow({
      frame: false,
      opacity: 0.9
   });
   mainWindow.loadURL("http://localhost:8080");

   mainWindow.openDevTools();

});