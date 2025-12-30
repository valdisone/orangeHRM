import { BasePage } from '../BasePage';

export class ContactDetailsPage extends BasePage {
    private header = this.page.locator('h6').filter({ hasText: 'Contact Details' });
    private street1Input = this.page.locator('label').filter({ hasText: 'Street 1' }).locator('..').locator('input');

    async expectLoaded() {
        await this.header.waitFor({ state: 'visible' });
    }

    async fillStreet1(street1: string) {
        await this.street1Input.fill(street1);
    }
}