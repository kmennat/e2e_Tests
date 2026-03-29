import { test, expect } from '@playwright/test';
test('test1',async({page})=>{
    //1 - goto
    await page.goto('https://practice.expandtesting.com');
    await page.goto('https://practice.expandtesting.com/login');
    //2 - reload
    await page.reload()
    //3 - goback
    await page.goBack()
    //4 - goforward
    await page.goForward()
    const textcontent = await page.locator("div[id='flash'] b").textContent();
    console.log(textcontent)
    await expect.soft(page.locator("//input[@id='username']")).toBeVisible();
    await page.locator("//input[@id='username']").fill('practice');
    await page.locator("//input[@id='password'] ").fill('SuperSecretPassword!');
    await page.locator("//button[normalize-space()='Login']").click();
    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!");
    });