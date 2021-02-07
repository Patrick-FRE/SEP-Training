function myCreateStore(reducerFn) {
  let state = reducerFn(undefined, { type: "__INIT__" });
  let listner = [];

  function subscribe(callbackFn) {
    console.log("subscribe");
    listner.push(callbackFn);
    return function () {
      listner.splice(listeners.indexOf(callbackFn), 1);
    };
  }

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducerFn(state, action);
    listner.forEach((listnerFn) => {
      listnerFn();
    });
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}
