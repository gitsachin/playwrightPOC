import { Page } from '@playwright/test';
import { CommonPage } from './CommonPage';

export class Homepage extends CommonPage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto('/');
    };
}