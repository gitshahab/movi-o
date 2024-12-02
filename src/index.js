import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { FavoriteProvider } from './context/FavoriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FavoriteProvider>
        <App/>
      </FavoriteProvider>
    </Router>
  </React.StrictMode>
);

