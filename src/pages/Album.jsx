// Ref.: Leonardo Vogel

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  state={
    artista: '',
    album: '',
    musicas: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const faixas = await getMusics(id);
    const { artistName, collectionName } = faixas[0];
    this.setState({
      artista: artistName,
      album: collectionName,
      musicas: faixas.slice(1),
    });
  }

  render() {
    const { artista, album, musicas } = this.state;
    return (
      <div>
        <h1>PAGINA ALBUM</h1>
        <Header />
        <div data-testid="page-album">
          <h2 data-testid="artist-name">{ artista }</h2>
          <h3 data-testid="album-name">{ album }</h3>
          { musicas.map((musica) => <MusicCard key={ musica.trackId } { ...musica } />) }
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string.isRequired,
};

export default Album;

// Ref.: Leonardo Vogel
