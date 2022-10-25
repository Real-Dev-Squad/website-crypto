import { PATHS } from 'constants.js';
import React from 'react';
import colors from '../../color/color.json';
import Link from 'next/link';
import signOut from 'utils/signOut';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul className="dropdownList">
        <li className="dropdownItem">
          <Link href={PATHS.PROFILE}>
            <p className="profileLink">My Profile</p>
          </Link>
        </li>
        <hr className="line" />
        <li
          onClick={() => {
            signOut();
          }}
          className="dropdownItem"
        >
          <p className="signoutOption">Sign out</p>
        </li>
      </ul>
      <style jsx>
        {`
          .dropdown {
            width: 180px;
            background-color: ${colors.white};
            border: 2px solid ${colors.black};
            border-radius: 0.5rem;
            color: ${colors.black};
            position: absolute;
            top: 58px;
            right: 16px;
            z-index: 100;
          }

          .dropdownList {
            display: flex;
            flex-direction: column;
          }

          .profileLink {
            color: ${colors.black};
            padding: 1rem;
            text-align: left;
            font-weight: 100;
          }
          .profileLink:hover {
            background-color: ${colors.grey.light};
            border-radius: 0.5rem 0.5rem 0 0;
          }

          .line {
            border: none;
            border-bottom: 2px solid ${colors.black};
            margin: 0;
          }

          .dropdownItem {
            list-style-type: none;
            cursor: pointer;
          }

          .signoutOption {
            padding: 1rem;
            text-align: left;
            font-weight: 100;
          }
          .signoutOption:hover {
            background-color: ${colors.grey.light};
            border-radius: 0 0 0.5rem 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default Dropdown;
