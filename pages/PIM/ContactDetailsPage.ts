import { BasePage } from '../BasePage';
import { expect } from '@playwright/test';

export class ContactDetailsPage extends BasePage {
    private container = this.page.locator('//div[@class="orangehrm-edit-employee-content"]');
    private contactDetailsHeader = this.container.getByText('Contact Details');
    private street1Input = this.container.locator('//label[text()="Street 1"]/../..//input');
    private street2Input = this.container.locator('//label[text()="Street 2"]/../..//input');
    private cityInput = this.page.locator('//label[text()="City"]/../..//input');
    private stateProvinceInput = this.page.locator('//label[text()="State/Province"]/../..//input');
    private zipInput = this.page.locator('//label[text()="Zip/Postal Code"]/../..//input');
    private countrySelect = this.page.locator('//label[text()="Country"]/../..//div[@class="oxd-select-wrapper"]');

    async expectLoaded() {
        await this.contactDetailsHeader.waitFor({ state: 'visible' });
    }

    async enterStreet1(street1: string) {
        await this.street1Input.fill(street1);
    }

    async enterStreet2(street2: string) {
        await this.street2Input.fill(street2);
    }

    async enterCity(city: string) {
        await this.cityInput.fill(city);
    }

    async enterState(state: string) {
        await this.stateProvinceInput.fill(state);
    }

    async enterZip(zip: string) {
        await this.zipInput.fill(zip);
    }

    async selectCountry(nationality: string) {
        await this.countrySelect.click();
        await this.selectCountryOption(nationality);
    }
    
    async selectCountryOption(optionText: string) {
        const dropdown = this.countrySelect.page().locator('.oxd-select-dropdown');
        await expect(dropdown).toBeVisible();
        const option = dropdown.locator('.oxd-select-option', { hasText: optionText });
        await expect(option).toBeVisible();
        await option.click();
    }
}