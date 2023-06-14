import { useState } from "react";

import { showAlert } from "../Alert/Alert";

import "./InputSection.css";

type InputSectionProps = {
  onNewInputText: (c: string) => void;
};

const CODE_RULES = [
  {
    key: "e",
    value: "enter",
  },
  {
    key: "i",
    value: "imes",
  },
  {
    key: "a",
    value: "ai",
  },
  {
    key: "o",
    value: "ober",
  },
  {
    key: "u",
    value: "ufat",
  },
];
const TEXT_VALIDATOR = new RegExp(/^[a-z ]*$/);

const InputSection = ({ onNewInputText }: InputSectionProps) => {
  const [inputText, setInputText] = useState<string>("");
  let text: string = "";

  const onChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!TEXT_VALIDATOR.test(target.value)) {
      setInputText("");
      showAlert(
        "¡Caracter inválido!",
        "Por favor, solo digite letras en minúscula sin acentos",
        "error",
        false
      );
      return;
    }
    setInputText(target.value);
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();

    if (!inputText || inputText.trim().length <= 1) return;

    text = inputText;

    // Encriptar mensaje
    if (event.nativeEvent.submitter!.id === "Encrypt") {
      CODE_RULES.forEach(element => {
        // Remplaza las coincidencias de clave con su valor encriptado respectivo
        text = text.replaceAll(element.key, element.value);
      });
    }
    // Desencriptar mensaje
    else {
      CODE_RULES.forEach(element => {
        // Remplaza las coincidencias de valor encriptado con su clave respectiva
        text = text.replaceAll(element.value, element.key);
      });
    }

    onNewInputText(text);
    setInputText("");
  };

  const onClear = () => {
    setInputText("");
    onNewInputText("");
  };

  return (
    <form onSubmit={ onSubmit }>
      <section className="section-input">
        <div className="card">
          <label>Ingrese el texto aquí:</label>
          <div className="card-input">
            <textarea className="text input" value={ inputText } onChange={ onChange } aria-label="Mensaje de entrada"></textarea>
            <p>Solo se admiten letras en minúscula y sin acentos</p>
          </div>
        </div>
      </section>
      <section className="section-btns">
        <button className="btn btn-on" id="Encrypt" aria-label="encrypt" type="submit">Encriptar</button>
        <button className="btn btn-off" id="Decrypt" aria-label="decrypt" type="submit">Desencriptar</button>
        <button className="btn btn-cls" aria-label="clean" type="button" onClick={ onClear }>Limpiar</button>
      </section>
    </form>
  );
};

export default InputSection;
