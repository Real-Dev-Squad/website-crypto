import React from 'react';
import classNames from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={classNames.infoNavbar}>
      <nav>
        <ul>
          <li>
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
              href="https://crypto.realdevsquad.com/"
              style={{ color: '#87D870' }}
            >
              Crypto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
