import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './globalStyles';
import PageProvider from './providers/PageProvider';
import GetMovieProvider from './providers/GetMovieProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GetMovieProvider>
      <PageProvider>
        <GlobalStyle />
        <App />
      </PageProvider>
    </GetMovieProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
