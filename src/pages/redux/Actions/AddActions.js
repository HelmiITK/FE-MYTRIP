import axios from "axios";
import { setHotel, setPesawat } from "../Reducers/AddReducers";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const getHotel = () => async (dispatch) => {
  try {
    // let { token } = getState().auth();
    // if (!token) return;

    const response = await axios.get(`${api_url}/hotel/totalhotel`);

    // const { data } = response.data;
    // dispatch(setHotel(data));
    const { data } = response.data;
    dispatch(setHotel(data));

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPesawat = () => async (dispatch) => {
  try {
    // let { token } = getState().auth();
    // if (!token) return;

    const response = await axios.get(`${api_url}/pesawat/totalpesawat`);

    // const { data } = response.data;
    // dispatch(setHotel(data));
    const { data } = response.data;
    dispatch(setPesawat(data));

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const addHotel =
  (name, city, desc, address, price, category, photoCategory) => async (_, getState) => {
    try {
      let { token } = getState().auth;

      const formData = new FormData();
      formData.append("hotel_name", name);
      formData.append("hotel_city", city);
      formData.append("hotel_desc", desc);
      formData.append("hotel_alamat", address);
      formData.append("hotel_foto", photoCategory);
      formData.append("hotel_harga", price);
      formData.append("hotel_kategori", category);

      await axios.post(`${api_url}/hotel/tambahhotel`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

export const addPesawat =
  (jenisPesawat, depature, destination, dateDepature, dateDestination, harga, photoCategory) =>
  async (_, getState) => {
    try {
      let { token } = getState().auth;

      const formData = new FormData();
      formData.append("pesawat_name", jenisPesawat);
      formData.append("pesawat_depature_kota", depature);
      formData.append("pesawat_destination_kota", destination);
      formData.append("pesawat_depature", dateDepature);
      formData.append("pesawat_destination", dateDestination);
      formData.append("pesawat_harga", harga);
      formData.append("pesawat_foto", photoCategory);

      await axios.post(`${api_url}/pesawat/tambahpesawat`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

// export const addPesawat =
//   (
//     jenisPesawat,
//     depature,
//     destination,
//     dateDepature,
//     dateDestination,
//     harga
//     // photo
//   ) =>
//   async (dispatch, getState) => {
//     try {
//       const { token } = getState().auth;

//       const response = await axios.post(
//         `${api_url}/pesawat/tambahpesawat`,
//         {
//           pesawat_name: jenisPesawat,
//           pesawat_depature_kota: depature,
//           pesawat_destination_kota: destination,
//           pesawat_depature: dateDepature,
//           pesawat_destination: dateDestination,
//           pesawat_harga: harga,
//           // pesawat_foto: photo,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const { data } = response.data;
//       // Setelah berhasil menambahkan, panggil tindakan untuk memuat ulang data hotel
//       dispatch(getPesawat()); // Memuat ulang data hotel setelah penambahan berhasil
//       window.location.reload();

//       console.log(data);
//     } catch (error) {
//       console.log(error);

//       if (error.response) {
//         if (error.response.status === 403) {
//           // Status kode 403 menunjukkan kesalahan autentikasi
//           alert.error("Silakan login terlebih dahulu untuk melanjutkan");
//         }
//       }
//     }
//   };
