import PortionOne from "../components/LandingPages/portionOne"
import PortionThree from "../components/LandingPages/portionThree"
import PortionTwo from "../components/LandingPages/portionTwo"
import { Howl } from 'howler';
import { useState, useEffect, useRef } from "react";


const musicData = [
  { image: '../../../public/alan.png', title: 'Song 1', playing: '10.222.333', time: '3:45', album: 'Album 1', src: "/src/assets/musics/Alan Walker,Who I Am.mp3" },
  { image: '../../../public/alan.png', title: 'Song 2', playing: '10.222.333', time: '4:20', album: 'Album 2', src: "/src/assets/musics/Alan Walker,Barcelona.mp3" },
  { image: '../../../public/alan.png', title: 'Song 3', playing: '10.222.333', time: '5:10', album: 'Album 3', src: "/src/assets/musics/Alan Walker,Who I Am.mp3" },
  { image: '../../../public/alan.png', title: 'Song 1', playing: '10.222.333', time: '3:45', album: 'Album 1', src: "/src/assets/musics/Alan Walker,Who I Am.mp3" },
  { image: '../../../public/alan.png', title: 'Song 2', playing: '10.222.333', time: '4:20', album: 'Album 2', src: "/src/assets/musics/Alan Walker,Who I Am.mp3" },

];

const LandingPage = () => {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [seek, setSeek] = useState(0);
  const soundRef = useRef(null);
  

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.unload();
    }
    soundRef.current = new Howl({
      src: [musicData[currentSongIndex].src],
      html5: true,
      onplay: () => {
        setDuration(soundRef.current.duration());
        requestAnimationFrame(updateSeek);
      },
      onend: () => {
        handleNext();
      },
    });
    if (isPlaying) {
      soundRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  const updateSeek = () => {
    if (soundRef.current && soundRef.current.playing()) {
      setSeek(soundRef.current.seek());
      requestAnimationFrame(updateSeek);
    }
  };

  const handleRowClick = (song, index) => {
    if (currentSongIndex === index) {
      togglePlayPause();
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentSongIndex === 0 ? musicData.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currentSongIndex === musicData.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(nextIndex);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newSeek = parseFloat(e.target.value);
    setSeek(newSeek);
    if (soundRef.current) {
      soundRef.current.seek(newSeek);
    }
  };

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.unload();
      }
    };
  }, []);
  return (
    <>

      <div className="flex">
        <PortionOne />
        <PortionTwo data={musicData} onRowClick={handleRowClick} currentSongIndex={currentSongIndex} />
        <PortionThree
          currentSong={musicData[currentSongIndex]}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          duration={duration}
          seek={seek}
          handleSeek={handleSeek} />
      </div>

    </>
  )
}

export default LandingPage