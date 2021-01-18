import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';

const NavBar = ({ personData: { photo } }) => {
  const RDSLogo = '/assets/Real-Dev-Squad1x.png';

  return (
    <nav className={styles.navBar}>
      <li></li>

      <li>
        <img className={styles.logo} src={RDSLogo} alt="RealDevSquad Logo" />
      </li>

      {/* <li>
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
      </div> */}

      <li>
        <Link href="#">
          <a className={styles.login}>Log in</a>
        </Link>
      </li>
    </nav>
  );
};

export default NavBar;
