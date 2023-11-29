import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import bookReducer from '../features/user/bookSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  },
});
