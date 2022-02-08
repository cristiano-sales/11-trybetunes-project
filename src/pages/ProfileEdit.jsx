import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-profile-edit">
          <p>componente ProfileEdit</p>
        </div>
      </div>
    );
  }
}

export default ProfileEdit;
