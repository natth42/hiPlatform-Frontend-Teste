import { FETCH_SPOTIFY_DATA, FETCH_SPOTIFY_DATA_ALBUMS, FETCH_SPOTIFY_DATA_TRACKS } from './types';
import axios from 'axios';

const apiUrlSpotify = 'https://api.spotify.com/v1';

export const fetchData = (spotifyData) => {
  return {
    type: FETCH_SPOTIFY_DATA,
    spotifyData
  }
};

export const fetchAlbumsData = (spotifyAlbumsArtists) => {
  return {
    type: FETCH_SPOTIFY_DATA_ALBUMS,
    spotifyAlbumsArtists
  }
};

export const fetchTracksData = (spotifyAlbumTracks) => {
  return {
    type: FETCH_SPOTIFY_DATA_TRACKS,
    spotifyAlbumTracks
  }
};

export const fetchSpotifyData = (params) => {
  return (dispatch) => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return axios.get(`${apiUrlSpotify}/search`, {
      params
    })
      .then((response) => {
        dispatch(fetchData(response.data))
      })
      .catch((error) => {
        throw(error);
      });
  };
};

export const fetchSpotifyAlbumsData = (id) => {
  return (dispatch) => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return axios.get(`${apiUrlSpotify}/artists/${id}/albums`)
      .then((response) => {
        dispatch(fetchAlbumsData(response.data))
      })
      .catch((error) => {
        throw(error);
      });
  };
};

export const fetchSpotifyTracksData = (id) => {
  return (dispatch) => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return axios.get(`${apiUrlSpotify}/albums/${id}/tracks`)
      .then((response) => {
        dispatch(fetchTracksData(response.data))
      })
      .catch((error) => {
        throw(error);
      });
  };
};
