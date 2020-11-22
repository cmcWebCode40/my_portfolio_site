import { createSlice } from '@reduxjs/toolkit';
import { getProductsLocalStore, saveProductsLocalStore } from './productStore';

const productsInStore = getProductsLocalStore();

const initialState = {
  products: productsInStore,
  loading: false
};

const productCollection = createSlice({
  initialState,
  name: 'products',
  reducers: {
    getAllProducts(state, action) {
      const data = action.payload;
      state.products = data;
      saveProductsLocalStore(state.products);
      return state;
    },
    setLoader(state) {
      state.loading = !state.loading;
      return state;
    }
  }
});

export const { getAllProducts, setLoader } = productCollection.actions;

export default productCollection.reducer;
