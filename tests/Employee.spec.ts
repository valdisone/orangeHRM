import { hrmTest as test} from '../fixture';
import { expect } from '@playwright/test';
import { EmployeeListPage } from '../pages/PIM/EmployeeListPage';

test('Add new employee', async ({ app, employeeData }) => {
    await app.employeeList.clickPIM();
    await app.employeeList.clickAddEmployee();
    await app.addEmployee.addEmployee(
        employeeData.firstName, 
        employeeData.lastName, 
        employeeData.employeeId
    );
    await app.personalDetails.expectLoaded();
    await app.personalDetails.expectEmployeeFullName(
        `${employeeData.firstName} ${employeeData.lastName}`
    );
    await app.personalDetails.expectEmployeeFirstName(employeeData.firstName);
    await app.personalDetails.expectEmployeeLastName(employeeData.lastName);
    await app.personalDetails.expectEmployeeId(employeeData.employeeId);
});

test("Search for existing employee", async ({ app }) => {
    await app.employeeList.clickPIM();
    await app.employeeList.employeeInformation.expectLoaded();
    await app.employeeList.employeeInformation.fillEmployeeName('Alvin Crawford');
    await app.employeeList.employeeInformation.clickSearchButton();
    await app.employeeList.expectEmployeeNameInFirstRow('Alvin', 'Crawford');
});

test('Fill contact details for existing employee', async ({ app, employeeData }) => {
    await app.employeeList.clickPIM();
    await app.employeeList.clickRow(0);
    await app.personalDetails.fillMiddleName(employeeData.middleName);
});
