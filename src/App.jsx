import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controls from './Controls.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [songs, setSongs] = useState([])
  
  useEffect(() => {
    fetch('https://playground.4geeks.com/sound/songs').then((response) => response.json()).then((data) => {
      setSongs(data.songs)
      console.log(songs)
    } )
  }, [])

  

  return (
    <>
      {songs.map((song, index) => {
        return (
          <div key={index} className='row'>
            <div className='col-1'>{index}</div>
            <div className='col-7 pe-5'>{song.name}</div>
            <div className=''></div>
          </div>
        )
      })}
      <Controls />
      
    </>
  )
}

export default App
