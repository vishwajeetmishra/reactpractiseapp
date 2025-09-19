import React from 'react'
import { Link } from 'react-router-dom'
import { FormsPage } from '../pages'

type Props = {}

const NavBar = (_props: Props) => {
  return (
    <nav>
        <Link to="/">Home | </Link>
        <Link to="/formspage">Forms | </Link>
        <Link to="/hoc">HOC | </Link>
        <Link to="/reduxcounter">Redux Counter | </Link>
        <Link to="/users">Users</Link>
    </nav>
  )
}

export default NavBar;