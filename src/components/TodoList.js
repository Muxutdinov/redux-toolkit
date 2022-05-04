import React from 'react'

const TodoList = ({value}) => {
  return (
    <div>
        <span>{value.text}</span>
        <button>toggle</button>
        <button>delete</button>
    </div>
  )
}

export default TodoList