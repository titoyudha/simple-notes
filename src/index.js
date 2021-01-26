import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/containers/pages/App/App.js';
import reportWebVitals from './reportWebVitals';
import firebase from './config/firebase';

console.log('config firebase ===>',firebase);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
