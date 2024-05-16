import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addPesawat } from "../../pages/redux/Actions/AddActions";
// import DateTimePicker from "react-datetime-picker";

const AddPesawat = ({ addPesawatt, setAddPesawatt }) => {
  const dispatch = useDispatch();
  const [jenisPesawat, setJenisPesawat] = useState();
  const [depature, setDepature] = useState();
  const [destination, setDestination] = useState();
  const [dateDepature, setDateDepature] = useState();
  const [dateDestination, setDateDestination] = useState();
  const [harga, setHarga] = useState();

  // const [value, onChange] = useState(new Date());

  // const dateRangeRef = useRef(null);
  const handlePesawat = () => {
    dispatch(addPesawat(jenisPesawat, depature, destination, dateDepature, dateDestination, harga))
  };

  return (
    <>
      <Modal show={addPesawatt} size="md" onClose={() => setAddPesawatt(false)}>
        {/* <Modal.Header /> */}
        <Modal.Header> Tambah Kategori Pesawat</Modal.Header>
        <Modal.Body>
          <div className="w-full relative">
            {/* nama hotel */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Jenis Pesawat</label>
              <TextInput
                type="text"
                placeholder="ex: Air Bus"
                value={jenisPesawat}
                onChange={(event) => setJenisPesawat(event.target.value)}
                required
              />
            </div>
            {/* nama kota */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Keberangkaran</label>
              <TextInput
                type="text"
                placeholder="ex: Balikapapn"
                value={depature}
                onChange={(event) => setDepature(event.target.value)}
                required
              />
            </div>
            {/* deskripsi hotel */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Tujuan</label>
              <TextInput
                type="text"
                placeholder="ex: India"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                required
                D
              />
            </div>

            {/* alamat hotel */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">tanggal Keberangkatan</label>
              <TextInput
                type="datetime-local"
                placeholder="ex: Kilo 5"
                value={dateDepature}
                onChange={(event) => setDateDepature(event.target.value)}
                required
              />
            </div>
            {/* price */}
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Tanggal Tujuan</label>
              <TextInput
                type="datetime-local"
                placeholder="ex: 200"
                value={dateDestination}
                onChange={(event) => setDateDestination(event.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-[15px] mb-[4px]">Harga</label>
              <TextInput
                type="text"
                placeholder="ex: 200"
                value={harga}
                onChange={(event) => setHarga(event.target.value)}
                required
              />
            </div>
            {/* <div>
              <DateTimePicker onChange={onChange} value={value} />
            </div> */}
            <div className="w-full py-3 flex justify-center">
              <Button
                className="w-96 h-full "
                onClick={handlePesawat}
              >
                Tambah
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

AddPesawat.propTypes = {
  addPesawatt: PropTypes.bool,
  setAddPesawatt: PropTypes.func,
};

export default AddPesawat;
