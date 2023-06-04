import { useContext } from "react";

import { ThemeContext } from "../../contexts/theme.context";
import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };
    
  return (
    <label className="switch">
      <input type="checkbox" onClick={ handleThemeChange } />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleTheme;
