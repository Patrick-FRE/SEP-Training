import React, { Component } from 'react';
import List from './List';

class Section extends Component {
    state = { 
        todolist: [],
        todoInput: '',
    }

    handleInput = (e) => {
        const keyPressed = e.key;
        const {todolist, todoInput} = this.state;
        if (keyPressed === 'Enter') { 
            if (todoInput === '') {
                return;
            }
            const newList = [...todolist, todoInput]
            this.setState({todolist:newList, todoInput: ''})
        } else {
            this.setState({todoInput: todoInput + keyPressed});
        }
    }

    handleDelete = (key) => {
        // splice is in-place, and return the deleted/replaced array
        // this.state.todolist.splice(key, 1);
        // this.setState({todolist: this.state.todolist});

        // maybe filter is a better practice
        this.setState({todolist: this.state.todolist.filter((curr, index) => +index !== +key)});
    }

    render() { 
        return ( 
            <section className="todolist">
                <header className="todolist__header">todo list</header>
                <input
                    type="text"
                    placeholder="input your task"
                    className="todolist__input"
                    name=""
                    id=""
                    onKeyDown={this.handleInput}
                    value={this.state.todoInput}
                />
                <ul id="todolist-content">
                    <List todolist={this.state.todolist} onDelete={this.handleDelete}></List>
                </ul>
            </section>
         );
    }
}
 
export default Section;
