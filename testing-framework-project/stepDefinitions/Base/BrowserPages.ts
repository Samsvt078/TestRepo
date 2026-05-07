export interface BrowserContext {
    browser: any;
    page: any;
}

export const browserContext: BrowserContext = {
    browser: null,
    page: null
};