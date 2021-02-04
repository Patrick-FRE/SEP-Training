import React, { Component } from 'react';



class ToDoList extends Component {
  render() {
    return (
      <div>
      <ul>
        {this.props.todos.map(({ text, isComplete }, index) => (
        <li  key={index}
     className={isComplete ? 'complete' : null} data-index={index}
     onClick={this.props.handleComplete}
     tabIndex="0"
   >
     <div>{text}</div>
     <button className="remove" data-index={index} onClick={this.props.handleRemove}>Delete</button>
   </li>
 ))}
</ul>
 </div>
    );
  }
}

export default ToDoList;



