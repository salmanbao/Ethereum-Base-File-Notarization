import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="container text-center  mt-15">
      <div className="row">
        <div className="col-sm-12 ">
          <h1>Login/Register Module</h1>
          <p>[Full-stack app with user authentication via passport and JWTs]</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-12">
          <Link to="/register" className="btn btn-large btn-dark hoverable">
            Register
          </Link>
          <Link to="/login" className="btn btn-large btn-light hoverable ml-5">
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Landing
