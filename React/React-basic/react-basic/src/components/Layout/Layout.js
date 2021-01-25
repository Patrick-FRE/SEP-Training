import React, { Component, PureComponent } from 'react';
import Header from '../Header/Header';

class Layout extends Component {
  constructor(props) {
    super(props);
    console.log('Layout - constructor'); // null
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Layout - getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate(nextProps, nexState) {
    console.log(
      'Layout - shouldComponentUpdate',
      nextProps,
      nexState,
      this.props,
      this.state
    );
    console.log(nextProps.content === this.props.content);
    //return nextProps.content !== this.props.content;
    return true;
    //console.log(nexState === this.state);
  }

  componentDidMount() {
    console.log('Layout - componentDidMount'); // get it
  }

  render() {
    console.log('Layout - render'); // null
    return (
      <div className="app-container">
        <Header></Header>
        <main className="app-content">{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
