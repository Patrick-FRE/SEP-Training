export const getAllTodos = () =>
  fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
    response.json()
  );
