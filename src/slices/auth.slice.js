import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = { currentUser: null,token:null, isLogged: false };

export const signIn = createAsyncThunk(
  'auth/signin',
  async (data, thunkAPI) => {
    console.log(thunkAPI);

    const rep = await API.post('auth/signin', data);
    // await AsyncStorage.setItem('user', Json.stringify (rep.data.user));
    // await AsyncStorage.setItem('token', rep.data.token);
    return rep.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signIn.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      state.isLogged = true;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
