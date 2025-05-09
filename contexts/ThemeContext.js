import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On page load, get the stored theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  // Apply the `dark` class to the body and save the theme to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark'); // Add dark class
    } else {
      document.body.classList.remove('dark'); // Remove dark class
    }
    
    // Persist the theme in localStorage
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
