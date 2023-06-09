import { showAlert } from "../Alert/Alert";

import "./OutputSection.css";

type OutputSectionProps = {
  newOutputText: string;
};

const OutputSection = ({ newOutputText }: OutputSectionProps) => {
  const onCopy = () => {
    navigator.clipboard.writeText(newOutputText).then(function() {
      showAlert(
        "¡Mensaje copiado!",
        "La copia al portapapeles fue exitosa",
        "success",
        false
      );
    }, function(err) {
      console.error('Ocurrió un error al copiar el mensaje', err);
    });
  };

  return (
    <section className="section-output">
      <div className="card">
        { 
          (!newOutputText)
          ? (
            <div className="msg-default">
              <img src="bmo.gif" alt="BMO esperando" />
              <h4>Ningún mensaje fue encontrado</h4>
              <p>Ingrese el texto que desee encriptar o desencriptar</p>
            </div>
          )
          : (
            <>
              <label>Mensaje:</label>
              <div className="result">
                <textarea className="text output" value={ newOutputText } disabled>{ newOutputText }</textarea>
                <div>
                  <button className="btn btn-copy" name="Copiar" onClick={ onCopy }>Copiar</button>
                </div>
              </div>
            </>
          )
        }
      </div>
    </section>
  );
};

export default OutputSection;
