import { SET_TYPE_FILTER } from '../actions/types';

export function typeFilterReducer(state = 'artist', action) {
  switch (action.type) {
      case SET_TYPE_FILTER:
      return action.filter;
    default:
      return state;
  }
}