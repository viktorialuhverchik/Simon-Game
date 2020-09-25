import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/reducers/rootReducer';

export const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
