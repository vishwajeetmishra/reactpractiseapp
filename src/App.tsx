import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components'

function App() {

  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  )
}

export default App
