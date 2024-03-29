import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../api';

const initialState = { users: [], currentUser: {} };

export const fetchUsers = createAsyncThunk('users/fetch', async thunkAPI => {
  console.log(thunkAPI);
  const rep = await API.get('users');
  return rep.data;
});

export const fetchUser = createAsyncThunk(
  'users/fetchOne',
  async (id, thunkAPI) => {
    console.log(thunkAPI);
    const rep = await API.get('users/' + id);
    return rep.data;
  }
);

export const storeUser = createAsyncThunk(
  'users/store',
  async (data, thunkAPI) => {
    console.log(thunkAPI);

    var form_data = new FormData();

    for (var key in data) {
      if (Array.isArray(data[key])) {
        form_data.append(key, data[key][0]);
      } else {
        form_data.append(key, data[key]);
      }
    }
    const rep = await API.post('users', form_data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return rep.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state) {
      return state.users;
    },
    setCurrentUser(state, action) {
      const u = state.users.find(s => s.id == action.payload);
      state.currentUser = u;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = action.payload;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });

    builder.addCase(storeUser.fulfilled, (state, action) => {
      state.users = [action.payload, ...state.users];
    });
  },
});

export const { getUsers, setCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;
