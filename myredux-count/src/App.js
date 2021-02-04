import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import { ADD_COUNT } from './Actions/actions'
import { myconnect } from './React-Redux/react-redux'


class App extends React.Component {

  constructor(props) {
    super(props)


  }

  componentDidMount() {

  }

  handleClick = () => {
    this.props.Add()
    console.log(this.props.count, ':count now');
    this.forceUpdate()

  }

  render() {

    return (
      <div className="App" >
        <h1>I'm a counter</h1>
        <h2>count now: {this.props.count ? this.props.count : 0}
        </h2>
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state, 'in map state');
  return { count: state.count }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch, 'imdispatch');
  return {
    Add: () => dispatch(ADD_COUNT())
  }

}


export default myconnect(mapStateToProps, mapDispatchToProps)(App);
