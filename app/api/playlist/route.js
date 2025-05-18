import { NextResponse } from 'next/server';
import { getPlaylistData } from '@utils/timeutils';

export async function POST(req) {
  const { url } = await req.json();
  const playlistId = url.split('list=')[1];

  if (!playlistId) {
    return NextResponse.json({ error: 'Invalid playlist ID' }, { status: 400 });
  }

  try {
    const result = await getPlaylistData(playlistId);
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch playlist data' }, { status: 500 });
  }
}
