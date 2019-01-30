import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from '../actions/types';

export function alertReducer(state = [], action) {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                showMessage: true,
                message: action.message
            };
        case ALERT_ERROR:
            return {
                showMessage: true,
                message: action.message
            };
        case ALERT_CLEAR:
            return {
                showMessage: false
            };
        default:
            return state
    }
}