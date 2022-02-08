import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-favorites">
          <p>componente Favorites</p>
        </div>
      </div>
    );
  }
}

export default Favorites;
