import { createStore } from 'redux'

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

let store = (reducer) => {
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
        console.log(state, 'in dispatch');
        // side effect
        console.log(cbqueue, 'cbqueue');
        while (cbqueue) {
            let exe = cbqueue.shift()
            //     console.log(exe);
            // }
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
}
// export const myStore = createStore(myReducer)

export const myStore = store(myReducer)

// myStore.subscribe(() => console.log('in subs'))
// console.log(myStore.dispatch, 'mystore_dispatch');
// myStore.dispatch({ type: 'ADD_TODO' })
// myStore.dispatch(actionTypes.ADD_COUNT())
// myStore.dispatch(actionTypes.ADD_COUNT())
// myStore.dispatch(actionTypes.ADD_COUNT())
// console.log(myStore.getState())
