/* eslint-disable react/prop-types */


import { BiPlay, BiPause, BiSkipNext, BiSkipPrevious } from "react-icons/bi";


const PortionThree = ({ currentSong, onPrevious, onNext, isPlaying, togglePlayPause, duration, seek, handleSeek }) => {




  return (
    <>
      <div className="portion-three w-[15%] flex flex-col justify-end items-center h-screen px-[5px] pb-5">
        <div className="w-[80%] h-[300px] flex flex-col bg-slate-200 rounded-xl p-4">
          <div>
            <p>Now Playing</p>
          </div>
          <div className="flex justify-center">
            {currentSong && <img src={currentSong.image} alt="song-image" className="w-[100px] h-[100px]" />}
          </div>
          <div className="text-center mt-2">
            <p>{currentSong?.title || "No song playing"}</p>
            <p>{currentSong?.artist || ""}</p>
          </div>
          <div className="mt-2">
            {/* Audio timeline */}
            <input
              type="range"
              min="0"
              max={duration}
              value={seek}
              onChange={handleSeek}
              className="w-full"
            />
          </div>
          <div className="mt-2 flex justify-around items-center">
            {/* Audio controls */}
            <BiSkipPrevious size={30} onClick={onPrevious} className="cursor-pointer" />
            {isPlaying ? (
              <BiPause size={30} onClick={togglePlayPause} className="cursor-pointer" />
            ) : (
              <BiPlay size={30} onClick={togglePlayPause} className="cursor-pointer" />
            )}
            <BiSkipNext size={30} onClick={onNext} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PortionThree