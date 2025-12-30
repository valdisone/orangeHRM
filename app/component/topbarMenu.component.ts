import { Component } from '../abstract';
import { expect } from '@playwright/test'; 

export class TopbarMenu extends Component {
    private container = this.page.locator('//nav[@aria-label="Topbar Menu"]')

    async expectLoaded() {
        expect(this.container).toBeVisible();
    }
} 