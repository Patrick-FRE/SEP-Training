import React, { Children } from 'react';
import { randomColor } from '../../utils/randomColor.util';

class RandomColorText extends React.Component {
  state = {
    colors: [],
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({
        colors: this.props.children.split('').map((_) => {
          return randomColor();
        }),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return this.props.children
      .split('')
      .map((char, index) => (
        <span style={{ color: this.state.colors[index] }}>{char}</span>
      ));
  }
}

export default RandomColorText;
