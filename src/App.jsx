import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

      <TodoItem />

    </div>
  )
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

export default App
