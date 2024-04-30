import { FaStar } from "react-icons/fa";
import Alim from "../../assets/Ellipse 9.png";

const OurReviewComponent = () => {
   return (
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
   )
}

export default OurReviewComponent