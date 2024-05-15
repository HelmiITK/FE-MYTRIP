import { IoIosAddCircle } from "react-icons/io";
import AddPesawat from "../../components/Modal/AddPesawat";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPesawat } from "../redux/Actions/AddActions";

const KelolaPesawat = () => {
  // const pesawat = [
  //   {
  //     id: 1,
  //     name: "Garuda",
  //     depature_kota: "Balikpapan",
  //     destination_kota: "Bali",
  //     pesawat_depature: "2024-05-15T10:00:00Z",
  //     pesawat_destination: "2024-05-30T12:00:00Z",
  //   },
  //   {
  //     id: 2,
  //     name: "Garuda",
  //     depature_kota: "Balikpapan",
  //     destination_kota: "Bali",
  //     pesawat_depature: "2024-05-15T10:00:00Z",
  //     pesawat_destination: "2024-05-30T12:00:00Z",
  //   },
  //   {
  //     id: 3,
  //     name: "Garuda",
  //     depature_kota: "Balikpapan",
  //     destination_kota: "Bali",
  //     pesawat_depature: "2024-05-15T10:00:00Z",
  //     pesawat_destination: "2024-05-30T12:00:00Z",
  //   },
  // ];
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);
  const [pesawatId, setPesawatId] = useState(null);

  const { pesawat } = useSelector((state) => state.add);

  useEffect(() => {
    dispatch(getPesawat()).catch((error) => {
      console.error("Error fetching hotel data:", error);
    });
  }, [dispatch]);

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
    setPesawatId(pesawatId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setPesawatId(null);
  };

  return (
    <div className="flex flex-col justify-center container mt-10 mx-auto">
      <div className="flex flex-row justify-between w-full mb-4 items-center">
        <div className="font-bold text-xl">Data Kelola Hotel</div>
        <div className="flex flex-row gap-3">
          {/* Tombol "Tambah" dengan event handler untuk membuka modal */}
          <button
            className="bg-blue-600 flex flex-row justify-center items-center p-[6px] rounded-md gap-1 text-white font-bold"
            onClick={() => handleOpenModal("addPesawatt")}
          >
            <IoIosAddCircle />
            <p>Tambah</p>
          </button>
          <AddPesawat
            addPesawatt={activeModal === "addPesawatt"}
            setAddPesawatt={handleCloseModal}
          />
        </div>
      </div>

      {/* Tabel data hotel */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Nama Pesawat</th>
              <th className="px-4 py-3 text-left">Photo</th>
              <th className="px-4 py-3 text-left">Keberangkaran</th>
              <th className="px-4 py-3 text-left">Tujuan</th>
              <th className="px-4 py-3 text-left">Tanggal Keberangkatan</th>
              <th className="px-4 py-3 text-left">Tanggal Tujuan</th>
              <th className="px-4 py-3 text-left">Harga</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pesawat ? (
              pesawat.map((pesawat) => (
                <tr key={pesawat.id} className="text-sm font-medium">
                  <td className="px-4 py-3">{pesawat.id}</td>
                  <td className="px-4 py-3">{pesawat.pesawat_name}</td>
                  <td className="px-4 py-3">
                    <img className="h-12 w-12 rounded-lg" src={pesawat.pesawat_foto} alt={pesawat.pesawat_name} />
                  </td>
                  <td className="px-4 py-3">{pesawat.pesawat_depature_kota}</td>
                  <td className="px-4 py-3">{pesawat.pesawat_destination_kota}</td>

                  <td className="px-4 py-3">{pesawat.pesawat_depature}</td>
                  <td className="px-4 py-3">{pesawat.pesawat_destination}</td>
                  <td className="px-4 py-3">{pesawat.pesawat_harga}</td>

                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded-md mr-2">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded-md">Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KelolaPesawat;
