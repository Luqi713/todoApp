import { useState } from 'react'
import './App.css'
import TodoForm from './Component/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center>
     <h1>To Do App</h1>
     <TodoForm/>
    
    </center>
  )
}

export default App
