import { Given, When, Then, Before } from '@cucumber/cucumber';
import { browserContext } from './Base/BrowserPages';

When('Verify successfully login', async () => {
    await browserContext.page.click('#login');
});

Then('Click on Hamburger', async () => {
    await browserContext.page.click('#hamburger');
});