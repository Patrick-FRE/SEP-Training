import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import WithTodosData from "./components/withTodoData/withTodoData";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./components/Todo/Todo";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <WithTodosData
            render={(todos, addTodo, removeTodo, updateTodo) => (
              <TodoList
                todos={todos}
                addTodo={addTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              >
                {(todos, removeTodo, updateTodo) =>
                  todos
                    ? todos.map((todo) => (
                        <Todo
                          key={todo.id}
                          todo={todo}
                          completed={todo.completed}
                          handleRemoveTodo={() => removeTodo(todo.id)}
                          handleUpdateTodo={updateTodo}
                        ></Todo>
                      ))
                    : null
                }
              </TodoList>
            )}
          ></WithTodosData>
        </Layout>
      </div>
    );
  }
}

export default App;
