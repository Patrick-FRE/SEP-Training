let component = {
  state: {
    counter: 0,
  },
};

function setState(newState) {
  if (typeof newState === 'function') {
    setTimeout(() => {
      component.state = newState(component.state);
    }, 0);
  } else {
    setTimeout(() => {
      component.state = newState;
    }, 0);
  }
}

setState((preState) => {
  return {
    counter: preState.counter + 1,
  };
});
console.log(component.state); //
setState((preState) => {
  return {
    counter: preState.counter + 1,
  };
});
setTimeout(() => {
  console.log(component.state); //
}, 1000);
// setState(() => {});
// console.log(component.state);
