import React from 'react';
import Logo from '../Logo/Logo';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo></Logo>
        <div>
        <div>
          Count
        </div>
        <div>
          List
        </div>
        </div>
        
      </div>
    );
  }
}
export default Header;
