import React from 'react';
import './todolist.css';
import myAPI from '../../helpers/api';
import Todo from "../todo/todo";


class Todolist extends React.Component {

    state = {
        todos:[]
    }

    constructor(props){
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        myAPI.getTodolist().then(results=>{
            this.setState({
                todos:results
            });
        });
    }

    addTodo(e){
        if(e.key === 'Enter'){
            const newTodo = e.target.value;
            const tmp = this.state.todos;
            tmp.unshift({
                id:Date.now().toString(),
                title:newTodo
            });
            this.setState({
                todos:tmp
            });
            e.target.value = "";
        }
    }

    deleteTodo(id){
        const tmp = this.state.todos.filter(x=>x.id!==id);
        this.setState({
            todos:tmp
        });
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
                                {this.state.todos.map(todo=><Todo title={todo.title} key={todo.id} id={todo.id} delete={this.deleteTodo}></Todo>)}
                            </ul>
                        </section>
                    </>
                );
    }
}

export default Todolist;