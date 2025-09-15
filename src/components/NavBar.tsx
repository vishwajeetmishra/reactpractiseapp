import React from 'react'
import { Link } from 'react-router-dom'
import { FormsPage } from '../pages'

type Props = {}

const NavBar = (_props: Props) => {
  return (
    <nav>
        <Link to="/">Home | </Link>
        <Link to="/formspage">Forms | </Link>
        <Link to="/hoc">HOC</Link>
    </nav>
  )
}

export default NavBar;