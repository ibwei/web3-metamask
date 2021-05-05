import React, { useState } from 'react';

const CACHE_KEY = 'IS_DARK';

const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => null,
});

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY);
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false;
  });

  const toggleTheme = (): any => {
    setIsDark((prevState: boolean) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
