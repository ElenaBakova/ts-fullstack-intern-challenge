const catsApiKey = import.meta.env.VITE_CATS_API_KEY;

async function fetchMoreCats() {
    console.log('Fetching more cats...');
    let response = await fetch(`https://api.thecatapi.com/v1/images/search?size=med&limit=20&api_key=${catsApiKey}`, {
        method: 'GET'
    });
    if (response.ok) {
        // console.log(catsApiKey);
        return response;
    }
    return Promise.reject(`An error occured while fetching cats: ${response.status}`);
}

export {fetchMoreCats}