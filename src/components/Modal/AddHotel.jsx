import { FileInput, Button, Modal, TextInput, Label } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addHotel } from "../../pages/redux/Actions/AddActions";

const AddHotel = ({ addHotell, setAddHotell }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null); // Atau setPhoto(undefined) jika nilai awal harus jelas
  const [category, setCategory] = useState("");
  const handleHotel = () => {
    dispatch(addHotel(name, city, desc, address, price, photo, category));
  };

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     setPhoto(selectedFile);
  //   }
  // };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0]; // Menggunakan optional chaining (?)
    if (selectedFile) {
      setPhoto(selectedFile);
    }
  };

  return (
    <>
      <Modal show={addHotell} size="md" onClose={() => setAddHotell(false)}>
        {/* <Modal.Header /> */}
        <Modal.Header> Tambah Kategori Hotel</Modal.Header>
        <Modal.Body>
          <div className="w-full relative">
            {/* nama hotel */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Nama Hotel</label>
              <TextInput
                type="text"
                placeholder="ex: Platinum"
                value={name || ""}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            {/* nama kota */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Nama Kota</label>
              <TextInput
                type="text"
                placeholder="ex: Balikpapan"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              />
            </div>
            {/* deskripsi hotel */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Deskripsi</label>
              <TextInput
                type="text"
                placeholder="ex: Hotel ini adalah..."
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
                required
              />
            </div>

            {/* alamat hotel */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Alamat</label>
              <TextInput
                type="text"
                placeholder="ex: Kilo 5"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
            </div>
            {/* price */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Harga</label>
              <TextInput
                type="text"
                placeholder="ex: 200"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Kategori</label>
              <TextInput
                type="text"
                placeholder="ex: "
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold text-sm mb-1">Kategori</label>
              <select
                className="h-11 w-full rounded-md bg-transparent text-gray-500"
                value={category || ""}
                onChange={(event) => setCategory(event.target.value)}
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="singleBed">Single Bed</option>
                <option value="twinBed">Twin Bed</option>
                <option value="family">Family</option>
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label className="font-semibold text-sm mb-1">Unggah Foto</label>
              <FileInput id="file-upload" onChange={handleFileChange} />
              {photo && (
                <img
                  className="mt-2"
                  src={URL.createObjectURL(photo)}
                  alt="Hotel"
                  style={{ maxWidth: "100%" }}
                />
              )}
            </div>

            <div className="w-full py-3 flex justify-center">
              <Button className="w-96 h-full " onClick={handleHotel}>
                Tambah
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

AddHotel.propTypes = {
  addHotell: PropTypes.bool,
  setAddHotell: PropTypes.func,
};

export default AddHotel;

// import { FileInput, Button, Modal, TextInput, Label } from "flowbite-react";
// import { useState } from "react";
// import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import { addHotel } from "../../pages/redux/Actions/AddActions";

// const AddHotel = ({ addHotell, setAddHotell }) => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: "",
//     city: "",
//     desc: "",
//     address: "",
//     price: "",
//     photo: null,
//     category: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFormData({ ...formData, photo: selectedFile });
//   };

//   const handleHotelSubmit = () => {
//     dispatch(addHotel(formData));
//     setAddHotell(false); // Tutup modal setelah pengiriman berhasil
//   };

//   return (
//     <Modal show={addHotell} size="md" onClose={() => setAddHotell(false)}>
//       <Modal.Header> Tambah Kategori Hotel</Modal.Header>
//       <Modal.Body>
//         <div className="w-full relative">
//           {/* Form input untuk data hotel */}
//           <div className="flex flex-col">
//             <label className="font-semibold text-[15px] mb-[4px]">Nama Hotel</label>
//             <TextInput
//               type="text"
//               name="name"
//               placeholder="ex: Platinum"
//               value={formData.name}
//               onChange={handleInputChange}
//               required

//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="font-semibold text-[15px] mb-[4px]">Nama Kota</label>
//             <TextInput
//               type="text"
//               name="city"
//               placeholder="ex: Balikpapan"
//               value={formData.city}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="font-semibold text-[15px] mb-[4px]">Deskripsi</label>
//             <TextInput
//               type="text"
//               name="desc"
//               placeholder="ex: Hotel ini adalah..."
//               value={formData.desc}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="font-semibold text-[15px] mb-[4px]">Alamat</label>
//             <TextInput
//               type="text"
//               name="address"
//               placeholder="ex: Kilo 5"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="font-semibold text-[15px] mb-[4px]">Harga</label>
//             <TextInput
//               type="text"
//               name="price"
//               placeholder="ex: 200"
//               value={formData.price}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="font-semibold text-[15px] mb-[4px]">Kategori</label>
//             <div className="w-full">
//               <div className="inset-y-0 right-0 flex items-center  w-full">
//                 <div className="relative w-full border rounded-2xl">
//                   <select
//                     className=" h-11 w-full rounded-md bg-transparent text-gray-500"
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                   >
//                     <option value="singleBed">Single Bed</option>
//                     <option value="twinBed">Twin Bed</option>
//                     <option value="family">Family</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Input untuk upload foto hotel */}
//           <div>
//             <div>
//               <Label htmlFor="file-upload-helper-text" value="Upload file" />
//             </div>
//             <FileInput id="file-upload-helper-text" onChange={handleFileChange} />
//             <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
//           </div>
//           {/* Tombol untuk submit */}
//           <div className="w-full py-3 flex justify-center">
//             <Button className="w-96 h-full" onClick={handleHotelSubmit}>
//               Tambah
//             </Button>
//           </div>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// AddHotel.propTypes = {
//   addHotell: PropTypes.bool,
//   setAddHotell: PropTypes.func,
// };

// export default AddHotel;
