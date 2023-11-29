import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    inventory: null,
  },
  reducers: {
    setBooks: (state, action) => {
      state.inventory = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
