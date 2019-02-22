import { SET_FAVORITE, SET_UNFAVORITE } from './types';
import { loadState, saveState } from '../utils/localStorage';

export const setFavorite = (favoriteItem) => ({
        type: SET_FAVORITE,
        favoriteItem
});

export const setUnfavorite = (unfavoriteItem) => ({
        type: SET_UNFAVORITE,
        unfavoriteItem
});

export const setFavoriteItem = (search, item) => {
    return (dispatch) => {
        console.log(search, 'search');
        console.log(item, 'item');
        let searchItem = loadState(search);
        let searchString = search.toString();
        if (searchItem) {
            saveState([...searchItem, item.id], searchString);
        } else {
            saveState([item.id], searchString);
        }
        dispatch(setFavorite(item))
    };
};

export const setUnfavoriteItem = (search, item) => {
    return (dispatch) => {
        let searchItem = loadState(search.trim().toLowerCase());
        let searchString = search.toString();
        if (searchItem) {
            const favorites = searchItem.map((favoriteId) => {
                if (favoriteId !== item.id)
                    return favoriteId;
            });
            saveState(favorites, searchString);
        } else {
            saveState([], searchString);
        }
        dispatch(setUnfavorite(item));
    };
};

