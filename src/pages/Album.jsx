import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-album">
          <p>componente Album</p>
        </div>
      </div>
    );
  }
}

export default Album;