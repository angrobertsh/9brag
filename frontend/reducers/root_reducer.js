import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';
import MemeReducer from './meme_reducer';

const RootReducer = combineReducers({sessions: SessionsReducer, memes: MemeReducer});

export default RootReducer
