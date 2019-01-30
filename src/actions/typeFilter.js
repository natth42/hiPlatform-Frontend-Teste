import { SET_TYPE_FILTER  } from './types';

export const setFilterType = (filter) => {
    return { type: SET_TYPE_FILTER, filter };
};
