import { useState } from 'react'
import './App.css'
import ListaEjercicios from './componentes/Lisejercicios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <ListaEjercicios />
      </div>
    </>
  )
}

export default App
