import { applyMiddleware } from 'redux';
import SessionsMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(SessionsMiddleware);

export default RootMiddleware;
