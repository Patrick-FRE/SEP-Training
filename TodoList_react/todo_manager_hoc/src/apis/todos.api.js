const baseUrl = 'https://jsonplaceholder.typicode.com';
const todosPath = 'todos';
const endPoint = [baseUrl, todosPath].join('/');

export const getTodos = ()=>{
    fetch(endPoint).then((res)=>res.join());
}

