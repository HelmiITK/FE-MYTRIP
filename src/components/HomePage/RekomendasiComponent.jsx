import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";

const RekomendasiComponent = () => {
   const destinasi = [
      {
         gambar:
            "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
         nama: "Labuan Bajo",
         lokasi: "NTT, Indonesia",
         jarak: "1.968,5 km",
      },
      {
         gambar:
            "https://images.unsplash.com/photo-1709403338214-8bf2ed1697f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
         nama: "Labuan Bajo",
         lokasi: "NTT, Indonesia",
         jarak: "1.968,5 km",
      },
      {
         gambar:
            "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
         nama: "Labuan Bajo",
         lokasi: "NTT, Indonesia",
         jarak: "1.968,5 km",
      },
   ];

   const hotel = [
      {
         gambar:
            "https://plus.unsplash.com/premium_photo-1678240508014-d1ab7345bfe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
         nama: "Platinum",
         lokasi: "Kilo 5, Balikpapan",
         jarak: "1240 km",
      },
      {
         gambar:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
         nama: "Ibis and Glow",
         lokasi: "Saranjana, Samarinda",
         jarak: "2340 km",
      },
      {
         gambar:
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
         nama: "Badak City",
         lokasi: "Tanjung, Muara Badak",
         jarak: "3400 km",
      },
   ];

   return (
      <div className="flex flex-col mx-44 justify-center items-start mt-14 gap-3">
         <h1 className="text-black font-bold text-3xl">
            Rekomendasi Destinasi dan Hotel
         </h1>
         {/* destinasi */}
         <div className="flex gap-4 items-center flex-col">
            <h1 className="text-2xl font-semibold">Destinasi</h1>
            <div className="grid grid-cols-3 gap-5">
               {destinasi.map((item, index) => (
                  <>
                     <div className="border-2 rounded-3xl shadow-lg p-4 hover:scale-105 duration-300">
                        <img key={index} src={item.gambar}
                           alt="gambar"
                           className="rounded-3xl h-56 mb-4 object-cover w-full"
                        />
                        <h2 className="text-2xl font-semibold">{item.nama}</h2>
                        <div className="flex justify-between text-sm font-semibold">
                           <div className="flex items-center gap-1">
                              <FaLocationDot />
                              <h3>{item.lokasi}</h3>
                           </div>
                           <div className="flex items-center gap-1 ">
                              <IoAirplane className="w-6 h-6" />
                              <h4>{item.jarak}</h4>
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
               {hotel.map((item, index) => (
                  <>
                     <Link as={Link} to={"/hotel"} className="border-2 rounded-3xl shadow-lg p-4 hover:scale-105 duration-300 cursor-pointer">
                        <img key={index} src={item.gambar}
                           alt="gambar"
                           className="rounded-3xl h-56 mb-4 object-cover w-full"
                        />
                        <h2 className="text-2xl font-semibold">{item.nama}</h2>
                        <div className="flex justify-between text-sm font-semibold">
                           <div className="flex items-center gap-1">
                              <FaLocationDot />
                              <h3>{item.lokasi}</h3>
                           </div>
                           <div className="flex items-center gap-1 ">
                              <IoAirplane className="w-6 h-6" />
                              <h4>{item.jarak}</h4>
                           </div>
                        </div>
                     </Link>
                  </>
               ))}
            </div>
         </div>
      </div>
   )
}

export default RekomendasiComponent