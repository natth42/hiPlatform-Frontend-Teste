import { SET_LOADING } from '../actions/types';

export function loadingReducer(state = false, action) {
    switch (action.type) {
        case SET_LOADING:
            return action.loading;
        default:
            return state
    }
}