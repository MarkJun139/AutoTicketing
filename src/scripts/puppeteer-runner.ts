import { chromium } from 'playwright-extra';
import { webkit } from 'playwright';

import puppeteer from 'puppeteer-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

import fs from 'fs';

puppeteer.use(stealth());

export async function runAutoLogin() {

  const userDataDir = 'C:\\Users\\User\\AppData\\Local\\Google\\Chrome\\User Data';
  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: ['--start-maximized'],
  });
  const page = await browser.newPage();
  await page.goto('https://www.ticketlink.co.kr');


}

runAutoLogin().catch(err => {
    console.error('에러에요');
})