import { useState, useEffect } from 'react'
import './css/App.css'
import CountDown from './countdown'
import ReactExplode from './eksplosjon.jsx'

function App() {

  const [time, setTime] = useState(10)

  useEffect(() => {

   const myInterval = setInterval(() => {
       if (time == 0) {
        
       setTimeout(() => {
        setTime(10)
       }, 600) 
       
       } else {
           setTime(time - 1)
       }
   }, 1000)
   
   return () => clearInterval(myInterval);
}, [time])

  return (
    <>
     {time == 0 ? <ReactExplode /> : <p>{time}</p> }
    </>
  )
}

export default App
