import songs from '../data/dummySongs.json';

let cachedToken = null;
let tokenExpiry = 0;
export let currentSongs = songs;

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



export async function fetchSpotifyArtistsByGenre(genre, offset = 0, limit = 5) {
    const authToken = await fetchSpotifyAuthToken();

    const market = navigator.language.split('-')[1] || 'US';

    const url = 'https://api.spotify.com/v1/search?type=artist';
    const query = `&q=genre%3A${genre}&market=${market}&limit=${limit}&offset=${offset}`;
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

        return await response.json();
    } catch (error) {
        console.log('Something went wrong while trying to fetch data', error);
    }
}

export async function fetchSpotifyTrackByArtist(artistName, limit = 10) {
    const authToken = await fetchSpotifyAuthToken();

    const market = navigator.language.split('-')[1] || 'US';
    const url = `https://api.spotify.com/v1/search`;
    const query = `?q=artist%3A${encodeURIComponent(artistName)}&type=track&market=${market}&limit=${limit}`;

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
        const songs = data.tracks.items;
        return songs[Math.floor(Math.random() * songs.length)];
    } catch (error) {
        console.log('Something went wrong while trying to fetch data', error);
    }
}

export async function fetchSpotifyTrackById(id) {
    const authToken = await fetchSpotifyAuthToken();

    const url = `https://api.spotify.com/v1/tracks/${id}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

        if (!response.ok) {
            console.log('Something went wrong while trying to fetch data', response);
            return;
        }
        return await response.json();
    } catch (error) {
        console.log('Something went wrong while trying to fetch data', error);
    }
}

export async function fetchSongs(genre = 'pop') {
    const artistSearch = await fetchSpotifyArtistsByGenre(genre, 20, 10);

    const artists = artistSearch.artists.items;

    const songObjects = await Promise.all(artists.map(async (artist) => {
        return await fetchSpotifyTrackByArtist(artist.name);
    }));
    currentSongs = songObjects.map((songObject, index) => {
        return {
            ...songObject,
            index
        }
    })

    return currentSongs;
}

export async function createPlaylist(userToken, name = 'New Playlist', description = '', isPublic = false) {
    const playListOptions = {
        name,
        description,
        public: isPublic
    }
    const url = 'https://api.spotify.com/v1/me/playlists';

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
            body: JSON.stringify(playListOptions),
        });

        if (!response.ok) {
            console.log('Something went wrong while trying to create playlist', response);
            return;
        }
        return await response.json();
    } catch (error) {
        console.log('Something went wrong while trying to create playlist', error);
    }
}

