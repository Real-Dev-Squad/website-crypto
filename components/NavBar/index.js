import Link from 'next/link';
import React, { useState, useRef } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';

const NavBar = ({ personData: { photo } }) => {
  const RDSLogo = '/assets/Real-Dev-Squad1x.png';
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(15);
  
  const navbarRef = useRef();
  GenericClosePopUp(navbarRef, () => {
    setToggle(false);
  });

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li>
      </ul>
      <li>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={RDSLogo}
              alt="RealDevSquad Logo"
              width="100"
              height="100"
              layout="fixed"
            />
          </Link>
        </div>
      </li>

      <div
        className={styles.profilePic}
        ref={navbarRef}
        onClick={() => setToggle(!toggle)}
      >
        <img src={photo} alt="Profile Image" height="70" width="70" />
        <div
          className={
            toggle ? styles.dropdownContent : styles.dropdownContentHide
          }
        >
          <a href="">Profile</a>
          <a href="/notification">Notifications <span className={styles.notificationNumbers}>{count}</span></a>
          <a href="#">Setting</a>
          <a href="#">Orders</a>
          <a href="#">Log Out</a>      
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
