import React from 'react'
import Player from '../player/Player'

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Player
        url={
          'https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm'
        }
      />
    </div>
  )
}

export default Settings
