import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   pesawat: [],
   hotel: [],
   detailPesawat: [],
   detailHotel: [],
   error: null,
};

const tiketSlice = createSlice({
   name: "tiket",
   initialState,
   reducers: {
      setPesawat: (state, action) => {
         state.pesawat = action.payload;
      },
      setHotel: (state, action) => {
         state.hotel = action.payload;
      },
      setDetailPesawat: (state, action) => {
         state.detailPesawat = action.payload;
      },
      setDetaiHotel: (state, action) => {
         state.detailHotel = action.payload;
      },

      setError: (state, action) => {
         state.error = action.payload;
      },
   }
})

export const {
   setPesawat,
   setHotel,
   setDetailPesawat,
   setDetaiHotel,
   setError
} = tiketSlice.actions;

export default tiketSlice.reducer;