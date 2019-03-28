import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD8VFLPsAqxuNG1awC1BV3aT6otEkrUtYQ",
  authDomain: "react-notes-app-d0385.firebaseapp.com",
  databaseURL: "https://react-notes-app-d0385.firebaseio.com",
  projectId: "react-notes-app-d0385",
  storageBucket: "react-notes-app-d0385.appspot.com",
  messagingSenderId: "650525914883"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
