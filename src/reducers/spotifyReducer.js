import { FETCH_SPOTIFY_DATA } from '../actions/types';

export function spotifyReducer(state = [], action) {
  switch (action.type) {
      case FETCH_SPOTIFY_DATA:
      return action.spotifyData;
    default:
      return state;
  }
}