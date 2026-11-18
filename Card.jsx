export default function Card({ titulo, descricao }) {
  return (
    <div className="card" style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '16px', marginBottom: '12px', background: '#ffffff' }}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}
