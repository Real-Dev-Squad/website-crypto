import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';

const NavBar = ({ personData: { photo } }) => {
  const RDSLogo = '/assets/Real-Dev-Squad1x.png';
  const [toggle, setToggle] = useState(false);

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
      <div className={styles.profilePic} onClick={() => setToggle(!toggle)}>
        <img src={photo} alt="Profile Image" height="70" width="70" />
        <div
          className={
            toggle ? styles.dropdownContent : styles.dropdownContentHide
          }
        >
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
