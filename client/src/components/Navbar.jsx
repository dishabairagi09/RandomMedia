import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Navbar(){
  const nav = useNavigate()
  const loc = useLocation()
  const authed = !!localStorage.getItem('token')
  return (
    <div className="container navbar">
      <div className="brand">
        <img src={logo} alt="logo" width="36" height="36" className="brand-badge" />
        <div>Random Media</div>
      </div>
      <div style={{display:'flex', gap:12}}>
        {authed ? (
          <button className="btn ghost" onClick={()=>{ localStorage.removeItem('token'); nav('/') }}>
            Exit
          </button>
        ) : (
          <>
            {loc.pathname !== '/login' && <Link className="btn ghost" to="/login">Log in</Link>}
            {loc.pathname !== '/signup' && <Link className="btn" to="/signup">Sign up</Link>}
          </>
        )}
      </div>
    </div>
  )
}
