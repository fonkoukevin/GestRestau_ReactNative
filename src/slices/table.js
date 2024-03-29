import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api';

const initialState = { tables: [] };

export const fetchTables = createAsyncThunk('tables/fetch', async () => {
  const response = await API.get('tables');
  return response.data;
});

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTables.fulfilled, (state, action) => {
      state.tables = action.payload;
    });
  },
});

export default tablesSlice.reducer;