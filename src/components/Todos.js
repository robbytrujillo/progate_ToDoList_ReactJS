import React from 'react'
import TodoItem from './TodoItem' // Lakukan import

const Todos = (props) => {
  return (
    <div style={{width: '40%', margin: '0 auto'}}>
      {props.todos.map((todo) => {
        // Berikan datanya ke TodoItem
        return (
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        // Memberikan functionnya kepada todoItem melalui props
        toggleCompleted={props.toggleCompleted}
        />
        ) 
      })}
    </div>
  )
}

export default Todos