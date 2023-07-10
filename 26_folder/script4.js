// 26 Fetch, async, await

// Promises

// 3 states: Pending, Fulfilled, Rejected

const myUsers = fetch('https://jsonplaceholder.typicode.com/users');
console.log(myUsers);  // pending state

const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(user => {
            console.log(user);
        });
    });
console.log(users);
