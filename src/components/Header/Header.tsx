import ToggleTheme from "../ToggleTheme/ToggleTheme";

import { showAlert } from "../Alert/Alert";

import "./Header.css";

const Header = () => {
  const onClick = () => {
    showAlert(
      "Código de Encriptación",
      `<ul>
        <li>e = enter</li>
        <li>i = imes</li>
        <li>o = ober</li>
        <li>u = ufat</li>
        <li>a = ai</li>
      </ul>`,
      "info",
      true
    );
  };

  return (
    <header className="container-header">
      <button name="Información" onClick={ onClick }>
        <span></span>
      </button>
      <img src="title.webp" alt="Encriptador de Texto" />
      <ToggleTheme />
    </header>
  );
};

export default Header;
