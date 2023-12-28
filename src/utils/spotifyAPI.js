import axios from 'axios';
const qs = require('qs');

const BASE_URL = 'https://api.spotify.com/v1';

const getToken = async () => {
  const clientId = process.env.REACT_APP_SPOTIFY_API_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ grant_type: 'client_credentials', client_id: clientId, client_secret: clientSecret }),
    url: 'https://accounts.spotify.com/api/token',
  };

  const response = await axios(options);
  return response.data.access_token;
};

const searchTracks = async (query, type = 'track') => {
  const token = await getToken();

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type,
      },
    });

    const { items } = response.data.tracks;

    return items;
  } catch (error) {
    console.error('Error searching tracks:', error);
    throw error;
  }
};

export { searchTracks };
