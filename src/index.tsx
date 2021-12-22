import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import messages from './assets/languages/en.json';
import GlobalStyle from './core/components/GlobalStyle';
import AuthProvider from './core/providers/Auth';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IntlProvider locale="en" defaultLocale="en" messages={messages as Record<string, string>}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
