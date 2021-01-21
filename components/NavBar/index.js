import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './navbar.module.css';

const NavBar = ({ personData: { photo } }) => {
  const RDSLogo = '/assets/Real-Dev-Squad1x.png';

  return (
    <nav className={styles.navBar}>
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
      <li>
        <div className={styles.logo}>
          <Image
            src={RDSLogo}
            alt="RealDevSquad Logo"
            width="111"
            height="111"
            layout="fixed"
          />
        </div>
      </li>
      <li>
        <Link href="#">
          <a className={styles.login}>Log in</a>
        </Link>
      </li>
      <div className={styles.imageWrapper}>
        <Image src={photo} alt="Profile Image" width="70" height="70" />
      </div>
    </nav>
  );
};

export default NavBar;
