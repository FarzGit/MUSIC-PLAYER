import PortionOne from "../components/LandingPages/portionOne";
import PortionThree from "../components/LandingPages/portionThree";
import PortionTwo from "../components/LandingPages/portionTwo";
import { Howl } from 'howler';
import { useState, useEffect, useRef } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const initialMusicData = [
  { image: '/alan.png', title: 'Who I Am', playing: '10.222.333', time: '2:07', album: 'Alan Walker', src: "/musics/Alan Walker,Who I Am.mp3" },
  { image: '/alan-walker-mask1.jpg', title: 'Barcelona', playing: '10.222.333', time: '3:44', album: 'Album 2', src: "/musics/Alan Walker,Barcelona.mp3" },
  { image: '/alan-yellaback.jpg', title: 'SAlan Walker - Faded', playing: '10.222.333', time: '3:32', album: 'Album 3', src: "/musics/Alan Walker - Faded.mp3" },
  { image: '/alan.png', title: 'Faded-Remix', playing: '10.222.333', time: '5:04', album: 'Album 1', src: "/musics/Y2meta.app - Alan Walker - Faded (Remix by Julio Mortal Mix) (320 kbps).mp3" },
  { image: '/alan-walker-mask1.jpg', title: 'For Those Who Dare', playing: '10.222.333', time: '1:34', album: 'Album 2', src: "/musics/For Those Who Dare.mp3" },
  { image: '/alan.png', title: 'Who I Am', playing: '10.222.333', time: '2:07', album: 'Alan Walker', src: "/musics/Alan Walker,Who I Am.mp3" },
  { image: '/alan-walker-mask1.jpg', title: 'Barcelona', playing: '10.222.333', time: '3:44', album: 'Album 2', src: "/musics/Alan Walker,Barcelona.mp3" },
  { image: '/alan-yellaback.jpg', title: 'SAlan Walker - Faded', playing: '10.222.333', time: '3:32', album: 'Album 3', src: "/musics/Alan Walker - Faded.mp3" },
  { image: '/alan.png', title: 'Faded-Remix', playing: '10.222.333', time: '5:04', album: 'Album 1', src: "/musics/Y2meta.app - Alan Walker - Faded (Remix by Julio Mortal Mix) (320 kbps).mp3" },
  { image: '/alan-walker-mask1.jpg', title: 'For Those Who Dare', playing: '10.222.333', time: '1:34', album: 'Album 2', src: "/musics/For Those Who Dare.mp3" },
];

const LandingPage = () => {
  const [musicData, setMusicData] = useState(initialMusicData);
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
    if (soundRef.current && soundRef.current.playing()) { // this for updating the seek when a music changed 
      setSeek(soundRef.current.seek());
      requestAnimationFrame(updateSeek);
    }
  };

  const handleRowClick = (song, index) => { // this is the function for handle the music selections
    if (currentSongIndex === index) {
      togglePlayPause();
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => { // this is for handle the previous button 
    const prevIndex = currentSongIndex === 0 ? musicData.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
  };

  const handleNext = () => { // this is for handling the next button of the music player
    const nextIndex = currentSongIndex === musicData.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(nextIndex);
  };

  const togglePlayPause = () => { // this is for puase and play the musics while playing or not
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => { // this is for handle the seek while playing the musics
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
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <PortionOne />
        <PortionTwo
          data={musicData}
          onRowClick={handleRowClick}
          currentSongIndex={currentSongIndex}
          setMusicData={setMusicData}
        />
        <PortionThree
          currentSong={musicData[currentSongIndex]}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          duration={duration}
          seek={seek}
          handleSeek={handleSeek}
        />
      </div>
    </DndProvider>
  );
};

export default LandingPage;
