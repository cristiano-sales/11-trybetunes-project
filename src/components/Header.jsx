import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <section>
          <NavLink data-testid="link-to-search" to="/search">Pesquisa</NavLink>
          <NavLink data-testid="link-to-favorites" to="/favorites">Favoritas</NavLink>
          <NavLink data-testid="link-to-profile" to="/profile">Perfil</NavLink>
        </section>
        { carregando ? <Carregando />
          : <h2 data-testid="header-user-name">{ nomeUsuario }</h2> }
      </header>
    );
  }
}

export default Header;
