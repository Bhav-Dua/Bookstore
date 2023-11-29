import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: null,
  },
  reducers: {
    setBooks: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
