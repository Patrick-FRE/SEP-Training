import React from 'react';

const List = ({todos,handleComplete,handleRemove}) => {
    return (
        <div>
             <ul>
        {todos.map(({ text, isComplete }, index) => (
          <li  key={index}
            className={isComplete ? 'complete' : null} data-index={index}
            onClick={handleComplete}
            tabIndex="0"
          >
            <div>{text}</div>
            <button className="remove" data-index={index} onClick={handleRemove}>Delete</button>
          </li>
        ))}
      </ul>
        </div>
    );
}

export default List;
