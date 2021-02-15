const baseUrl = 'https://jsonplaceholder.typicode.com';
const todosPath = 'todos';
let endPoint = [baseUrl, todosPath].join('/');



export const getTodos = (keyword='ken') => {
    endPoint = `https://itunes.apple.com/search?term=${keyword}&media=music&entity=album&attribute=artistTerm&limit=50`
    return fetch(endPoint).then((response) => response.json())
}

