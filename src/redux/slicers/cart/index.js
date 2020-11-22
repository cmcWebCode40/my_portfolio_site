import { createSlice } from '@reduxjs/toolkit';
import { getProductsLocalStore, saveProductsLocalStore } from './localStore';

const cartProducts = getProductsLocalStore();

const initialState = {
  cart: cartProducts
};
const productCart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const cartItems = state.cart.filter((item) => item.productId === productId);

      if (cartItems.length) {
        const addedItem = state.cart.map((item) => (item.productId === productId
          ? {
            ...item,
            quantity:
                  item.quantity === item.availableUnits ? item.quantity : item.quantity + quantity
          }
          : item));
        state.cart = addedItem;
        saveProductsLocalStore(state.cart);
      } else {
        state.cart.push(action.payload);
        saveProductsLocalStore(state.cart);
      }

      return state;
    },

    incrementCartItem(state, action) {
      const id = action.payload;
      state.cart.map((item) => (item.productId === id
        ? {
          ...item,
          quantity: item.quantity++
        }
        : item));

      saveProductsLocalStore(state.cart);
      return state;
    },

    decrementCartItem(state, action) {
      const id = action.payload;
      state.cart.map((item) => (item.productId === id
        ? {
          ...item,
          quantity: item.quantity === 1 ? item.quantity : item.quantity--
        }
        : item));
      saveProductsLocalStore(state.cart);
      return state;
    },

    removeCartItem(state, action) {
      const id = action.payload;
      const remainingCartItems = state.cart.filter((item) => item.productId !== id);
      state.cart = remainingCartItems;
      saveProductsLocalStore(state.cart);
      return state;
    }
  }
});

export const {
  addToCart,
  decrementCartItem,
  incrementCartItem,
  removeCartItem
} = productCart.actions;

export default productCart.reducer;
