import React from 'react';
import Layout from './components/Layout/Layout';
import Counter from './components/Counter/Counter';
import './App.css';

// Atom design

class App extends React.Component {
  render() {
    return (
      <Layout content="Page ONe | Page TWO">
        <Counter></Counter>
      </Layout>
    );
  }
}

export default App;
