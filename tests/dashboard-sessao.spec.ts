
import { test, expect } from '../fixtures/auth.fixture';

test('CT - Acessar painel com sessão autenticada',
  async ({ dashboardPage }) => {
    await expect(dashboardPage.tituloPainel)
      .toBeVisible();

    await expect(dashboardPage.mensagemUsuario)
      .toContainText('Login efetuado com sucesso');
  }
);

test('CT - Encerrar sessão pelo logout',
  async ({ dashboardPage, page }) => {
    await dashboardPage.logout();

    await expect(page).toHaveURL(/login\.html/);
  }
);
