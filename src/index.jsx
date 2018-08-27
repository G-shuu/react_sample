import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// import App from './components/App';
import SearchPage from './components/SearchPage';
import reducer from './reducers/';

ReactDOM.render(
  <SearchPage
    history={history}
    location={location}
    store={CreateStore(reducer)}
  />,
  document.querySelector('.container'),
);
