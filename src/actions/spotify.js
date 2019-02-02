import { FETCH_SPOTIFY_DATA, FETCH_SPOTIFY_DATA_ALBUMS, FETCH_SPOTIFY_DATA_TRACKS } from './types';
import { errorAlert } from './alert';
import { urlSpotify } from '../utils/constants';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
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

const errorTratament = (error, dispatch) => {
  if(error.response && error.response.status === 401){
    dispatch(errorAlert('Sua Sessão expirou, se autentique novamente!'));
    window.location = urlSpotify;
  }else{
    dispatch(errorAlert('Tivemos alguns problemas técnicos buscandos os dados que você queria. tente novamente mais tarde!'));
  }
}

export const fetchSpotifyData = (params) => {
  return (dispatch) => {

    return axios.get(`${apiUrlSpotify}/search`, {
      params
    })
      .then((response) => {
        dispatch(fetchData(response.data))
      })
      .catch((error) => {
        errorTratament(error, dispatch);
        throw(error);
      });
  };
};

export const fetchSpotifyAlbumsData = (id) => {
  return (dispatch) => {
    
    return axios.get(`${apiUrlSpotify}/artists/${id}/albums`)
      .then((response) => {
        dispatch(fetchAlbumsData(response.data))
      })
      .catch((error) => {
        errorTratament(error, dispatch);
        throw(error);
      });
  };
};

export const fetchSpotifyTracksData = (id) => {
  return (dispatch) => {

    return axios.get(`${apiUrlSpotify}/albums/${id}/tracks`)
      .then((response) => {
        dispatch(fetchTracksData(response.data))
      })
      .catch((error) => {
        errorTratament(error, dispatch);
        throw(error);
      });
  };
};
