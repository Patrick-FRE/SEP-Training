const baseUrl = 'https://jsonplaceholder.typicode.com';
const todosPath = 'todos';
const endPoint = [baseUrl, todosPath].join('/');

    export const getTodos = () =>{
        return fetch(endPoint).then((response) => response.json());
    }
   