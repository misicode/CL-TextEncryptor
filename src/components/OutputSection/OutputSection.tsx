import "./OutputSection.css";

const OutputSection = () => {
  return (
    <section className="section-output">
      <div className="card">
        <div className="msg-default">
          <img src="./public/Search.gif" />
          <h4>Ningún mensaje fue encontrado</h4>
          <p>Ingrese el texto que desee encriptar o desencriptar.</p>
        </div>
        <div className="msg-result">
          <label>Mensaje:</label>
          <div className="result">
            <textarea className="text output" disabled></textarea>
            <button className="btn btn-copy">Copiar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputSection;
