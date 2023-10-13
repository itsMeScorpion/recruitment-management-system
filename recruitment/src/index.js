// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './components/App';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from './reducers';
// import thunk from 'redux-thunk';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const middleware = [thunk];
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// const store = createStore(reducers, enhancer);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
console.log("hiiiiiii")
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
