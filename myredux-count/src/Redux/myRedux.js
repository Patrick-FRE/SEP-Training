// import { createStore } from 'redux'

let initState = {
    count: 1
}

//aciton creator
const ADD_COUNT = () => {
    return {
        type: 'ADD_COUNT'
    }
}

const actionTypes = {
    ADD_COUNT: ADD_COUNT
}


export let myReducer = (state = initState, aciton) => {
    switch (aciton.type) {
        case 'ADD_COUNT':
            return { count: state.count + 1 }

        default:
            return state
    }
}

export let store = (reducer) => {
    let state = reducer(undefined, { type: 'noMatchhere' })
    let cbqueue = []
    // let that = this

    // 1
    function subscribe(cb) {
        cbqueue.push(cb)
    }
    // 2
    function dispatch(action) {
        state = reducer(state, action)
        // console.log(state, 'im aciton');
        // side effect
        
        cbqueue.forEach(x => x())
    }
    // 3
    function getState() {
        return state;
    }
    // 打包
    return {
        dispatch,
        subscribe,
        getState
    }


}

export const myStore = store(myReducer)


myStore.subscribe(() => console.log('in subs'))
// myStore.dispatch({ type: 'ADD_TODO' })
myStore.dispatch(actionTypes.ADD_COUNT())
// console.log(myStore.getState())
