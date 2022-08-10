import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "./components/Nav/Nav";
import './index.css';
import App from './App';
import Gallery from "./components/Gallery/Gallery";
import Footer from './components/footer/footer';
import Signup from './components/form/singnup';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
