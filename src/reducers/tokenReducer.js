import { GET_TOKEN } from '../actions/types';

export function tokenReducer(state = [], action) {
  switch (action.type) {
      case GET_TOKEN:
      return action.token;
    default:
      return state;
  }
}