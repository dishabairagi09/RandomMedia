import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'

export default function Auth({ mode='login' }){
  const nav = useNavigate()
  const [form, setForm] = useState({ name:'', email:'', password:'' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try{
      const path = mode === 'signup' ? '/api/auth/signup' : '/api/auth/login'
      const payload = mode === 'signup' ? form : { email: form.email, password: form.password }
      const res = await api(path, 'POST', payload)
      localStorage.setItem('token', res.token)
      nav('/app')
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{maxWidth:520}}>
      <div className="card" style={{marginTop:40}}>
        <div className="kicker">{mode === 'signup' ? 'Create account' : 'Welcome back'}</div>
        <h2 style={{margin:'6px 0 14px'}}> {mode === 'signup' ? 'Sign up' : 'Log in'} </h2>
        <form onSubmit={onSubmit} style={{display:'grid', gap:12}}>
          {mode === 'signup' && (
            <input className="input" placeholder="Your name" required
              value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          )}
          <input className="input" placeholder="Email" type="email" required
            value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input className="input" placeholder="Password" type="password" required minLength={6}
            value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
          {error && <div style={{color:'#ff6384', fontWeight:600}}>{error}</div>}
          <button className="btn" disabled={loading}>
            {loading ? 'Please wait…' : (mode === 'signup' ? 'Create account' : 'Log in')}
          </button>
        </form>
        <div style={{height:8}}/>
        <div style={{color:'var(--muted)'}}>
          {mode === 'signup' ? 'Already have an account?' : "New here?"}
          <button type="button" className="btn ghost" style={{marginLeft:8}}
            onClick={()=> window.location.href = mode === 'signup' ? '/login' : '/signup'}>
            {mode === 'signup' ? 'Log in' : 'Sign up'}
          </button>
        </div>
      </div>
    </div>
  )
}
