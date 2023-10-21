# Práticas de Testes Automatizados do Zero (Sem Frameworks)

Este guia visa fornecer um ponto de partida para criar e executar testes automatizados em JavaScript sem o uso de frameworks de teste. Vamos começar do zero e entender os princípios básicos de como escrever, organizar e executar testes.

## Inicializando um Projeto Node.js

Vamos começar inicializando um projeto Node.js. Certifique-se de ter o Node.js instalado em seu sistema. Se não, você pode baixá-lo (aqui)[https://nodejs.org/en].

```bash
npm init -y
```

## Instalando o Nodemon (Opcional)

O Nodemon é uma ferramenta que reinicia automaticamente o Node.js quando arquivos do projeto são modificados. É útil durante o desenvolvimento.

```bash
npm i -D nodemon@2
```

## Criando Arquivos de Teste

Vamos começar criando um arquivo index.test.js, onde escreveremos nossos testes.

## Adicionando um Script ao package.json

Para executar nossos testes de forma mais conveniente, adicionaremos um script ao arquivo package.json. Isso nos permitirá rodar nossos testes com um simples comando.

```json
 "test": "npx nodemon index.test.js"
```

## Escrevendo Códigos de Teste

Para escrever testes, você precisa de código JavaScript. Portanto, vamos criar alguns arquivos que representam o código que desejamos testar.

- Crie um arquivo product.js para representar o código do produto que desejamos testar.
- Crie um arquivo service.js que pode ser um módulo ou serviço relacionado ao produto.

## Importando a Biblioteca Assert

Nossos testes precisam da biblioteca assert para verificar se as asserções nos testes são verdadeiras ou falsas. Vamos importá-la no arquivo index.test.js.

```js
import assert from "assert";
```

## Executando Testes

Para executar os testes, você pode rodar o seguinte comando:

```bash
npm test
```

## Resolvendo Problema de Módulos ES (ECMAScript Modules)

Se você encontrar o erro SyntaxError: Cannot use import statement outside a module, você precisará adicionar a opção "type": "module" ao seu arquivo package.json:

```json
"type": "module"
```

## Princípios Básicos de Testes

Aqui estão alguns princípios básicos de teste que você deve estar ciente:

### MOCK

- Mocks são objetos ou funções falsas que são usados para simular o comportamento de objetos reais no ambiente de teste.
- Eles são úteis quando você deseja testar partes específicas de um sistema.

### STUB

- Stubs são usados para interceptar chamadas externas, como chamadas a bancos de dados, APIs externas, etc.
- Garantem que o teste seja executado offline, sem sistemas externos.

### SPY

- Spies são um tipo de stub que é usado para verificar como uma função foi chamada, com quais parâmetros e quantas vezes.
- Eles permitem que você valide o comportamento interno de funções durante o teste.
