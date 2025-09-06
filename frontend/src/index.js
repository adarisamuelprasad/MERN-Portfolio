import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// This is the root of your React application.
// It finds the <div id="root"> in your public/index.html file
// and renders your main <App /> component inside of it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
