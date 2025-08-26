import React, { useState } from 'react'
import { api } from '../api'

export default function Dashboard(){
  const [story, setStory] = useState(null)
  const [song, setSong] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState(null) // 'story' | 'song' | null

  const readStory = async () => {
    setMode('story'); setLoading(true); setSong(null)
    try{
      const s = await api('/api/content/random-story')
      setStory(s)
    }catch(e){ alert(e.message) } finally{ setLoading(false) }
  }

  const playSong = async () => {
    setMode('song'); setLoading(true); setStory(null)
    try{
      const s = await api('/api/content/random-song')
      setSong(s)
    }catch(e){ alert(e.message) } finally{ setLoading(false) }
  }

  return (
    <div className="container" style={{padding:'20px 0 60px'}}>
      <div className="card center">
        <div className="kicker">Choose your vibe</div>
        <h2 style={{marginTop:6}}>What do you feel like?</h2>
        <div style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
          <button className="btn" onClick={readStory}>Read a Random Story</button>
          <button className="btn" onClick={playSong}>Listen to Random Music</button>
          <button className="btn ghost" onClick={()=>{ localStorage.removeItem('token'); window.location.href='/' }}>Exit</button>
        </div>
      </div>

      <div style={{height:20}}/>

      {loading && <div className="card center">Loading your surprise…</div>}

      {mode === 'story' && story && (
        <div className="card" style={{maxWidth:800, margin:'22px auto', lineHeight:1.7}}>
          <div className="kicker">Story</div>
          <h3 style={{margin:'6px 0 10px'}}>{story.title}</h3>
          <p style={{color:'var(--muted)', fontSize:18}}>{story.body}</p>
        </div>
      )}

      {mode === 'song' && song && (
        <div className="card center" style={{maxWidth:700, margin:'22px auto'}}>
          <div className="kicker">Now playing</div>
          <h3 style={{margin:'6px 0 10px'}}>{song.title}</h3>
          <div style={{color:'var(--muted)'}}>by {song.artist}</div>
          <div style={{height:10}}/>
          <audio controls src={song.url} style={{width:'100%'}}></audio>
          <div style={{height:8}}/>
          <div style={{color:'var(--muted)'}}>Tip: click “Listen to Random Music” again for another track.</div>
        </div>
      )}
    </div>
  )
}
