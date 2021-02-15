import React, { Component } from 'react'
import '../css/Card.css'


class Card extends Component{
    
    render(){
        const imageUrl = this.props.image;
        const text = this.props.text;

        return(
        <div className="card-container">
            <div className="card-img"><img src={imageUrl} alt="Image not found"/></div>
            <div className="card-title">{text}</div>
        </div>)
    }
}

export default Card;