import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// If you plan to use AOS (optional) you can init it in App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Removed StrictMode for consistent animation intervals during development;
  // Re-enable if you prefer.
  <App />
);
