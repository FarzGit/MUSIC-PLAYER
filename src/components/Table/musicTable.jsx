/* eslint-disable react/prop-types */

import { BiSolidMusic } from "react-icons/bi";



const MusicTable = ({ data, onRowClick, currentSongIndex }) => {
  return (<>
    <div className="flex justify-between text-white px-[80px] pb-4">
      <p>Popular</p>
      <p>See All</p>
    </div>
    <div className="overflow-y-auto tablediv px-[50px]">
      <table className="min-w-full">
        <thead className=" tableHead sticky top-0 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Playing</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 flex justify-end text-left text-xs font-medium text-white uppercase tracking-wider">Album</th>
          </tr>
        </thead>
        <tbody className="  ">
          {data.map((item, index) => (
            <tr key={index} onClick={() => onRowClick(item, index)} className={index === currentSongIndex ? 'bg-[#3A0202] text-white cursor-pointer' : 'cursor-pointer '}>
               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
               {index === currentSongIndex ? (
                    <BiSolidMusic className="mr-2 text-white" size={25} /> 
                  ) : (
                    index + 1 
                  )}
                </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white w-[300px]">
                <div className="flex items-center w-[45px] h-[45px] bg-slate-600 gap-3">
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                </div>

              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.playing}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.time}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.album}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>

  )
}

export default MusicTable