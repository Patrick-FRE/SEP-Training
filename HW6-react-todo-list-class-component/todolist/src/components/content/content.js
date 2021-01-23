import React from 'react';
import './content.css';

class Content extends React.Component {
    render() {
      return <main className="content">{this.props.children}</main>;
    }
}

export default Content;