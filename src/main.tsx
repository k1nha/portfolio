import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './i18n/index';
import './index.css';
import { RootNavigator } from './routes';
import { inject } from '@vercel/analytics';

inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootNavigator />
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: '#2f72a2',
            color: '#fff',
          },
        },
      }}
    />
  </React.StrictMode>,
);
