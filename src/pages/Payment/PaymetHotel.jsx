import { Navbar } from "../../components/Navbar";

import Footer from "../../components/Footer";
import AcICon from "../../assets/ACicon.svg";
import RestaurantIcon from "../../assets/restaurantIcon.svg";
import SweemIcon from "../../assets/sweemIcon.svg";
import ParkingIcon from "../../assets/parkingIcon.svg";
import WifiIcon from "../../assets/wifiIcon.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailHotel } from "../redux/Actions/TiketActions";
import { useEffect } from "react";

const PaymetHotel = () => {
   const { hotelId } = useParams();
   const dispatch = useDispatch();

   const { detailHotel } = useSelector((state) => state.tiket);
   useEffect(() => {
      dispatch(getDetailHotel(hotelId))
   }, [])

   const fasilitas = [
      {
         name: "AC",
         icon: AcICon,
      },
      {
         name: "Resto",
         icon: RestaurantIcon,
      },
      {
         name: "Sweem",
         icon: SweemIcon,
      },
      {
         name: "Parking",
         icon: ParkingIcon,
      },
      {
         name: "Wiif",
         icon: WifiIcon,
      },
   ]
   return (
      <div>
         <Navbar />
         <div className="container mx-auto pt-24">
            {/* button back */}
            <Link as={Link} to={`/hotel/${hotelId}`} className="flex gap-2 items-center hover:scale-x-105 duration-300 ml-10 mb-4 hover:underline w-1/12">
               <IoMdArrowRoundBack className="w-6 h-6" />
               <p className="text-lg font-medium">Kembali</p>
            </Link>
            <div className="flex gap-6 mx-4 justify-start items-start">
               <img
                  src={detailHotel?.hotel_foto}
                  alt=""
                  className="object-contain w-1/2 rounded-xl"
               />
               {/* card detail */}
               <div className="flex flex-col gap-4 w-full">
                  {/* nama hotel */}
                  <h1 className="text-3xl font-semibold">
                     {detailHotel?.hotel_name}
                  </h1>
                  {/* deskrispi */}
                  <h2>{detailHotel?.hotel_desc}</h2>
                  {/* bintang */}
                  <div className="flex items-center gap-3">
                     <h2 className="text-lg font-medium">Hotels</h2>
                     <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                     </div>
                  </div>
                  {/* alamat */}
                  <div className="w-2/3 font-medium text-sm flex items-center gap-6">
                     <IoLocationSharp className="w-12 h-12 text-blue-600 " />
                     <h1>
                        {detailHotel?.hotel_alamat}
                     </h1>
                     <div className="w-px h-8 bg-black"></div>
                     <h1>
                        {detailHotel?.hotel_city}
                     </h1>
                  </div>
                  {/* harga */}
                  <div className="flex flex-col gap-2">
                     <h2 className="font-medium text-base">Harga/Room/Night</h2>
                     <p className="font-semibold text-xl">Rp. {detailHotel?.hotel_harga}</p>
                  </div>
                  {/* button pesan */}
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button className="font-medium text-lg border-2 border-blue-500 rounded-2xl py-2 w-1/3 hover:scale-105 hover:bg-blue-500 duration-300 hover:text-white shadow-lg" onClick={() => document.getElementById('my_modal_2').showModal()}>Pesan Sekarang</button>
                  <dialog id="my_modal_2" className="modal">
                     <div className="modal-box">
                        <h3 className="font-bold text-lg">Form Pemesanan</h3>
                        <form action="" className="flex flex-col gap-3">
                           <label htmlFor="nama" className="flex flex-col gap-2">
                              <h1>Nama</h1>
                              <input
                                 type="text"
                                 id="nama"
                                 name="nama"
                                 className="border border-black rounded-md py-2 px-4 "
                              />
                           </label>
                           <label htmlFor="orang" className="flex flex-col gap-2">
                              <h1>Jumlah orang</h1>
                              <input
                                 type="text"
                                 id="orang"
                                 name="orang"
                                 className="border border-black rounded-md py-2 px-4 "
                              />
                           </label>
                           <button className="border bg-blue-500 text-white rounded-md py-2 px-4 mt-4 font-medium hover:bg-blue-600 duration-300">
                              Pesan
                           </button>
                        </form>
                     </div>
                     <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                     </form>
                  </dialog>

                  {/* fasilitas */}
                  <div className="flex flex-col gap-2 mt-4">
                     <h2 className="text-lg font-semibold">Main facilities</h2>
                     {fasilitas.map((item, i) => (
                        <div key={i} className="flex gap-2">
                           <img src={item.icon} alt="" />
                           <p className="font-medium">{item.name}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default PaymetHotel;