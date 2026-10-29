
export interface CenarioLogin {
  descricao: string;
  email: string;
  senha: string;
  sucesso: boolean;
  urlEsperada: string;
  mensagemErroEsperada: string;
}

export const listaUsuarios: CenarioLogin[] = [
  {
    descricao: 'Cliente válido',
    email: 'user@system.com',
    senha: 'senha12345',
    sucesso: true,
    urlEsperada: 'painel.html',
    mensagemErroEsperada: '',
  },
  {
    descricao: 'Administrador válido',
    email: 'admin@system.com',
    senha: 'adminSenha123',
    sucesso: true,
    urlEsperada: 'painel.html',
    mensagemErroEsperada: '',
  },
  {
    descricao: 'Senha incorreta',
    email: 'user@system.com',
    senha: 'senhaIncorreta123',
    sucesso: false,
    urlEsperada: '',
    mensagemErroEsperada: 'Credenciais inválidas',
  },
];
