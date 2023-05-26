import React from 'react';
import styles from './Layout.module.scss';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx';
const Layout = () => (
  <div className={styles.Layout}>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;