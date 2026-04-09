import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        {user ? (
          <div className="user-info">
            <h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard
