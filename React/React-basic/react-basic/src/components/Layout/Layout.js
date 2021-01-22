import React, { Component } from 'react';
import Header from '../Header/Header';

class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <Header></Header>
        <main className="app-content">{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
