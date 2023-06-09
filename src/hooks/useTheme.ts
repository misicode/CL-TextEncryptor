import { useEffect, useState } from 'react';

import { Theme } from '../contexts/theme.context';

export const useTheme = () => {
  const [ theme, setTheme ] = useState<Theme>(localStorage.getItem("theme") as Theme || "light");

  const toggleTheme = () => {
    const isCurrentDark = theme === "light";
    setTheme(isCurrentDark ? "dark" : "light");
    localStorage.setItem("theme", isCurrentDark ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.add(theme);

    if (theme === "light") {
      document.body.classList.remove('dark');
    } else {
      (document.querySelector('input[type="checkbox"]') as HTMLInputElement).checked = true;
      document.body.classList.remove('light');
    }
  }, [theme]);

  return {
    theme, toggleTheme,
  };
};