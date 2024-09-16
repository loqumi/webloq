import "./i18n"
import App from './App';
import React from 'react';
import "../src/styles/global.css"
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>
);