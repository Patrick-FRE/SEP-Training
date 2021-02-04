import React, { Component } from "react";
import "./styles.css";
import Header from "./Component/Header/Header";
import TodoList from "./Component/TodoList/TodoList";
import Footer from "./Component/Footer/Footer";

const url = "https://jsonplaceholder.typicode.com/todos";

export default class App extends Component {
    state = {
        todos: [{ title: "", id: "", completed: false }]
    };
    componentDidMount() {
        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    todos: data
                })
            );
    }

    addTodos = (value) => {
        const { todos } = this.state;
        const newTodos = [value, ...todos];

        fetch(url, {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => res.json());

        this.setState({
            todos: newTodos
        });
    };

    deleteTodos = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todos) => {
            return todos.id !== id;
        });
        console.log(newTodos.id);
        fetch([url, id].join("/"), {
            method: "DELETE"
        }).then((res) => res.json());

        this.setState({
            todos: newTodos
        });
    };

    updataCompelete = (id, completed) => {
        const { todos } = this.state
        const newTodos = todos.map((objTodo) => {
            if (objTodo.id === id) return { ...objTodo, completed }
            else return objTodo;
        })
        this.setState({ todos: newTodos })
    }

    clearAllDown = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.completed
        })
        this.setState({ todos: newTodos })
    }
    checkAlltodo = (completed) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, completed }

        })
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="App">
                <Header />
                <hr />
                <TodoList
                    addTodos={this.addTodos}
                    deleteTodos={this.deleteTodos}
                    todos={todos}
                    updataCompelete={this.updataCompelete}
                />
                <hr />
                <Footer todos={todos} clearAllDown={this.clearAllDown} checkAlltodo={this.checkAlltodo} updataCompelete={this.updataCompelete} />
            </div>
        );
    }
}
