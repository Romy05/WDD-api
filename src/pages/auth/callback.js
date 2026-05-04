// Ook met behulp van AI
// Dit stukje code vraagt een user token op aan de Spotify API en slaat deze op in de cookies.

export async function GET({ url, cookies, redirect }) {
    const code = url.searchParams.get('code');
    const client_id = import.meta.env.API_KEY_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.API_KEY_SPOTIFY_CLIENT_SECRET;
    const redirect_uri = `https://wdd-api.onrender.com//auth/callback`;

    const AuthHeader = btoa(client_id + ':' + client_secret);

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${AuthHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri,
        })
    });

    const data = await response.json();

    // Sla de token op in een cookie
    cookies.set('spotify_token', data.access_token, {
        httpOnly: true,
        path: '/',
        maxAge: data.expires_in
    });

    return redirect('/');
}