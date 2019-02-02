import { SET_FAVORITE, SET_UNFAVORITE } from './types';

export const setFavorite = (favoriteItem) => {
  return {
    type: SET_FAVORITE,
    favoriteItem
  }
};

export const setUnfavorite = (unfavoriteItem) => {
  return {
    type: SET_UNFAVORITE,
    unfavoriteItem
  }
};

export const setFavoriteItem = (search, item) => {
  return (dispatch) => {
        let searchItem = JSON.parse(localStorage.getItem(search));
        let searchString = search.toString();
        if(searchItem){
            localStorage.setItem(searchString, JSON.stringify([...searchItem, item.id]));
        }else{
            localStorage.setItem(searchString, JSON.stringify([item.id]));
        }
        dispatch(setFavorite(item))
  };
};

export const setUnfavoriteItem = (search, item) => {
  return (dispatch) => {
        let searchItem = JSON.parse(localStorage.getItem(search.trim().toLowerCase()));
        let searchString = search.toString();
        if(searchItem){
            const favorites = searchItem.map((favoriteId) => {
              if (favoriteId !== item.id) {
                return favoriteId;
              }
            });
            localStorage.setItem(searchString, JSON.stringify(favorites));
        }else{
            localStorage.setItem(searchString, JSON.stringify([]));
        }
        dispatch(setUnfavorite(item));
  };
};

