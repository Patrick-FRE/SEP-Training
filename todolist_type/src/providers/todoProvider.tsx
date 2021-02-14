import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getTodos } from "../helper/myAPI";

export interface Todo{
    title?:string,
    userId?:string,
    id:string,
    completed?:boolean
}

export interface Action {
    type: "add" | "remove" | "set",
    payload:Todo,
    batch?:Todo[]
}

interface State{
    todolist:Array<Todo>,
    counter:number
}

interface TodolistContext{
    state:State,
    dispatch:React.Dispatch<Action>
}

const todolistReducer = (state:State = {todolist:[],counter:0}, action:Action):State => {
    const newTodolist = [...state.todolist];

    switch (action.type){
        case 'add':
            newTodolist.unshift(action.payload);
            break;
        case 'remove':
            const targetIndex = newTodolist.findIndex(x=>x.id===action.payload?.id);
            newTodolist.splice(targetIndex,1);
            break;
        case 'set':
            newTodolist.push(...(action.batch?action.batch:[]));
    }

    const newCounter = newTodolist.length>0?newTodolist.reduce((acc,val)=>acc+1,0):0;
    const newState:State = {todolist:newTodolist,counter:newCounter};

    return newState;
}

const todolistContext = createContext<TodolistContext>({} as TodolistContext);

export const TodolistProvider:React.FC = ({children}) => {
    const [state,dispatch] = useReducer(todolistReducer,{todolist:[],counter:0});

    useEffect(()=>{
        getTodos().then(res=>{
            dispatch({type:'set',batch:res,payload:{id:'init'}});
        });
    },[]);

    return (
        <todolistContext.Provider value={{state, dispatch}}>
            {children}
        </todolistContext.Provider>
    );
}

export const useTodolist = () =>{
    const {state, dispatch} = useContext(todolistContext);
    return {state, dispatch};
}