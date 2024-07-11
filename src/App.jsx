import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controls from './Controls.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [songs, setSongs] = useState([])
  const [playing, setPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  
  useEffect(() => {
    fetch('https://playground.4geeks.com/sound/songs').then((response) => response.json()).then((data) => {
      setSongs(data.songs)
      console.log(songs)
    } )
  }, [])

  useEffect(() => {
    console.log('Playing:', playing)
    document.querySelector('audio').play()
  }, [playing])
  
  const playSong = (e) => {
    console.log(e)
    console.log('Playing song', e.target.attributes.href.value)
    let songUrl = ('https://playground.4geeks.com'+e.target.attributes.href.value)
    //let audio = new Audio(songUrl)
    console.log(songUrl)  
    setCurrentSong(songUrl)
    setPlaying(true)
  }
  return (
    <div className='col-12'>
      {songs.map((song, index) => {
        return (
          <div key={index} className='row song' href={song.url} onClick={e => playSong(e)}>
            <div className='col-1' href={song.url}>{index}</div>
            <div className='col-11' href={song.url}>{song.name}</div>            
          </div>
        )
      })}
      <Controls 
        setPlaying={setPlaying} 
        playing={playing} 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}/>
    </div>
  )
}

export default App
