import { Button, FileInput, Label, Modal, TextInput, Spinner } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addPesawat } from "../../pages/redux/Actions/AddActions";

const AddPesawat = ({ addPesawatt, setAddPesawatt }) => {
  const dispatch = useDispatch();
  const [jenisPesawat, setJenisPesawat] = useState("");
  const [depature, setDepature] = useState("");
  const [destination, setDestination] = useState("");
  const [dateDepature, setDateDepature] = useState("");
  const [dateDestination, setDateDestination] = useState("");
  const [harga, setHarga] = useState("");
  const [photoCategory, setPhotoCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePesawat = async () => {
    if (!photoCategory) {
      setErrorMessage("Please upload a file");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      await dispatch(
        addPesawat(
          jenisPesawat,
          depature,
          destination,
          dateDepature,
          dateDestination,
          harga,
          photoCategory
        )
      );
      setAddPesawatt(false);
    } catch (error) {
      setErrorMessage("Failed to add Pesawat");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhotoCategory(selectedFile);
  };

  return (
    <Modal show={addPesawatt} size="md" onClose={() => setAddPesawatt(false)}>
      <Modal.Header>Tambah Kategori Pesawat</Modal.Header>
      <Modal.Body>
        <div className="w-full relative">
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Jenis Pesawat</label>
            <TextInput
              type="text"
              placeholder="ex: Air Bus"
              value={jenisPesawat}
              onChange={(e) => setJenisPesawat(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Keberangkatan</label>
            <TextInput
              type="text"
              placeholder="ex: Balikapapn"
              value={depature}
              onChange={(e) => setDepature(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Tujuan</label>
            <TextInput
              type="text"
              placeholder="ex: India"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Tanggal Keberangkatan</label>
            <TextInput
              type="datetime-local"
              value={dateDepature}
              onChange={(e) => setDateDepature(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Tanggal Tujuan</label>
            <TextInput
              type="datetime-local"
              value={dateDestination}
              onChange={(e) => setDateDestination(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[15px] mb-[4px]">Harga</label>
            <TextInput
              type="text"
              placeholder="ex: 200"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="file-upload-helper-text" value="Upload file" />
            <FileInput id="file-upload-helper-text" onChange={handleFileChange} />
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
            {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
          </div>
          <div className="w-full py-3 flex justify-center">
            <Button className="w-96 h-full" onClick={handlePesawat} disabled={loading}>
              {loading ? <Spinner size="sm" /> : "Tambah"}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

AddPesawat.propTypes = {
  addPesawatt: PropTypes.bool,
  setAddPesawatt: PropTypes.func,
};

export default AddPesawat;
