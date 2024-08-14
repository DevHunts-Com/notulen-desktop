import { app, shell, BrowserWindow, ipcMain, Menu } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import icon from '../../resources/icon.png?asset';
import { Notulen } from '@tarikhagustia/notulen';
import { newWindow } from './file/new-windows';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      sandbox: false,
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }

  return mainWindow;
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron');
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  let lastWindow = createWindow();

  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Window',
          accelerator: 'CmdOrCtrl+Shift+N',
          click: () => {
            // Check if lastWindow is still valid
            if (!lastWindow || lastWindow.isDestroyed()) {
              lastWindow = null;
            }
            lastWindow = newWindow(lastWindow);
          }
        },
        { role: 'quit' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      lastWindow = createWindow();
    }
  });

  // Handle start-notulen event
  ipcMain.handle('start-notulen', async (event, config) => {
    try {
      const client = new Notulen(config);
      await client.listen({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      return new Promise((resolve, reject) => {
        client.on("end", (result) => {
          resolve(result);
        });

        client.on("error", (error) => {
          reject(error);
        });
      });
    } catch (error) {
      console.error('Failed to start Notulen:', error);
      return { success: false, error: error.message };
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
