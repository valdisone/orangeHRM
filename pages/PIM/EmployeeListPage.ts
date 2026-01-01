import { BasePage } from '../BasePage';
import { EmployeeInformation } from './../../app/component/employee/employeeInformation.component';
import { expect } from '@playwright/test';

export class EmployeeListPage extends BasePage {
    readonly employeeInformation = new EmployeeInformation(this.page);
    private addButton = this.page.getByRole('button', { name: 'Add' });
    private pim = this.page.locator('//span[text()="PIM"]');
    private employeeTable = this.page.locator('.oxd-table-body');
    readonly tableRows = this.employeeTable.locator('.oxd-table-card');

    async clickPIM() {
        await this.pim.click();
        await this.employeeInformation.expectLoaded();
    }

    async clickAddEmployee() {
        await this.click(this.addButton);
    }

    async clickRow(row: number) {
        await this.tableRows.nth(row).waitFor({ state: 'visible' });
        await this.tableRows.nth(row).click();
    }

    async expectEmployeeNameInFirstRow(
        firstAndMiddleName: string,
        lastName: string
    ) {
        const firstRow = this.tableRows.first();
    const cells = firstRow.locator('.oxd-table-cell');

    await expect(cells.nth(2)).toHaveText(firstAndMiddleName);
    await expect(cells.nth(3)).toHaveText(lastName);
    }
}