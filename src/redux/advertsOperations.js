import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll } from '../services/api';


export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, { rejectWithValue }) => {
    try {
      const resp = await fetchAll(page);
      return {data: resp, page};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);