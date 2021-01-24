import React from 'react';



function TodoList(props) {
    console.log(props.newlist.length,'length');
    return (
        <div className="TodoList">
            here
            {props.newlist.length ? props.newlist.map(todo =>
            (<ul className="item" key={todo.id}>
                <li>{todo.id}</li>
                <li>{todo.title}</li>
                <li><button id={todo.id} onClick={props.deleteTodo}>X</button></li>
            </ul>
            )) : 'nothing in list'}
        </div>
    );
}

export default TodoList;
