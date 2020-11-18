import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import UserAuthProvider from './context/authContext';
import store from './redux/store';
import Routes from './routes/Routes';
import theme from './theme/theme';
import './icons/fontawesome';
import './sass/main.scss';
import './libs';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserAuthProvider>
        <Provider store={store}>
          <Routes />

          <ToastContainer hideProgressBar autoClose />
        </Provider>
      </UserAuthProvider>
    </ThemeProvider>
  );
};

export default App;
