import { MdVerified } from "react-icons/md";



const Banner = () => { // this is banner component
  return ( 
    <div className=" h-1/2 flex justify-center items-center">
    <div className="relative w-[85%] h-[270px] rounded-3xl cardBanner flex justify-between">
      <div className=" absolute w-full h-full bg-alan-walker z-20 bg-no-repeat rounded-3xl"></div>
      <div className="relative z-20 p-4 ml-auto">
          <div className="text-white py-9">
            <p className="flex justify-start items-center gap-2 text-xs"><span><MdVerified color=" #387ADF" size={25}/> </span>Verified Artist</p>
            <h1 className="text-[40px] font-extrabold pb-3">Alan Walker</h1>
            <p className="text-xs">27.852.555 monthly listeners</p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Banner