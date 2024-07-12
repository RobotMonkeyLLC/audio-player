
export default function Controls({setPlaying, playing, currentSong, currentId,setCurrentId, nextSong, prevSong, playSong}) {
    return (
        <div className='row controls col-12 bg-secondary py-3 justify-content-center'>
            <div className='col-2 d-flex justify-content-between'>
                <button className='btn btn-primary' onClick={()=>playSong(currentId-1)}>
                    <i className="fa-solid fa-backward"></i>
                </button>
                <button className='btn btn-primary' onClick={() => setPlaying(!playing)}>{playing ? 
                    <i className="fa-solid fa-pause"></i> : 
                    <i className="fa fa-play" aria-hidden="true"></i>}
                </button>
                <button className='btn btn-primary' onClick={()=>playSong(currentId+1)}><i className="fa-solid fa-forward"></i></button>
                
                <audio>
                    <source src={currentSong} type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    )
}