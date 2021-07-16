import React, {useEffect} from 'react'
import Todo from '../Todo/Todo'

export default function ToDoListView(props){
    return(
        <div>
            <ul>
                {props.todoList.map(todo => <Todo todo={todo} />)}
            </ul>
        </div>
    )
}