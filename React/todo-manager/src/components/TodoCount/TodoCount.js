import React from 'react';
import { getAllTodos } from '../../apis/todos.api';
import { withTodos } from '../../hoc/withTodos';

class TodoCount extends React.Component {
  render() {
    return <h1>Totoal Count: {this.props.count}</h1>;
  }
}

//export default withTodos(TodoCount);
export default TodoCount;
