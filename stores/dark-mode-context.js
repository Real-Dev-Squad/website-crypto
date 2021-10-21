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
  //   console.log(DarkModeContext);
  return useContext(DarkModeContext);
}

// const DarkModeContext = createContext({useDarkMode()});

// export const DarkModeProvider = ({ children }) => {
//   const [theme, themeToggler] = useDarkMode();
//   return (
//     <DarkModeContext.Provider value={{ theme, themeToggler }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const darkModeContext = () => {
//   const context = useContext(DarkModeContext); // this needs to be changed
//   if (!context)
//     throw new Error(`darkModeContext context can only
//         be used in a component wrapped with DarkModeContext`);
//   return context;
// };
