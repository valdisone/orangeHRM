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
    await app.employeeList.employeeInformation.enterEmployeeName('Billy Nichols');
    await app.employeeList.employeeInformation.clickSearchButton();
    await app.employeeList.expectEmployeeNameInFirstRow('Alvin', 'Crawford');
});

test('Fill contact details for existing employee', async ({ app, employeeData, page }) => {
    await app.employeeList.clickPIM();
    await app.employeeList.clickRow(0);
    console.log(employeeData);
    await app.personalDetails.enterDriverLicenseNumber(employeeData.driverLicense);
    await app.personalDetails.enterLicenseExpiryDate(employeeData.licenseExpiryDate);
    await app.personalDetails.selectNationality('American');
    await app.personalDetails.selectMaritalStatus('Married');
    await app.personalDetails.selectGender('Female');
    await app.personalDetails.enterMiddleName(employeeData.middleName);
    await app.personalDetails.enterDateOfBirth(employeeData.dateOfBirth);
    await app.personalDetails.savePersonalDetails();
    await app.personalDetails.expectMiddleName(employeeData.middleName);
    await app.personalDetails.expectDriverLicense(employeeData.driverLicense);
    await app.personalDetails.expectLicenseExpiryDate(employeeData.licenseExpiryDate);
    await app.personalDetails.expectNationality('American');
    await app.personalDetails.expectMaritalStatus('Married');
    await app.personalDetails.expectDateOfBirth(employeeData.dateOfBirth);
    await app.personalDetails.expectGender();
});
