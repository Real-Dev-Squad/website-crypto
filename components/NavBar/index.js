import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import Link from 'next/link';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';
import { USER_DATA_URL, LOGIN_URL, PATHS, NAV_MENU } from 'constants.js';
import Dropdown from '@components/dropdown';
import { CLOSE_DROPDOWN, OPEN_DROPDOWN } from 'redux/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const dropdownIsOpened = useSelector(
    (state) => state.dropdownToggle.dropdownIsOpened
  );
  const RDS_LOGO = '/assets/Real-Dev-Squad1x.png';
  const GITHUB_LOGO = '/assets/github.png';
  const DEFAULT_AVATAR = '/assets/default_avatar.jpg';
  const [userData, setUserData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mountedComponent, setMountedComponent] = useState(false);
  const navbarRef = useRef();

  let authUrl = LOGIN_URL;
  if (typeof window !== 'undefined') {
    authUrl = `${LOGIN_URL}&state=${window.location.href}`;
  }

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
            profilePicture: responseJson.picture?.url ?? DEFAULT_AVATAR,
          });
        })
        .catch((err) => {
          console.error(err);
        });
      setMountedComponent(true);
    };

    fetchData();
  }, []);
  function toggleDropdownDispatch(e, dropdownIsOpened) {
    e.stopPropagation();
    dropdownIsOpened
      ? dispatch({ type: CLOSE_DROPDOWN })
      : dispatch({ type: OPEN_DROPDOWN });
  }
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        dispatch({ type: CLOSE_DROPDOWN });
      }}
    >
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
          className={`${styles.navBarLogin} ${
            mountedComponent ? '' : 'd-none'
          }`}
        >
          <Link legacyBehavior href={authUrl}>
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
            <Link legacyBehavior href={PATHS.PROFILE}>
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
            <Link legacyBehavior href={PATHS.HOME}>
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
                <Link legacyBehavior href={navTab.url}>
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
            <Link legacyBehavior href={authUrl}>
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
            {isLoggedIn && dropdownIsOpened && <Dropdown />}
            <div
              onClick={(e) => {
                toggleDropdownDispatch(e, dropdownIsOpened);
              }}
              className={`${styles.userGreet} ${isLoggedIn ? '' : 'd-none'}`}
            >
              <div className={styles.userGreetMsg}>
                {`Hello ${isLoggedIn ? `${userData.firstName}` : 'User'}!`}
              </div>
              <img
                className={styles.userProfilePic}
                src={
                  isLoggedIn
                    ? `${
                        userData.profilePicture
                          ? userData.profilePicture
                          : DEFAULT_AVATAR
                      }`
                    : `${DEFAULT_AVATAR}`
                }
                alt="Profile Picture"
              />
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.header}>
        <Link legacyBehavior href="/auction">
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
        <Link legacyBehavior href="/trading">
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
