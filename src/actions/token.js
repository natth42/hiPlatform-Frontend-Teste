import { GET_TOKEN } from './types';

export const tokenResponse = (token) => {
    return {
        type: GET_TOKEN,
        token
    }
};


export const getToken = () => {
    return (dispach) => {
        const url = window.location.hash;
        if (url) {
            const access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
            localStorage.setItem('token', access_token);
        }
        const token = localStorage.getItem('token');
        dispach(tokenResponse(token));
    }
}