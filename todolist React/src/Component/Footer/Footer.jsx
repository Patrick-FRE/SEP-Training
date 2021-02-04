import React, { Component } from "react";
import "./Footer.css"

export default class Footer extends Component {
    handleAllClick = (e) => {
        this.props.checkAlltodo(e.target.value)
    };

    handleClearAll = () => {
        this.props.clearAllDown()
    }

    render() {
        const { todos } = this.props;
        const total = todos.length
        const downCount = todos.reduce(
            (pre, todo) => pre + (todo.completed ? 1 : 0),
            0
        );

        return (
            <div className="footer-container">
                {/* Footer Component */}
                <br />
                <input type="checkbox" checked={downCount === total && total !== 0 ? true : false} onChange={this.handleAllClick} />
                <span>Select all</span>&nbsp;&nbsp;
                <span>
                    {downCount}/{total}
                </span>
        &nbsp;
                <button onClick={this.handleClearAll}>Delete done</button>
            </div>
        );
    }
}
