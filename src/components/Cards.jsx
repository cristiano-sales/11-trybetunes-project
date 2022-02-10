// Referência: Leonardo Vogel

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

class Cards extends Component {
  render() {
    const { collectionId, collectionName } = this.props;
    return (
      <li>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          { collectionName }
        </Link>
        ;
      </li>
    );
  }
}

Cards.propTypes = {
  collectionId: PropType.number.isRequired,
  collectionName: PropType.string.isRequired,
};

export default Cards;

// Referência: Leonardo Vogel
