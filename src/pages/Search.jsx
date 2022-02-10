// Referência: Leonardo Vogel

import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from '../components/Carregando';
import Cards from '../components/Cards';

class Search extends Component {
  state ={
    pesquisa: '',
    botaoPesquisarDesabilitado: true,
    carregando: false,
    pesquisaEncontrada: false,
    arrayAlbuns: [],
    artista: '',
  }

  handleInputChange = ({ target }) => {
    this.setState({ pesquisa: target.value }, this.verificaCaracteresBotao);
  }

  verificaCaracteresBotao = () => {
    const minimoCaracteres = 2;
    const { pesquisa } = this.state;
    if (pesquisa.length >= minimoCaracteres) {
      this.setState({ botaoPesquisarDesabilitado: false });
    } else {
      this.setState({ botaoPesquisarDesabilitado: true });
    }
  }

  handleClickSearchButton = async () => { // fará uma requisição utilizando a função searchAlbumAPI
    this.setState({ carregando: true, pesquisaEncontrada: false }); // ao clicar no botão, exibe a mensagem carregando
    const { pesquisa } = this.state;
    this.setState({ pesquisa: '' }); // limpa o valor do input

    const response = await searchAlbumsAPI(pesquisa);

    this.setState({
      carregando: false, // requisição respondida, desliga a mensagem de loading
      pesquisaEncontrada: true, // permite renderizar os textos "resultados de albuns..." ou "nenhum album encontrado..."
      arrayAlbuns: response,
      artista: pesquisa,
    });
  }

  render() {
    const {
      botaoPesquisarDesabilitado,
      pesquisa,
      carregando,
      pesquisaEncontrada,
      arrayAlbuns,
      artista,
    } = this.state;
    return (
      <>
        <h1>PAGINA SEARCH</h1>
        <Header />
        <div data-testid="page-search">
          <div>
            { carregando ? <Carregando /> : (
              <form>
                <input
                  data-testid="search-artist-input"
                  type="text"
                  value={ pesquisa }
                  onChange={ this.handleInputChange }
                  placeholder="Banda ou Artista"
                />
                <button
                  data-testid="search-artist-button"
                  disabled={ botaoPesquisarDesabilitado }
                  type="button"
                  onClick={ this.handleClickSearchButton }
                >
                  Pesquisar
                </button>
              </form>)}
          </div>
          <div>
            { pesquisaEncontrada && (
              arrayAlbuns.length ? <p>{ `Resultado de álbuns de: ${artista}` }</p> : (
                <p>Nenhum álbum foi encontrado</p>
              )
            )}
          </div>
          <div>
            { arrayAlbuns.map((album) => (
              <Cards key={ album.collectionID } { ...album } />))}
          </div>
        </div>
      </>
    );
  }
}

export default Search;

// Referência: Leonardo Vogel
