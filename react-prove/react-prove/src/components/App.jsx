import { useState } from 'react'
import Weather from './weather.jsx'
import './css/App.css'
import ValutaKurs from './valuta.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>tourist guide to the US!</h1>
    <div className='page'>
      
      <Weather/>
      <ValutaKurs/>
    </div>
    </>
  )
}

export default App
