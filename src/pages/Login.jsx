// Referência: Leonardo Vogel

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Carregando from '../components/Carregando';
import { createUser } from '../services/userAPI';
import '../css/Login.css';

class Login extends Component {
  state = {
    nomeUsuario: '',
    botaoEntrarDesabitado: true,
    logado: false,
    carregando: false,
  };

  // ----------------------------------------------------------------------------------
  //  O handleInputChange será responsável por capturar o valor digitado no input
  //  Enquanto é digitado, o valor é atribuído ao estado "nomeUsuario"
  //  Concomitantemente valida o botão entrar, cujo exige no input 3 ou mais caracteres
  // ----------------------------------------------------------------------------------

  handleInputChange = ({ target: { value } }) => {
    this.setState({ nomeUsuario: value }, this.validaBotaoEntrar);
  }

  // ---------------------------------------------------------------------------------------------------
  //  A função "validaBotãoEntrar" verificará se o nome digitado no input contém, no mínimo 3 caracteres
  //  Caso "true", o estado "botaoEntrarDesabilitado" é alterado para "false"
  //  Isto é, no botão, a propriedade "disabled" passa a ser false, habilitando-o
  // ---------------------------------------------------------------------------------------------------

  validaBotaoEntrar = () => {
    const min = 3;
    const { nomeUsuario } = this.state;
    if (nomeUsuario.length >= min) {
      this.setState({ botaoEntrarDesabitado: false });
    } else {
      this.setState({ botaoEntrarDesabitado: true });
    }
  };

  // ----------------------------------------------------------------------------------------------------------------
  //  Ao clicar no botão, a função "botãoEntrarClicado" garantirá que:
  //  Primeiramente, seja exibido na tela a mensagem de loading, através do componente <Carregango />
  //  Em seguida invocará "createUser", dado no diretório "services", que recebe um objeto e o salva no "localStorage"
  //  Para tanto é passado à chave "name" o estado atual em "nomeUsuario", isto é, o usuário digitado no input
  //  Após isso, desabilita o loading e habilita o estado "logado" para "true"
  //  Isto implica no redirecionamento da página, apontando para a page "/search"
  //  Em suma, o usuário digita seu nome, clica no botão entrar e é redirecionado para a página de busca
  // ----------------------------------------------------------------------------------------------------------------

  botaoEntrarClicado = async () => {
    this.setState({ carregando: true });
    const { nomeUsuario } = this.state;
    const a = await createUser({ name: nomeUsuario });
    console.log(a);
    await createUser({ name: nomeUsuario });
    this.setState({ carregando: false, logado: true });
  }

  render() {
    const { botaoEntrarDesabitado, logado, carregando } = this.state;
    return (
      <div data-testid="page-login" className="parentDiv">
        <div className="firstDiv"><h2>Login</h2></div>
        { logado && <Redirect to="/search" /> }
        { carregando ? <Carregando /> : (
          <form>
            <input
              className="input"
              data-testid="login-name-input"
              type="text"
              onChange={ this.handleInputChange }
              placeholder="seu nome aqui"
            />
            <button
              className="button"
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
