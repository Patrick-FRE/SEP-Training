import React from 'react';
import myAPI from '../helpers/api';

export const withTodos = (WrappedComponnet) =>
    class extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
              todos: [],
            };
            this.handleAddTodo = this.handleAddTodo.bind(this);
            this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        }

        handleAddTodo(newTodo){
            this.setState({
                todos:[newTodo,...this.state.todos]
            });
        }

        handleRemoveTodo(id){
            this.setState({
                todos:this.state.todos.filter(x=>x.id!==id)
            });
        }

        componentDidMount() {
            myAPI.getTodolist().then(results=>{
                this.setState({
                    todos:results
                });
            });
        }

        render() {
            return (
              <WrappedComponnet
                count={this.state.todos.length}
                todos={this.state.todos}
                addTodo={this.handleAddTodo}
                deleteTodo={this.handleRemoveTodo}
              ></WrappedComponnet>
            );
        }
    }