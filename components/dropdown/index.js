import { PATHS } from 'constants.js';
import React from 'react';
// import colors from '../../color/color.json';
import styles from '../dropdown/dropdown.module.css';
import Link from 'next/link';
import signOut from 'utils/signOut';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdownList}>
        <li className={styles.dropdownItem}>
          <Link href={PATHS.PROFILE}>
            <p className={styles.profileLink}>My Profile</p>
          </Link>
        </li>
        <hr className={styles.line} />
        <li onClick={signOut} className={styles.dropdownItem}>
          <p className={styles.signoutOption}>Sign out</p>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
