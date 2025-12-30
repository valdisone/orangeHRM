import type { Page } from '@playwright/test';

export class PageHolder {
    constructor(protected page: Page) {}
}

export abstract class Component extends PageHolder {
    abstract expectLoaded(): Promise <void>;
} 

export abstract class AbstractPage extends PageHolder {
    abstract expectLoaded(): Promise <void>;
}