// 26 Fetch, async, await

// 2nd parameter of fetch is a object

const jokeObject = {
    id: 'fqWgFt4Edxc', 
    joke: `Why do crabs never give to charity? Because they're shellfish.`, 
};

const postData = async (jokeObj) => {

    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jokeObj),
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
};
postData(jokeObject);

