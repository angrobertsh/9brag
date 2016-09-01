import { applyMiddleware } from 'redux';
import SessionsMiddleware from './session_middleware';
import MemeMiddleware from './meme_middleware';

const RootMiddleware = applyMiddleware(SessionsMiddleware, MemeMiddleware);

export default RootMiddleware;
