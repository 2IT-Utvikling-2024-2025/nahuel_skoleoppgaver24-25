import { useState } from 'react'
import './css/App.css'
import MyButton from './button.jsx'
import Clock from './clock.jsx'
import Profile from './profile.jsx'

export default function App() {

  let user = {
    name: 'Nahuel',
    age: 17,
    adresse: 'Elveveien 3'
  }



  return (
    <>
      <div className='container'>
        
        <h1>Welcome to my clock</h1>
        <Profile />
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
