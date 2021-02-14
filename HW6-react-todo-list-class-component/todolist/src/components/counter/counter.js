import React from 'react';
import './counter.css';
import { withTodos } from '../../hoc/withTodos';

class Counter extends React.Component {
    render() {
      console.log(this.props.todos)
      return <div className="counter">Here are :{this.props.count} todos</div>;
    }
}

export default withTodos(Counter);
