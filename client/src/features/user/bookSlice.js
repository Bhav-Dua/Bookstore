import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    data: null,
  },
  reducers: {
    setBooks: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
