import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-search">
          <p>componente Search</p>
        </div>
      </div>
    );
  }
}

export default Search;
