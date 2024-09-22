import puppeteer from "puppeteer";

async function getPopover() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://192.168.1.33:8080');
    await page.waitForSelector('.button');
    await page.click('.button');
    await page.waitForSelector('.tooltip');
    await page.waitForSelector('.tooltip_active');
    await browser.close();
}



getPopover()