
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type AuthFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<AuthFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // Acessa a tela de login
    await loginPage.goto();

    // Realiza o login com credenciais válidas
    await loginPage.login(
      'user@system.com',
      'senha12345'
    );

    // Aguarda a navegação para o painel
    await page.waitForURL(/painel\.html/);

    // Entrega o painel já autenticado
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.mensagemUsuario.waitFor({
      state: 'visible',
    });

    await use(dashboardPage);
  },
});

export { expect };

