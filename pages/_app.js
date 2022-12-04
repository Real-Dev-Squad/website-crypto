import React from 'react';
import NavBar from '@components/NavBar';
import personData from '../mock/person.json';

import { wrapper } from '../redux/store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <NavBar personData={personData} />
    <Component {...pageProps} />;
  </>
);

export default wrapper.withRedux(MyApp);
