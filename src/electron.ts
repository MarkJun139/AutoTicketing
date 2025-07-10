import { app, BrowserWindow } from 'electron';
import path from 'path';
import { runAutoLogin } from './scripts/autoLogin';

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'), // 선택
//     }
//   });

//   win.loadURL('http://localhost:5173');
// };

app.whenReady().then(() => {
  runAutoLogin();
  
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('http://localhost:5173');
  
  // createWindow();

  // app.on('activate', () => {
  //   if (BrowserWindow.getAllWindows().length === 0) createWindow();
  // });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});