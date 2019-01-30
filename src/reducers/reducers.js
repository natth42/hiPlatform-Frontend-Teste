import { combineReducers } from "redux";
import { alertReducer } from './alertReducer';
import  { spotifyReducer } from './spotifyReducer';
import { tokenReducer } from './tokenReducer';


const reducers = combineReducers({
    alertReducer,
    spotifyReducer,
    tokenReducer
});

export default reducers;
