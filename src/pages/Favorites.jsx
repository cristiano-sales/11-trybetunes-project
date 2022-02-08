import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div>
        <h1>PAGINA FAVORITES</h1>
        <Header />
        <div data-testid="page-favorites" />
      </div>
    );
  }
}

export default Favorites;
