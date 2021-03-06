import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import quantityReducer from './store/reducers/quantity';
import browseReducer from './store/reducers/browse';
import homeReducer from './store/reducers/home';
import authReducer from './store/reducers/auth';
import ordersReducer from './store/reducers/orders';
import checkoutReducer from './store/reducers/checkout';
import categoryReducer from './store/reducers/category';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  quantity: quantityReducer,
  browse: browseReducer,
  home: homeReducer,
  auth: authReducer,
  orders: ordersReducer,
  checkout: checkoutReducer,
  category: categoryReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();