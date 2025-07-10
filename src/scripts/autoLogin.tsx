// src/runAutoLogin.ts
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



export function runAutoLogin() {
  // 빌드된 JS 경로로 접근
  const puppeteerScript = path.resolve(__dirname, '../scripts/puppeteer-runner.js');

  const child = spawn('node', [puppeteerScript], {
    stdio: 'inherit',
  });

  child.on('exit', (code) => {
    console.log(`[✅ Puppeteer 종료됨] 코드: ${code}`);
  });
}
