import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>PAGINA PROFILE</h1>
        <Header />
        <div data-testid="page-profile" />
      </div>
    );
  }
}

export default Profile;
