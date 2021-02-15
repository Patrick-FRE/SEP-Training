import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleChange, requestData} from '../action/action';


class Header extends Component{
    
    handleChange=(e)=>{
        e.preventDefault();

        const artist = e.target.value
        this.props.handleChange(artist)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const artist = this.props.artist;
        this.props.requestData(artist);
    }

    render(){
        return( <header>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} id="search" placeholder="search the artist or albums"/>        
                <button onClick={this.handleSubmit} className="btn"  id='submit'>Search</button>    
            </form>
        </header>)
    }
}

const mapStateToProps = (state) => {
    return {
      artist: state.artist
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      handleChange: (artist) => dispatch(handleChange(artist)),
      requestData: (artist) => dispatch(requestData(artist))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);