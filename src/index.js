import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import counterReducer from './Store/reducers/counterReducer';
import resultReducer from './Store/reducers/resultReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const allReducers = combineReducers({
    counterReducer: counterReducer,
    resultReducer: resultReducer
});

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('[Middleware] Dispatching ', action);
            const result = next(action)
            console.log("Going into Next State ", store.getState());
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
