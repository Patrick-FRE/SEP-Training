import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Header from './components/header/header';
import Content from './components/content/content';
import Todolist from './components/todolist/todolist';
import Counter from './components/counter/counter';

class App extends React.Component {
  render(){
    return (
      <Layout>
          <Header>implement a todo list</Header>
          <Content>
              <Todolist></Todolist>
              <Counter></Counter>
          </Content>
      </Layout>
    );
  }
}

export default App;
