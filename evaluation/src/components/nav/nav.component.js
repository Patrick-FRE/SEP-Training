import React from 'react';
import './nav.style.css';
import{ Link} from 'react-router-dom'

function Nav(){
    return(
        <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h3>Github Users</h3>
        </Link>
       
        </nav>
    )
}
export default Nav;