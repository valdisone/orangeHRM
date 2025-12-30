import { test as base } from '@playwright/test';
import { App } from './pages/index';
import { generateEmployeeData } from './utils/dataGenerator';

type Fixtures = {
  app: App;
  employeeData: ReturnType<typeof generateEmployeeData>;
};

export const hrmTest = base.extend<Fixtures>({
  app: async ({ page }, use) => {
    const app = new App(page);

    // 👇 логин "за кулисами"
    await app.login.navigate('http://localhost:8080/');
    await app.login.login('orange_admin', 'nxQ0J6An9zk$');

    await use(app);
  },

  employeeData: async ({}, use) => {
    const data = generateEmployeeData();
    await use(data);
  }
});

