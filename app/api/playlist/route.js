import { NextResponse } from 'next/server';
import { getPlaylistData } from '@utils/timeutils';

export async function POST(req) {
  const { url } = await req.json();

  // Improved playlist ID extraction
  const playlistIdMatch = url.match(/(?:list=)([a-zA-Z0-9_-]+)/);
  const playlistId = playlistIdMatch ? playlistIdMatch[1] : null;

  console.log('Extracted playlist ID:', playlistId);

  if (!playlistId) {
    return NextResponse.json({ error: 'Invalid playlist URL or ID' }, { status: 400 });
  }

  try {
    const result = await getPlaylistData(playlistId);
    return NextResponse.json(result);
  } catch (err) {
    console.error('Error in /api/playlist:', err.message);
    return NextResponse.json({ error: 'Failed to fetch playlist data' }, { status: 500 });
  }
}
