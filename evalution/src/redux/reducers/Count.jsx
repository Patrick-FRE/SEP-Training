import {GET_ALBUM} from '../Constants'

const init=[{artistId:'001',artistName:'Tom',collectionPrice:'unknow'}]

export default function countReducer(preState=init,action){
    const {type, data} =action
    
    switch(type){
        case GET_ALBUM:
            return [data,...preState]
        default:
            return preState;
    }

}