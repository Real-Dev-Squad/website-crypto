import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
const NavBar = ({ personData: { photo } }) => {
  const RDSLogo =
    'https://staging-members-rds.herokuapp.com/images/Real-Dev-Squad@1x.png';
  return (
    <nav className={styles.navBar}>
      <img className={styles.logo} src={RDSLogo} alt="RealDevSquad Logo" />
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
      <div className={styles.profilePic}>
        <img src={photo} alt="Profile Image" height="70" width="70" />
      </div>
    </nav>
  );
};

export default NavBar;
