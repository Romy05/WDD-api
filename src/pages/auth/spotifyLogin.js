// Dit is met behulp van AI.
// Ik wil door gebruik te maken van cookies een token opslaan wat de website rechten geeft om playlists aan te passen.
// Via deze pagina redirect de website naar de inlog van Spotify.

export async function GET({ redirect }) {
    const client_id = import.meta.env.API_KEY_SPOTIFY_CLIENT_ID;
    const redirect_uri = import.meta.env.REDIRECT_URL;
    const scope = 'playlist-modify-public playlist-modify-private';

    console.log(redirect_uri);

    const params = new URLSearchParams({
        response_type: 'code',
        client_id,
        scope,
        redirect_uri,
    });

    return redirect(`https://accounts.spotify.com/authorize?${params}`);
}