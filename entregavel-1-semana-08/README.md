# Entregável 1 – Fundamentos de React e Componentes (Semana 08)

Primeira aplicação React com componentes funcionais organizados em `src/components` (`Header`, `Footer`, `Card`, `Lista` e `App`).

## Parte 4 – Reflexão (Para Pensar)

**Explique a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React). Por que o Virtual DOM otimiza a performance?**

- **Abordagem Imperativa (JavaScript Puro):** O desenvolvedor precisa escrever passo a passo **como** o navegador deve manipular o DOM (buscar elementos com `document.querySelector`, criar nós, alterar atributos e inserir/remover elementos manualmente a cada mudança).
- **Abordagem Declarativa (React):** O desenvolvedor descreve apenas **o que** deve aparecer na tela para cada estado da aplicação usando JSX, e o React se encarrega de atualizar a interface automaticamente.
- **Por que o Virtual DOM otimiza a performance:** Manipular o DOM real diretamente a cada pequena alteração é custoso porque dispara recálculos de layout e repintura da tela. O React mantém uma representação leve em memória (Virtual DOM), compara a árvore anterior com a nova (*diffing* / reconciliação) e aplica no DOM real **somente as mudanças estritamente necessárias**.
