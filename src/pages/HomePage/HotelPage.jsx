import { Navbar } from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaUserLarge } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailHotel } from "../redux/Actions/TiketActions";
import { useEffect } from "react";

const HotelPage = () => {
   const { hotelId } = useParams();
   const dispatch = useDispatch();

   const { detailHotel } = useSelector((state) => state.tiket);
   useEffect(() => {
      dispatch(getDetailHotel(hotelId))
   }, [])
   return (
      <div>
         <Navbar />
         <div className="pt-32 container mx-auto">
            <div className="relative">
               {/* section gambar */}
               <div className="mx-4 relative">
                  <img
                     src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww"
                     alt="Gambar Detail"
                     className="object-cover w-full rounded-3xl h-96"
                  />
                  <h1 className="absolute top-10 left-10 text-white font-extrabold text-4xl leading-relaxed tracking-widest">Pencarian <br /> Hotel Anda</h1>
               </div>
               {/* card section */}
               <div className="mx-4 mt-4 border-none p-8 bg-white border-2 border-slate-300 shadow-lg rounded-3xl">
                  {/* button */}
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-7">
                        <button className="flex items-center gap-2 py-2 px-4 bg-slate-100 shadow-lg rounded-xl">
                           <FaLocationDot className="text-blue-600 w-6 h-6" />
                           <p className="text-lg font-medium">Bandung, Indonesia</p>
                        </button>
                        <button className="flex items-center gap-2 py-2 px-4 bg-slate-100 shadow-lg rounded-xl">
                           <SlCalender className="text-blue-600 w-6 h-6" />
                           <p className="text-lg font-medium">22 - 24 Juni 2024, 1 night(s)</p>
                        </button>
                        <button className="flex items-center gap-2 py-2 px-4 bg-slate-100 shadow-lg rounded-xl">
                           <FaUserLarge className="text-blue-600 w-6 h-6" />
                           <p className="text-lg font-medium">2 People(s)</p>
                        </button>
                     </div>
                     <button className="rounded-2xl p-2 bg-blue-600">
                        <IoIosSearch className="w-8 h-8 text-white" />
                     </button>
                  </div>
                  {/* card detail */}
                  <div className="">
                     <div className="border-none bg-slate-100 mt-10 rounded-3xl flex gap-10 justify-between shadow-lg">
                        <div className="flex gap-8">
                           <img
                              src="https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                              alt=""
                              className="object-contain w-64 rounded-s-3xl"
                           />
                           <div className="flex flex-col gap-6 justify-center">
                              <h1 className="font-medium text-lg">{detailHotel?.hotel_name}</h1>
                              <p className="font-medium">{detailHotel?.hotel_alamat}</p>
                              <div className="flex gap-6 justify-between">
                                 <div className="border-none bg-blue-700 py-2 px-3 rounded-2xl text-white">{detailHotel?.hotel_facility}</div>
                                 <div className="border-none bg-blue-700 py-2 px-3 rounded-2xl text-white">Kolam Renang</div>
                                 <div className="border-none bg-blue-700 py-2 px-3 rounded-2xl text-white">Bar Coffe</div>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col justify-between my-6 items-end mr-10">
                           <FcLike className="w-8 h-8" />
                           <Link
                              type="button"
                              as={Link}
                              to={`/payment_hotel/${detailHotel.id}`}
                              className="border-2 border-green-400 bg-white rounded-2xl text-center py-2 px-6 w-44 h-10 hover:bg-green-500 hover:text-white cursor-pointer duration-300">
                              Detail hotel
                           </Link>
                        </div>
                     </div>
                     {/* <div className="border-none bg-slate-100 mt-10 rounded-3xl flex gap-10 justify-between shadow-lg">
                        <div className="flex gap-8">
                           <img
                              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww"
                              alt=""
                              className="object-contain w-64 rounded-s-3xl"
                           />
                           <div className="flex flex-col gap-6 justify-center">
                              <h1 className="font-medium text-lg">Nama Hotel</h1>
                              <p className="font-medium">Lokasi</p>
                              <div className="flex gap-6 justify-between">
                                 <div className="border-none bg-blue-700 py-2 px-3 rounded-2xl text-white">Ac</div>
                                 <div className="border-none bg-blue-700 py-2 px-3 rounded-2xl text-white">Kolam Renang</div>
                                 <div className="border-none bg-blue-700 py-2 px-3 rounded-2xl text-white">Bar Coffe</div>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col justify-between my-6 items-end mr-10">
                           <FcLike className="w-8 h-8" />
                           <Link
                              type="button"
                              as={Link}
                              to={"/payment_hotel"}
                              className="border-2 border-green-400 bg-white rounded-2xl text-center py-2 px-6 w-44 h-10 hover:bg-green-500 hover:text-white cursor-pointer duration-300">
                              Cari Kamar
                           </Link>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default HotelPage