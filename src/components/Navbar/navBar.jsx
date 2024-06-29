import SearchBar from "../SearchBar/searchBar"



const NavBar = () => {
  return (
    <>
    <div className=" w-full h-[70px] px-2">
        <div className="flex">
            <div className=" w-1/2 h-[70px]">

                <div className="flex justify-center  py-[19px]">
                    <ul className="flex gap-9 text-[#d4d4d4] font-medium">
                        <li>Music</li>
                        <li>Podcast</li>
                        <li>Live</li>
                        <li>Radio</li>
                    </ul>
                </div>

            </div>
            <div className=" flex items-center ">
                        <SearchBar/>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default NavBar