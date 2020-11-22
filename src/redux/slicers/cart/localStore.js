export const getProductsLocalStore = () => {
  const cartItems = localStorage.getItem('_product:cart');
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
  localStorage.setItem('_product:cart', JSON.stringify(data));
};
