import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  
  console.log(import.meta.env.VITE_10_1_VAR)

  return (
    <>
      
      <Router>

      <h1>ScreenViews</h1>

      <h2>-Test- {import.meta.env.VITE_10_1_VAR}</h2>

      </Router>
    </>
  )
}

export default App
