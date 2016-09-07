import { applyMiddleware } from 'redux';
import SessionsMiddleware from './session_middleware';
import MemeMiddleware from './meme_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(SessionsMiddleware, MemeMiddleware, UserMiddleware);

export default RootMiddleware;
