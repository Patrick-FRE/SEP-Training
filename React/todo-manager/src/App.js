import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoCount from './components/TodoCount/TodoCount';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingSelection:true,
    };
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
  }

  handleUserInputChange(e){
    this.setState(preState=>{
      console.log({showingSelection:!preState.showingSelection})
      return {showingSelection:!preState.showingSelection}
    })

  }

  render() {
    console.log('render yes')
    return (
      <Layout handleUserInputChange={this.handleUserInputChange}>
        {this.state.showingSelection?(<TodoCount></TodoCount>):
        (<TodoList></TodoList>)}
      </Layout>
    );
  }
}

export default App;
