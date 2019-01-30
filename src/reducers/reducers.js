import { combineReducers } from "redux";
import  { spotifyReducer } from './spotifyReducer';
import { tokenReducer } from './tokenReducer';


const reducers = combineReducers({
    spotifyReducer,
    tokenReducer
});

export default reducers;
