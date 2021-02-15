import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ul  className="nav-container">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        )
    }
}
