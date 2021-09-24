import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCddSQvwh5q5d39oAvjdD7DqPamEc2SjbQ",
  authDomain: "cart-c2374.firebaseapp.com",
  projectId: "cart-c2374",
  storageBucket: "cart-c2374.appspot.com",
  messagingSenderId: "614980149585",
  appId: "1:614980149585:web:61bdfc75ad04bf29e97370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


