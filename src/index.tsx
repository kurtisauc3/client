import GlobalStyle from 'core/components/GlobalStyle';
import store from 'core/services/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import App from './App';
import messages from './assets/languages/en.json';
import Error from './Error';
import Loading from './Loading';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IntlProvider locale="en" defaultLocale="en" messages={messages as Record<string, string>}>
      <Provider store={store}>
        <Error />
        <Loading />
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
