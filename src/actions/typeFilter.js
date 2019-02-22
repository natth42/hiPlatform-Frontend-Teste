import { SET_TYPE_FILTER } from './types';
import { saveState } from '../utils/localStorage';

export const setFilterType = (filter) => {
    saveState(filter, 'filter');
    return { type: SET_TYPE_FILTER, filter };
};
