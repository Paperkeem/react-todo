import { createContext, useState } from 'react';

export const DarkmodeContext = createContext();

export function DarkmodeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  
  return (
    <DarkmodeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}