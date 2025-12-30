import { PageHolder } from "../app/abstract";
import { DashboardPage } from "./DashboardPage";
import { LoginPage } from "./LoginPage";
import { EmployeeListPage } from './PIM/EmployeeListPage';
import { AddEmployeePage } from './PIM/AddEmployeePage';
import { PersonalDetailsPage } from './PIM/PersonalDetailsPage';

export class App extends PageHolder {
    readonly login = new LoginPage(this.page);
    readonly dashboard = new DashboardPage(this.page);
    readonly employeeList = new EmployeeListPage(this.page);
    readonly personalDetails = new PersonalDetailsPage(this.page);
    readonly addEmployee = new AddEmployeePage(this.page);
}