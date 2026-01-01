import { BasePage } from '../../../pages/BasePage';

export class EmployeeInformation extends BasePage {
    private container = this.page.locator('form.oxd-form');
    private header = this.page.locator('//h5[text()="Employee Information"]');
    private emoployeeNameInput = this.container.locator('//label[text()="Employee Name"]/../..//input');
    private empoloyeeIdInput = this.container.locator('//label[text()="Employee Id"]/../..//input');
    private searchButton = this.container.getByRole('button', { name: 'Search' });

    async expectLoaded() {
        await this.container.waitFor({ state: 'visible' });
    }

    async enterEmployeeName(name: string) {
        await this.emoployeeNameInput.fill(name);
    }

    async fillEmployeeId(id: string) {
        await this.empoloyeeIdInput.fill(id);
    }

    async clickSearchButton() {
        await this.click(this.searchButton);
    }
}