import AuthProvider from 'core/providers/Auth';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import messages from './assets/languages/en.json';
import GlobalStyle from './core/components/GlobalStyle';
import AppProvider from './core/providers/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IntlProvider locale="en" defaultLocale="en" messages={messages as Record<string, string>}>
      <AppProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
