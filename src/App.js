import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import Routes from './routes/Routes';
import theme from './theme/theme';
import './libs/imageUploader';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
