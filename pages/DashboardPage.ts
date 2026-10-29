
import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private readonly page: Page;
  readonly tituloPainel: Locator;
  readonly mensagemUsuario: Locator;
  readonly botaoLogout: Locator;

  constructor(page: Page) {
    this.page = page;

    this.tituloPainel = page.getByRole('heading', {
      name: 'Bem-vindo ao Painel!',
    });

    this.mensagemUsuario = page.locator('#statusMessage');
    this.botaoLogout = page.locator('#logoutBtn');
  }

  async logout(): Promise<void> {
    await this.botaoLogout.click();
  }
}
