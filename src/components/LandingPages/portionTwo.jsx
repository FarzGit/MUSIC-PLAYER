/* eslint-disable react/prop-types */
import Banner from "../Banner/banner"
import NavBar from "../Navbar/navBar"
import MusicTable from "../Table/musicTable"



const PortionTwo = ({ data, onRowClick, currentSongIndex }) => {

  return (
    <>
      <div className=" portion-two w-[70%] h-screen">
        <NavBar />
        <Banner />
        <MusicTable data={data} onRowClick={onRowClick} currentSongIndex={currentSongIndex} />


      </div>
    </>
  )
}

export default PortionTwo