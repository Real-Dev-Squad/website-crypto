import { PATHS } from 'constants.js';
import React from 'react';
import s from './s.module.css';
import Link from 'next/link';

PATHS;
const Dropdown = () => {
  const signout = () => {
    fetch('https://api.realdevsquad.com/auth/signout', {
      method: 'GET',
      credentials: 'include',
    }).then(() => {
      location.reload();
    });
    console.log(location);
  };
  return (
    <div className={`${s.dropdown}`}>
      <ul className={s['dropdown-list']}>
        <li className={`${s['dropdown-item']} `}>
          <Link href={PATHS.PROFILE}>
            <p className={`${s['profile-link']}`}>My profile</p>
          </Link>
        </li>
        <hr className={s.line} />
        <li
          onClick={() => {
            signout();
          }}
          className={`${s['dropdown-item']}`}
          id={s['signout-option']}
        >
          Sign out
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
