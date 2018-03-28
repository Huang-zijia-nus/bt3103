import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import firebase from 'firebase'
import { Provider } from "react-redux";
import store from "./store";
    // Initialize Firebase


    // Initialize Firebase
var config = {
  apiKey: "AIzaSyAhCq3V28juUY-jPOIg0Llmra7j8lR-VtE",
  authDomain: "project-c2ef0.firebaseapp.com",
  databaseURL: "https://project-c2ef0.firebaseio.com",
  projectId: "project-c2ef0",
  storageBucket: "project-c2ef0.appspot.com",
  messagingSenderId: "366602856056"
};

try {
  firebase.initializeApp(config);
} catch (error) {
  console.log("Error in Firebase Initialization")
}
var db = firebase.database()
var data;
var value = db.ref("/").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_VAL", payload: data.val() });
    //  console.log('dispatched & displaying getstate:')
    //  console.log(store.getState());
  }
});


render((
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
