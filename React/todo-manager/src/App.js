import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <TodoList></TodoList>
      </Layout>
    );
  }
}

export default App;
