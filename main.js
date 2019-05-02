const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height:600,
        backgroundColor: '#ffffff'
        //icon: `file://${_dirname}/dist/assets/logo.png'`
    })

    win.loadURL(`file://${__dirname}/dist/CarPoolWebApp/index.html`)

    //// uncomment below to open the DevTools
   // win.webContents.openDevTools()

    win.on('closed', function(){
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){

    //On macOs spesific close process
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function(){

    //macOs spesific close process
    if(win === null) {
        createWindow()
    }
})