import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const InputBar = React.forwardRef((props, ref) => {
    return (
        <div className="InputBar">
            <span>
                <input
                    value={props.keyword}
                    ref={ref}
                    onChange={props.onChangeKey}
                    onKeyDown={props.addTodo}
                    placeholder="Add Todo"
                ></input>
                <button onClick={props.addTodo}>
                    <SearchIcon></SearchIcon>
                </button>
            </span>
        </div>
    );
})

export default InputBar;
