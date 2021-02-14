export const getTodos = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json());
}

export const addTodo = (newTodo:any) =>
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());