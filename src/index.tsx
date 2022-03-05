import { NetworkProvider } from 'providers/network';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import messages from './assets/languages/en';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en" defaultLocale="en" messages={messages}>
      <NetworkProvider>
        <GlobalStyle />
        <App />
      </NetworkProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
