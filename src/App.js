import React, { Component } from 'react';
import './App.css';
import Router from './router';
import {createStore} from 'redux';
import RootReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(RootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
