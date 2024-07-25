import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/app';

const container = document.getElementById('app');
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
