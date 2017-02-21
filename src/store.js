import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';

var logger = createLogger();

export default createStore(
    reducer,
    applyMiddleware(logger, thunk)
);