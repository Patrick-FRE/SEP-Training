import React from 'react';
import Header from '../../components/Header/Header';
import TodoList from '../TodoList/TodoList';

import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <Header></Header>
        </header>
        <main className="app-content">{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
