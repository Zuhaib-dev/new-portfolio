import { getNowPlaying } from '@/lib/lastfm';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (!response || response.status === 204 || response.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const data = await response.json();
    const tracks = data?.recenttracks?.track;

    if (!tracks || tracks.length === 0) {
      return NextResponse.json({ isPlaying: false });
    }

    const track = tracks[0];
    
    // Check if the track is currently playing ("@attr" property with "nowplaying": "true")
    const isPlaying = track['@attr']?.nowplaying === 'true';

    // Last.fm doesn't provide a direct Spotify URL, but we can provide a Last.fm URL
    // or keep the UI generic
    const songUrl = track.url;
    const title = track.name;
    const artist = track.artist['#text'];
    const album = track.album['#text'];
    const albumImageUrl = track.image.find((img: any) => img.size === 'extralarge')?.['#text'] || 
                          track.image.find((img: any) => img.size === 'large')?.['#text'] || '';

    return NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    return NextResponse.json({ isPlaying: false });
  }
}
