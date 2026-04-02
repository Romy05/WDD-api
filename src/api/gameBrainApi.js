
export async function fetchSuggestedGamesBySearch(search) {
    const authToken = import.meta.env.API_KEY_GAMEBRAIN;
    const url = 'https://api.gamebrain.co/v1/games';
    const query = `?query=${search.replace(' ', '+')}`;
    try {
        const response = await fetch(url + query, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

        if (!response.ok) {
            console.log('Something went wrong while trying to fetch game data', response);
            return;
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Something went wrong while trying to fetch data', error);
    }
}