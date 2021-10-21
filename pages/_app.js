import React from 'react';

import { wrapper } from '../redux/store';
import '../styles/globals.css';
import { DarkModeProvider } from 'stores/dark-mode-context';

const MyApp = ({ Component, pageProps }) => {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
};

export default wrapper.withRedux(MyApp);
