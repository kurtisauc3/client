import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import messages from './assets/languages/en.json';
import GlobalStyle from './core/components/GlobalStyle';
import UserStateProvider from './core/providers/UserState';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IntlProvider locale="en" defaultLocale="en" messages={messages as Record<string, string>}>
      <UserStateProvider>
        <App />
      </UserStateProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
