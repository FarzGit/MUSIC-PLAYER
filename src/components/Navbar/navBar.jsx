import { useState } from 'react';
import SearchBar from "../SearchBar/searchBar";
import { VscThreeBars } from "react-icons/vsc";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="w-full h-[70px] px-2">
                <div className="flex justify-between items-center">
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleSidebar} className="text-[#d4d4d4]">
                        <VscThreeBars size={28}/>

                        </button>
                    </div>
                    <div className="hidden md:flex justify-center w-1/2 h-[70px]">
                        <div className="flex justify-center py-[19px]">
                            <ul className="flex gap-9 text-[#d4d4d4] font-medium max-lg:text-[15px]">
                                <li>Music</li>
                                <li>Podcast</li>
                                <li>Live</li>
                                <li>Radio</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <SearchBar />
                    </div>
                </div>
            </div>

            {/* Off-canvas sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full offcanvas transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button onClick={toggleSidebar} className="text-white p-4">
                    ×
                </button>
                <ul className="flex flex-col gap-6 p-4 text-white">
                    <li>Music</li>
                    <li>Podcast</li>
                    <li>Live</li>
                    <li>Radio</li>
                </ul>
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default NavBar;
