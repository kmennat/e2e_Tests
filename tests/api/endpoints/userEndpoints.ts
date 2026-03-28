async function getUsers(request: { get: (arg0: string) => any; }){
    const response = request.get('https://jsonplaceholder.typicode.com/posts');
    return response;
}
export default {getUsers}