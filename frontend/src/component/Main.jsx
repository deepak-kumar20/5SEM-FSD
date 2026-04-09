import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'

function Main() {
  return (
    <div className="main-container">
      <div className="main-content">
        <h1>Welcome to Student Portal</h1>
        <p>Manage your student profile with ease</p>
        <div className="button-group">
          <Link to="/login" className="btn btn-login">
            Login
          </Link>
          <Link to="/register" className="btn btn-register">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Main

