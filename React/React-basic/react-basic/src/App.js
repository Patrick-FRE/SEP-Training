import React from 'react';
import Layout from './components/Layout/Layout';
import Counter from './components/Counter/Counter';
import './App.css';

// Atom design

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
    };
    console.log('APP - constructor', document.querySelector('.hello')); // null
  }
  static getDerivedStateFromProps(props, state) {
    console.log(
      'APP - getDerivedStateFromProps',
      document.querySelector('.hello') // null
    );
    return null;
  }
  componentDidMount() {
    console.log('APP - componentDidMount', document.querySelector('.hello')); // get it
  }

  render() {
    console.log('APP - render', document.querySelector('.hello')); // null
    //return <h1 className="hello">Hello</h1>;

    return (
      <Layout content="Page ONe | Page TWO">
        <button
          onClick={() => {
            console.log('updating');
            this.setState({
              test: 'test',
            });
          }}
        >
          Update
        </button>
        {!this.state.test ? <Counter></Counter> : null}
      </Layout>
    );
  }
}

export default App;
