import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';

const RootReducer = combineReducers({sessions: SessionsReducer});

export default RootReducer
