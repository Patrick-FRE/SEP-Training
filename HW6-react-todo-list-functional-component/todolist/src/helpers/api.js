const getTodolist = ()=>{
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';
    return fetch([baseUrl, todoPath].join('/')).then(response => response.json());
}

export default getTodolist;