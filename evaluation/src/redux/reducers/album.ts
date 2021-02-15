import { Album } from "../actions";

export interface Action{
    type: 'set',
    payload:{
        albums:Album[],
        keyword:string
    }
}

export interface State{
    albums:Album[],
    counter:number,
    keyword:string
}

const initState:State = {
    albums: [],
    counter: 0 ,
    keyword:""
}

export default function(state = initState, action:Action) :State{
    let newAlbums:Album[] = [...state.albums];

    switch(action.type){
        case 'set':
            newAlbums = action.payload.albums;
            break;
    }

    const newCounter = newAlbums.length>0?newAlbums.reduce((acc)=>acc+1,0):0;
    const newKeyword = action.payload?.keyword;

    return {
        albums:newAlbums,
        counter:newCounter,
        keyword:newKeyword 
    }
}