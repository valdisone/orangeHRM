import { expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class PersonalDetailsPage extends BasePage {
    private container = this.page.locator('//div[@class="orangehrm-edit-employee"]')
    private personalDetailsHeader = this.container.locator('//h6[text()="Personal Details"]');
    private employeeName = this.container.locator('//div[@class="orangehrm-edit-employee-name"]/h6');
    private firstNameInput = this.container.getByPlaceholder('First Name');
    private middleNameInput = this.container.getByPlaceholder('Middle Name');
    private lastNameInput = this.container.getByPlaceholder('Last Name');
    private employeeIdInput = this.container.locator('//label[text()="Employee Id"]/../..//input');
    private otherIdInput = this.container.locator('//label[text()="Other Id"]/../..//input');
    private driversLicenseNumberInput = this.container.locator('//label[text()="Driver\'s License Number"]/../..//input');
    private licenseExpiryDateInput = this.container.locator('//label[text()="License Expiry Date"]/../..//input');
    private nationalitySelect = this.container.locator('//label[text()="Nationality"]/../..//div[text()="-- Select --"]');
    private maritalStatusSelect = this.container.locator('//label[text()="Marital Status"]/../..//div[text()="-- Select --"]');
    private dateOfBirthInput = this.container.locator('//label[text()="Date of Birth"]/../..//input');
    private genderMaleRadio = this.container.locator('//label[text()="Male"]/input');
    private genderFemaleRadio = this.container.locator('//label[text()="Female"]/input');
    private saveButton = this.page.getByRole('button', { name: 'Save' });

    async expectLoaded() {
        await this.container.waitFor({ state: 'visible' });
        await this.personalDetailsHeader.waitFor({ state: 'visible' });
    }

    // Fill

    async fillMiddleName(middleName: string) {
        await this.middleNameInput.fill(middleName);
    }

    async expectEmployeeFullName(name: string) {
        await this.employeeName.waitFor({ state: 'visible' });
        const text = await this.employeeName.textContent();
        expect(text).toBe(name);
    }

    async expectEmployeeFirstName(firstName: string) {
        expect(this.firstNameInput).toHaveValue(firstName)
    }

    async expectEmployeeLastName(lastName: string) {
        expect(this.lastNameInput).toHaveValue(lastName)
    }

    async expectEmployeeId(id: string) {
        expect(this.employeeIdInput).toHaveValue(id)
    }
}