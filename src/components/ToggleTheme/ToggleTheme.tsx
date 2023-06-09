import { useContext } from "react";

import { ThemeContext } from "../../contexts/theme.context";

import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch" id="switch">
      <input type="checkbox" onClick={ toggleTheme } area-labelledby="theme mode" />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleTheme;
