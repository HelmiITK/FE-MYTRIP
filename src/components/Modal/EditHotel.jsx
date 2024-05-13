import { FileInput, Button, Modal, TextInput, Label } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";

function EditHotel({ editedHotel, setEditedHotel }) {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [desc, setDesc] = useState();
  const [address, setAddress] = useState();
  const [price, setPrice] = useState();
  const [type, setType] = useState();

  const [photoCategory, setPhotoCategory] = useState(null);

  //   constHandleHotel = () => {
  //     dispatch(addHotel)

  //   };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhotoCategory(selectedFile);
  };

  return (
    <>
      <Modal show={editedHotel} size="md" onClose={() => setEditedHotel(false)}>
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
                value={name}
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
              <label className="font-semibold text-[15px] mb-[4px]">Desc</label>
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
              <label className="font-semibold text-[15px] mb-[4px]">Price</label>
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
              <div className="w-full">
                <div className="inset-y-0 right-0 flex items-center  w-full">
                  <div className="relative w-full border rounded-2xl">
                    <select
                      className=" h-11 w-full rounded-md bg-transparent text-gray-500"
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    >
                      <option value="Single Bed">Single Bed</option>
                      <option value="Twin Bed"> Twin Bed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <Label htmlFor="file-upload-helper-text" value="Upload file" />
              </div>
              <FileInput
                id="file-upload-helper-text"
                // helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                onChange={handleFileChange}
              />
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
            </div>
            <div className="w-full py-3 flex justify-center">
              <Button
                className="w-96 h-full "
                // onClick={}
              >
                Tambah
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

EditHotel.propTypes = {
  editedHotel: PropTypes.bool,
  setEditedHotel: PropTypes.func,
};

export default EditHotel;
