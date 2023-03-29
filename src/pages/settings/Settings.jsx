import React from 'react'
import Player from '../player/Player.jsx'
import url from '../../assets/Paris Morning Coffee Shop Ambience - Relaxing Jazz Bossa Nova Music for Good Mood Start the Day.webm'

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Player url={url} />
    </div>
  )
}

export default Settings
