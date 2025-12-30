import type { Locator } from '@playwright/test';
import { PageHolder } from '../app/abstract';

export class BasePage extends PageHolder {

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async click(selector: string | Locator) {
        if (typeof selector === 'string') {
            await this.page.click(selector);
        } else {
            await selector.click();
        }
    }

    async type(selector: string | Locator, text: string) {
        if (typeof selector === 'string') {
            await this.page.fill(selector, text);
        } else {
            await selector.fill(text);
        }
    }

    async getText(selector: string | Locator): Promise<string | null> {
        if (typeof selector === 'string') {
            return await this.page.textContent(selector);
        }
        return await selector.textContent();
    }

    async waitForSelector(selector: string) {
        await this.page.waitForSelector(selector);
    }
}
