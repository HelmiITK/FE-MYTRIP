import GambarGunung from "../../assets/GambarGunung.png";
import Logo from "../../assets/Logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import traveloka from "../../assets/fb18293a92f1ba9afe8058ccc9f6a4f9.jpg";
import booking from "../../assets/booking.png";
import docker from "../../assets/Docker.png";

import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer"

import DetailMenuHotelComponent from "../../components/HomePage/DetailMenuHotelComponent"
import DetailMemuPesawatComponent from "../../components/HomePage/DetailMenuPesawatComponent";
import RekomendasiComponent from "../../components/HomePage/RekomendasiComponent";
import AboutEtcComponent from "../../components/HomePage/AboutEtcComponent";
import FaqComponent from "../../components/HomePage/FaqComponent";
import OurReviewComponent from "../../components/HomePage/OurReviewComponent";

import { useEffect, useState } from "react";
import IconHotel from "../../assets/iconHotel.svg";
import IconPesawat from "../../assets/iconPesawat.svg";

import { getTiket } from "../redux/Actions/TiketActions";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const { pesawat } = useSelector((state) => state.tiket)
  const { hotel } = useSelector((state) => state.tiket)
  const { detailHotel } = useSelector((state) => state.tiket)

  // console.log(pesawat)

  useEffect(() => {
    dispatch(getTiket());
  }, [dispatch])

  //Carousel by react-slick
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [step, setStep] = useState(1);

  // Function to handle sidebar menu click
  const handleMenuClick = (stepNumber) => {
    setStep(stepNumber);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto">

        {/* main saction */}
        <div className="relative">
          {/* mainsaction */}
          <div className="relative">
            <img src={GambarGunung} alt="Gambar Gunung" className="w-full" />
            <div className="absolute top-52 text-white font-bold tracking-wider text-4xl w-1/2 pl-40 leading-relaxed capitalize">
              <h1>Bersama kami liburan anda jadi lebih mudah dan menyenangkan</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {/* card menu destinasi */}
          <div className="border-2 shadow-md py-4 px-2 bg-white absolute w-2/3 rounded-2xl top-[460px]">
            {/* heading pilihan */}
            <div className="flex flex-row gap-4">
              <button
                onClick={() => handleMenuClick(1)}
                className="shadow-md border-2 py-2 px-3 flex gap-2 rounded-xl hover:text-white hover:bg-blue-600 duration-300">
                <p>Hotel</p>
                <img src={IconHotel} alt="IconHotel" />
              </button>
              <button
                onClick={() => handleMenuClick(2)}
                className="shadow-md border-2 py-2 px-3 flex gap-2 rounded-xl hover:text-white hover:bg-blue-600 duration-300">
                <p>Pesawat</p>
                <img src={IconPesawat} alt="IconPesawat" />
              </button>
            </div>

            {/* detailing hotel*/}
            {step === 1 && (
              <DetailMenuHotelComponent />
            )}

            {/* detailing pesawat */}
            {step === 2 && (
              <DetailMemuPesawatComponent />
            )}

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
        <RekomendasiComponent pesawat={pesawat} hotel={hotel} detailHotel={detailHotel} />

        {/* about, vision, mision */}
        <AboutEtcComponent />

        {/* FAQ */}
        <FaqComponent />

        {/* Our Review */}
        <OurReviewComponent />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;