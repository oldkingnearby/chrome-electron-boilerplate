const { app, BrowserWindow } = require('electron')

const path = require('path')
const url = require('url')

let indexUrl = url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file:',
    slashes: true
  })

  
console.log(indexUrl )

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // 加载应用----适用于 react 项目
  win.loadURL('http://localhost:3000/')
  // win.loadURL(indexUrl)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
