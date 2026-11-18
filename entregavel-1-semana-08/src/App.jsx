import Header from './components/Header';
import Card from './components/Card';
import Lista from './components/Lista';
import Footer from './components/Footer';

export default function App() {
  const conceitos = [
    'Criação de projeto com Vite',
    'Componentes funcionais reutilizáveis',
    'Passagem de dados via props',
    'Renderização de listas com .map() e prop key única'
  ];

  return (
    <>
      <Header />
      <main className="conteudo-principal">
        <Card
          titulo="Componente Card 1"
          descricao="Recebendo dados dinamicamente através de props no React."
        />
        <Card
          titulo="Componente Card 2"
          descricao="Respeitando a regra do elemento raiz único com React Fragments (<> </>)."
        />
        <Lista itens={conceitos} />
      </main>
      <Footer />
    </>
  );
}
