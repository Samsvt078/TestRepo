import { chromium } from '@playwright/test';
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { browserContext } from './Base/BrowserPages';

Before(async () => {
    browserContext.browser = await chromium.launch();
    browserContext.page = await browserContext.browser.newPage();
});

Given('Open website', async () => {
    await browserContext.page.goto('https://example.com');
});

When('Click on login button', async () => {
    await browserContext.page.click('#login');
});

Then('Enter username and password', async () => {
    await browserContext.page.fill('#username', 'yourUsername');
    await browserContext.page.fill('#password', 'yourPassword');
});

After(async () => {
    await browserContext.browser.close();
}
);  