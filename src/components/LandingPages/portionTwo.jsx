import Banner from "../Banner/banner"
import { useState } from "react";
import NavBar from "../Navbar/navBar"
import MusicTable from "../Table/musicTable"
import { Howl } from 'howler';

const musicData = [
  { image: '../../../public/alan.png', title: 'Song 1', playing: '10.222.333', time: '3:45', album: 'Album 1', src:"/src/assets/musics/Alan Walker,Who I Am.mp3" },
  { image: '../../../public/alan.png', title: 'Song 2', playing: '10.222.333', time: '4:20', album: 'Album 2', src:"/src/assets/musics/Alan Walker,Barcelona.mp3" },
  { image: '../../../public/alan.png', title: 'Song 3', playing: '10.222.333', time: '5:10', album: 'Album 3', src:"/src/assets/musics/Alan Walker,Who I Am.mp3" },
  { image: '../../../public/alan.png', title: 'Song 1', playing: '10.222.333', time: '3:45', album: 'Album 1', src:"/src/assets/musics/Alan Walker,Who I Am.mp3" },
  { image: '../../../public/alan.png', title: 'Song 2', playing: '10.222.333', time: '4:20', album: 'Album 2', src:"/src/assets/musics/Alan Walker,Who I Am.mp3" },

];

const PortionTwo = () => {

  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);

  const handleRowClick = (song, index) => {
    if (currentSong && currentSong.playing()) {
      currentSong.stop();
    }

    if (currentSongIndex === index) {
      currentSong.pause();
      setCurrentSong(null);
      setCurrentSongIndex(-1);
    } else {
      const sound = new Howl({ src: [song.src] });
      sound.play();
      setCurrentSong(sound);
      setCurrentSongIndex(index);
      console.log('the current song index is:',currentSongIndex)
    }
  }

  return (
    <>
    <div className=" portion-two w-[70%] h-screen">
      <NavBar/>
      
      <Banner/>
      <MusicTable data={musicData} onRowClick={handleRowClick} currentSongIndex={currentSongIndex}/>
     

    </div>
    </>
  )
}

export default PortionTwo