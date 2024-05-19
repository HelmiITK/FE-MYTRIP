import { Button, FileInput, Label, Modal, TextInput, Spinner } from "flowbite-react";
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
  const [category, setCategory] = useState("");
  const [photoCategory, setPhotoCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleHotel = async () => {
    if (!photoCategory) {
      setErrorMessage("Please upload a file");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      await dispatch(addHotel(name, city, desc, address, price, category, photoCategory));
      setAddHotell(false);
    } catch (error) {
      setErrorMessage("Failed to add Hotel");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhotoCategory(selectedFile);
  };

  return (
    <Modal show={addHotell} size="md" onClose={() => setAddHotell(false)}>
      <Modal.Header>Tambah Kategori Hotel</Modal.Header>
      <Modal.Body>
        <div className="w-full relative">
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Nama Hotel</label>
            <TextInput
              type="text"
              placeholder="ex: Platinum"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Nama Kota</label>
            <TextInput
              type="text"
              placeholder="ex: Balikpapan"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Deskripsi</label>
            <TextInput
              type="text"
              placeholder="ex: Hotel ini adalah..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Alamat</label>
            <TextInput
              type="text"
              placeholder="ex: Kilo 5"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Harga</label>
            <TextInput
              type="text"
              placeholder="ex: 200"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-sm mb-1">Kategori</label>
            <select
              className="h-11 w-full border rounded-md bg-transparent text-gray-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="singleBed">Single Bed</option>
              <option value="twinBed">Twin Bed</option>
              <option value="family">Family</option>
            </select>
          </div>
          <div>
            <Label htmlFor="file-upload-helper-text" value="Upload file" />
            <FileInput id="file-upload-helper-text" onChange={handleFileChange} />
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
            {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
          </div>
          <div className="w-full py-3 flex justify-center">
            <Button className="w-96 h-full" onClick={handleHotel} disabled={loading}>
              {loading ? <Spinner size="sm" /> : "Tambah"}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

AddHotel.propTypes = {
  addHotell: PropTypes.bool,
  setAddHotell: PropTypes.func,
};

export default AddHotel;
