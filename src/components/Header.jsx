import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

class Header extends Component {
  state = {
    carregando: true, // carregando = true renderiza o componente <Carregando />
    nomeUsuario: '',
  }

  async componentDidMount() { // Async pois getUser inicializa uma new Promise
    const user = await getUser();
    this.setState({ nomeUsuario: user.name, carregando: false });
  }

  render() {
    const { nomeUsuario, carregando } = this.state;
    return (
      <header data-testid="header-component">
        { carregando ? <Carregando />
          : <h2 data-testid="header-user-name">{ nomeUsuario }</h2> }
      </header>
    );
  }
}

export default Header;
