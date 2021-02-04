import { createStore } from 'redux'

let initState = {
    count: 0
}

//aciton creator

const actionTypes = {
    ADD_COUNT: 'ADD_COUNT'
}

const ADD_COUNT = () => {
    return {
        type: actionTypes.ADD_COUNT
    }
}

export let myReducer = (state = initState, aciton) => {
    switch (aciton.type) {
        case actionTypes.ADD_COUNT:
            return { count: state.count + 1 }

        default:
            return state
    }
}

export let mycreateStore = (reducer) => {
    let state = reducer(undefined, { type: 'noMatchhere' })
    let cbqueue = []
    // let that = this

    // 1
    function subscribe(cb) {
        cbqueue.push(cb)
        // console.log(cbqueue.length, 'cbqueeu ;ength now');
        return function () {
            cbqueue.splice(cbqueue.indexOf(cb), 1)
        }

    }
    // 2
    function dispatch(action) {
        state = reducer(state, action)
        // console.log(state, 'in dispatch');
        /* while (cbqueue.length > 0) {
            let exe = cbqueue.shift()
            exe();
        } */

        // cbqueue.forEach((cb) => { cb() })
        // side effect
        cbqueue.forEach(x=>x())
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

export const myStore = mycreateStore(myReducer)
// export const myStore = createStore(myReducer)


// myStore.subscribe(() => console.log('in subs'))
// console.log(myStore.dispatch, 'mystore_dispatch');
// myStore.dispatch({ type: 'ADD_TODO' })

// console.log(myStore.getState())
