
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { listaUsuarios } from '../data/usuarios.data';

test.describe('Autenticação Data-Driven - LojaQA', () => {
  for (const cenario of listaUsuarios) {
    test(`CT - Login: ${cenario.descricao}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(cenario.email, cenario.senha);

      if (cenario.sucesso) {
        await expect(page).toHaveURL(
          new RegExp(cenario.urlEsperada)
        );
      } else {
        await expect(loginPage.errorMessage).toBeVisible();

        await expect(loginPage.errorMessage)
          .toContainText(cenario.mensagemErroEsperada);
      }
    });
  }
});
