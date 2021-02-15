import logo from './logo.svg';
import React from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import {requestData} from './action/action';
import {connect} from 'react-redux';

import './App.css';

class App extends React.Component {

  render() { 
    const list = this.props.data.results;
    const input = this.props.input;
    return (
      <div className="App">
        
        <Header/>
        {input && <div className="content title">
          <h2>{list.length} results for "{input}"</h2>
        </div>}
        <div className="content" style={{display:"flex", flexWrap: "wrap"}}>
          
          
          {list.map(obj => {
            return (
                <Card key={obj.collectionId} image={obj.artworkUrl100} text={obj.collectionName} />
            )
          })}
          
        </div>
       
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    data: state.data,
    input: state.input
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestData: () => dispatch(requestData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);