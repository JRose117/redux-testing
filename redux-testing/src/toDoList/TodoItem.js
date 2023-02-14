import React from 'react'

function TodoItem({ id, text, completed, handleComplete, handleDelete, handleEdit }) {
  return (
    <li className={`todo-item${completed ? ' completed' : ''}`}>
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
        onClick={() => handleComplete(id)}
      >
        {text}
      </span>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button
        onClick={() => {
          const newTask = prompt('Enter new task:', text)
          if (newTask !== null && newTask.trim()) {
            handleEdit(id, newTask)
          }
        }}
      >
        Edit
      </button>
    </li>
  )
}

export default TodoItem
