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

export const addPesawat =
  (
    jenisPesawat,
    depature,
    destination,
    dateDepature,
    dateDestination,
    harga
    // photo
  ) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().auth;

      const response = await axios.post(
        `${api_url}/pesawat/tambahpesawat`,
        {
          pesawat_name: jenisPesawat,
          pesawat_depature_kota: depature,
          pesawat_destination_kota: destination,
          pesawat_depature: dateDepature,
          pesawat_destination: dateDestination,
          pesawat_harga: harga,
          // pesawat_foto: photo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { data } = response.data;
      // Setelah berhasil menambahkan, panggil tindakan untuk memuat ulang data hotel
      dispatch(getPesawat()); // Memuat ulang data hotel setelah penambahan berhasil
      window.location.reload();

      console.log(data);
    } catch (error) {
      console.log(error);

      if (error.response) {
        if (error.response.status === 403) {
          // Status kode 403 menunjukkan kesalahan autentikasi
          alert.error("Silakan login terlebih dahulu untuk melanjutkan");
        }
      }
    }
  };

export const addHotel =
  (name, city, desc, address, price, photo, category, facilities) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;

      const response = await axios.post(
        `${api_url}/hotel/tambahhotel`,
        {
          hotel_name: name,
          hotel_city: city,
          hotel_desc: desc,
          hotel_alamat: address,
          hotel_foto: photo,
          hotel_harga: price,
          hotel_kategori: category,
          hotel_facilities: facilities,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { data } = response.data;

      dispatch(getHotel());
      window.location.reload();

      console.log(data);
    } catch (error) {
      console.log(error);

      if (error.response) {
        if (error.response.status === 403) {
          // Status kode 403 menunjukkan kesalahan autentikasi
          alert.error("Silakan login terlebih dahulu untuk melanjutkan");
        }
      }
    }
  };

// export const addHotel =
//   (name, city, desc, address, price, photo, category) => async (_, getState) => {
//     try {
//       let { token } = getState().auth;
//       const formData = new FormData();

//       formData.append("hotel_name", name);
//       formData.append("hotel_city", city);
//       formData.append(c"hotel_desc", desc);
//       formData.append("hotel_alamat", address);
//       formData.append("hotel_foto", photo);
//       formData.append("hotel_harga", price);
//       formData.append("hotel_kategori", category);

//       console.log(name, city, desc, address, price, photo, category);

//       await axios.post(
//         `${api_url}/hotel/tambahhotel`,
//         {
//           name,
//           city,
//           desc,
//           address,
//           price,
//           photo,
//           category,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       window.location.reload();
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
