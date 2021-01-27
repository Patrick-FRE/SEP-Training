import React from 'react';
import classes from './ListItem.module.css';
import './ListItem.module.css';
const ListItem = (props) => {
    const myStyle = {
        opacity:" 70%", 
        marginLeft: "40px", 
        color:"#9c966a",
        cursor: "pointer",
        position: "absolute",
        right: "23px",
        // border: "1px solid black"
    }
    
    return(
        <li className={classes.ListItem}>{props.title} 
            <i className="fa fa-minus-circle" style={myStyle} onClick={props.click}></i>
        </li>
    )
}

export default ListItem;