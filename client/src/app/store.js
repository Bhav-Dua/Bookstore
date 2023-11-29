import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import booksReducer from '../features/user/booksSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
  },
});
