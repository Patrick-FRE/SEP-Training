import React, { Component } from "react";
import { nanoid } from "nanoid";
import Item from "../Item/Item";
import "./TodoList.css";

export default class TodoList extends Component {
    handldInputValue = () => {
        const userInput = this.userInput.value;
        if (userInput === "") {
            alert("Your enter cannot be empty");
            return;
        }
        console.log(this.props.todos)

        // let exist = this.props.todos.filter(
        //     (todos) => todos.value.toUpperCase() === this.state.inputValue.toUpperCase()).length
        // if(exist){
        //     alert("The input is repeat");
        //     return;
        // }

        const todoObj = { id: nanoid(), title: userInput, completed: false };
        this.props.addTodos(todoObj);
        console.log(todoObj); //test

        this.userInput.value = "";
    };

    render() {
        const { todos } = this.props;
        return (
            <div>
                <span className="todolist-title">TodoList manager</span>
                <br />
                <div>
                    <input className="input-container"
                        ref={(c) => (this.userInput = c)}
                        type="text"
                        placeholder="Please enter todos"
                    />
                    <button onClick={this.handldInputValue}>Add</button>

                </div>

                <ul className="ul-container">
                    {todos.map((todos) => {
                        return (
                            <Item
                                key={todos.id}
                                deleteTodos={this.props.deleteTodos}
                                updataCompelete={this.props.updataCompelete}
                                {...todos}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
