import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import NavBar from './Components/NavBar'
function App() {
  
  console.log(import.meta.env.VITE_10_1_VAR)

  return (
    <>
      
      <Router>

        <header>
      <h1>ScreenViews</h1>
      <NavBar/>
        </header>

      <h2>-Test- {import.meta.env.VITE_10_1_VAR}</h2>
      <br/>


    <Routes>

      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/shows' element={<h1>All Shows</h1>} />
      <Route path='/shows/new' element={<h1>Form for New Shows</h1>} />

      

    </Routes>

    <footer>
      10.1
    </footer>
      </Router>
    </>
  )
}

export default App
