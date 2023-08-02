
import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,deleteToDo, toggleTodo }) {
  return (
    <div>
       <ul className='list'>
        <h3>{todos.length === 0 && "No Todo's"}</h3> 
        {todos.map(todo => {
          return (
            <TodoItem {...todo} key={todo.id} deleteToDo={deleteToDo} toggleTodo={toggleTodo}/>
            
          )
          
        }) 
    }
      </ul>
    </div>
  )
}

export default TodoList
