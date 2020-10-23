import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
const cartActions = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      state.cart.filter((item) => item.id === id);
      return state;
    },
  },
});

export const { addToCart } = cartActions.actions;

export default cartActions.reducer;
