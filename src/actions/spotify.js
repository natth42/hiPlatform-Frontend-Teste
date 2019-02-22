import { FETCH_SPOTIFY_DATA, FETCH_SPOTIFY_DATA_ALBUMS, FETCH_SPOTIFY_DATA_TRACKS, SET_SAVED_SPOTIFY_DATA } from './types';
import { errorAlert } from './alert';
import { setLoading } from './loading';
import { setFilterType } from './typeFilter';
import { urlSpotify } from '../utils/constants';
import { loadState, saveState } from '../utils/localStorage';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
const apiUrlSpotify = 'https://api.spotify.com/v1';

export const fetchData = (spotifyData) => ({
        type: FETCH_SPOTIFY_DATA,
        spotifyData
});

export const setSpotifyData = (spotifyData) => ({
    type: SET_SAVED_SPOTIFY_DATA, spotifyData
});

export const fetchAlbumsData = (spotifyAlbumsArtists) => ({
        type: FETCH_SPOTIFY_DATA_ALBUMS,
        spotifyAlbumsArtists
});

export const fetchTracksData = (spotifyAlbumTracks) => ({
        type: FETCH_SPOTIFY_DATA_TRACKS,
        spotifyAlbumTracks
});

export const errorTratament = (error, dispatch) => {
    if (error.response && error.response.status === 401) {
        window.location = urlSpotify;
        return errorAlert('Sua Sessão expirou, se autentique novamente!');
    } else {
        return errorAlert('Tivemos alguns problemas técnicos buscandos os dados que você queria. tente novamente mais tarde!');
    }
}

export const verifySpotifySavedData = () => {
    return (dispatch) => {
        const savedState = loadState('spotifyData');
        const savedFilter = loadState('filter');
        if(savedState !== undefined){
            if(savedFilter !== undefined)
                dispatch(setFilterType(savedFilter));
            return dispatch(setSpotifyData(savedState, 'spotifyData'));
        }else{
            return dispatch(setSpotifyData([]));  
        }      
    }
}

export const fetchSpotifyData = (params) => {
    return (dispatch) => {
        dispatch(setLoading(true));

        return axios.get(`${apiUrlSpotify}/search`, {
            params
        })
            .then((response) => {
                dispatch(fetchData(response.data));
                saveState(response.data, 'spotifyData');
                dispatch(setLoading(false));
            })
            .catch((error) => {
                dispatch(errorTratament(error));
                dispatch(setLoading(false));
                throw (error);
            });
    };
};

export const fetchSpotifyAlbumsData = (id) => {
    return (dispatch) => {
        dispatch(setLoading(true));

        return axios.get(`${apiUrlSpotify}/artists/${id}/albums`)
            .then((response) => {
                dispatch(fetchAlbumsData(response.data));
                dispatch(setLoading(false));
            })
            .catch((error) => {
                dispatch(errorTratament(error));
                dispatch(setLoading(false));
                throw (error);
            });
    };
};

export const fetchSpotifyTracksData = (id) => {
    return (dispatch) => {
        dispatch(setLoading(true));

        return axios.get(`${apiUrlSpotify}/albums/${id}/tracks`)
            .then((response) => {
                dispatch(fetchTracksData(response.data));
                dispatch(setLoading(false));
            })
            .catch((error) => {
                dispatch(errorTratament(error));
                dispatch(setLoading(false));
                throw (error);
            });
    };
};
