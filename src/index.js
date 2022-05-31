import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from './context/context.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <div className='background-container'>
      <App />
    </div>
  </Provider>
);
