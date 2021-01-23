import React from 'react';
import './todo.css';

class Todo extends React.Component {
    render() {
        return <li><span>{this.props.title}</span> <button className='btn-remove' onClick={()=>this.props.delete(this.props.id)}>X</button></li>
    }
}

export default Todo;