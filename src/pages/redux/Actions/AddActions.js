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
}
