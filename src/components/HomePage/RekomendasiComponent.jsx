import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import PropTypes from "prop-types"

const RekomendasiComponent = ({ pesawat, hotel }) => {
   console.log(pesawat)
   return (
      <div className="flex flex-col mx-44 justify-center items-start mt-14 gap-3">
         <h1 className="text-black font-bold text-3xl">
            Rekomendasi Destinasi dan Hotel
         </h1>
         {/* destinasi */}
         <div className="flex gap-4 items-center flex-col">
            <h1 className="text-2xl font-semibold">Destinasi</h1>
            <div className="grid grid-cols-3 gap-5">
               {pesawat.map((item) => (
                  <>
                     <div className="border-2 rounded-3xl shadow-lg p-4 hover:scale-105 duration-300">
                        <img
                           key={item.id}
                           src={import.meta.env.VITE_BASEIMGURL + item?.pesawat_foto}
                           alt={item.pesawat_name}
                           className="rounded-3xl h-56 mb-4 object-cover w-full"
                        />
                        <h2 className="text-2xl font-semibold">{item.pesawat_name}</h2>
                        <div className="flex justify-between text-sm font-semibold">
                           <div className="flex items-center gap-1">
                              <FaLocationDot />
                              <h3>{item.pesawat_depature_kota}</h3>
                           </div>
                           <div className="flex items-center gap-1 ">
                              <IoAirplane className="w-6 h-6" />
                              <h4>{new Date(item.pesawat_depature).toISOString().split('T')[0]}</h4>
                           </div>
                        </div>
                     </div>
                  </>
               ))}
            </div>
         </div>
         {/* hotel */}
         <div className="flex gap-4 items-center flex-col mt-10">
            <h1 className="text-2xl font-semibold">Hotel</h1>
            <div className="grid grid-cols-3 gap-5">
               {hotel.map((item, i) => (
                  <>
                     <Link as={Link} to={`/hotel/${item.id}`} className="border-2 rounded-3xl shadow-lg p-4 hover:scale-105 duration-300 cursor-pointer">
                        <img key={i} src={import.meta.env.VITE_BASEIMGURL + item.hotel_foto}
                           alt={item.hotel_name}
                           className="rounded-3xl h-56 mb-4 object-cover w-full"
                        />
                        <h2 className="text-2xl font-semibold">{item.hotel_name}</h2>
                        <div className="flex justify-between text-sm font-semibold">
                           <div className="flex items-center gap-1">
                              <FaLocationDot />
                              <h3>{item.hotel_city}</h3>
                           </div>
                           {/* <div className="flex items-center gap-1 ">
                              <IoAirplane className="w-6 h-6" />
                              <h4>{item.jarak}</h4>
                           </div> */}
                        </div>
                     </Link>
                  </>
               ))}
            </div>
         </div>
      </div>
   )
}

export default RekomendasiComponent;

RekomendasiComponent.propTypes = {
   pesawat: PropTypes.object,
   hotel: PropTypes.object,
}