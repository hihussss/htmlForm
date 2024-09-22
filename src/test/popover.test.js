import puppeteer from "puppeteer";

async function getPopover() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://hihussss.github.io/htmlForm/');
    await page.waitForSelector('.button');
    await page.click('.button');
    await page.waitForSelector('.tooltip');
    await page.waitForSelector('.tooltip_active');
    const html = await page.$eval('.tooltip_text', e => e.innerHTML);
    expect(html).toBe('Ты сделал правильный выбор!');
    await browser.close();
}



getPopover()