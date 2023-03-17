import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userPost = createSlice({
    name: 'post',
    initialState: {
        post: null,
        loading: false,
        error: null,
    },
    reducers: {
        setPost(state, action) {
            state.post = action.payload;
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
})

export const { setPost, setLoading, setError } = userPost.actions;

export const getAllPost = () => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
        dispatch(setLoading());
        axios
            .get(`http://localhost:3001/posts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                dispatch(setPost(response.data));
            })
    }
    catch (error) {
        dispatch(setError(error.message));
        return Promise.reject(error);
    }

}
export default userPost.reducer;