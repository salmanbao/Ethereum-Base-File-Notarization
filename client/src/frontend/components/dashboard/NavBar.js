import React from 'react'
import { connect, useDispatch } from 'react-redux'

import Logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../../actions/authActions'

const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-light bg-light justify-content-between fixed-top">
      <Link className="navbar-brand" style={{ marginLeft: '5%' }} to="/">
        <img src={Logo} width={40} height={40} />
      </Link>
      <button
        className="btn btn-outline-dark my-2 my-sm-0"
        onClick={() => logoutUser(dispatch)}
      >
        Logout
      </button>
    </nav>
  )
}

export default NavBar
