import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import './index.css';
import {requestRobots, searchRobots} from './reducers';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();
