import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import Image from 'next/image';
import GenericClosePopUp from '../Close-popup/GenericClosePopUp';
import { USER_DATA_URL, LOGIN_URL } from 'constants.js';

const NavBar = () => {
  const router = useRouter();

  const RDS_LOGO = '/assets/Real-Dev-Squad1x.png';
  const GITHUB_LOGO = '/assets/github.png';
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
          if (response.status === 401) {
            setIsLoggedIn(false);
          }
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.incompleteUserDetails) {
            return window.location.replace(
              'https://my.realdevsquad.com/signup'
            );
          }
          setIsLoggedIn(true);
          setUserData({
            userName: responseJson.username,
            firstName: responseJson.first_name,
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
          <a
            className={
              isLoggedIn ? `${styles.btnLogin} d-none` : `${styles.btnLogin}`
            }
            href={LOGIN_URL}
          >
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
          <div
            className={
              isLoggedIn ? `${styles.userGreet}` : `${styles.userGreet} d-none`
            }
          >
            <div className={styles.userGreetMsg}>
              {isLoggedIn
                ? `Hello, ${userData.firstName}
              `
                : `Hello, User!`}
            </div>
            <img
              className={styles.userProfilePic}
              src={
                isLoggedIn
                  ? `https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members/${userData.userName}/img.png`
                  : ``
              }
            />
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
                src={RDS_LOGO}
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
          <li
            className={
              mountedComponent
                ? `${styles.navBarLoginLi}`
                : `${styles.navBarLoginLi} d-none`
            }
          >
            <a
              className={
                isLoggedIn ? `${styles.btnLogin} d-none` : `${styles.btnLogin}`
              }
              href={LOGIN_URL}
            >
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
            <div
              className={
                isLoggedIn
                  ? `${styles.userGreet}`
                  : `${styles.userGreet} d-none`
              }
            >
              <div className={styles.userGreetMsg}>
                {isLoggedIn
                  ? `Hello, ${userData.firstName}
              `
                  : `Hello, User!`}
              </div>
              <img
                className={styles.userProfilePic}
                src={
                  isLoggedIn
                    ? `https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members/${userData.userName}/img.png`
                    : ``
                }
              />
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
