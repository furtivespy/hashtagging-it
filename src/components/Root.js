import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import firebaseConfig from '../config/firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
