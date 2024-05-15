import axios from "axios";
import { setPesawat, setError, setHotel, setDetailPesawat, setDetaiHotel } from "../Reducers/TiketReducers";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const getTiket = () => async (dispatch) => {
   try {
      const responsePesawat = await axios.get(`${api_url}/pesawat/totalpesawat`);
      const pesawat = responsePesawat.data.data;

      const responseHotel = await axios.get(`${api_url}/hotel/totalhotel`);
      const hotel = responseHotel.data.data;

      dispatch(setPesawat(pesawat))
      dispatch(setHotel(hotel))

   } catch (error) {
      dispatch(setError(error.message));
      console.log(error)
   }
}

export const getDetailPesawat = (detailId) => async (dispatch) => {
   try {
      const response = await axios.get(`${api_url}/pesawat/pesawat/${detailId}`)
      const detail = response.data.data
      dispatch(setDetailPesawat(detail))
   } catch (error) {
      dispatch(setError(error.message));
   }
}

export const getDetailHotel = (detailId) => async (dispatch) => {
   try {
      const response = await axios.get(`${api_url}/hotel/hotel/${detailId}`)
      const detail = response.data.data
      dispatch(setDetaiHotel(detail))
   } catch (error) {
      dispatch(setError(error.message));
   }
}

