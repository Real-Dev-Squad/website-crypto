import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import Image from 'next/image';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';
import { LOGIN_URL } from 'constants.js';

const NavBar = ({ personData: { photo } }) => {
  const router = useRouter();

  const RDSLogo = '/assets/Real-Dev-Squad1x.png';
  const GITHUB_LOGO = '/assets/github.png';
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef();
  GenericClosePopUp(navbarRef, () => {
    setToggle(false);
  });

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navBar}>
        <div
          className={styles.hamburger}
          ref={navbarRef}
          onClick={() => setToggle(!toggle)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.navBarLogin}>
          <a className={styles.btnLogin} href={LOGIN_URL}>
            <button className={styles.btnLoginText}>
              Sign In
              <img
                className={styles.githubLogo}
                src={GITHUB_LOGO}
                alt="GitHub Icon"
                height="15px"
                width="15px"
              />
            </button>
          </a>
          <div className={styles.userGreet}>
            <div className={styles.userGreetMsg}>Hello, User!</div>
            <img className={styles.userProfilePic} />
          </div>
        </div>
        <ul
          className={
            toggle ? `${styles.navBarMenu} ${styles.active}` : styles.navBarMenu
          }
        >
          <li className={styles.navBarLogoLi}>
            <a href="https://www.realdevsquad.com/">
              <img
                src={RDSLogo}
                alt="home nav logo"
                height="50px"
                width="50px"
              />
            </a>
          </li>
          <li className={styles.homeTab}>
            <a href="https://www.realdevsquad.com/">Home</a>
          </li>
          <li>
            <a href="https://welcome.realdevsquad.com/">Welcome</a>
          </li>
          <li>
            <a href="https://www.realdevsquad.com/events.html">Events</a>
          </li>
          <li>
            <a href="https://members.realdevsquad.com/">Members</a>
          </li>
          <li>
            <a
              className={styles.activeTab}
              href="https://crypto.realdevsquad.com/"
            >
              Crypto
            </a>
          </li>
          <li>
            <a href="https://status.realdevsquad.com/">Status</a>
          </li>
          <li className={styles.navBarLoginLi}>
            <a className={styles.btnLogin} href={LOGIN_URL}>
              <button className={styles.btnLoginText}>
                Sign In With GitHub
                <img
                  className={styles.githubLogo}
                  src={GITHUB_LOGO}
                  alt="GitHub Icon"
                  height="15px"
                  width="15px"
                />
              </button>
            </a>
            <div className={styles.userGreet}>
              <div className={styles.userGreetMsg}>Hello, User!</div>
              <img className={styles.userProfilePic} />
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.header}>
        <a href="/auction">
          <button
            type="button"
            tabIndex="0"
            className={`${styles.link} ${
              router.pathname === '/auction' ? styles.active : ''
            }`}
          >
            Auctions
          </button>
        </a>
        |
        <a href="/trading">
          <button
            type="button"
            tabIndex="0"
            className={`${styles.link} ${
              router.pathname === '/trading' ? styles.active : ''
            }`}
          >
            Stocks
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
