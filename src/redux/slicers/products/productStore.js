export const getProductsLocalStore = () => {
  const cartItems = localStorage.getItem('_product:store');
  if (cartItems) {
    try {
      return JSON.parse(cartItems);
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
};

export const saveProductsLocalStore = (data) => {
  localStorage.setItem('_product:store', JSON.stringify(data));
};
