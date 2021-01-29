import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoCount from './components/TodoCount/TodoCount';
import TodoList from './components/TodoList/TodoList';
import WithTodosData from './components/WithTodosData/WithTodosData';
import ColorTodo from './components/ColorTodo/ColorTodo';
import Todo from './components/Todo/Todo';

class App extends React.Component {
  render() {
    return (
      <Layout>
        {/* <TodoCount></TodoCount> */}
        {/* <TodoList title="My Todo List" name="Patrick"></TodoList> */}
        <WithTodosData
          render={(todos, addTodo, removeTodo) => (
            <TodoList
              title="HeTodoListllo"
              todos={todos}
              addTodo={addTodo}
              removeTodo={removeTodo}
            >
              {(todos, removeTodo) =>
                todos
                  ? todos.map((todo) => (
                      <Todo
                        key={todo.id}
                        todo={todo}
                        handleRemoveTodo={() => removeTodo(todo.id)}
                      ></Todo>
                    ))
                  : null
              }
            </TodoList>
          )}
        ></WithTodosData>
        {/* <WithTodosData
          render={(todos, addTodo, removeTodo) => (
            <TodoCount count={todos.length}></TodoCount>
          )}
        ></WithTodosData> */}
        {/* <WithTodosData>
          {(todos, addTodo, removeTodo) => (
            <TodoCount count={todos.length}></TodoCount>
          )}
        </WithTodosData> */}
      </Layout>
    );
    // return <h1>hello</h1>;
  }
}

export default App;
