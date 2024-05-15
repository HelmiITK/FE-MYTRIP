import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getDetailPesawat } from "../redux/Actions/TiketActions";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaUserLarge } from "react-icons/fa6";
import { FaPlaneUp } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { GiAirplaneArrival } from "react-icons/gi";
import Swal from 'sweetalert2';

const PesawatPage = () => {
   const { pesawatId } = useParams();
   const dispatch = useDispatch();
   const modalRef = useRef(null);
   const { detailPesawat } = useSelector((state) => state.tiket);

   useEffect(() => {
      dispatch(getDetailPesawat(pesawatId))
   }, [])

   const [form, setForm] = useState({
      namaDepan: '',
      namaBelakang: '',
      bulanLahir: '',
      hariLahir: '',
      tahunLahir: ''
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
   };

   const handleSubmit = () => {
      const { namaDepan, namaBelakang, bulanLahir, hariLahir, tahunLahir } = form;

      if (namaDepan && namaBelakang && bulanLahir && hariLahir && tahunLahir) {
         Swal.fire({
            title: 'Berhasil!',
            text: 'Tiket berhasil dipesan.',
            icon: 'success',
            confirmButtonText: 'OK'
         }).then(() => {
            // Reset form fields
            setForm({
               namaDepan: '',
               namaBelakang: '',
               bulanLahir: '',
               hariLahir: '',
               tahunLahir: ''
            });
            // Close modal
            modalRef.current.close();
         });
      } else {
         Swal.fire({
            title: 'Gagal!',
            text: 'Mohon isi semua field.',
            icon: 'error',
            confirmButtonText: 'OK'
         });
      }
   };

   const pesawatDepature = detailPesawat?.pesawat_depature;
   const splitDep = pesawatDepature ? pesawatDepature.split('T')[0] : '';
   const pesawatDestination = detailPesawat?.pesawat_destination;
   const splitDes = pesawatDepature ? pesawatDestination.split('T')[0] : '';

   return (
      <>
         <Navbar />
         <div className="pt-32 container mx-auto">
            <div className="relative">
               {/* section gambar */}
               <div className="mx-4 relative">
                  <img
                     src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D"
                     alt="Gambar Detail"
                     className="object-cover w-full rounded-3xl h-96"
                  />
                  <h1 className="absolute top-10 left-10 text-white font-extrabold text-4xl leading-relaxed tracking-widest">
                     Detail <br /> Pesawat Anda
                  </h1>
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
                  <div className="border-none shadow-lg rounded-xl p-6 bg-slate-100 mt-8 flex flex-col gap-8">
                     {/* heading */}
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                           <FaPlaneUp className="w-8 h-8" />
                           <h1 className="font-medium text-lg">{detailPesawat?.pesawat_name}</h1>
                        </div>
                        <div className="font-medium text-2xl">Rp. {detailPesawat?.pesawat_harga} / pax</div>
                     </div>
                     <div className="flex justify-between items-center">
                        <div>
                           <img
                              src={detailPesawat?.pesawat_foto}
                              alt=""
                              className="rounded-xl drop-shadow-xl w-96 h-40 object-cover"
                           />
                        </div>
                        <div className="flex gap-2 items-center w-1/2 justify-center">
                           <div className="flex flex-col gap-2 items-center">
                              <h2 className="font-medium">{detailPesawat?.pesawat_depature_kota}</h2>
                              <h3 className="text-lg">{splitDep}</h3>
                           </div>

                           <div className="w-1/2 flex items-center">
                              <GiAirplaneDeparture className="w-8 h-8" />
                              <div className="h-px w-full bg-slate-400"></div>
                              <GiAirplaneArrival className="w-8 h-8" />
                           </div>

                           <div className="flex flex-col gap-2 items-center">
                              <h2 className="font-medium">{detailPesawat?.pesawat_destination_kota}</h2>
                              <h3 className="text-lg">{splitDes}</h3>
                           </div>
                        </div>

                        <button
                           className="border-2 border-green-500 rounded-xl py-2 px-4 w-64 text-center font-medium bg-white  hover:bg-green-500 duration-300 hover:text-white hover:scale-105 hover:drop-shadow-md"
                           onClick={() => modalRef.current.showModal()}
                        >
                           Pilih
                        </button>
                        <dialog id="my_modal_3" className="modal" ref={modalRef}>
                           <div className="modal-box">
                              <form method="dialog">
                                 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                              </form>
                              <h3 className="font-bold text-lg mb-4">Pesan Tiket Sekarang!</h3>
                              <div className="flex gap-4 justify-center">
                                 <div className="flex flex-col gap-4 p-4 text-start border border-slate-100 shadow-md rounded-md ">
                                    <img
                                       src={detailPesawat?.pesawat_foto}
                                       alt=""
                                       className="w-96 drop-shadow-xl rounded-lg "
                                    />
                                    <h2 className="text-lg font-semibold text-center">Detail Pesawat</h2>
                                    <div className="flex flex-col gap-2">
                                       <div>
                                          <h1 className="">Nama maskapai</h1>
                                          <h2 className="font-medium text-lg">{detailPesawat?.pesawat_name}</h2>
                                       </div>
                                       <div>
                                          <h1 className="">Keberangkatan</h1>
                                          <div className="flex items-center gap-2">
                                             <h2 className="font-medium text-lg">{detailPesawat?.pesawat_depature_kota}</h2>
                                             <GiAirplaneDeparture className="w-8 h-8" />
                                          </div>
                                       </div>
                                       <div>
                                          <h1 className="">Tujuan</h1>
                                          <div className="flex items-center gap-2">
                                             <h2 className="font-medium text-lg">{detailPesawat?.pesawat_destination_kota}</h2>
                                             <GiAirplaneArrival className="w-8 h-8" />
                                          </div>
                                       </div>
                                       <div>
                                          <h1 className="">Harga tike</h1>
                                          <h2 className="font-medium text-lg">Rp.{detailPesawat?.pesawat_harga}</h2>
                                       </div>
                                    </div>
                                 </div>
                                 <form className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                       <h1 className="font-medium text-lg">Nama Penumpang</h1>
                                       <div className="flex flex-col gap-2">
                                          <label htmlFor="namaDepan" className="flex flex-col gap-2">
                                             <h2 className="font-medium">Nama Depan</h2>
                                             <input
                                                type="text"
                                                name="namaDepan"
                                                id="namaDepan"
                                                className="border border-black rounded-lg py-2 px-4"
                                                placeholder="Isi nama depan anda"
                                                value={form.namaDepan}
                                                onChange={handleInputChange}
                                             />
                                          </label>
                                          <label htmlFor="namaBelakang" className="flex flex-col gap-2">
                                             <h2 className="font-medium">Nama Belakang</h2>
                                             <input
                                                type="text"
                                                name="namaBelakang"
                                                id="namaBelakang"
                                                className="border border-black rounded-lg py-2 px-4"
                                                placeholder="Isi nama belakang anda"
                                                value={form.namaBelakang}
                                                onChange={handleInputChange}
                                             />
                                          </label>
                                       </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                       <h2 className="font-medium text-lg">Tanggal Lahir</h2>
                                       <div className="flex flex-col gap-2">
                                          <label htmlFor="bulanLahir" className="flex flex-col gap-2">
                                             <h2 className="font-medium">Bulan</h2>
                                             <input
                                                type="text"
                                                name="bulanLahir"
                                                id="bulanLahir"
                                                className="border border-black rounded-lg py-2 px-4"
                                                placeholder="Bulan lahir anda"
                                                value={form.bulanLahir}
                                                onChange={handleInputChange}
                                             />
                                          </label>
                                          <label htmlFor="hariLahir" className="flex flex-col gap-2">
                                             <h2 className="font-medium">Hari</h2>
                                             <input
                                                type="text"
                                                name="hariLahir"
                                                id="hariLahir"
                                                className="border border-black rounded-lg py-2 px-4"
                                                placeholder="Hari lahir anda"
                                                value={form.hariLahir}
                                                onChange={handleInputChange}
                                             />
                                          </label>
                                          <label htmlFor="tahunLahir" className="flex flex-col gap-2">
                                             <h2 className="font-medium">Tahun</h2>
                                             <input
                                                type="text"
                                                name="tahunLahir"
                                                id="tahunLahir"
                                                className="border border-black rounded-lg py-2 px-4"
                                                placeholder="Tahun lahir anda"
                                                value={form.tahunLahir}
                                                onChange={handleInputChange}
                                             />
                                          </label>
                                       </div>
                                    </div>
                                    <button
                                       type="button"
                                       onClick={handleSubmit}
                                       className="bg-blue-500 rounded-md py-2 px-4 text-white font-medium text-lg hover:bg-green-500 duration-300 hover:drop-shadow-lg"
                                    >
                                       Pesan
                                    </button>
                                 </form>
                              </div>
                           </div>
                        </dialog>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default PesawatPage