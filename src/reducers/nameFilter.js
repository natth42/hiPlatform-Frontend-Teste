import { SET_NAME_FILTER } from '../actions/types';

export function nameFilterReducer(state = '', action) {
    switch (action.type) {
        case SET_NAME_FILTER:
            return action.filter;
        default:
            return state;
    }
}