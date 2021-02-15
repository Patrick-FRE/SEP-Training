import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
    handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            console.log(this.props);
            this.props.deleteTodos(id);
        }
    };


    handleChange = (id) => {
        return (event) => {
            this.props.updataCompelete(id, event.target.checked)
        }
    }

    render() {
        const { id, title, completed } = this.props;
        return (
            <div className="list-container">
                <li className="li-item" key={id}>
                    <input type="checkbox" checked={completed} onChange={this.handleChange(id)} />
          &nbsp;<span>{title}</span>
                    <div className="button-container">
                        <button
                            className="button-item"
                            onClick={() => this.handleDelete(id)}>
                            Delete
            </button>
                    </div>
                </li>
            </div>
        );
    }
}
