import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyDhwmTKhCuvzv5CBRhDVSXCk2v9Mt_cs3s',
    authDomain: 'reactauth-d84bf.firebaseapp.com',
    databaseURL: 'https://reactauth-d84bf.firebaseio.com',
    storageBucket: 'reactauth-d84bf.appspot.com',
    messagingSenderId: '1005965641721'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
