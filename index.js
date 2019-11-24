const electron = require("electron");

const {app,BrowserWindow} = electron;

let mainWindow;

global.BASE_DIR = __dirname;

app.on('ready', ()=>{
   mainWindow = new BrowserWindow({
      frame: false,
      opacity: 0.9,
      webPreferences: {
         nodeIntegration: true,
         webSecurity: false
      }
   });
   mainWindow.loadURL(`file://${__dirname}/vdist/index.html`);
});