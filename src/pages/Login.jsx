// Referência: Leonardo Vogel

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Carregando from '../components/Carregando';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nomeUsuario: '',
      botaoEntrarDesabitado: true, // button disabled = true, estado inicial
      logado: false, // logado true realizará o redirect to search
      carregando: false, // carregando false renderiza o form
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({ nomeUsuario: target.value }, this.validaBotaoEntrar); // seta no estado o nome do usuario digitado no input enquanto verifica o número de caracteres
  }

  validaBotaoEntrar = () => { // valida o botao apenas se 3 ou mais caracteres
    const caracteresMinimo = 3;
    const { nomeUsuario } = this.state;
    if (nomeUsuario.length >= caracteresMinimo) {
      this.setState({ botaoEntrarDesabitado: false });
    } else {
      this.setState({ botaoEntrarDesabitado: true });
    }
  };

  botaoEntrarClicado = async () => { // utiliza createUser para salvar o uruário digitado
    this.setState({ carregando: true }); // carregando true renderiza o componente Carregando
    const { nomeUsuario } = this.state;
    await createUser({ name: nomeUsuario }); // emptyUsser.name = nome digitado
    this.setState({ carregando: false, logado: true }); // carregando = false renderiza o form, logado true redireciona para search
  }

  render() {
    const { botaoEntrarDesabitado, logado, carregando } = this.state;
    return (
      <div data-testid="page-login">
        <h1>PAGINA LOGIN</h1>
        { logado && <Redirect to="/search" /> }
        { carregando ? <Carregando /> : (
          <form>
            <input
              data-testid="login-name-input"
              type="text"
              onChange={ this.handleInputChange }
            />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ botaoEntrarDesabitado }
              onClick={ this.botaoEntrarClicado }
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;

// Referência: Leonardo Vogel
