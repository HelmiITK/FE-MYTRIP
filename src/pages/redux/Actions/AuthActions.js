import axios from "axios";
import { setToken } from "../Reducers/AuthReducers";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${api_url}/auth/login`, {
      email,
      password,
    });
    const { data } = response.data;
    const { token } = data;

    dispatch(setToken(token));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  } catch (error) {
    alert(error?.response);
  }
};

export const register = (name, email, password, phone, navigate) => async () => {
    try {
        const response = await axios.post()
    }
};
