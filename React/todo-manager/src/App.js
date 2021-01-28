import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoCount from './components/TodoCount/TodoCount';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  render() {
    return (
      <Layout>
        {/* <TodoCount></TodoCount> */}
        <TodoList></TodoList>
      </Layout>
    );
    // return <h1>hello</h1>;
  }
}

export default App;
