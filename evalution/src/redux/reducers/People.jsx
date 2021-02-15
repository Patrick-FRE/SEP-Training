import {ADD_PERSON} from '../Constants'

const inite = [{id:'001',name:'Tom',age:'18'}]

export default function addPersonReducer(preState=inite,action){
    const {type, data} =action;
    switch(type){
        case ADD_PERSON:
            return [data];
        default:
                return preState;
    }
}