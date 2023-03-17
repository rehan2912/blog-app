import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/userLogin';
import postReducer from './reducers/userPost';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
