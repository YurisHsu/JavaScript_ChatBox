import { test, expect } from '@playwright/test';

test('test - Input', async ({ page }) => {

  await page.goto('https://www.chatbot.com/chatbot-demo/');
  await page.frameLocator('iframe[name="chat-widget"]').locator('img').click();  // 點選對話視窗
  await page.waitForTimeout(1000);  // 停留 1 秒
  await page.screenshot({ path: '點選對話視窗.png' });  // 截圖
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').click();
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').type('hi');  // 輸入文字
  await page.waitForTimeout(2000);  // 停留 2 秒
  await page.screenshot({ path: '輸入文字.png' });  // 截圖
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').press('Enter');
  await page.waitForTimeout(2000);  // 停留 2 秒
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').type('123123');  // 輸入數字
  await page.waitForTimeout(2000);  // 停留 2 秒
  await page.screenshot({ path: '輸入數字.png' });  // 截圖
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').press('Enter');
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').type('      ');  // 輸入空白
  await page.screenshot({ path: '輸入空白.png' });  // 截圖
  await page.frameLocator('iframe[name="chat-widget"]').getByRole('img').nth(1).click();  //  送出
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').click();
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').type('      @@');  // 輸入空白及特殊符號
  await page.waitForTimeout(3000);  // 停留 3 秒
  await page.screenshot({ path: '輸入空白及特殊符號.png' });  // 截圖
  await page.frameLocator('iframe[name="chat-widget"]').locator('input[type ="text"]').press('Enter');
  await page.waitForTimeout(2000);  // 停留 2 秒

});

test('test - Button', async ({ page }) => {
  await page.goto('https://www.chatbot.com/chatbot-demo/');
  await page.frameLocator('iframe[name="chat-widget"]').locator('img').click();  // 點選對話視窗
  await page.waitForTimeout(2000);  // 停留 2 秒
  await page.frameLocator('iframe[name="chat-widget"]').getByText('I have questions 😊').click();  // 點選 I have questions
  await page.waitForTimeout(1000);  // 停留 1 秒
  await page.screenshot({ path: '點選 I have questions.png' });  // 截圖
  await page.frameLocator('iframe[name="chat-widget"]').getByText('💲 Pricing').click();  // 點選 Pricing
  await page.waitForTimeout(2000);  // 停留 2 秒
  await page.screenshot({ path: '點選 Pricing.png' });  // 截圖
  await page.frameLocator('iframe[name="chat-widget"]').getByText('💲 Compare plans').click();  // 點選 Compare plans
  await page.waitForTimeout(1000);  // 停留 1 秒
  await page.screenshot({ path: '點選 Compare plans.png' });  // 截圖
  await page.waitForURL('https://www.chatbot.com/pricing/',{timeout :30000});  // 等待網址不超過 30 秒
  await page.waitForTimeout(3000);  // 停留 3 秒
  await page.screenshot({ path: 'pricing 頁面.png' });  // 截圖

});
