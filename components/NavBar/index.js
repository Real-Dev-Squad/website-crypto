import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';
import { USER_DATA_URL, LOGIN_URL, PATHS, NAV_MENU } from 'constants.js';

const NavBar = () => {
  const router = useRouter();

  const RDS_LOGO = '/assets/Real-Dev-Squad1x.png';
  const GITHUB_LOGO = '/assets/github.png';
  const DEFAULT_AVATAR = '/assets/default_avatar.jpg';
  const [userData, setUserData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mountedComponent, setMountedComponent] = useState(false);
  const navbarRef = useRef();
  GenericClosePopUp(navbarRef, () => {
    setToggle(false);
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch(USER_DATA_URL, { credentials: 'include' })
        .then((response) => {
          if (!response.ok) {
            setIsLoggedIn(false);
            throw new Error(`${response.status} (${response.statusText})`);
          }
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.incompleteUserDetails) {
            window.open('https://my.realdevsquad.com/signup', '_blank');
          }
          setIsLoggedIn(true);
          setUserData({
            userName: responseJson.username,
            firstName: responseJson.first_name,
            profilePicture: responseJson.picture
              ? responseJson.picture.url
              : DEFAULT_AVATAR,
          });
        })
        .catch((err) => {
          console.error(err);
        });
      setMountedComponent(true);
    };

    fetchData();
  }, []);

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
        <div
          className={
            mountedComponent
              ? `${styles.navBarLogin}`
              : `${styles.navBarLogin} d-none`
          }
        >
          <Link href={LOGIN_URL}>
            <a className={`${styles.btnLogin} ${isLoggedIn ? 'd-none' : ''}`}>
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
          </Link>
          <div className={`${styles.userGreet} ${isLoggedIn ? '' : 'd-none'}`}>
            <Link href={PATHS.PROFILE}>
              <a>
                <div className={styles.userGreetMsg}>
                  {`Hello ${isLoggedIn ? `${userData.firstName}` : 'User'}!`}
                </div>
                <img
                  className={styles.userProfilePic}
                  src={
                    isLoggedIn
                      ? `${userData.profilePicture}`
                      : `${DEFAULT_AVATAR}`
                  }
                  alt="Profile Picture"
                />
              </a>
            </Link>
          </div>
        </div>
        <ul
          className={
            toggle ? `${styles.navBarMenu} ${styles.active}` : styles.navBarMenu
          }
        >
          <li className={styles.navBarLogoLi}>
            <Link href={PATHS.HOME}>
              <a>
                <img
                  src={RDS_LOGO}
                  alt="home nav logo"
                  height="50px"
                  width="50px"
                />
              </a>
            </Link>
          </li>
          {NAV_MENU.map((navTab, index) => {
            return (
              <li
                className={navTab.name === 'Home' ? `${styles.homeTab}` : ``}
                key={index}
              >
                <Link href={navTab.url}>
                  <a className={navTab.isActive ? `${styles.activeTab}` : ``}>
                    {navTab.name}
                  </a>
                </Link>
              </li>
            );
          })}
          <li
            className={`${styles.navBarLoginLi} ${
              mountedComponent ? '' : 'd-none'
            }`}
          >
            <Link href={LOGIN_URL}>
              <a className={`${styles.btnLogin} ${isLoggedIn ? 'd-none' : ''}`}>
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
            </Link>
            <div
              className={`${styles.userGreet} ${isLoggedIn ? '' : 'd-none'}`}
            >
              <Link href={PATHS.PROFILE}>
                <a>
                  <div className={styles.userGreetMsg}>
                    {`Hello ${isLoggedIn ? `${userData.firstName}` : 'User'}!`}
                  </div>
                  <img
                    className={styles.userProfilePic}
                    src={
                      isLoggedIn
                        ? `${userData.profilePicture}`
                        : `${DEFAULT_AVATAR}`
                    }
                    alt="Profile Picture"
                  />
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.header}>
        <Link href="/auction">
          <a>
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
        </Link>
        |
        <Link href="/trading">
          <a>
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
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
