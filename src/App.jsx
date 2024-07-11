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
  const [nextSong, setNextSong] = useState(null)
  const [prevSong, setPrevSong] = useState(null)
  
  useEffect(() => {
    fetch('https://playground.4geeks.com/sound/songs').then((response) => response.json()).then((data) => {
      setSongs(data.songs)
      console.log(songs)
    } )
  }, [])

  useEffect(() => {
    console.log('Playing:', playing)
    playing ? 
      document.querySelector('audio').play() : 
      document.querySelector('audio').pause()
      
  }, [playing, currentSong])
  
  const playSong = (e) => {
    //console.log('Playing song:', e.target.attributes.songID.value)
    let songID = e.target.attributes.songid.value || null
    console.log(songs[songID-1])
    let songUrl = ('https://playground.4geeks.com'+songs[songID-1].url)
    let prevSong = songID > 1 ? ('https://playground.4geeks.com'+songs[songID-2].url) : ('https://playground.4geeks.com'+songs[songs.length-1].url)
    let nextSong = songID > songs.length-1 ? ('https://playground.4geeks.com'+songs[0].url) : ('https://playground.4geeks.com'+songs[songID].url)
    songUrl === currentSong ? setPlaying(!playing) :
    setCurrentSong(songUrl)
    setPrevSong(prevSong)
    setNextSong(nextSong)
    console.log('Current song:', currentSong, 'Next song:', nextSong, 'Prev song:', prevSong)
    document.querySelector('audio').load()
    setPlaying(true)
  }
  return (
    <div className='col-12'>
      {songs.map((song, index) => {
        return (
          <div key={index} className='row song' onClick={e => playSong(e)}>
            <div className='col-1' href={song.url} songid={song.id}>{song.id}</div>
            <div className='d-flex col-11' href={song.url} songid={song.id}>{song.name}</div>            
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
