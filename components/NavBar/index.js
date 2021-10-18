import Link from 'next/link';
import React, { useState, useRef } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';
import { LOGIN_URL } from 'constants.js';

const NavBar = ({ personData: { photo } }) => {
  const RDSLogo = '/assets/Real-Dev-Squad1x.png';
  const GITHUB_LOGO = '/assets/github.png';
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef();
  GenericClosePopUp(navbarRef, () => {
    setToggle(false);
  });

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link href="https://realdevsquad.com">
            <a className={styles.logo}>
              <Image
                width="45px"
                height="45px"
                src={RDSLogo}
                alt="real-dev squad"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://welcome.realdevsquad.com/">
            <a>Welcome</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.realdevsquad.com/events.html">
            <a>Events</a>
          </Link>
        </li>
        <li>
          <Link href="https://members.realdevsquad.com/">
            <a>Members</a>
          </Link>
        </li>
        <li>
          <Link href="https://crypto.realdevsquad.com/">
            <a className={styles.active}>Crypto</a>
          </Link>
        </li>
        <li>
          <Link href="https://status.realdevsquad.com/">
            <a>Status</a>
          </Link>
        </li>
        <li>
          <a className={styles.btnLogin} href={LOGIN_URL}>
            <button className={styles.loginBtnText}>
              Sign In With Github
              <img
                className={styles.githubLogo}
                src={GITHUB_LOGO}
                alt="Github Icon"
              />
            </button>
          </a>
          <div className={styles.userGreet}>
            <div className={styles.userGreetMsg}>Hello text</div>
            <img className={styles.userProfilePic} />
          </div>
        </li>
        <li>
          <Link href="/auction">
            <a>Auction</a>
          </Link>
        </li>
        <li>
          <Link href="/trading">
            <a>Stocks</a>
          </Link>
        </li>
      </ul>

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
