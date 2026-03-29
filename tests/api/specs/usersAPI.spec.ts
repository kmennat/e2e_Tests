import { test, expect } from '@playwright/test';
import usersRequest from '../endpoints/userEndpoints';
//========================Variables=================
let response;
let jsonResponse;
const userParam = {
    "id":2
}
//=======================Tests======================
//-----------------------GET 200--------------------
test.describe('User API Test', () => {
    test('Check get users response success response', async ({request}) => {
        response = await usersRequest.getUsers(request)
        jsonResponse = await response.json();
        console.log(jsonResponse);
        //assert on status code
        expect(response.status()).toBe(200);
        //assert on list length
        //expect(jsonResponse.length()).toBe(100);
    });
    //----------------------GET with params 200-------
    test('Check get users for a specific user', async ({request}) => {
        //response = await usersRequest.getUsers(request)
        response = await request.get('https://jsonplaceholder.typicode.com/posts',{
            params: userParam
        });
        jsonResponse = await response.json();
        console.log(jsonResponse);
        expect(jsonResponse[0].title).toEqual('qui est esse')
    });
});