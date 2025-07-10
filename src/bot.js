import { chromium } from 'playwright';
export async function runBot() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://ticket.interpark.com');
    // 예매 자동화 로직 추가 예정
}
