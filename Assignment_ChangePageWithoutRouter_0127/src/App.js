import './App.css';
import React from "react";
import Homepage from './components/homepage/Homepage';
import PageTwo from './components/pagetwo/PageTwo';
import PageThree from "./components/pagethree/PageThree";

class App extends React.Component{
  constructor(props){
    super(props);
    this.switchPages = this.switchPages.bind(this);
    this.state= {switchPage: '1'};
  }
  switchPages(e){
    console.log(e.target.id);
    if(e.target.id === 'one'){
      this.setState({switchPage: '1'});
    } else if(e.target.id === 'two'){
      this.setState({switchPage: '2'});
    } else if(e.target.id === 'three'){
      this.setState({switchPage: '3'});
    }    
  }


  render(){
    let switchPage = this.state.switchPage;
    let page;
    if(switchPage === '1'){
      page = <Homepage />;
    } else if (switchPage === '2') {
      page = <PageTwo/>;
    } else if(switchPage === '3'){
      page = <PageThree/>;
    } 

    return (
      <div className="App">
        <header className="navbar">
          <a href="#" id='one' onClick={this.switchPages} className="active" >Home</a>
          <a href="#" id='two' onClick={this.switchPages} >Page 2</a>
          <a href="#" id='three' onClick={this.switchPages} >Page 3</a>
        </header>
        {page}        
      </div>
    );
  }
  
}

export default App;
