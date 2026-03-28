import {expect, type Locator, type Page} from "@playwright/test";

export class HomePage{
    //===================================Locators====================================
    readonly page: Page; // Create a variable for the page
    readonly profile_icn: Locator;
    //===================================Variables===================================
    //===================================Contructor==================================
    constructor(page: Page){
        this.page = page;
        this.profile_icn = page.getByAltText('profile picture');
    }
    //===================================Methods=====================================
    //-----------------------------------Actions-------------------------------------
    //-----------------------------------Assertions----------------------------------
    async assertProfileIcon(){
        await expect(this.profile_icn).toBeVisible();
    }
}