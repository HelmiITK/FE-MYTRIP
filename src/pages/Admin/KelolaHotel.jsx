import { IoIosAddCircle } from "react-icons/io";
import AddHotel from "../../components/Modal/AddHotel";
import { useEffect, useState } from "react";
import EditHotel from "../../components/Modal/EditHotel";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../redux/Actions/AddActions";
// import TableComponent from "../../components/Dashboard/TableHotelComponent";
import TableHotelComponent from "../../components/Dashboard/TableHotelComponent";
import { deleteHotel } from "../redux/Actions/DelActions";

const KelolaHotel = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(null);
  const [hotelId, setHotelId] = useState(null);

  const { hotel } = useSelector((state) => state.add); // Ambil data hotels dari state Redux

  useEffect(() => {
    dispatch(getHotel()).catch((error) => {
      console.error("Error fetching hotel data:", error);
    });
  }, [dispatch]);

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
    setHotelId(hotelId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setHotelId(null);
  };

  const handleDeleteHotel = (hotelId) => {
    dispatch(deleteHotel(hotelId))
  }

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      // Periksa apakah text tidak null dan memiliki panjang yang cukup
      return text.slice(0, maxLength) + "...";
    }
    return text; // Kembalikan text asli jika tidak perlu dipotong
  };

  return (
    <div className="overflow-y-auto max-h-screen">
      <div className="flex flex-col justify-center container mt-10 mx-auto ">
        <div className="flex flex-row justify-between w-full mb-4 items-center">
          <div className="font-bold text-xl">Data Kelola Hotel</div>
          <div className="flex flex-row gap-3">
            {/* Tombol "Tambah" dengan event handler untuk membuka modal */}
            <button
              className="bg-blue-600 flex flex-row justify-center items-center p-[6px] rounded-md gap-1 text-white font-bold"
              onClick={() => handleOpenModal("addHotell")}
            >
              <IoIosAddCircle />
              <p>Tambah</p>
            </button>
            <AddHotel addHotell={activeModal === "addHotell"} setAddHotell={handleCloseModal} />
          </div>
        </div>

        {/* Tabel data hotel */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white border rounded-lg">
            {/* Table Hotel */}
            <TableHotelComponent />

            <tbody className="divide-y divide-gray-200">
              {hotel ? (
                hotel.map((hotel) => (
                  <tr key={hotel.id} className="text-sm font-medium">
                    <td className="px-4 py-3">{hotel.id}</td>
                    <td className="px-4 py-3">{hotel.hotel_name}</td>
                    <td className="px-4 py-3">
                      <img className="h-12 w-12 rounded-lg" src={hotel.hotel_foto} />
                    </td>
                    <td className="px-4 py-3">{hotel.hotel_city}</td>
                    <td className="px-4 py-3">{truncateText(hotel.hotel_desc, 25)}</td>
                    <td className="px-4 py-3">{truncateText(hotel.hotel_alamat, 25)}</td>
                    <td className="px-4 py-3">{hotel.hotel_facilities}</td>
                    <td className="px-4 py-3">{hotel.hotel_kategori}</td>
                    <td className="px-4 py-3">{hotel.hotel_harga}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div>
                          <button
                            className="px-3 py-1 bg-blue-600 text-white rounded-md mr-2"
                            onClick={() => handleOpenModal("editedHotel")}
                          >
                            Edit
                          </button>
                          <EditHotel
                            editedHotel={activeModal === "editedHotel"}
                            setEditedHotel={handleCloseModal}
                          />
                        </div>
                        <div>
                          <button
                            className="px-3 py-1 bg-red-600 text-white rounded-md"
                            // onClick={handleDeleteHotel(hotel.id)}
                            onClick={() => handleDeleteHotel(hotel.id)}
                          >
                            Delete
                          </button>
                        </div>
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
    </div>
  );
};

export default KelolaHotel;
