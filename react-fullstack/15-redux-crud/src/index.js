/**
 * 패키지 설치
 * yarn add react-router-dom react-helmet-async sass styled-components styled-components-breakpoints dayjs classnames axios react-loader-spinner axios-hooks react-redux @reduxjs/toolkit redux-devtools-extension chart.js react-chartjs-2
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

/**/
import App from './App';
/*/
import App from './Test';
/**/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

