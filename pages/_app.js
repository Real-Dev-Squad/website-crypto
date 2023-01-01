import React from 'react';
import NavBar from '@components/NavBar';
import personData from '../mock/person.json';

import { wrapper } from '../redux/store';
import '../styles/globals.css';
import Sidebar from '@components/Sidebar';

const MyApp = ({ Component, pageProps }) => (
  <>
    <NavBar personData={personData} />
    <div className="main_app">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  </>
);

export default wrapper.withRedux(MyApp);
