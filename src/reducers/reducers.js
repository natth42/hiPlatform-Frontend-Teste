import { combineReducers } from "redux";
import { alertReducer } from './alertReducer';
import { favoriteReducer } from './favoriteReducer';
import { nameFilterReducer } from './nameFilter';
import { spotifyReducer } from './spotifyReducer';
import { tokenReducer } from './tokenReducer';
import { typeFilterReducer } from './typeFilterReducer';


const reducers = combineReducers({
    alertReducer,
    favoriteReducer,
    nameFilterReducer,
    spotifyReducer,
    tokenReducer,
    typeFilterReducer
});

export default reducers;
