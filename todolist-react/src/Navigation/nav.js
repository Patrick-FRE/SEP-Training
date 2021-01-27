import React from 'react';
import classes from './nav.module.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
const Nav = (props) => { 
    
    return(
        <nav className = {classes.Nav}>
            <i className="fa fa-leaf" style={{opacity:" 70%", marginLeft: "40px"}}></i>
            <p className={classes.NavItem}>Todo List</p>
        </nav>
    )
    

}

export default Nav;