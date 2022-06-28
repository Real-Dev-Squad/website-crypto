/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext } from 'react';
import { useDarkMode } from '@components/Dark-Theme/useDarkMode';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [theme, themeData, themeToggler, mountedComponent] = useDarkMode();

  let sharedState = [theme, themeData, themeToggler, mountedComponent];

  return (
    <DarkModeContext.Provider value={sharedState}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  const state = useContext(DarkModeContext);

  if (state === undefined) {
    throw new Error(
      'useDarkModeContext must be used within a DarkModeProvider'
    );
  }

  return state;
}
