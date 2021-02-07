import React from 'react'
import { ADD_COUNT } from '../Actions/actions'
// import { store as this.store } from '../Redux/myRedux'
// import { store } from '../Redux/myRedux'
const MyReduxContext = React.createContext(null)

export const myconnect = (mapStateToProps, mapDispatchToProps) => Wrapped => {


    return class extends React.Component {

        static contextType = MyReduxContext


        store = this.context

        render() {
            // this.store.dispatch(ADD_COUNT())
            // console.log(this.store, 'im store');
            // const wrappedStateToProps = mapStateToProps(this.store.getState())
            // const wrappedDispatchToProps = mapDispatchToProps(this.store.dispatch)
            return (
                <Wrapped
                    count={this.store.getState().count}
                    Add={() => this.handleAdd()}
                    {...this.props}
                ></Wrapped>
            )


        }

        handleAdd = () => {
            // console.log('pushing cb');

            this.store.dispatch(ADD_COUNT())

        }

        componentDidMount() {
            this.unsub = this.store.subscribe(() => {
                this.forceUpdate();
            });
        }
        componentWillUnmount() {
            this.unsub();
        }
    }
}
export const MyProvider = (props) => {
    return (
        <MyReduxContext.Provider value={props.store}>
            {props.children}
        </MyReduxContext.Provider>
    )
}