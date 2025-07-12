import { chromium } from 'playwright-extra';
import { webkit } from 'playwright';

import puppeteer from 'puppeteer-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

import chromeLauncher from 'chrome-launcher';

import { connect } from "puppeteer-real-browser";


import fs from 'fs';

// puppeteer.use(stealth());

export async function runAutoLogin() {
  console.log('🔥 시작됨');
  const {page, browser} = await connect({
    headless: false,

    args: [],

    customConfig: {
      userDataDir: './user_data'
    },

    turnstile: true,

    connectOption: {},

    disableXvfb: false,

    ignoreAllFlags: false,


  });


  console.log('👉 페이지 연결 완료');

  // const newPage = await browser.newPage();
  // const browser = connection.browser;
  // const newPage = await browser.newPage(); 

  await page.goto('https://www.ticketlink.co.kr', {

  });

  console.log('✅ 페이지 이동 성공');
  // console.log('페이지 제목:', await page.title());

  

  // 3초 기다린 뒤 브라우저 종료
  // await page.waitForTimeout(3000);
  // await browser.close();

    // const userDataDir = 'C:\\Users\\User\\AppData\\Local\\Google\\Chrome\\User Data';
    // const browser = await chromium.launchPersistentContext(userDataDir, {
    //   headless: false,
    //   args: ['--start-maximized'],
  // });
  // const page = await browser.newPage();
  // await page.goto('https://www.ticketlink.co.kr');



}

runAutoLogin().catch(err => {
    console.error('에러에요');
})