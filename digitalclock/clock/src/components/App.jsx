import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MyButton from './button.jsx'
import Clock from './clock.jsx'
import Profile from './profile.jsx'

function App() {

  let user = {
    name: 'Nahuel',
    age: 17,
    adresse: 'Elveveien 3'
  }



  return (
    <>
      <div className='container'>
        
        <h1>Welcome to my clock</h1>
        {isLoggedInn && <Profile />}
        <p>
          {user.name},{user.age} år. Bor i {user.adresse}
        </p>

        <div>
          <Clock />
        </div>

      </div>
    </>
  )
}

export default App
