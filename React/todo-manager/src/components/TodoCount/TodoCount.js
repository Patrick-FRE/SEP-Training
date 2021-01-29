import React from 'react';
import { getAllTodos } from '../../apis/todos.api';

class TodoCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    getAllTodos().then((data) => {
      this.setState({
        count: data.length,
      });
    });
  }

  render() {
    return <h1>Totoal Count: {this.state.count}</h1>;
  }
}

export default TodoCount;
