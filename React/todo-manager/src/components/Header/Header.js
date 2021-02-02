import React from 'react';
import Logo from '../Logo/Logo';
import Counter from '../../components/Counter/Counter';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo></Logo>
        <Counter></Counter>
      </div>
    );
  }
}
export default Header;
