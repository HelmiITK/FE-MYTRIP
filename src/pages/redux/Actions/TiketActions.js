import axios from "axios";
import { setPesawat, setError, setHotel, setDetailPesawat, setDetaiHotel } from "../Reducers/TiketReducers";
import Swal from "sweetalert2";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const getTiket = () => async (dispatch) => {
   try {
      const responsePesawat = await axios.get(`${api_url}/pesawat/totalpesawat`);
      const pesawat = responsePesawat.data.data;


      const responseHotel = await axios.get(`${api_url}/hotel/totalhotel`);
      const hotel = responseHotel.data.data;

      dispatch(setPesawat(pesawat))
      dispatch(setHotel(hotel))
      console.log(hotel)

   } catch (error) {
      dispatch(setError(error.message));
      console.log(error)
   }
}

export const getDetailPesawat = (detailId) => async (dispatch) => {
   try {
      const response = await axios.get(`${api_url}/pesawat/getPesawatById/${detailId}`)
      const detail = response.data.data
      dispatch(setDetailPesawat(detail))
   } catch (error) {
      dispatch(setError(error.message));
   }
}

export const getDetailHotel = (detailId) => async (dispatch) => {
   try {
      const response = await axios.get(`${api_url}/hotel/getHotelById/${detailId}`)
      const detail = response.data.data
      dispatch(setDetaiHotel(detail))
   } catch (error) {
      dispatch(setError(error.message));
   }
}

export const createReservasiHotel = (id_hotel_facility, cek_in_hotel, cek_out_hotel) => async (dispatch, getState) => {
   try {
      let { token } = getState().auth;

      console.log("Request URL:", `${api_url}/reservasi/reservations`);
      console.log("Request Headers:", {
         Authorization: `Bearer ${token}`,
         'Content-Type': 'application/json',
      });

      const response = await axios.post(`${api_url}/reservasi/reservations`, {
         id_hotel_facility,
         cek_in_hotel,
         cek_out_hotel,
      }, {
         headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
         }
      });

      if (response.data.status === "Create reservation successful") {
         dispatch(getTiket());
         Swal.fire("Pemesanan berhasil!", "", "success");
         return response.data.data;  // Mengembalikan data respons
      } else {
         throw new Error(response.data.message || "Failed to create reservation");
      }

   } catch (error) {
      if (error.response) {
         console.log("Error Response:", error.response);
         dispatch(setError(error.response.data.message));
      } else {
         console.log("Error Message:", error.message);
         dispatch(setError(error.message));
      }
   }
};

export const createReservasiPesawat = (id_pesawat) => async (dispatch, getState) => {
   try {
      let { token } = getState().auth;

      const response = await axios.post(`${api_url}/reservasi/reservations`, {
         id_pesawat,
      }, {
         headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
         }
      })
      if (response.data.status === "Create reservation successful") {
         dispatch(getTiket());
         Swal.fire("Pemesananan!", "", "success");
         return response.data.data;  // Mengembalikan data respons
      } else {
         throw new Error(response.data.message || "Failed to action create ");
      }

   } catch (error) {
      dispatch(setError(error.message))
   }
}

