import { Browser, expect, Page, test } from '@playwright/test';
import { Homepage } from '../pages/HomePage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductPage } from '../pages/ProductPage';
import { WishListPage } from '../pages/WishList';

test.describe('Product test', async () => {
    let page: Page;
    let browserContext: Browser;
    let homepage: Homepage;

    test.beforeEach(async({browser}) => {
        browserContext = browser;
        page = await browser.newPage();
        homepage = new Homepage(page);
        await homepage.goto();
        await homepage.acceptCookies.click();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('Verify add to wish-list feature', async () => {
        await homepage.selectRandomCategoryFromDropdown();

        let productListPage: ProductListPage = new ProductListPage(homepage.page);
        await productListPage.selectProduct(1);
        let productName = await productListPage.getProductName();
        await productListPage.openSelectedProductPage();

        let productPage = new ProductPage(productListPage.page);
        await productPage.addToWishList();
        await productPage.wishListButton.click();

        let wishListPage = new WishListPage(productPage.page);
        let productNameInWishList = await wishListPage.getProductName();
        expect(productName).toEqual(productNameInWishList);        
    });
});