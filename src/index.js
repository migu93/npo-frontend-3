import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './utils/App';
import reportWebVitals from './reportWebVitals';
import {StyledEngineProvider, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import darkTheme from "./Components/darkTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
