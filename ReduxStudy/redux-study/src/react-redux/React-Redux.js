import React from "react";
import { actionCreator } from "../Redux/Redux";

const MyReduxContext = React.createContext(null);

export const myConnect = (
  mapStateToProps = null,
  mapDispatchToProps = null
) => (WrappedComponent) =>
  class extends React.Component {
    //the following lines make the compnent be able to access the context
    static contextType = MyReduxContext;
    render() {
      const store = this.context;
      if (typeof mapStateToProps === "function") {
        var WrappedComponentProps = mapStateToProps(store.getState());
      }
      //need to use var here in order to access it outside the scope
      if (typeof mapDispatchToProps === "function") {
        var WrappedComponentDispatch = mapDispatchToProps(store.dispatch);
      }

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
      store.subscribe(() => {
        this.forceUpdate();
      });
    }
  };

export class MyProvider extends React.Component {
  //   constructor(props, context) {
  //     super(props, context);
  //   }

  render() {
    const { store } = this.props;
    return (
      <MyReduxContext.Provider value={store}>
        {this.props.children}
      </MyReduxContext.Provider>
    );
  }
}
