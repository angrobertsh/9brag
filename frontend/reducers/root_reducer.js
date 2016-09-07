import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';
import MemeReducer from './meme_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({sessions: SessionsReducer, memes: MemeReducer, users: UserReducer});

export default RootReducer
