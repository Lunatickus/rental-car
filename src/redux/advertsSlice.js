import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./advertsOperations";

const initialState = {
  adverts: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        action.payload.page === 1
          ? (state.adverts = action.payload.data)
          : (state.adverts = [...state.adverts, ...action.payload.data]);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.data;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
