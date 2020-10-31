import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fairId: '',
  loading: false,
};
const createFair = createSlice({
  name: 'createFair',
  initialState,
  reducers: {
    getAllFairs(state, action) {
      const { id } = action.payload;
      state.cart.filter((item) => item.id === id);
      return state;
    },
  },
});

export const { getAllFairs } = createFair.actions;

export default createFair.reducer;
