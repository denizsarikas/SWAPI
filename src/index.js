
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StarshipProvider } from '../src/context/StarshipContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarshipProvider>
      <App />
    </StarshipProvider>
  </React.StrictMode>
);