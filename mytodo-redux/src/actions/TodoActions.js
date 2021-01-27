

export const AddTodo = todo => ({
    type: 'ADD_TODO',
    payload: todo
})

export const DeleteTodo = id => ({
    type: 'DELETE_TODO',
    payload: id
})