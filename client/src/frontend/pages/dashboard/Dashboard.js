import React, { Component } from 'react'
import NavBar from '../../components/dashboard/NavBar'
import '../../css/dashboardStyle.css'
import Logo from '../../../images/logo.png'
import UploadFile from '../../components/dashboard/UploadFile'
import CheckFile from '../../components/dashboard/CheckFile'
import OutputContainer from '../../components/dashboard/OutputContainer'
import jwt_decode from 'jwt-decode'
const token = localStorage.getItem('jwtToken')

const Dashboard = () => {
  const { name } = jwt_decode(token)
  return (
    <div>
      <NavBar />
      <div className="card-body">
        <div className="container text-dark" style={{ marginTop: '40px' }}>
          <div className="card">
            <h3 className="text-center mt-3 text-uppercase">
              Hi there, {name}!
            </h3>
          </div>
        </div>
        <br />
        <br />
        <UploadFile />s
        <br />
        <CheckFile />
        <br />
        <OutputContainer />
      </div>
    </div>
  )
}

export default Dashboard
