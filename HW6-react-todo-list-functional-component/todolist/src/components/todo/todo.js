import './todo.css';

function Todo(props) {
    return <li><span>{props.title}</span> <button className='btn-remove' onClick={()=>props.delete(props.id)}>X</button></li>
}

export default Todo;