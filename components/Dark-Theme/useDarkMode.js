import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '@components/Dark-Theme/Themes';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [themeData, setThemeData] = useState(lightTheme);
  const [mountedComponent, setMountedComponent] = useState(false);
  const setCookie = (name, value, days) => {
    const domain = '.realdevsquad.com';
    const expires = new Date(Date.now() + 24 * days * 60 * 60 * 1000);
    const cookieStr = `${name}=${value}; expires=${expires}; domain=${domain}; path=/`;
    document.cookie = cookieStr;
  };
  const accessCookie = (cookieName) => {
    const name = `${cookieName}=`;
    const allCookieArray = document.cookie.split(';');
    for (let i = 0; i < allCookieArray.length; i += 1) {
      const temp = allCookieArray[i].trim();
      if (temp.indexOf(name) === 0)
        return temp.substring(name.length, temp.length);
    }
    return '';
  };
  const setMode = (mode) => {
    setCookie('theme', mode, 30);
    setTheme(mode);
    const themeMode = mode === 'light' ? lightTheme : darkTheme;
    setThemeData(themeMode);
  };

  const themeToggler = () => {
    const toggle = theme === 'light' ? setMode('dark') : setMode('light');
    return toggle;
  };

  useEffect(() => {
    const localTheme = accessCookie('theme');
    const themeMode = localTheme === 'light' ? lightTheme : darkTheme;
    if (localTheme) {
      setTheme(localTheme);
      setThemeData(themeMode);
    }
    setMountedComponent(true);
  }, []);
  return [theme, themeData, themeToggler, mountedComponent];
};
