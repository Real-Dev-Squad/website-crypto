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
      <li>
        <Link href="#">
          <a className={styles.login}>Log in</a>
        </Link>
      </li>
      {/* <div className={styles.profilePic} onClick={() => setToggle(!toggle)}>
        <img src={photo} alt="Profile Image" height="70" width="70" />
        <div
          className={
            toggle ? styles.dropdownContent : styles.dropdownContentHide
          }
        >
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
            <li>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
