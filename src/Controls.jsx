
export default function Controls({setPlaying, playing, currentSong, currentId,setCurrentId, nextSong, prevSong, playSong}) {
    
    const changeVol = (vol) => {
        let audio = document.querySelector('audio')
        let currentVol = audio.volume
        let newVol = currentVol + vol
        if(newVol > 1) newVol = 1
        if(newVol < 0) newVol = 0
        audio.volume = newVol
        document.querySelector('.volume-bar').style.width = `${newVol*100}%`
    }

    return (
        <div className='row controls col-12 bg-secondary py-3 justify-content-center'>
            <div className="col-4"></div>
            <div className='col-2 d-flex justify-content-between'>
                <button className='btn btn-primary' onClick={()=>playSong(currentId-1)}>
                    <i className="fa-solid fa-backward"></i>
                </button>
                <button className='btn btn-primary' onClick={() => setPlaying(!playing)}>{playing ? 
                    <i className="fa-solid fa-pause"></i> : 
                    <i className="fa fa-play" aria-hidden="true"></i>}
                </button>
                <button className='btn btn-primary' onClick={()=>playSong(currentId+1)}><i className="fa-solid fa-forward"></i></button>
                
                <audio src={currentSong}>                    
                </audio>
            </div>
            <div className="col-4 d-flex justify-content-center volume">
                <button onClick={()=>changeVol(-0.1)}>-</button>
                <div className="volume-container col-4 ">
                    <div className='volume-bar bg-primary'></div>
                </div>                
                <button onClick={()=>changeVol(0.1)}>+</button>
            </div>
        </div>
    )
}