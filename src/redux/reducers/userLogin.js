import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post('http://localhost:3001/auth/login', { email, password });
    // dispatch(setUser(response.data));
    console.log(response.data)
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("userId", response.data.user._id)
    return Promise.resolve(response.data);
    // resolve with user data
  } catch (error) {
    dispatch(setError(error.message));
    return Promise.reject(error); // reject with error object
  }
};

export const getUser = (id,token) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(`http://localhost:3001/users/${id}`,{headers: {
      Authorization: `Bearer ${token}`
    }})
    dispatch(setUser(response.data))
  }
  catch (error) {
    dispatch(setError(error.message));
    return Promise.reject(error); // reject with error object
  }
}


export default userSlice.reducer;
