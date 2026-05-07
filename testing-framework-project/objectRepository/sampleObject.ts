export class SampleObject {
    constructor() {
        // Initialize properties if needed
    }

    getElement(selector: string) {
        return document.querySelector(selector);
    }

    clickElement(selector: string) {
        const element = this.getElement(selector);
        if (element) {
            element.click();
        }
    }
}