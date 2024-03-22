import { Navbar } from "../../components/Navbar"
import GambarGunung from "../../assets/GambarGunung.png"
import IconHotel from "../../assets/iconHotel.svg"
import IconPesawat from "../../assets/iconPesawat.svg"
import { FaUserLarge } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import iconTiba from "../../assets/mdi_airplane-landing.svg"
import iconBerangkat from "../../assets/mdi_airplane-takeoff.svg"
import iconTanggal from "../../assets/healthicons_i-schedule-school-date-time.svg"
import { IoIosSearch } from "react-icons/io";
import Logo from "../../assets/Logo.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import traveloka from "../../assets/fb18293a92f1ba9afe8058ccc9f6a4f9.jpg"
import booking from "../../assets/booking.png"
import docker from "../../assets/Docker.png"

import { FaLocationDot } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import Alim from "../../assets/Ellipse 9.png"

import Footer from "../../components/Footer"
import { Link } from "react-router-dom";

const HomePage = () => {
   //Carousel by react-slick
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
   };

   const destinasi = [
      {
         gambar: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
         nama: "Labuan Bajo",
         lokasi: "NTT, Indonesia",
         jarak: "1.968,5 km"
      },
      {
         gambar: "https://images.unsplash.com/photo-1709403338214-8bf2ed1697f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
         nama: "Labuan Bajo",
         lokasi: "NTT, Indonesia",
         jarak: "1.968,5 km"
      },
      {
         gambar: "https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
         nama: "Labuan Bajo",
         lokasi: "NTT, Indonesia",
         jarak: "1.968,5 km"
      }
   ]

   const hotel = [
      {
         gambar: "https://plus.unsplash.com/premium_photo-1678240508014-d1ab7345bfe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
         nama: "Platinum",
         lokasi: "Kilo 5, Balikpapan",
         jarak: "1240 km"
      },
      {
         gambar: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
         nama: "Ibis and Glow",
         lokasi: "Saranjana, Samarinda",
         jarak: "2340 km"
      },
      {
         gambar: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
         nama: "Badak City",
         lokasi: "Tanjung, Muara Badak",
         jarak: "3400 km"
      }
   ]

   return (
      <>
         <Navbar />
         <div className="container mx-auto">

            {/* main saction */}
            <div className="relative">
               {/* mainsaction */}
               <div className="relative">
                  <img src={GambarGunung} alt="Gambar Gunung" className="w-full" />
                  <div className="absolute top-52 text-white font-medium text-3xl w-1/2 pl-40 leading-relaxed capitalize">
                     <h1>Bersama kami liburan anda jadi lebih mudah dan menyenangkan</h1>
                  </div>
               </div>
               <div className="flex justify-center">
                  {/* card menu destinasi */}
                  <div className="border-2 shadow-md py-4 px-2 bg-white absolute w-2/3 rounded-2xl top-[480px]">
                     {/* heading pilihan */}
                     <div className="flex flex-row gap-4">
                        <button className="shadow-md border-2 py-2 px-3 flex gap-2 rounded-xl hover:text-white hover:bg-blue-600 duration-300">
                           <p>Hotel</p>
                           <img src={IconHotel} alt="IconHotel" />
                        </button>
                        <button className="shadow-md border-2 py-2 px-3 flex gap-2 rounded-xl hover:text-white hover:bg-blue-600 duration-300">
                           <p>Hotel</p>
                           <img src={IconPesawat} alt="IconPesawat" />
                        </button>
                     </div>
                     {/* orang */}
                     <div className="flex justify-end">
                        <button className="flex justify-between items-center gap-9 border-2 shadow-md rounded-3xl px-4">
                           <FaUserLarge className="w-6 h-6" />
                           <p>3 Orang</p>
                           <RiArrowDropDownLine className="w-10 h-10" />
                        </button>
                     </div>
                     {/* detailing */}
                     <div className="flex justify-between mx-2 items-center mt-4 gap-4">
                        <div className="flex flex-col">
                           <h2 className="text-sm font-semibold mb-1">Dari</h2>
                           <button className="flex gap-2 items-center border-2 rounded-2xl border-slate-200 shadow-md py-2 px-4 hover:text-white hover:bg-blue-700 duration-300">
                              <img src={iconBerangkat} alt="icon berangkat" />
                              <p>Balikpapan (BPN)</p>
                           </button>
                        </div>
                        <div className="flex flex-col">
                           <h2 className="text-sm font-semibold mb-1">Ke</h2>
                           <button className="flex gap-2 items-center border-2 rounded-2xl border-slate-200 shadow-md py-2 px-4 hover:text-white hover:bg-blue-700 duration-300">
                              <img src={iconTiba} alt="icon tiba" />
                              <p>Jakarta (JKT)</p>
                           </button>
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
                        <button className="border-2 shadow-sm rounded-2xl text-white bg-blue-600 hover:bg-blue-700 duration-300 mt-5">
                           <IoIosSearch className="m-2 w-6 h-6" />
                        </button>
                     </div>

                  </div>
               </div>
            </div>

            {/* gambar bergerak */}
            <Slider {...settings} className="mt-20 pt-6 flex justify-center items-center mx-40 ">
               <img src={Logo} alt="Logo" className="w-48 h-14 px-8" />
               <img src={traveloka} alt="Logo" className="h-14 px-8" />
               <img src={booking} alt="Logo" className="h-14 px-8" />
               <img src={docker} alt="Logo" className="h-14 px-8" />
            </Slider>

            {/* Rekomendasi Destinasi dan hotel */}
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

            {/* about, vision, mision */}
            <div className="flex gap-8 justify-center mx-44 mt-14">
               <div className="flex flex-col gap-6 w-1/2">
                  {/* About */}
                  <div className="flex flex-col gap-4">
                     <h2 className="text-center text-2xl font-bold">About</h2>
                     <p className="text-base font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolorem illum facilis delectus nemo voluptatum molestiae consequatur nihil deleniti reprehenderit voluptatem nam aliquid labore itaque temporibus libero, ab iste consectetur. In vel dolores suscipit soluta, facilis quam quae aliquid hic deleniti excepturi nam veniam sed natus, possimus, a magnam amet!</p>
                  </div>
                  {/* vision */}
                  <div className="flex flex-col gap-4">
                     <h2 className="text-center text-2xl font-bold">Vision</h2>
                     <p className="text-base font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia iusto excepturi eaque beatae, unde laudantium sed assumenda ullam veniam dolorem, magnam, nam nostrum. Omnis quibusdam itaque delectus sed deleniti est labore natus facere, repellat harum nulla! Eos velit illum sed quibusdam! Ratione maiores, ullam deserunt necessitatibus dolores, molestiae repellendus error aliquid rem fuga odit beatae illum, id blanditiis consectetur.</p>
                  </div>
                  {/* mision */}
                  <div className="flex flex-col gap-4">
                     <h3 className="text-center text-2xl font-bold">Mision</h3>
                     <p className="text-base font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, excepturi quo laudantium doloremque fuga obcaecati corrupti quae nulla voluptatibus atque possimus odio exercitationem, necessitatibus veniam temporibus suscipit? Fuga numquam aspernatur, placeat distinctio earum aliquam, rem pariatur incidunt provident, quaerat omnis.</p>
                  </div>
               </div>
               <div className="">
                  <img
                     src={"https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"}
                     alt="gambar company"
                     className="rounded-xl shadow-md h-[600px] w-[540px]"
                  />
               </div>
            </div>

            {/* FAQ */}
            <div className="flex gap-4 justify-center mx-44 mt-14 flex-col text-center">
               <h1 className="text-2xl font-bold ">FAQ</h1>
               <div className="flex flex-col gap-16">
                  <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis facilis architecto cupiditate reiciendis non commodi earum fuga, quaerat ad tempora dolorem, eos quisquam dolorum quidem reprehenderit, quasi similique ipsum.</h2>
                  <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis facilis architecto cupiditate reiciendis non commodi earum fuga, quaerat ad tempora dolorem, eos quisquam dolorum quidem reprehenderit, quasi similique ipsum.</h2>
                  <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis facilis architecto cupiditate reiciendis non commodi earum fuga, quaerat ad tempora dolorem, eos quisquam dolorum quidem reprehenderit, quasi similique ipsum.</h2>
               </div>
            </div>

            {/* Our Review */}
            <div className="flex flex-col gap-10 rounded-2xl bg-slate-200 mx-44 p-10 justify-center mt-14">
               <h1 className="text-center font-bold text-2xl">Our Review</h1>
               <div className="flex flex-row gap-10">
                  <div className="flex rounded-xl bg-slate-300 shadow-lg p-4 gap-4">
                     <div className="flex flex-col justify-between">
                        <h2>Mesan tiket di MyTrip emang paling gacor</h2>
                        <p>Alim Skom Hebat</p>
                     </div>
                     <div className="flex flex-col justify-between gap-2">
                        <img src={Alim} alt="gambar our review" />
                        <div className="flex ">
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                        </div>
                     </div>
                  </div>
                  <div className="flex rounded-xl bg-slate-300 shadow-lg p-4 gap-4">
                     <div className="flex flex-col justify-between">
                        <h2>Mesan tiket di MyTrip emang paling gacor</h2>
                        <p>Alim Skom Hebat</p>
                     </div>
                     <div className="flex flex-col justify-between gap-2">
                        <img src={Alim} alt="gambar our review" />
                        <div className="flex ">
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                        </div>
                     </div>
                  </div>
                  <div className="flex rounded-xl bg-slate-300 shadow-lg p-4 gap-4">
                     <div className="flex flex-col justify-between">
                        <h2>Mesan tiket di MyTrip emang paling gacor</h2>
                        <p>Alim Skom Hebat</p>
                     </div>
                     <div className="flex flex-col justify-between gap-2">
                        <img src={Alim} alt="gambar our review" />
                        <div className="flex ">
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                           <FaStar className="text-yellow-500" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div >

         <Footer />
      </>
   )
}

export default HomePage