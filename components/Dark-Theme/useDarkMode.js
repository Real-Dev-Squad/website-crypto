import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '@components/Dark-Theme/Themes';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [themeData, setThemeData] = useState(lightTheme);
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
    const themeMode = mode === 'light' ? lightTheme : darkTheme;
    setThemeData(themeMode);
  };

  const themeToggler = () => {
    const toggle = theme === 'light' ? setMode('dark') : setMode('light');
    return toggle;
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const themeMode = localTheme === 'light' ? lightTheme : darkTheme;
    if (localTheme) {
      setTheme(localTheme);
      setThemeData(themeMode);
    }
    setMountedComponent(true);
    console.log('here');
  }, []);
  return [theme, themeData, themeToggler, mountedComponent];
};
