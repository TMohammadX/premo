import { MdSettings } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";

import { MdOutlineWidgets } from "react-icons/md";




export default function Nav() {
  return(
    <div className="fixed grid pt-[3%] justify-center left-0 top-0 h-[100vh] w-[15%] border-r-[0.1px] border-gray-500">
      <h1 className="text-xl  cursor-pointer h-fit ">Premo</h1>
      
      <div className=" grid h-[70%] gap-5 text-md pr-5">
        <h1 className=" cursor-pointer flex place-items-center"><MdHome /> &nbsp; Home</h1>
        <h1 className=" cursor-pointer flex place-items-center"><MdOutlineLocalMovies />  &nbsp; Movies</h1>
        <h1 className=" cursor-pointer flex place-items-center"><PiTelevision />  &nbsp;  TV Series</h1>
        <h1 className=" cursor-pointer flex place-items-center"><MdOutlineWidgets />  &nbsp;  New Releases</h1>
      </div>

      <h1></h1>  

      <button className="flex place-items-center pl-10 text-md absolute bottom-[5%] cursor-pointer w-[100%] h-[60px] border-gray-500"><MdSettings /> &nbsp; Settings</button>

    
    </div>
  )
}

