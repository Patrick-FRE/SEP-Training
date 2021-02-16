import React from 'react';
import './nav.style.css';
import{ Link} from 'react-router-dom'

function Nav(){
    return(
        <nav>
        <Link to="/albumlist" style={{ textDecoration: 'none' }}></Link>
        <h3>AlbumList</h3>
        
       
        </nav>
    )
}
export default Nav;