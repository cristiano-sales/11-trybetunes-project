import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  state ={
    textoDigitado: '',
    botaoPesquisarDesabilitado: true,
  }

  handleInputChange = ({ target }) => {
    this.setState({ textoDigitado: target.value }, this.verificaCaracteresBotao);
  }

  verificaCaracteresBotao = () => {
    const minimoCaracteres = 2;
    const { textoDigitado } = this.state;
    if (textoDigitado.length >= minimoCaracteres) {
      this.setState({ botaoPesquisarDesabilitado: false });
    } else {
      this.setState({ botaoPesquisarDesabilitado: true });
    }
  }

  render() {
    const { botaoPesquisarDesabilitado } = this.state;
    return (
      <div>
        <h1>COMPONENTE SEARCH</h1>
        <Header />
        <div data-testid="page-search">
          <form>
            <input
              data-testid="search-artist-input"
              onChange={ this.handleInputChange }
              type="text"
              placeholder="Banda ou Artista"
            />
            <button
              data-testid="search-artist-button"
              disabled={ botaoPesquisarDesabilitado }
              type="button"
            >
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
