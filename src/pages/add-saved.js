import { addItemsToPlaylist } from "../api/index.js";

export async function POST({ request, cookies, redirect }) {
    const data = await request.formData();
    const ids = data.get('ids')?.split(',') ?? [];
    const userToken = cookies.get('spotify_token')?.value;
    const playlistId = cookies.get('current_playlist_id')?.value;

    const uris = ids.map(id => `spotify:track:${id}`);
    await addItemsToPlaylist(userToken, playlistId, uris);

    return redirect('/add-saved-success');
}
