import React, { Component } from 'react';

class List extends Component {
    render() { 
        const { todolist } = this.props;
        const handleDelete = this.props.onDelete;
        return ( 
            todolist.map((todo, index) => {
                const key = `${index}`;
                return <li><span>{todo}</span> <button key={key} className="btn-remove" onClick={()=>handleDelete(key)}>X</button></li>
            })
         );
    }
}
 
export default List;