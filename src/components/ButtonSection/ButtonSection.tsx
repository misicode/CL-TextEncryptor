import "./ButtonSection.css";

const ButtonSection = () => {
  return (
    <section className="section-btns">
      <button className="btn btn-on">Encriptar</button>
      <button className="btn btn-off">Desencriptar</button>
      <button className="btn btn-cls">Limpiar</button>
    </section>
  );
};

export default ButtonSection;
