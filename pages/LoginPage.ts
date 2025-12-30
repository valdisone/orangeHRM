import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private usernameInput = this.page.getByPlaceholder("Username");
    private passwordInput = this.page.getByPlaceholder("Password");
    private loginButton = this.page.locator('//button[@type="submit"]');

    async login(username: string, password: string) {
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);
    }
}