import store from 'core/redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import messages from './assets/languages/en';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <IntlProvider locale="en" defaultLocale="en" messages={messages}>
        <Provider store={store}>
          <App />
        </Provider>
      </IntlProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
