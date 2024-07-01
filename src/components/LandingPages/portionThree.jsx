/* eslint-disable react/prop-types */


import { BiPlay, BiPause, BiSkipNext, BiSkipPrevious,BiRefresh } from "react-icons/bi";
import { ImLoop } from "react-icons/im";




const PortionThree = ({ currentSong, onPrevious, onNext, isPlaying, togglePlayPause, duration, seek, handleSeek }) => {


  const formatTime = (seconds) => { 
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };


  return (
    <>
      <div className="portion-three max-md:hidden w-[18%] flex flex-col justify-end items-center h-screen px-[5px] pb-5">
        <div className="w-[90%] h-[300px] flex flex-col bg-[#5f1414] rounded-xl p-4">
          <div className="flex justify-center">
            <p className="text-[12px] text-white">Now Playing</p>
          </div>
          <div className="flex justify-center bg-slate-600 rounded-xl my-2">
            {currentSong && <img src={currentSong.image} alt="song-image" className="w-[100px] h-[100px]" />}
          </div>
          <div className="text-center mt-2">
            <p className="text-white font-medium text-[15px]">{currentSong?.title || "No song playing"}</p>
            <p className="text-[#cccccc] text-[10px]">{currentSong?.artist || "Alan Walker"}</p>
          </div>
          <div className="mt-7 flex justify-center items-center gap-1">
            <p className="text-[10px] text-white">{formatTime(seek)}</p>
            <input
              type="range"
              min="0"
              max={duration}
              value={seek}
              onChange={handleSeek}
              className="w-full h-[3px] bg-[#aaaaaa] appearance-none cursor-pointer accent-[#fff]"
            />
            <p className="text-[10px] text-white">{formatTime(duration)}</p>
          </div>
          <div className="mt-2 flex justify-between items-center">
            {/* Audio controls */}
            <BiRefresh size={20} className="cursor-pointer text-white" />

            <BiSkipPrevious size={30} onClick={onPrevious} className="cursor-pointer text-white" />
            {isPlaying ? (
              <BiPause size={40} onClick={togglePlayPause} className="cursor-pointer text-white " />
            ) : (
              <BiPlay size={40} onClick={togglePlayPause} className="cursor-pointer text-white" />
            )}
            <BiSkipNext size={30} onClick={onNext} className="cursor-pointer text-white" />
            <ImLoop  size={15} className="cursor-pointer text-white"/>

          </div>
        </div>
      </div>
    </>
  )
}

export default PortionThree