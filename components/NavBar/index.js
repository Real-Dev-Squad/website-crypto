import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './navbar.module.css';
const NavBar = ({ personData: { photo } }) => {
  const RDSLogo =
    'https://staging-members-rds.herokuapp.com/images/Real-Dev-Squad@1x.png';
  return (
    <nav className={styles.navBar}>
      <img className={styles.logo} src={RDSLogo} alt="RealDevSquad Logo" />
      <li>
        <div className={styles.logo}>
          <Image
            src={RDSLogo}
            alt="RealDevSwaud Logo"
            width="111"
            height="111"
            layout="fixed"
          />
        </div>
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
      </li>  */}

      {/* <div className={styles.profilePic}>
        <Image 
          src={this.photo} 
          alt="Profile Image"  
          width="70"
          height="70"
        />
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
