import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR  } from './types';

export const successAlert = (message) => {
    return { type: ALERT_SUCCESS, message };
};

export const errorAlert = (message) => {
    console.log('error');
    return { type: ALERT_ERROR, message };
};
export const clearAlert = () => {
    return { type: ALERT_CLEAR };
};
