import GlobalStyle from 'core/components/GlobalStyle';
import store from 'core/services/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import App from './App';
import messages from './assets/languages/en.json';
import Loading from './Loading';
import Notify from './Notify';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IntlProvider locale="en" defaultLocale="en" messages={messages as Record<string, string>}>
      <Provider store={store}>
        <Notify />
        <Loading />
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
