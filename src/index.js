import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from './App';

let middleware = applyMiddleware(thunk, logger)

const store = createStore(
  reducers,
  compose (middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
