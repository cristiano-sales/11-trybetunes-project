import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div>
        <h1>PAGINA ALBUM</h1>
        <Header />
        <div data-testid="page-album" />
      </div>
    );
  }
}

export default Album;
