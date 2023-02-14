import TodoItem from './TodoItem'
import { useState } from 'react'
import '../styles/toDoList.css'

function TodoList() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const handleComplete = (id) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex((task) => task.id === id)
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed
    if (newTasks[taskIndex].completed) {
      newTasks.push(newTasks.splice(taskIndex, 1)[0])
    }
    setTasks(newTasks)
  }

  const handleDelete = (id) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex((task) => task.id === id)
    newTasks.splice(taskIndex, 1)
    setTasks(newTasks)
  }

  const handleEdit = (id, newTask) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex((task) => task.id === id)
    newTasks[taskIndex].text = newTask
    setTasks(newTasks)
  }

  const sortedTasks = tasks.slice().sort((a, b) => a.text.localeCompare(b.text))

  const sortedIncompleteTasks = sortedTasks.filter(task => !task.completed)
  const sortedCompleteTasks = sortedTasks.filter(task => task.completed)

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {sortedIncompleteTasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
        {sortedCompleteTasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
