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
    private nationalitySelect = this.container.locator('//label[text()="Nationality"]/../..//div[@class="oxd-select-wrapper"]');
    private maritalStatusSelect = this.container.locator('//label[text()="Marital Status"]/../..//div[@class="oxd-select-wrapper"]');
    private dateOfBirthInput = this.container.locator('//label[text()="Date of Birth"]/../..//input');
    public saveButton = this.page.getByRole('button', { name: 'Save' });
    private successToast = this.page.getByText('Successfully Updated');
    
    async expectLoaded() {
        await this.container.waitFor({ state: 'visible' });
        await this.personalDetailsHeader.waitFor({ state: 'visible' });
    }
    
    // Fill

    async enterMiddleName(middleName: string) {
        await this.middleNameInput.clear();
        await this.middleNameInput.fill(middleName);
    }

    async enterOtherId(otherId: string) {
        await this.otherIdInput.fill(otherId);
    }

    async enterDriverLicenseNumber(driverLicenseNumber: string) {
        await this.driversLicenseNumberInput.waitFor({ state: 'visible' });
        await this.driversLicenseNumberInput.click();
        await this.driversLicenseNumberInput.press('Control+A');
        await this.driversLicenseNumberInput.press('Backspace');
        await this.driversLicenseNumberInput.fill(driverLicenseNumber);
        await expect(this.driversLicenseNumberInput).toHaveValue(driverLicenseNumber);
    }

    async enterLicenseExpiryDate(date: string) {
        await this.licenseExpiryDateInput.clear();
        await this.licenseExpiryDateInput.fill(date);
    }

    async selectNationality(nationality: string) {
        await this.nationalitySelect.click();
        await this.selectNationalityOption(nationality);
    }
    
    async selectNationalityOption(optionText: string) {
        const dropdown = this.nationalitySelect.page().locator('.oxd-select-dropdown');
        await expect(dropdown).toBeVisible();
        const option = dropdown.locator('.oxd-select-option', { hasText: optionText });
        await expect(option).toBeVisible();
        await option.click();
    }

    async selectMaritalStatus(maritalStatus: string) {
        await this.maritalStatusSelect.click();
        await this.selectMaritalStatusOption(maritalStatus)
    }

    async selectMaritalStatusOption(optionText: string) {
        const dropdown = this.maritalStatusSelect.page().locator('.oxd-select-dropdown');
        await expect(dropdown).toBeVisible();
        const option = dropdown.locator('.oxd-select-option', { hasText: optionText });
        await expect(option).toBeVisible();
        await option.click();
    }

    async enterDateOfBirth(dob: string) {
        await this.dateOfBirthInput.fill(dob);
    }

    async selectGender(gender: 'Male' | 'Female') {
        await this.container
            .locator('label', { hasText: new RegExp(`^${gender}$`) })
            .click();
    }

    // Update

    async updateFirstName(firstName: string) {
        await this.firstNameInput.clear();
        await this.firstNameInput.fill(firstName);
    }

    async updateLastName(lastName: string) {
        await this.lastNameInput.clear();
        await this.lastNameInput.fill(lastName);
    }

    async updateEmployeeId(id: string) {
        await this.employeeIdInput.clear();
        await this.employeeIdInput.fill(id);
    }

    async savePersonalDetails() {
        await this.saveButton.click();
        await expect(this.successToast).toBeVisible();
        await this.successToast.waitFor({ state: 'detached'});
    }

    // Assertions

    async expectEmployeeFullName(name: string) {
        await this.employeeName.waitFor({ state: 'visible' });
        const text = await this.employeeName.textContent();
        expect(text).toBe(name);
    }

    async expectEmployeeFirstName(firstName: string) {
        expect(this.firstNameInput).toHaveValue(firstName)
    }

    async expectMiddleName(middleName: string) {
        await expect(this.middleNameInput).toHaveValue(middleName);
    }

    async expectEmployeeLastName(lastName: string) {
        expect(this.lastNameInput).toHaveValue(lastName)
    }

    async expectEmployeeId(id: string) {
        expect(this.employeeIdInput).toHaveValue(id)
    }

    async expectDriverLicense(licenseNumber: string) {
        await expect(this.driversLicenseNumberInput).toHaveValue(licenseNumber);
    }

    async expectLicenseExpiryDate(expiryDate: string) {
        await expect(this.licenseExpiryDateInput).toHaveValue(expiryDate);
    }

    async expectNationality(nationality: string) {
        await expect(this.page.locator('//label[text()="Nationality"]/../..//div[@class="oxd-select-text-input"]')).toHaveText(nationality);
    }

    async expectMaritalStatus(maritalStatus: string) {
        await expect(this.maritalStatusSelect).toHaveText(maritalStatus);
    }

    async expectDateOfBirth(dateOfBirth: string) {
        await expect(this.dateOfBirthInput).toHaveValue(dateOfBirth);
    }

    async expectGender() {
        const radio = this.page.locator('//label[text()="Female"]/span');
        await expect.poll(async () => {
            return await radio.evaluate(el => getComputedStyle(el).boxShadow);
        }, {
            timeout: 5000,
        }).toContain('rgb(255, 123, 29)');
    }
}