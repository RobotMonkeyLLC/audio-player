
export default function Controls({setPlaying, playing, currentSong, setCurrentSong}) {
    return (
        <div className='row controls col-12 '>
            <div className='bg-secondary'>
                <button className='btn btn-primary'><i className="fa-solid fa-backward"></i></button>
                <button className='btn btn-primary' onClick={() => setPlaying(!playing)}>{playing ? 
                    <i className="fa-solid fa-pause"></i> : 
                    <i className="fa fa-play" aria-hidden="true"></i>}
                </button>
                <button className='btn btn-primary'><i className="fa-solid fa-forward"></i></button>
                <audio controls>
                    <source src={currentSong} type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    )
}