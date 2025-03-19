# Saucedemo - Projeto de Testes Automatizados com Cypress

Este projeto utiliza o framework [Cypress](https://www.cypress.io/) para realizar testes automatizados de ponta a ponta (E2E) na aplicação web [SauceDemo](https://www.saucedemo.com). O objetivo é validar funcionalidades críticas, como login, navegação de produtos, carrinho de compras e checkout.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd saucedemo
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
saucedemo/
├── cypress/
│   ├── e2e/                # Testes E2E organizados por funcionalidade
│   ├── fixtures/           # Dados de teste (JSON)
│   ├── support/            # Comandos customizados e configurações
│   ├── screenshots/        # Capturas de tela geradas durante os testes
│   ├── videos/             # Vídeos gerados durante os testes
│   └── tsconfig.json       # Configuração do TypeScript para o Cypress
├── cypress.config.ts       # Configuração principal do Cypress
├── package.json            # Dependências e scripts do projeto
└── README.md               # Documentação do projeto
```

## Execução dos Testes

### Modo Headless

Para executar os testes em modo headless (sem interface gráfica), use:

```bash
npm run test
```

### Modo Interativo

Para abrir o Test Runner do Cypress e executar os testes de forma interativa, use:

```bash
npm run test:open
```

## Testes Automatizados

Os testes estão organizados em diferentes arquivos, cada um cobrindo uma funcionalidade específica:

- **Login**: Validação de credenciais e mensagens de erro.
- **Produtos**: Ordenação, exibição de detalhes e validação de preços.
- **Carrinho de Compras**: Adicionar, remover e verificar itens.
- **Checkout**: Preenchimento de formulário e finalização de pedidos.

## Relatórios e Evidências

- **Capturas de Tela**: Geradas automaticamente em caso de falha e armazenadas na pasta `cypress/screenshots/`.
- **Vídeos**: Gravados durante a execução dos testes e armazenados na pasta `cypress/videos/`.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: `seuemail@exemplo.com`.