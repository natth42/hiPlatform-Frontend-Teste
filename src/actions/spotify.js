import { FETCH_SPOTIFY_DATA } from './types';
import axios from 'axios';

const apiUrlSpotify = 'https://api.spotify.com/v1';

export const fetchData = (data) => {
  return {
    type: FETCH_SPOTIFY_DATA,
    data
  }
};


export const fetchSpotifyData = () => {
  return (dispatch) => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return axios.get(`${apiUrlSpotify}/search`, {
      params: {
        q: 'tania bowra',
        type: 'artist'
      }
    })
      .then((response) => {
        console.log(response.data);
        dispatch(fetchData(response.data))
      })
      .catch((error) => {
        throw(error);
        console.log('error');
      });
  };
};
