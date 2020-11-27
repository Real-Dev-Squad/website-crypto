import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
const NavBar = ({ personData: { photo } }) => {
  return (
    <div className={styles.homeHeader}>
      <div className={styles.navBar}>
        <img
          className={styles.logo}
          src="https://staging-members-rds.herokuapp.com/images/Real-Dev-Squad@1x.png"
          alt="RealDevSquad Logo"
        />

        <div className={styles.homeLogin}>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>

          <p></p>
          <img
            src={photo}
            className={styles.profilePic}
            alt="Profile Image"
            height="70"
            width="70"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
