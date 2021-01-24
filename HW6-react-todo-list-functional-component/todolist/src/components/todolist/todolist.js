import { useState, useEffect } from 'react';
import './todolist.css';
import getTodolist from '../../helpers/api';
import Todo from "../todo/todo";


function Todolist(){

    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        getTodos();
    },[]);

    const getTodos = async () => {
        const results = await getTodolist();
        setTodos(results);
    }

    const addTodo = (e)=>{
        if(e.key === 'Enter'){
            const newTodo = e.target.value;
            const tmp = [...todos];
            tmp.unshift({
                id:Date.now().toString(),
                title:newTodo
            });
            setTodos(tmp);
            e.target.value = "";
        }
    }

    const deleteTodo = (id)=>{
        const tmp = todos.filter(x=>x.id!==id);
        setTodos(tmp);
    }

    return    (
                    <section className="todolist">
                        <header className="todolist__header">todo list</header>
                        <input
                            type="text"
                            placeholder="input your task"
                            className="todolist__input"
                            onKeyDown={addTodo}
                        />
                        <ul id="todolist-content">
                            {todos.map(todo=><Todo title={todo.title} key={todo.id} id={todo.id} delete={deleteTodo}></Todo>)}
                        </ul>
                    </section>
            );
}

export default Todolist;