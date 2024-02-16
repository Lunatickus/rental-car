import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchFilteredAdverts } from "./advertsOperations";

const initialState = {
  adverts: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (advert) => advert.id !== action.payload
      );
    },
  },
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
      })
      .addCase(fetchFilteredAdverts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredAdverts.fulfilled, (state, action) => {
        state.adverts = [...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFilteredAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { addFavorite, removeFavorite } = advertsSlice.actions;
