import { useState } from "react";
import { ThemeContext } from "./contexts/theme.context";

import ButtonSection from "./components/ButtonSection/ButtonSection";
import Header from "./components/Header/Header";
import InputSection from "./components/InputSection/InputSection";
import OutputSection from "./components/OutputSection/OutputSection";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${ theme } container`}>
        <Header />
        <main className="container-content">
          <div className="container-section">
            <InputSection />
            <ButtonSection />
            <OutputSection />
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
