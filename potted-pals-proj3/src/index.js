import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello name={'Nick'} />
  </React.StrictMode>
);
