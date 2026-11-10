# Desafio 2 — Título da aba com o nome

Exercício de React da disciplina Desenvolvimento Web. Ao digitar no campo **Seu nome**, o título da aba muda imediatamente. Por exemplo, ao digitar `Ana`, o título fica `Olá, Ana`.

## Como executar

Com Node.js 22.12+ instalado, abra o terminal na pasta do projeto e execute:

```sh
npm ci
npm run dev
```

Abra o endereço exibido no terminal. Para gerar a versão de produção, execute `npm run build`.

## Como funciona

Em `src/Aula4.jsx`, o estado `nome` começa com uma string vazia. O campo usa `value={nome}` para exibir esse estado e `onChange` para atualizá-lo. O `useEffect` sincroniza `document.title` com o nome ao carregar a página e sempre que o valor de `nome` muda, pois ele está no array de dependências `[nome]`.
