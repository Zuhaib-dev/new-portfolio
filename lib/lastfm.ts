const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

const LASTFM_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

export const getNowPlaying = async () => {
  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    return null;
  }

  return fetch(LASTFM_ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store', // Ensures we don't cache the live status
  });
};
