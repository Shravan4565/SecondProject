import React from 'react'
import TodoItem from "C:/Users/yadav/Desktop/React App/todos-list/src/MyComponents/TodoItem.js";


const Todos = (props) => {
  let styleone = {
    minHeight: "70vh"
  }
  return (
    <div className='container my-3' style={styleone}>
      <h3 className='my-3'>Todo List</h3>
      {props.todos.length===0? "NO Todo is Available":
      props.todos.map( (todo)=>{
        return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        
        )
      })
      }
    </div>
  )
}

export default Todos
