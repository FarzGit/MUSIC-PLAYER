
import { IoSearch } from 'react-icons/io5'; 

const SearchBar = () => {
  return (
    <>
  <div className="relative">
      <input
        placeholder="Search..."
        className="input text-white bg-[#220a0a]  px-5 py-2 rounded-full w-[500px]  outline-none"
        name="search"
        type="search"
      />
      <IoSearch className="absolute top-2 right-4 text-gray-500" size={20} color='white'/>
    </div>
    
    </>
  )
}

export default SearchBar