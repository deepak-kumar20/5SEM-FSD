import React from 'react'
import { Link } from 'react-router-dom'
const MainLayout = () => {
  return (
      <div>
          <nav>
                <Link to="/login" style={{margin:"10px",alignItems:"center"}}>Login</Link>
                <Link to="/register" style={{margin:"10px",alignItems:"center"}}>Register</Link>
          </nav>
    </div>
  )
}

export default MainLayout