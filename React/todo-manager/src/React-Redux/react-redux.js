import React from 'react';
import { actionCreater } from '../Redux/Redux';

const MyReduxContext = React.createContext(null);

export const myConnect = (mapStateToProps, mapDispatchToProps) => (
  WrappedComponent
) =>
  class extends React.Component {
    static contextType = MyReduxContext;

    render() {
      const store = this.context;
      const WrappedComponentProps = mapStateToProps(store.getState());
      const WrappedComponentDispatch = mapDispatchToProps(store.dispatch);

      return (
        <WrappedComponent
          {...WrappedComponentProps}
          {...WrappedComponentDispatch}
          {...this.props}
        ></WrappedComponent>
      );
    }
    componentDidMount() {
      const store = this.context;
      this.unsub = store.subscribe(() => {
        this.forceUpdate();
      });
    }
    componentWillUnmount() {
      this.unsub();
    }
  };

export class MyProvider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <MyReduxContext.Provider value={store}>
        {this.props.children}
      </MyReduxContext.Provider>
    );
  }
}

// const mapStateToProps = (state /*, ownProps*/) => {
//     console.log('mapStateToProps', state);
//     return {
//       counter: state.value,
//     };
//   };

//   const mapDispatchToProps = (dispatch /*, ownProps*/) => {
//     console.log(dispatch);
//     return {
//       add: () => dispatch(actionCreater.incremented()),
//     };
//   };

//   export default connect(mapStateToProps, mapDispatchToProps)(Counter);
