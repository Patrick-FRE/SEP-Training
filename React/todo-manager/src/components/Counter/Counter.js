import React from 'react';

import { store, actionCreater } from '../../Redux/Redux';
import { connect } from 'react-redux';
import { myConnect } from '../../React-Redux/react-redux';

// class Counter extends React.Component {
//   componentDidMount() {
//     store.subscribe(() => {
//       this.forceUpdate();
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>Counter: {store.getState().value}</h1>
//         <button
//           onClick={() => {
//             store.dispatch(actionCreater.incremented());
//           }}
//         >
//           Add
//         </button>
//       </>
//     );
//   }
// }

class Counter extends React.Component {
  render() {
    return (
      <>
        <h1>Counter: {this.props.counter}</h1>
        <button
          onClick={() => {
            this.props.add();
          }}
        >
          Add
        </button>
      </>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  console.log('mapStateToProps', state);
  return {
    counter: state.value,
  };
};

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  console.log(dispatch);
  return {
    add: () => dispatch(actionCreater.incremented()),
  };
};

export default myConnect(mapStateToProps, mapDispatchToProps)(Counter);
