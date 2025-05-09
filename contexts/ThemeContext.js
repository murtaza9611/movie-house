import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On initial load, check if the theme is stored in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  // Add or remove the `dark` class from the body based on the `isDarkMode` state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark'); // Add the dark class
    } else {
      document.body.classList.remove('dark'); // Remove the dark class
    }

    // Store the current theme in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
