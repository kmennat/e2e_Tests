import {test} from '@playwright/test';
import { POManager } from '../pages/poManager'; 
import jsonData from '../../../testData/testUsers.json'

//=============================Variables==============================
let poManager: POManager;
//json Format -> string -> ts object
const parsedJsonData = JSON.parse(JSON.stringify(jsonData));
//=============================Hooks==================================
test.beforeAll('This actions run before all tests', async () => {
    console.log("json username:", parsedJsonData.username);
    console.log('This actions run before all tests');
})

test.beforeEach('This actions run before every test', async ({page}, testInfo) => {
    poManager =  new POManager(page);
    await poManager.getLoginPage().open();
    console.log(`test starts for: ${testInfo.title}`);
})

test.afterEach('This actions run before every test', async ({page}, testInfo) => {
    console.log(`test ends for: ${testInfo.title}`);
})

test.afterAll('This actions run after all tests', async () => {
    console.log('This actions run after all tests');
})

test.describe
('Login test', ()=>{
    test('valid login', async ({ page }, testInfo) => {
        await poManager.getLoginPage().login(parsedJsonData.username,parsedJsonData.password)
        await poManager.getHomePage().assertProfileIcon();
        //await expect(page.getByAltText('profile picture')).toBeVisible();
        // await page.screenshot({path: 'screenshots/login.png'});
        // testInfo.attach(`${testInfo.title}`,{path: 'screenshots/login.png'});
    });

    test('invalid login', async ({ page }) => {
        await poManager.getLoginPage().login(parsedJsonData.username,'admin12')
        await poManager.getLoginPage().assertInvalidLoginMessage();
        // await page.getByPlaceholder('Username').fill('Admin');
        // await page.getByPlaceholder('Password').fill('admin12');
        // await page.getByRole('button', {name:'Login'}).click();
        // await expect(page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).toHaveText("Invalid credentials");
     });
})