import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './types';

export const successAlert = (message) => ({
    type: ALERT_SUCCESS, message 
});

export const errorAlert = (message) => ({
    type: ALERT_ERROR, message
});

export const clearAlert = () => ({
    type: ALERT_CLEAR 
});
