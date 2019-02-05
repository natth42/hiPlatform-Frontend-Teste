import { SET_NAME_FILTER } from './types';

export const setNameFilter = (filter) => {
    return { type: SET_NAME_FILTER, filter };
};
