import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controls from './Controls.jsx'

function App() {
  let baseURL = 'https://playground.4geeks.com'

  const [songs, setSongs] = useState([])
  const [playing, setPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const [currentId, setCurrentId] = useState(1)
  const [nextSong, setNextSong] = useState(null)
  const [prevSong, setPrevSong] = useState(null)
  
  useEffect(() => {
    fetch(baseURL+'/sound/songs').then((response) => response.json()).then((data) => {
      setSongs(data.songs)
      console.log(songs)
    } )
  }, [])

  useEffect(() => {
    playing ? 
      document.querySelector('audio').play() : 
      document.querySelector('audio').pause()    
    
  }, [playing, currentId])

  const toggleActive = (id) => {
    let songs = document.querySelectorAll('.song')
    let songID = id

    songs.forEach(song => song.classList.remove('active'))
    
    let row = document.querySelector('.song [songid="'+songID+'"]')
    row.parentElement.classList.add('active')
  }

  const playSong = (id) => {
    //console.log('Playing song:', e.target.attributes.songID.value)
    let songID = id > songs.length ? 1 : id < 1 ? songs.length : id
    setCurrentId(songID)
    console.log(id)
    let songUrl = (baseURL+songs[songID-1].url)
    
    currentSong === songUrl ? setPlaying(!playing) : setPlaying(true)
    
    setCurrentSong(songUrl)
    document.querySelector('audio').load()
    toggleActive(songID)
  }
  
  return (
    <div className='col-12 pb-5'>
      {songs.map((song, index) => {
        return (
          <div key={index} className='row song' songid={song.id} onClick={() => {playSong(song.id)}}>
            <div className='col-1' href={song.url} songid={song.id}>{song.id}</div>
            <div className='d-flex col-11' href={song.url} songid={song.id}>{song.name}</div>            
          </div>
        )
      })}
      <Controls 
        setPlaying={setPlaying} 
        playing={playing} 
        currentSong={currentSong}
        currentId={currentId}
        setCurrentId={setCurrentId}
        nextSong={nextSong}
        prevSong={prevSong}
        playSong={playSong}/>
    </div>
  )
}

export default App
