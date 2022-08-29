import { CssBaseline } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { history } from 'utils';
import App from './App';
import { store } from './app/store';
import './index.css';
import * as serviceWorker from './serviceWorker';

// const container = document.getElementById('root')!;
// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <App />
      </ConnectedRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
