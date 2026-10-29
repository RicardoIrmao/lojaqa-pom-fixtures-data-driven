# LojaQA — Automação de Testes E2E

## Sobre o projeto

Projeto de automação de testes End-to-End (E2E) desenvolvido com Playwright e TypeScript para validar o processo de login, o acesso ao painel e o encerramento da navegação autenticada na aplicação didática LojaQA.

O projeto aplica os conceitos de Page Object Model (POM), fixtures customizadas e testes Data-Driven, promovendo a reutilização de código, a organização dos cenários e a manutenção dos testes automatizados.

## Plataforma escolhida

**LojaQA — Sistema de Login**

A aplicação utiliza arquivos HTML locais para simular a autenticação de clientes e administradores, permitindo a execução dos testes em um ambiente didático.

## Tecnologias e conceitos utilizados

- Node.js
- TypeScript
- Playwright
- Page Object Model (POM)
- Fixtures customizadas para reutilização de contexto autenticado
- Testes Data-Driven com massa de dados tipada
- Relatório HTML do Playwright

## Estrutura do projeto

- `data/usuarios.data.ts`: interface TypeScript e massa de dados dos cenários de login.
- `pages/LoginPage.ts`: Page Object responsável pelas interações com a tela de login.
- `pages/DashboardPage.ts`: Page Object responsável pelos elementos e ações do painel.
- `fixtures/auth.fixture.ts`: fixture responsável por realizar a autenticação e disponibilizar o painel aos testes.
- `tests/dashboard-sessao.spec.ts`: testes de acesso ao painel e logout.
- `tests/login-data-driven.spec.ts`: testes de login orientados por dados externos.
- `tests/login-pom.spec.ts`: testes de autenticação utilizando o padrão Page Object Model.
- `login.html`: página de login da aplicação.
- `painel.html`: página do painel após o login.
- `playwright.config.ts`: configuração do Playwright.

## Credenciais de teste

**Cliente**
- E-mail: `user@system.com`
- Senha: `senha12345`

**Administrador**
- E-mail: `admin@system.com`
- Senha: `adminSenha123`

As credenciais são destinadas exclusivamente ao ambiente didático local.

## Cenários de teste

A suíte contempla os seguintes cenários:

1. Login válido de cliente.
2. Login válido de administrador.
3. Tentativa de login com senha incorreta.
4. Acesso ao painel após autenticação.
5. Encerramento da navegação pelo botão de logout.
6. Verificação do estado inicial do botão de login.

Os cenários Data-Driven utilizam uma massa de dados externa e tipada, permitindo executar diferentes combinações de credenciais sem duplicar a estrutura do teste.

## Como executar os testes

### 1. Instalar as dependências

Na pasta raiz do projeto, execute:

```bash
npm install
```

### 2. Executar todos os testes

```bash
npx playwright test
```

### 3. Executar os testes com o navegador visível

```bash
npx playwright test --headed
```

### 4. Abrir o relatório HTML

```bash
npx playwright show-report
```

Caso a porta padrão do relatório já esteja em uso, utilize outra porta:

```bash
npx playwright show-report --port 9324
```

## Resultado da execução

Na execução realizada durante o desenvolvimento, os **8 testes foram aprovados**, abrangendo os testes de login, os cenários Data-Driven e os testes de acesso ao painel e logout.

## Observação sobre a aplicação

A aplicação utiliza arquivos HTML locais para fins didáticos. O logout implementado redireciona o navegador para a tela de login, mas não invalida uma sessão em servidor real, pois o projeto não possui um mecanismo de autenticação no servidor.

## Objetivo da atividade

Aplicar os conceitos de arquitetura de testes E2E com Playwright e TypeScript, utilizando Page Object Model, fixtures reutilizáveis e testes Data-Driven para organizar, executar e manter cenários automatizados de forma estruturada.
