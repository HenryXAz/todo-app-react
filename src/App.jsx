import {  useState } from 'react'
import TodoList from './components/TodList'
import TodoForm from './components/TodoForm'

function App() {
  const [todo, setTodo] = useState({
    id: '',
    title: '',
    completed: false,
  })
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? [])

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getTodos = () => JSON.parse(localStorage.getItem('todos'))

  const handleAddTodo = (todo) => {
    setTodo({
      id: '',
      title: '',
      completed: false,
    })

    todos.unshift(todo)
    saveTodos()

    
    setTodos(getTodos)
    
  }

  const handleCompleted = (id, completed) => {
    const todo = todos.find(todo => todo.id === id)
    todo.completed = !completed
    saveTodos()
    
    setTodos(getTodos)
  }

  const handleUpdateTodo = (id, title ) => {
    const todoFound = todos.find(todoFound => todoFound.id === id)

    if(todoFound) {
      todoFound.title = title

      saveTodos()

      setTodos(getTodos)
    }
  }

  
  const handleDeleteTodo = (id) => {
    const todoFind = todos.find(todo => todo.id === id)

    if(todoFind) {
      todos.splice(todos.indexOf(todoFind), 1)
      saveTodos()

      setTodos(getTodos)
    }


  }

  return (
    <div className="bg-gray-100 overflow-y-auto w-full h-full inset-0 fixed" >
      <h1 className="mt-4 text-center font-light text-3xl">Todo App</h1>
      <TodoForm 
        todo={todo} 
        handleAddTodo={handleAddTodo}
      />
      <TodoList 
        todos={todos} 
        handleCompleted={handleCompleted} 
        setTodo={setTodo}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}

export default App
