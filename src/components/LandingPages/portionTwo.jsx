/* eslint-disable react/prop-types */
import Banner from "../Banner/banner";
import NavBar from "../Navbar/navBar";
import MusicTable from "../Table/musicTable";

const PortionTwo = ({ data, onRowClick, currentSongIndex, setMusicData }) => {
  return (
    <>
      <div className="portion-two w-[85%] md:w-[67%] h-screen">
        <NavBar />
        <Banner />
        <MusicTable
          data={data}
          onRowClick={onRowClick}
          currentSongIndex={currentSongIndex}
          setMusicData={setMusicData}
        />
      </div>
    </>
  );
};

export default PortionTwo;
