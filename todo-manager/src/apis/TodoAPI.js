const baseUrl = "https://jsonplaceholder.typicode.com";
const todosPath = "todos";
const endPoint = [baseUrl, todosPath].join("/");

export const getAllTodos = () =>
  fetch(endPoint).then((response) => response.json());

export const addTodo = (newTodo) =>
  fetch(endPoint, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());

export const removeTodo = (id) =>
  fetch([endPoint, id].join("/"), {
    method: "DELETE",
  }).then((response) => response.json());

export const updateTodo = (id, compBoolean) =>
  fetch([endPoint, id].join("/"), {
    method: "PATCH",
    body: JSON.stringify({
      completed: compBoolean,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
