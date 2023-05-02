import { Locator, Page } from '@playwright/test';
import { CommonPage } from './CommonPage';

export class ProductListPage extends CommonPage {
    readonly page: Page;
    readonly acceptCookies: Locator;
    private product: Locator;

    constructor(page: Page) {
        super(page);
        this.page               = page;
        this.acceptCookies      = page.locator('//button[text()="Accept Cookies"]');
    };

    async gotoCategory(category = 'bathtubs') {
        await this.page.goto(category);
    };

    async selectProduct(index = 1) {
        this.product = this.page.locator(`main > div > section.section.featured-list.feature-list-collapse.none div.row > div:nth-child(${index}) > div.product-card`);
        return this;
    }

   async getProductName() {
       const productName = await this.product.locator('span.name').innerText();
       return productName;
   }

   async openSelectedProductPage() {
    const productName = await this.product.locator('a.gtm-product-card-link.card-title').click();
   }
}