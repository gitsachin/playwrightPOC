import { Locator, Page } from "@playwright/test";

export class CommonPage {
    readonly page: Page;
    readonly whereToBuyButton: Locator;
    readonly wishListButton: Locator;
    readonly partnerPortalButton: Locator;
    readonly contactUsButton: Locator;
    readonly productsButton: Locator;
    readonly productInCategory: Locator;
    readonly acceptCookies: Locator;

    constructor(page: Page)  {
        this.page = page;
        this.page                 = page;
        this.whereToBuyButton     = page.locator('div.options > ul:nth-child(1) > div:nth-child(1) > li .text');
        this.wishListButton       = page.locator('div.options > ul:nth-child(1) > div:nth-child(2) > li .text');
        this.partnerPortalButton  = page.locator('div.options > ul:nth-child(1) > div:nth-child(3) > li');
        this.contactUsButton      = page.locator('div.options > ul:nth-child(1) > div:nth-child(4) > li');
        this.productsButton       = page.locator('nav.navbar div.pages > div.menu > div.inner > ul:nth-child(1) > li[data-id="1"]');
        this.productInCategory    = page.locator('nav.navbar div.pages > div.menu > div.inner > ul:nth-child(1) > li[data-id="1"] > div > div.submenu > div.inner > ul > li:nth-child(3) ul > li:nth-child(3) a');
        this.acceptCookies        = page.locator('//button[text()="Accept Cookies"]');
    };

    async clickOnProducts() {
        await this.productsButton.click();
    }

    async selectRandomCategoryFromDropdown() {
        await this.productsButton.click();
        await this.productInCategory.click();
    }
};