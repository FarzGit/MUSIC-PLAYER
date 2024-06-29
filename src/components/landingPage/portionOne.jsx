
import { IoMusicalNotes } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiSolidMusic } from "react-icons/bi";
import { AiFillCompass } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const menuItems = [
    { icon: AiFillHome, label: 'Home' },
    { icon: FaArrowTrendUp, label: 'Trends' },
    { icon: BiSolidMusic, label: 'Library' },
    { icon: AiFillCompass, label: 'Discover' },
];
const generalItems = [
    { icon: IoSettings, label: 'Settings' },
    { icon: LuLogOut, label: 'Log Out' },

]


const PortionOne = () => {
    return (
        <>
            <div className="flex flex-col bg-black w-[15%] h-screen gap-10 py-4 ">
                <div className="">
                    <div className="flex items-center justify-center gap-3">
                        <p className="max-lg:hidden"><IoMusicalNotes color="red" size={40} /></p>
                        <p className="lg:hidden"><IoMusicalNotes color="red" size={25} /></p>
                        <p className="text-white font-bold text-xl max-sm:hidden max-lg:text-[10px] max-xl:text-[15px]  ">
                            <span className="text-[#e23232]">Dream</span>Music
                        </p>
                    </div>
                </div>
                <div className="flex-grow px-7  max-lg:px-2 ">
                    <div>
                        <p className=" text-xs max-sm:text-[10px] font-medium text-[#b4b4b4] py-1">MENU</p>
                    </div>
                    <div>
                        <ul>
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    <li className="flex items-center  gap-3 text-[#dad8d8] py-[6.7px] font-medium text-sm cursor-pointer max-sm:justify-center" >
                                        <item.icon color="red" size={22} />
                                        <p className="max-sm:hidden max-md:text-[12px]">{item.label}</p>
                                        
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-auto px-7  max-lg:px-2 pb-10">
                    <div>
                        <p className=" text-xs max-sm:text-[10px] font-medium text-[#b4b4b4] py-1">GENERAL</p>
                        <div>
                            <ul>
                                {generalItems.map((item, index) => (
                                    <li key={index} className="flex items-center  gap-3 text-[#dad8d8] py-[7px] font-medium text-sm cursor-pointer max-sm:justify-center" >
                                        <item.icon color="red" size={22}/>
                                        <p className="max-sm:hidden max-md:text-[12px] ">{item.label}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortionOne