import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';
import '../css/Header.css';

class Header extends Component {
  state = {
    carregando: true,
    nomeUsuario: '',
  }

  //---------------------------------------------------------------------------------------------------------------------
  // O componente foi montado
  // Neste momento o "componentDidMount" é interceptado
  // Então, do "localStorage" é recuperado o "user", salvo com "createUser" na pagina "Login"
  // Isto é feito utilizando a função "getUser", dada em "src/services/userAPI.js"
  // O "user" contém, dentre outras, a propriedade "name: "nomeUsuario"
  // Nota: "getUser", bem como "createUser", cuidam das conversões entre objeto e string, durante o "setItem" e "getItem"
  // Para tanto utilizam "JSON.stringify" e "JSON.parse"
  // Agora a const "usuario" é um objeto que possui todas as informações contida no user do localStorage
  // O que interessa no momento é o "usuario.name" (o valor digitado no input da page Login que foi salvo com createUser)
  // Em "nomeUsuario", no estado, é setado o valor deste "usuario.name"
  // Assim é possível renderizar no h2 data-testid="header-user-name" o "nomeUsuario"
  // Após as execuções acima, no estado, "carregando" é alterado para false
  // Assim a mensagem de loading é cessada e em seu lugar é renderizado o nomeUsuario (usuario. name, user.name)
  // Isto é feito através de rendereização condicional, no render
  //---------------------------------------------------------------------------------------------------------------------

  async componentDidMount() {
    const usuario = await getUser();
    this.setState({ nomeUsuario: usuario.name, carregando: false });
  }

  render() {
    const { nomeUsuario, carregando } = this.state;
    return (
      <header data-testid="header-component">

        { carregando
          ? <Carregando />
          : <h2 data-testid="header-user-name">{ nomeUsuario }</h2>}

        <section>
          <div className="a">
            <NavLink data-testid="link-to-search" to="/search">Pesquisa</NavLink>
          </div>
          <div className="b">
            <NavLink to="/album/:id">Album</NavLink>
          </div>
          <div className="c">
            <NavLink data-testid="link-to-favorites" to="/favorites">Favoritas</NavLink>
          </div>
          <div className="d">
            <NavLink data-testid="link-to-profile" to="/profile">Perfil</NavLink>
          </div>
          <div className="e">
            <NavLink to="/profile/edit">Edite o Perfil</NavLink>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
