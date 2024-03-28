import { Navbar } from "../../components/Navbar";

import Footer from "../../components/Footer";
import AcICon from "../../assets/ACicon.svg";
import RestaurantIcon from "../../assets/restaurantIcon.svg";
import SweemIcon from "../../assets/sweemIcon.svg";
import ParkingIcon from "../../assets/parkingIcon.svg";
import WifiIcon from "../../assets/wifiIcon.svg";

const PaymetHotel = () => {
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
         <div className="container mx-auto pt-32">
            <div className="flex gap-6 mx-4 justify-center items-start">
               <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-contain w-1/2 rounded-xl"
               />
               {/* card detail */}
               <div className="flex flex-col gap-4">
                  {/* nama hotel */}
                  <h1 className="text-3xl font-semibold">
                     Hotel Gacor Zeus Kali Lima Ratus - Balikpapan
                  </h1>
                  {/* bintang */}
                  <div className="flex items-center gap-3">
                     <h2 className="text-lg font-medium">Hotels</h2>
                     <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                     </div>
                  </div>
                  {/* alamat */}
                  <div className="w-2/3 font-medium text-sm">
                     Jl. DR. Ide Anak Agung Gde Agung Kav.E.1.1 No. 1, Mega Kuningan, Jakarta Selatan, DKI Jakarta, Kuningan, Setiabudi, Jakarta, Indonesia, 12950
                  </div>
                  {/* harga */}
                  <div className="flex flex-col gap-2">
                     <h2 className="font-medium text-base">Harga/Room/Night</h2>
                     <p className="font-semibold text-xl">Rp. 6.666.666</p>
                  </div>
                  {/* button pesan */}
                  <button className="font-medium text-lg border-2 border-blue-500 rounded-2xl py-2 w-1/3 hover:scale-105 hover:bg-blue-500 duration-300 hover:text-white shadow-lg">
                     Pesan Sekarang
                  </button>
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