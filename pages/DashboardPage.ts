import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
    readonly welcomeMessage = this.page.locator('');
    readonly reportsMenu = this.page.locator('');
    readonly employeeMenu = this.page.locator('');
    
    async goToEmployeeList() {
        await this.click(this.employeeMenu);
        await this.click('#menu_pim_viewEmployeeList');
    }

    async goToReports() {
        await this.click(this.reportsMenu);
    }
}