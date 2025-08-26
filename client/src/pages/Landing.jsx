import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="container">
      <div className="hero">
        <div>
          <h2>By Disha</h2>
          <div className="kicker">Read • Listen • Chill</div>
          <h1>Beautiful random stories and songs in one click.</h1>
          <p>Sign up or log in to unlock a world of tiny tales and bite-size tracks. No endless menus—just one tap for surprise joy.</p>
          <div style={{display:'flex', gap:12}}>
            <Link className="btn" to="/signup">Get Started</Link>
            <Link className="btn ghost" to="/login">I already have an account</Link>
          </div>
        </div>
        <div className="card">
          <div className="grid-3">
            <Feature title="One‑tap Random" text="Skip choice overload—get a story or a song instantly."/>
            <Feature title="Clean & Pretty" text="Glassmorphism, gradients, and delightful micro‑UI."/>
            <Feature title="Secure Login" text="Your account is protected with JWT auth."/>
          </div>
          <div style={{height:16}}/>
          <div className="grid-3">
            <Feature title="Reading Mode" text="Focus card with comfy typography."/>
            <Feature title="Music Player" text="HTML5 audio with sleek controls."/>
            <Feature title="Exit Anytime" text="Log out in a single click."/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Feature({title, text}){
  return (
    <div className="card" style={{padding:16}}>
      <div style={{fontWeight:700, marginBottom:6}}>{title}</div>
      <div style={{color:'var(--muted)'}}>{text}</div>
    </div>
  )
}
