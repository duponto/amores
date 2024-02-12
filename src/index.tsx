import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={15} anchorOrigin={{horizontal: "center", vertical:"top"}}>
      <Main />
    </SnackbarProvider>
  </React.StrictMode>
);
