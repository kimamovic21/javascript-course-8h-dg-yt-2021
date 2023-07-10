// 26 Fetch, async, await

// 2nd parameter of fetch is a object

// abstract into functions
const getDataFromForm = () => {
    const requestObj = {
        firstName: 'Kerim',
        lastName: 'Imamovic',
    };
    return requestObj;
};

const buildRequestURL = (requestData) => {
    return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}`;
};

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value;
    console.log(joke);
    postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
    alert(joke);
};

// Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestURL = buildRequestURL(requestData);
    await requestJoke(requestURL);
    console.log(`Finished!`);
};
processJokeRequest();
