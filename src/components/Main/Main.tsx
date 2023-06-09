import { useState } from "react";

import InputSection from "../InputSection/InputSection";
import OutputSection from "../OutputSection/OutputSection";

import "./Main.css";

const Main = () => {
  const [outputText, setOutputText] = useState<string>("");

  const onChangeInputText = (input: string) => {
    setOutputText(input);
  };

  return (
    <main className="container-sections">
      <InputSection onNewInputText={ onChangeInputText } />
      <OutputSection newOutputText={ outputText } />
    </main>
  );
};

export default Main;
