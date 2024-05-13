import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotel: [],
  pesawat: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setHotel: (state, action) => {
      state.hotel = action.payload;
    },

    setPesawat: (state, action) => {
      state.pesawat = action.payload;
    },
  },
});

export const { setHotel, setPesawat } = categorySlice.actions;

export default categorySlice.reducer;
