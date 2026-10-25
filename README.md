# 📚 Book Library CLI

Aplicação de linha de comando desenvolvida com Node.js para gerenciar uma biblioteca de livros, controlar empréstimos e devoluções e pesquisar obras por diferentes critérios.

O projeto foi desenvolvido com foco em **JavaScript, modularização e arquitetura em camadas**, utilizando arquivos JSON para persistir os dados, sem a necessidade de um banco de dados externo.

## ✨ Funcionalidades

### 📖 Gerenciamento de livros

- Cadastrar novos livros.
- Listar os livros cadastrados.
- Consultar um livro pelo seu identificador.
- Atualizar informações de um livro.
- Remover livros da biblioteca.
- Prevenir cadastros duplicados considerando título e autor.

### 🔄 Gerenciamento de empréstimos

- Registrar o empréstimo de um livro para um leitor.
- Impedir que um livro seja emprestado novamente enquanto houver um empréstimo ativo.
- Registrar a devolução de um livro.
- Definir uma previsão de devolução de 7 dias.
- Consultar os empréstimos registrados.

### 🔎 Pesquisa de livros

- Pesquisar por título.
- Pesquisar por autor.
- Pesquisar por um termo que corresponda ao título, autor ou ano de publicação.
- Realizar pesquisas por título e autor sem diferenciar letras maiúsculas e minúsculas.

## 🛠️ Tecnologias utilizadas

- **Node.js** — execução da aplicação.
- **JavaScript (ES Modules)** — organização e comunicação entre módulos usando `import` e `export`.
- **JSON** — persistência local dos livros e empréstimos.
- **Git e GitHub** — versionamento e hospedagem do código-fonte.

O projeto não utiliza frameworks ou dependências externas declaradas no `package.json`.

## 📋 Pré-requisitos

Antes de executar o projeto, você precisa ter:

- [Node.js](https://nodejs.org/) instalado.
- [Git](https://git-scm.com/) instalado, caso queira clonar o repositório.

Para verificar as instalações, execute:

```bash
node --version
npm --version
git --version
```

## 🚀 Instalação

### 1. Clone o repositório

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub após publicar o projeto.

```bash
git clone https://github.com/SEU-USUARIO/book-library-cli.git
```

### 2. Entre na pasta do projeto

```bash
cd book-library-cli
```

### 3. Execute a aplicação

```bash
npm run start:dev -- list-books
```

O comando acima executa a aplicação e solicita a listagem dos livros cadastrados.

Para executar em modo de observação de alterações nos arquivos, utilize:

```bash
npm run start:watch -- list-books
```

## 💻 Como utilizar

Todos os comandos são executados no terminal, a partir da raiz do projeto.

Os exemplos abaixo utilizam o script `start:dev`. O separador `--` permite que os argumentos seguintes sejam repassados ao programa Node.js.

### 1. Cadastrar um livro

```bash
npm run start:dev -- add-book "Clean Code" "Robert Martin" 2008
```

O comando recebe, nesta ordem:

- Título.
- Autor.
- Ano de publicação.

### 2. Listar todos os livros

```bash
npm run start:dev -- list-books
```

### 3. Consultar um livro pelo ID

```bash
npm run start:dev -- get-book "ID-DO-LIVRO"
```

Substitua `ID-DO-LIVRO` pelo identificador real do livro, obtido na listagem.

### 4. Atualizar um livro

```bash
npm run start:dev -- update-book "ID-DO-LIVRO" "Clean Code - 2ª edição" "Robert Martin" 2008
```

Os argumentos são o ID e, em seguida, o título, o autor e o ano atualizados.

### 5. Remover um livro

```bash
npm run start:dev -- remove-book "ID-DO-LIVRO"
```

### 6. Registrar um empréstimo

```bash
npm run start:dev -- borrow "ID-DO-LIVRO" "Mateus"
```

O comando recebe o ID do livro e o nome do leitor.

A previsão de devolução é calculada para 7 dias após o empréstimo.

### 7. Registrar uma devolução

```bash
npm run start:dev -- return "ID-DO-LIVRO"
```

O comando utiliza o ID do livro para localizar o empréstimo ativo correspondente.

### 8. Listar empréstimos

```bash
npm run start:dev -- list-loans
```

### 9. Pesquisar por título

```bash
npm run start:dev -- searchByTitle "clean"
```

### 10. Pesquisar por autor

```bash
npm run start:dev -- searchByAuthor "robert"
```

### 11. Pesquisar por termo

```bash
npm run start:dev -- searchByTerm "2008"
```

A pesquisa por termo permite procurar correspondências no título, no autor ou no ano de publicação.

> **Importante:** os IDs são gerados pelo sistema. Cadastre ou liste os livros antes de executar operações que exigem um ID.

## 🏗️ Arquitetura do projeto

O projeto utiliza uma organização modular baseada na separação de responsabilidades.

```text
book-library-cli/
├── src/
│   ├── controller/
│   │   ├── book.controller.js
│   │   ├── loan.controller.js
│   │   └── search.controller.js
│   ├── data/
│   │   ├── books.json
│   │   └── loans.json
│   ├── models/
│   │   ├── book.js
│   │   └── loan.js
│   ├── services/
│   │   ├── book-service.js
│   │   ├── loan-service.js
│   │   ├── search-service.js
│   │   └── storage.service.js
│   ├── utils/
│   │   └── date-helper.js
│   ├── views/
│   │   ├── book-view.js
│   │   ├── loan-view.js
│   │   └── search.view.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

### Responsabilidade de cada camada

**Models**

Definem a estrutura dos dados e a criação das entidades do sistema, como livros e empréstimos.

**Services**

Concentram as regras de negócio. São responsáveis por operações como cadastrar, atualizar, remover e consultar livros, controlar empréstimos e realizar pesquisas.

**Controllers**

Recebem os parâmetros dos comandos, coordenam a execução dos serviços e direcionam os resultados para as Views. Também tratam erros provenientes das operações.

**Views**

Responsáveis por apresentar informações e mensagens no terminal, mantendo a exibição separada das regras de negócio.

**Utils**

Contêm funções auxiliares reutilizáveis, como o cálculo da data prevista para devolução.

**Data**

Armazena os arquivos JSON utilizados para persistir os livros e os empréstimos.

**index.js**

É o ponto de entrada da aplicação. Utiliza `process.argv` e uma estrutura `switch` para identificar o comando informado e chamar o Controller correspondente.

## 🧠 Conceitos praticados

Durante o desenvolvimento, foram trabalhados conceitos importantes para a construção de aplicações com Node.js:

- Separação de responsabilidades e arquitetura em camadas.
- Modularização com `import` e `export`.
- Manipulação de argumentos de linha de comando com `process.argv`.
- Leitura e gravação de dados em arquivos JSON.
- Operações CRUD (_Create, Read, Update, Delete_).
- Manipulação de arrays com métodos como `find` e `filter`.
- Pesquisa e comparação de strings.
- Identificação de registros com IDs únicos.
- Relacionamento entre livros e empréstimos.
- Controle de estado de empréstimos.
- Tratamento de erros com `throw new Error` e `try/catch`.
- Manipulação de datas em JavaScript.

## 🔮 Possíveis melhorias futuras

Algumas funcionalidades que podem evoluir o projeto:

- Validar de forma mais abrangente os argumentos recebidos pelos comandos.
- Adicionar um comando de ajuda com a lista de comandos disponíveis.
- Implementar testes automatizados para Services e Controllers.
- Adicionar filtros por disponibilidade e empréstimos atrasados.
- Implementar histórico de empréstimos por leitor.
- Criar um sistema de reservas de livros.
- Migrar a persistência JSON para um banco de dados.
- Desenvolver uma API REST para disponibilizar as funcionalidades da biblioteca.

## 👨‍💻 Autor

**Mateus**

Projeto desenvolvido como parte dos estudos de Node.js, com foco em fundamentos de JavaScript, organização de código e arquitetura em camadas.

- GitHub: [SEU-USUARIO](https://github.com/SEU-USUARIO)

---

Se este projeto foi útil para seus estudos, fique à vontade para explorar o código e acompanhar sua evolução.
