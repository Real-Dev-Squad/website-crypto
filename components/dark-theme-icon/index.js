import React from 'react';
import classNames from './dark-mode.module.css';

function DarkThemeIcon({ theme, themeToggleHandler }) {
  return (
    <div
      onClick={themeToggleHandler}
      onKeyDown={themeToggleHandler}
      className={classNames.container}
    >
      {theme === 'light' ? (
        <img src="/assets/moon.png" alt="moon" />
      ) : (
        <img src="/assets/sun.png" alt="sun" />
      )}
    </div>
  );
}

export default DarkThemeIcon;
