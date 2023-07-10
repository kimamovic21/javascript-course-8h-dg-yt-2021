// 26 Fetch, async, await

const myUsers = {
    userList: [],
};

const myAsyncFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
};
myAsyncFunction();

const anotherAsyncFuction = async () => {
    const data = await myAsyncFunction();
    console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList);
};
anotherAsyncFuction();

console.log(myUsers.userList);
