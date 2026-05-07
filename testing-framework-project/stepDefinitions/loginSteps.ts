import { chromium } from '@playwright/test';
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { browserContext } from './Base/BrowserPages';
import { expect } from '@playwright/test';

Before(async () => {
    browserContext.browser = await chromium.launch();
    browserContext.page = await browserContext.browser.newPage();
});

Given('I open the OrangeHRM demo site', async () => {
    await browserContext.page.goto('https://opensource-demo.orangehrmlive.com/');
});

When('I enter {string} in the username field', async (username: string) => {
    await browserContext.page.fill('input[name="username"]', username);
});

When('I enter {string} in the password field', async (password: string) => {
    await browserContext.page.fill('input[name="password"]', password);
});

When('I click on the login button', async () => {
    await browserContext.page.click('button[type="submit"]');
});

Then('I should be redirected to the dashboard', async () => {
    await browserContext.page.waitForURL(/dashboard/);
    expect(browserContext.page.url()).toMatch(/dashboard/);
});

After(async () => {
    await browserContext.browser.close();
});