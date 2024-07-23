import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { Notulen } from '@tarikhagustia/notulen';
import { MeetingResult } from '@tarikhagustia/notulen/dist/interfaces';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.APP_ROOT = path.join(__dirname, '..');

export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron');
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist');

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      contextIsolation: true,
      // enableRemoteModule: false,
      nodeIntegration: false
    },
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, 'index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('start-notulen', async (event, options) => {
    console.log(event)
    console.log('Received options:', options);
    try {
      const client = new Notulen({
        debug: false, // debug mode to show the browser
        name: options.name, // Bot name
        googleMeetUrl: options.googleMeetUrl, // your google meet link
        language: "id-ID", // language for caption generation
        geminiApiKey: options.geminiApiKey, // google gemini api key (get it for free)
        recordingLocation: options.recordingLocation, // location to save the recording
        prompt: options.prompt
      });
    
        // Start join the meeting
      client.listen();
    
      client.on("end", (result: MeetingResult) => {
        // const result = {};
        // exit process when done
        process.exit(0);
        return result;
      });

      const result = {};
      return result;
    } catch (error) {
      console.error('Error in start-notulen:', error);
      throw error;
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    win = null;
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
