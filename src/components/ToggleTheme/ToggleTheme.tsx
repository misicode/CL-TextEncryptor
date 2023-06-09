import { useContext } from "react";

import { ThemeContext } from "../../contexts/theme.context";

import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch" htmlFor="thememode">
      <input type="checkbox" onClick={ toggleTheme } id="thememode" />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleTheme;
