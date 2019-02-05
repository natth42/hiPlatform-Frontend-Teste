import { SET_FAVORITE } from '../actions/types';

export function favoriteReducer(state = [], action) {
    switch (action.type) {
        case SET_FAVORITE: {
            return action.favoriteItem;
        }
        default:
            return state;
    }
}