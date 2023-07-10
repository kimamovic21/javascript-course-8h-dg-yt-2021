// 26 Fetch, async, await

// 2nd parameter of fetch is a object

const requestJoke = async (firstName, lastName) => {
   
    const response = await fetch(`https://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}`);

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    console.log(jsonResponse.value);
};
requestJoke('Kerim', 'Imamovic');
