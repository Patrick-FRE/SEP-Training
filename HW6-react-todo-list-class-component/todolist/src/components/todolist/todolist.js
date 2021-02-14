import React from 'react';
import './todolist.css';
import { withTodos } from '../../hoc/withTodos';
import Todo from "../todo/todo";


class Todolist extends React.Component {
    addTodo(e){
        if(e.key === 'Enter'){
            this.props.addTodo({
                id:Date.now().toString(),
                title:e.target.value
            });
            e.target.value = "";
        }
    }

    deleteTodo(id){
        this.props.deleteTodo(id);
    }

    render() {
      return    (
                    <>
                        <section className="todolist">
                            <header className="todolist__header">todo list</header>
                            <input
                                type="text"
                                placeholder="input your task"
                                className="todolist__input"
                                onKeyDown={(e)=>this.addTodo(e)}
                            />
                            <ul id="todolist-content">
                                {this.props.todos.map(todo=><Todo title={todo.title} key={todo.id} id={todo.id} delete={(id)=>this.deleteTodo(id)}></Todo>)}
                            </ul>
                        </section>
                    </>
                );
    }
}

export default withTodos(Todolist);