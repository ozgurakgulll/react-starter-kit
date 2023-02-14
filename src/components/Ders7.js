import {useState, useReducer, useCallback, useMemo} from "react";

import TodoReducer from './reducers/Reducer'
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function Ders7(){
    console.log('Rander Ders7')
    const [count,setCount]=useState(0)
    const [state,dispatch]=useReducer(TodoReducer,{
        todos:[],
        todo:'',
        search:''
    });

    const submitHandle=useCallback(e=>{
        e.preventDefault()
        dispatch({type:'ADD_TODO',todo:state.todo})
    },[state.todo])

    const onChange=useCallback(e=>{
        dispatch({
            type:'SET_TODO',
            value:e.target.value
        })
    },[])

    const searchHandle=e=>{
    dispatch({
        type:'SET_SEARCH',
        value:e.target.value
    })
    }

    const filteredTodos=useMemo(()=>{
        return state.todos.filter(todo=>todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
    },[state.todos,state.search])

    return(
        <>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count=>count+1)}>
                Artır
            </button>
            <hr/>
            <h1>Todo App</h1>
            <input type="text" value={state.search} placeholder="Todolarda ara" onChange={searchHandle}/>
            {state.search}
            <hr/>
            <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
            <Todos todos={filteredTodos}/>
        </>
    )
}
export default Ders7
