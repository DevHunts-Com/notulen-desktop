import { BrowserWindow } from 'electron';
import { join } from 'path'

export function newWindow(lastWindow) {
  const [x, y] = lastWindow ? lastWindow.getPosition() : [0, 0];
  const newWindow = new BrowserWindow({
    x: x + 24,
    y: y + 24,
    width: 900,
    height: 670,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    }
  });

  newWindow.loadFile(join(__dirname, '../renderer/index.html'));
  newWindow.on('ready-to-show', () => {
    newWindow.show();
  });

  return newWindow;
}
