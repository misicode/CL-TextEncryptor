import "./InputSection.css";

const InputSection = () => {
  return (
    <section className="section-input">
      <div className="card">
        <label>Ingrese el texto aquí:</label>
        <div className="card-input">
          <textarea className="text input"></textarea>
          <p>Solo se admiten letras en minúscula y sin acentos.</p>
        </div>
      </div>
    </section>
  );
};

export default InputSection;
