/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable spaced-comment */
let win;
const { app, BrowserWindow, globalShortcut } = require('electron')

app.on("ready", () => {

    globalShortcut.register("Alt+Enter", () => {
        win.fullScreen =! win.fullScreen;
    })

    globalShortcut.register('Control+Shift+I', () => {
        BrowserWindow.getFocusedWindow().toggleDevTools();
    })

    globalShortcut.register("Control+R", () => {
        win.loadFile("index.html");
    })

    win = new BrowserWindow({
        frame: true,
        minWidth: 640,
        minHeight: 480,
        fullscreen: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            devTools: true
        },
        backgroundColor: "#111",
    });
    win.loadFile("index.html");
    win.removeMenu();
    win.on("maximize", () => {
        win.unmaximize();
        setTimeout(() => {
            win.fullScreen = true;
        }, 50);
    })
})