let cachedToken = null;
let tokenExpiry = 0;

async function fetchSpotifyAuthToken() {
    const client_id = import.meta.env.API_KEY_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.API_KEY_SPOTIFY_CLIENT_SECRET;

    if (cachedToken && Date.now() < tokenExpiry) {
        return cachedToken;
    }

    const url = 'https://accounts.spotify.com/api/token';
    const AuthHeader = (new Buffer.from(client_id + ':' + client_secret).toString('base64'));
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Authorization': `Basic ${AuthHeader}` ,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials'
            })
        });

        const data = await response.json();
        tokenExpiry = Number(Date.now()) + Number(data.expires_in * 1000);
        return cachedToken = data.access_token;
    } catch (error) {
        console.log('Something went wrong while trying to fetch the Spotify auth token', error);
    }
}

export async function fetchSpotifySongsByGenre(genre) {
    const authToken = await fetchSpotifyAuthToken();
    const url = 'https://api.spotify.com/v1/search?type=track';
    const query = `&q=tag%3A${genre}`;
    try {
        const response = await fetch(url + query, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

        if (!response.ok) {
            console.log('Something went wrong while trying to fetch data', response);
            return;
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Something went wrong while trying to fetch data', error);
    }
}