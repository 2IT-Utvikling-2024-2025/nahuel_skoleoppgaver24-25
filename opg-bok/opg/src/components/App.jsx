import { useState } from 'react'
import './css/App.css'
import MyForm from './opg143.jsx'
import Partall from './opg149.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyForm />
      <Partall />
    </>
  )
}

export default App
