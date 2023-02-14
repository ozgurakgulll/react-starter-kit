import {memo} from "react";

function TodoItem({todo}){
    console.log('Rander Todo Item')
    return(
        <li>
            {todo}
        </li>
    )
}
export default memo(TodoItem)
