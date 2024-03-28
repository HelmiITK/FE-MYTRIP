import hotelIcon from "../../assets/hotelIcon.svg"
import { FaUserLarge } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import iconTanggal from "../../assets/healthicons_i-schedule-school-date-time.svg";
import { IoIosSearch } from "react-icons/io";

const DetailMenuHotelComponent = () => {
   return (
      <div className="flex justify-between mx-2 items-center mt-10 gap-4">
         <div className="flex flex-col">
            <label htmlFor="hotel" className="relative">
               <h2 className="text-sm font-semibold mb-1">Kota, destinasi, atau nama hotel</h2>
               <input
                  type="text"
                  id="hotel"
                  className="flex gap-2 items-center border-2 rounded-2xl border-slate-200 shadow-md py-2 pl-10"
               />
               <img src={hotelIcon} alt="icon hotel" className="absolute top-7 left-1" />
            </label>
         </div>
         <div className="flex flex-col">
            <h2 className="text-sm font-semibold mb-1">Tanggal Pergi</h2>
            <button className="flex gap-2 items-center border-2 rounded-2xl border-slate-200 shadow-md py-2 px-4 hover:text-white hover:bg-blue-700 duration-300">
               <img src={iconTanggal} alt="icon tanggal" />
               <p>05 Jan 2023</p>
            </button>
         </div>
         <div className="flex flex-col">
            <h2 className="text-sm font-semibold mb-1">Tanggal Pulang</h2>
            <button className="flex gap-2 items-center border-2 rounded-2xl border-slate-200 shadow-md py-2 px-4 hover:text-white hover:bg-blue-700 duration-300">
               <img src={iconTanggal} alt="icon tanggal" />
               <p>10 Mar 2023</p>
            </button>
         </div>
         <button className="flex justify-between items-center gap-9 border-2 shadow-md rounded-3xl px-4">
            <FaUserLarge className="w-6 h-6" />
            <p>3 Orang</p>
            <RiArrowDropDownLine className="w-10 h-10" />
         </button>
         <button className="border-2 shadow-sm rounded-2xl text-white bg-blue-600 hover:bg-blue-700 duration-300 mt-5">
            <IoIosSearch className="m-2 w-6 h-6" />
         </button>
      </div>
   )
}

export default DetailMenuHotelComponent;
