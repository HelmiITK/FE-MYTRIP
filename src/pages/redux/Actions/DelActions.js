import axios from "axios";
import { getHotel, getPesawat } from "./AddActions";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const deleteHotel = (hotelId) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth; // Get authentication token from Redux state

    // Send DELETE request to API endpoint
    await axios.delete(`${api_url}/hotel/${hotelId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Refresh hotel data after successful deletion
    dispatch(getHotel());

    console.log(`Hotel with ID ${hotelId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting hotel:", error);

    // Handle errors (e.g., display error message)
    // You can dispatch additional actions or update state here
  }
};

export const deletePesawat = (pesawatId) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    await axios.delete(`${api_url}/pesawat/${pesawatId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(getPesawat());
    console.log(`Hotel with ID ${pesawatId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting hotel:", error);

    // Handle errors (e.g., display error message)
    // You can dispatch additional actions or update state here
  }
};
