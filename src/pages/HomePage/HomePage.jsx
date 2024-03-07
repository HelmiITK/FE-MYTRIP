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

   // const Gambar = [
   //    {
   //       link: "https://unsplash.com/photos/the-sun-is-setting-over-the-mountains-in-the-desert-El92hmAt91o"
   //    },
   //    {
   //       link: "https://unsplash.com/photos/a-white-house-with-a-cactus-garden-in-front-of-it-XBD9Z9ejAO4"
   //    },
   //    {
   //       link: "https://unsplash.com/photos/a-close-up-of-a-white-cloth-on-a-white-background-ckjnv7hVfnA"
   //    },
   //    {
   //       link: "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-flat-screen-tv-shT_LaGUmYI"
   //    }
   // ]

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
               {/* card menu destinasi */}
               <div className="border-2 shadow-md py-4 px-2 bg-white absolute w-1/2 rounded-2xl top-[480px] right-96">
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
                  <div className="flex justify-between mx-2 items-center mt-4">
                     <div className="flex flex-col">
                        <h2>Dari</h2>
                        <button className="flex gap-2 items-center">
                           <img src={iconBerangkat} alt="icon berangkat" />
                           <p>Balikpapan (BPN)</p>
                        </button>
                     </div>
                     <div className="flex flex-col">
                        <h2>Ke</h2>
                        <button className="flex gap-2 items-center">
                           <img src={iconTiba} alt="icon tiba" />
                           <p>Jakarta (JKT)</p>
                        </button>
                     </div>
                     <div className="flex flex-col">
                        <h2>Tanggal Pergi</h2>
                        <button className="flex gap-2 items-center">
                           <img src={iconTanggal} alt="icon tanggal" />
                           <p>05 Jan 2023</p>
                        </button>
                     </div>
                     <div className="flex flex-col">
                        <h2>Tanggal Pulang</h2>
                        <button className="flex gap-2 items-center">
                           <img src={iconTanggal} alt="icon tanggal" />
                           <p>10 Mar 2023</p>
                        </button>
                     </div>
                     <div>
                        <button className="border-2 shadow-sm rounded-2xl text-white bg-blue-600 hover:bg-blue-700 duration-300">
                           <IoIosSearch className="m-2 w-6 h-6" />
                        </button>
                     </div>
                  </div>

               </div>
            </div>

            {/* gambar bergerak */}
            <Slider {...settings} className="mt-10 pt-6 flex justify-center items-center px-40 ">
               <img src={Logo} alt="Logo" className="w-36 h-20 px-8" />
               <img src={traveloka} alt="Logo" className="h-20 px-8" />
               <img src={booking} alt="Logo" className="h-20 px-8" />
               <img src={docker} alt="Logo" className="h-20 px-8" />
            </Slider>

            {/* Rekomendasi Destinasi dan hotel */}
            <div className="flex flex-col items-start mt-10 gap-3">
               <h1 className="text-black font-semibold text-3xl">
                  Rekomendasi Destinasi dan Hotel
               </h1>
               {/* destinasi */}
               <div className="flex gap-4 items-center flex-col">
                  <h1 className="text-2xl font-semibold">Destinasi</h1>
                  <div className="grid grid-cols-3 gap-5">

                     <div className="border-2 rounded-3xl shadow-lg p-4">
                        <img src={GambarGunung} alt="gambar" />
                        <h2 className="text-2xl font-semibold">Planet Mars</h2>
                        <div>
                           <h3>Lokasi Bima Sakti</h3>
                           <h4>2000 KM</h4>
                        </div>
                     </div>
                     <div className="border-2 rounded-3xl shadow-lg p-4">
                        <img src={GambarGunung} alt="gambar" />
                        <h2 className="text-2xl font-semibold">Planet Mars</h2>
                        <div>
                           <h3>Lokasi Bima Sakti</h3>
                           <h4>2000 KM</h4>
                        </div>
                     </div>
                     <div className="border-2 rounded-3xl shadow-lg p-4">
                        <img src={GambarGunung} alt="gambar" />
                        <h2 className="text-2xl font-semibold">Planet Mars</h2>
                        <div>
                           <h3>Lokasi Bima Sakti</h3>
                           <h4>2000 KM</h4>
                        </div>
                     </div>
                  </div>
               </div>
               {/* hotel atau pesawat */}
            </div>
         </div >
      </>
   )
}

export default HomePage