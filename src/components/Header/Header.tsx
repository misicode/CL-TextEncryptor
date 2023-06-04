import ToggleTheme from "../ToggleTheme/ToggleTheme";

import "./Header.css";

const Header = () => {
  return (
    <header className="container-header">
      <h1>Encriptador de Texto</h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
