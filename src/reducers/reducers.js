import { combineReducers } from "redux";
import { alertReducer } from './alertReducer';
import  { spotifyReducer } from './spotifyReducer';
import { tokenReducer } from './tokenReducer';
import { typeFilterReducer } from './typeFilterReducer';


const reducers = combineReducers({
    alertReducer,
    spotifyReducer,
    tokenReducer,
    typeFilterReducer
});

export default reducers;
