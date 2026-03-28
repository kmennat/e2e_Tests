import {expect, type Locator, type Page} from "@playwright/test";

export class LoginPage{
    //===================================Locators====================================
    readonly page: Page; // Create a variable for the page
    readonly username_tb: Locator; // Create a variable for username textbox
    readonly password_tb: Locator; // Create a variable for password textbox
    readonly login_btn: Locator; // Create a variable for login button
    readonly invalidLoginMessage: Locator; // Create a variable for invalid login message
    //===================================Variables===================================
    readonly url: string = "https://opensource-demo.orangehrmlive.com/"; //https://opensource-demo.orangehrmlive.com
    readonly invalidLoginMessageText: string ="Invalid credentials";
    //===================================Contructor==================================
    constructor(page: Page){
        this.page = page;
        this.username_tb = page.getByPlaceholder('Username');////input[@placeholder='Username']
        this.password_tb = page.getByPlaceholder('Password');////input[@placeholder='Password']
        this.login_btn = page.getByRole('button', {name:'Login'});
        this.invalidLoginMessage = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']");
    }
    //===================================Methods=====================================
    //-----------------------------------Actions-------------------------------------
    async open(){
        await this.page.goto(this.url)
    }
    async login(username: string, password: string){
        await this.username_tb.fill(username);
        await this.password_tb.fill(password);
        await this.login_btn.click();
    }
    //-----------------------------------Assertions----------------------------------
    async assertInvalidLoginMessage(){
        await expect(this.invalidLoginMessage).toHaveText(this.invalidLoginMessageText);
    }
}