// Simple API helper
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'

export async function api(path, method='GET', body){
  const token = localStorage.getItem('token')
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  })
  if(!res.ok){
    let msg = 'Request failed'
    try { const j = await res.json(); msg = j.error || msg } catch {}
    throw new Error(msg)
  }
  return res.json()
}
