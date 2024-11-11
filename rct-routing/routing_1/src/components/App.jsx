import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.css'
import Layout from './layout.jsx'

import Home from './pages/home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ClassList from './pages/classlist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Layout/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/classlist' element={<ClassList />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
