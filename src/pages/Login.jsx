import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Carregando from '../components/Carregando';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nomeUsuario: '',
      botaoEntrarDesabitado: true, // (2)
      logado: false, // (3)
      carregando: false, // (4) (3)
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({ nomeUsuario: target.value }, this.validaBotaoEntrar); // (2)
  }

  validaBotaoEntrar = () => { // (2)
    const caracteresMinimo = 3;
    const { nomeUsuario } = this.state;
    if (nomeUsuario.length >= caracteresMinimo) {
      this.setState({ botaoEntrarDesabitado: false });
    } else {
      this.setState({ botaoEntrarDesabitado: true });
    }
  };

  botaoEntrarClicado = async () => { // (3)
    this.setState({ carregando: true });
    const { nomeUsuario } = this.state;
    await createUser({ name: nomeUsuario });
    this.setState({ carregando: false, logado: true });
  }

  render() {
    const { botaoEntrarDesabitado, logado, carregando } = this.state;
    return (
      <div data-testid="page-login">
        <p>componente Login</p>
        {/* 5 */}
        { logado && <Redirect to="/search" /> }
        { carregando ? <Carregando /> : ( // (1) (4)
          <form>
            <input
              data-testid="login-name-input"
              type="text"
              onChange={ this.handleInputChange }
            />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ botaoEntrarDesabitado } // (2)
              onClick={ this.botaoEntrarClicado } // (3)
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

// (1) crie um formulário para que a pessoa usuária se identifique com um nome.

// (2) O botão para entrar só deve ser habilitado caso o nome digitado tenha 3 ou mais caracteres.

// (3) Ao clicar no botão Entrar, utilize a função createUser da userAPI para salvar o nome digitado.
//     A função createUser espera receber como argumento um objeto com as informações da pessoa:
//     createUser({name: "Nome digitado"});

// (4) Enquanto a informação da pessoa usuária é salva, uma mensagem com o texto Carregando... deve aparecer na tela.

// (5) Após a informação ter sido salva, faça um redirect para a rota /search.
