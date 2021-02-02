import React from "react";
import Logo from "../Logo/Logo";

import "./Header.css";

class Header extends React.Component {
  render() {
    const {handleUserInputChange} = this.props
    
    return (
      
      <div className="header">
        <Logo></Logo>
        <div >
          <div onClick={handleUserInputChange}>Count</div>
          <div onClick={handleUserInputChange}>List</div>
        </div>
      </div>
    );
  }
}
export default Header;
