const API_KEY = process.env.YT_API_KEY;

function parseDuration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;
  return (hours * 3600) + (minutes * 60) + seconds;
}

function format(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
}

export async function getPlaylistData(playlistId) {
  let nextPageToken = '';
  let videoIds = [];
  let title = '';
  let videoCount = 0;

  const playlistDetails = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${playlistId}&key=${API_KEY}`
  );
  const playlistData = await playlistDetails.json();

  if (!playlistData.items || playlistData.items.length === 0) {
    console.error('YouTube API returned invalid playlist data:', playlistData);
    throw new Error('Playlist not found or unauthorized. Check API key and playlist ID.');
  }

  title = playlistData.items[0].snippet.title;
  videoCount = playlistData.items[0].contentDetails.itemCount;

  // Fetch all video IDs
  do {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&pageToken=${nextPageToken}&playlistId=${playlistId}&key=${API_KEY}`
    );
    const data = await res.json();
    nextPageToken = data.nextPageToken || '';
    videoIds.push(...data.items.map(item => item.contentDetails.videoId));
  } while (nextPageToken);

  // Split video IDs into chunks of 50
  const videoChunks = [];
  for (let i = 0; i < videoIds.length; i += 50) {
    videoChunks.push(videoIds.slice(i, i + 50));
  }

  // Fetch video durations
  let totalSeconds = 0;
  for (const chunk of videoChunks) {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${chunk.join(',')}&key=${API_KEY}`
    );
    const data = await res.json();
    totalSeconds += data.items.reduce((sum, video) => {
      const duration = video.contentDetails?.duration;
      return duration ? sum + parseDuration(duration) : sum;
    }, 0);
  }

  const avg = totalSeconds / videoIds.length;

  return {
    title,
    videoCount,
    totalDuration: format(totalSeconds),
    averageDuration: format(avg),
    at125x: format(totalSeconds / 1.25),
    at15x: format(totalSeconds / 1.5),
    at175x: format(totalSeconds / 1.75),
    at2x: format(totalSeconds / 2),
  };
}
