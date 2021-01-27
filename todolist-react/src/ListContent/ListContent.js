import React from "react";
import classes from "./ListContent.module.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ListItem from "./ListItem/ListItem";
import '../APIs/fetchAllTodos';
import fetchAllTodos from "../APIs/fetchAllTodos";
class ListContent extends React.Component{
    state = {
        userInput: '',
        todos: [],
        selecetedId: null
    }

    UserInputHandler = (e) => {
        this.setState({userInput: e.target.value});
        e.preventDefault();
    }

    AddTodoHandler = (e) => {
        const lastIndex = this.state.todos.length-1;
        const newId = this.state.todos[lastIndex].id + 1
        let newTodo = {
            title : this.state.userInput,
            id: newId,
            completed: false
        }
        let temp = this.state.todos;
        temp.push(newTodo);
        console.log('temp', temp);
        this.setState({todos: temp})
        e.preventDefault(); 
    }

    DeleteTodoHandler = (id) => {
        console.log('In delete function');        
        console.log(id);
        let temp = this.state.todos;
        let updatedList = temp.filter(todo => todo.id !== id)
        console.log(updatedList);
        this.setState({todos: updatedList});
    }

    componentDidMount(){
        const data = fetchAllTodos();
        data.then(json => {
            this.setState({todos: json.slice(0,15)});
        });
    }

    render() {
        var ListItems = '';
        if(this.state.todos){
            ListItems = this.state.todos.map(item => {
                return <ListItem
                key = {item.id}
                title = {item.title}
                click = {() => this.DeleteTodoHandler(item.id)}
                />
            })
        }

        return(
            <div className={classes.Container}>
                <form className={classes.UserEnter}>
                    <input className={classes.Input} onChange={this.UserInputHandler} placeholder='Enter your todo...'></input>
                    <button className={classes.Button} onClick={this.AddTodoHandler}>Add</button>
                </form>
                
                <ul className={classes.List}>
                    {ListItems}
                </ul>
            </div>
            
        )
    }
}

export default ListContent