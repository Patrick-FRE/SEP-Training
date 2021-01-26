import React from 'react';
import Header from '../../components/Header/Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        Layout
        <main>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
