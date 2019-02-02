import { FETCH_SPOTIFY_DATA, FETCH_SPOTIFY_DATA_ALBUMS, FETCH_SPOTIFY_DATA_TRACKS } from '../actions/types';

export function spotifyReducer(state = [], action) {
  switch (action.type) {
      case FETCH_SPOTIFY_DATA:{
        return action.spotifyData;
      }
      case FETCH_SPOTIFY_DATA_ALBUMS:{
        return action.spotifyAlbumsArtists;
      }
      case FETCH_SPOTIFY_DATA_TRACKS:{
        return action.spotifyAlbumTracks;
      }
    default:
      return state;
  }
}