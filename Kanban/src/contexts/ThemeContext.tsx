import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { ThemeType } from '../styles/themes';

const THEME_STORAGE_KEY = 'kanban-theme';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

function loadThemeFromStorage(): ThemeType {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && (stored === 'playful' || stored === 'modern' || stored === 'dark')) {
      return stored as ThemeType;
    }
  } catch (error) {
    console.error('Failed to load theme from storage:', error);
  }
  return 'playful';
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeType>(loadThemeFromStorage);

  // Initialize data attribute on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      // Apply theme to html element for CSS font selection
      document.documentElement.setAttribute('data-theme', theme);
    } catch (error) {
      console.error('Failed to save theme to storage:', error);
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
