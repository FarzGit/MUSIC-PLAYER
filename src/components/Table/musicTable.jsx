/* eslint-disable react/prop-types */

import { BiSolidMusic } from "react-icons/bi";
import { useDrag, useDrop } from 'react-dnd';

const ITEM_TYPE = 'SONG';

const DraggableRow = ({ item, index, moveRow, onRowClick, currentSongIndex }) => {
  const [, ref] = useDrag({
    type: ITEM_TYPE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveRow(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <tr
      ref={(node) => ref(drop(node))}
      onClick={() => onRowClick(item, index)}
      className={index === currentSongIndex ? 'bg-[#3A0202] text-white cursor-pointer' : 'cursor-pointer '}
    >
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
  );
};


const MusicTable = ({ data, onRowClick, currentSongIndex, setMusicData }) => {
  const moveRow = (fromIndex, toIndex) => {
    const updatedData = [...data];
    const [movedItem] = updatedData.splice(fromIndex, 1);
    updatedData.splice(toIndex, 0, movedItem);
    setMusicData(updatedData);
  };

  return (
    <>
      <div className="flex justify-between text-white max-md:px-6 px-[80px] pb-4">
        <p>Popular</p>
        <p>See All</p>
      </div>
      <div className="overflow-y-auto tablediv max-md:px-3 px-[50px]">
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
          <tbody className="">
            {data.map((item, index) => (
              <DraggableRow
                key={index}
                item={item}
                index={index}
                moveRow={moveRow}
                onRowClick={onRowClick}
                currentSongIndex={currentSongIndex}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MusicTable;