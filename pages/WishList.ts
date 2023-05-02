import { expect, Locator, Page } from '@playwright/test';
import { CommonPage } from './CommonPage';

export class WishListPage extends CommonPage {
    readonly page: Page;
    readonly acceptCookies: Locator;

    constructor(page: Page) {
        super(page);
        this.page               = page;
        this.acceptCookies      = page.locator('//button[text()="Accept Cookies"]');
    };

   async getProductName() {
       let locator = 'div.cart-content > div.cart-main > div.cart-product-tile:nth-child(1) a.name';
       await expect(this.page.locator(locator)).toBeVisible();
       const productName = await this.page.locator(locator).innerText();
       return productName;
   }
}