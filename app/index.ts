import { app, BrowserWindow } from "electron";
import * as path from "path";

let win: BrowserWindow | null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadFile(path.join(__dirname, "index.html"));
    win.on("closed", () => {
        win = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
