import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EnergyFlowApp from './energyflow_app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <EnergyFlowApp />
  </React.StrictMode>
);