import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import achievmentReducer from './reducers/achievmentReducer.js';
import AppComponent from './app';

const store = createStore(combineReducers({
  achievmentReducer,
  form: formReducer,
}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F9D780',
      dark: '#F58B44',
      main: '#F58B44',
      contrastText: '#FAF7F2',
    },
    secondary: {
      light: '#80B4E6',
      dark: '#559AD1',
      main: '#559AD1',
      contrastText: '#FAF7F2',
    },
  },
  custom: {
    background: {
      dark: '#5a6175',
      light: '#999999',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

const IndexComponent = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </MuiThemeProvider>
);

const renderApp = () => {
  ReactDOM.render(
    IndexComponent,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept('./app', renderApp);
} else {
  window.onload = renderApp;
}

// https://www.robinwieruch.de/minimal-react-webpack-babel-setup/#react-project-setup
