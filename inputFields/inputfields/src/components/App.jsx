import { useState } from 'react'
import './css/App.css'
import TextField from './textfield'
import MyForm from './opg143'
import Checkbox from './checkbox.jsx'
import Radio from './radio.jsx'

function App() {

  return (
    <>
      <h1>Oppgave 1</h1>
      <TextField />
      <h1>Oppgave 2</h1>
      <Checkbox />
      <h1>Oppgave 3</h1>
      <Radio />
    </>
  )
}

export default App
