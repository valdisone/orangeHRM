import { BasePage } from '../BasePage';

export class AddEmployeePage extends BasePage {
    private firstNameInput = this.page.getByPlaceholder('First Name');
    private lastNameInput = this.page.getByPlaceholder('Last Name');
    private employeeIdInput = this.page.locator('//label[text()="Employee Id"]/../..//input');
    private saveButton = this.page.getByText(' Save ');

    async addEmployee(firstName: string, lastName: string, id: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.employeeIdInput.fill(id);
        await this.click(this.saveButton);
    }
}