import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ProovedorApi } from './context/llamada-api';


ReactDOM.render(
  <React.StrictMode>
    <ProovedorApi>

    <App />
    </ProovedorApi>
  </React.StrictMode>,
  document.getElementById('root')
);

