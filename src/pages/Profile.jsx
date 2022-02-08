import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-profile">
          <p>componente Profile</p>
        </div>
      </div>
    );
  }
}

export default Profile;
