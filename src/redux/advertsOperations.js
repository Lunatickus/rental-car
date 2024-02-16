import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPage, filterAdverts } from "services/api";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchPage",
  async (page, { rejectWithValue }) => {
    try {
      const resp = await fetchPage(page);
      return { data: resp, page };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAdverts = createAsyncThunk(
  "adverts/fetchFilteredAdverts",
  async ({brand, price, from, to}, { rejectWithValue }) => {
    try {
      const resp = await filterAdverts(brand, price, from, to);
      return resp;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
