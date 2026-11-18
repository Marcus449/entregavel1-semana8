export default function Lista({ itens }) {
  return (
    <section className="secao-lista">
      <h3>Lista de Conceitos Estudados:</h3>
      <ul className="lista-itens">
        {itens.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
