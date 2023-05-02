import test, { expect, Page } from '@playwright/test';
import { Homepage } from '../pages/HomePage';

test.describe('Homepage test', async () => {
    let page: Page;
    let homepage: Homepage;

    test.beforeEach(async({browser}) => {
        page = await browser.newPage();
        homepage = new Homepage(page);
        await homepage.goto();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('Verify navigation links are visible', async () => {
        await expect(homepage.partnerPortalButton).toBeVisible();
        await expect(homepage.contactUsButton).toBeVisible();
        await expect(homepage.whereToBuyButton).toBeVisible();
        await expect(homepage.wishListButton).toBeVisible();
    });

    test('verify text inside navigation links', async () => {
        await expect(homepage.partnerPortalButton).toHaveText('Partner Portal');
        await expect(homepage.contactUsButton).toHaveText('Contact Us');
        await expect(homepage.whereToBuyButton).toHaveText('Where To Buy');
        await expect(homepage.wishListButton).toHaveText('Wish List');
    });
});