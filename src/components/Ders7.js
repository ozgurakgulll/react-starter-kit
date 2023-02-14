import {useState,useReducer} from "react";

import TodoReducer from './reducers/Reducer'
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function Ders7(){


    const [state,dispatch]=useReducer(TodoReducer,{
        todos:[],
        todo:''
    });

    const submitHandle=e=>{
        e.preventDefault()
        dispatch({type:'ADD_TODO',todo:state.todo})
    }
    const onChange=e=>{
        dispatch({
            type:'SET_TODO',
            value:e.target.value
        })
    }
    return(
        <>
            <h1>Todo App</h1>
            <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
            <Todos todos={state.todos}/>
        </>
    )
}
export default Ders7
