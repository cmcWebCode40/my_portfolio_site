/** *
 * function to slice product title
 */

export const reduceProductTitle = (title) => title.split(' ').slice(0, 3).join(' ');

/** '
 * Convert to relative currency types
 */

export const currencyFormatter = (values) => {
  const { currencyType, ctr } = values;
  return new Intl.NumberFormat(ctr || 'en-NG', {
    style: 'currency',
    currency: currencyType || 'NGN'
  });
};

/**
 * Get product discount rate
 */

export const discountPrice = (pPrice, dPercent) => pPrice - (pPrice * (dPercent / 100));
/**
 * Get Product Total Pirce
 */

export const productTotalPrice = (cart) => cart.reduce((a, b) => a + b.price * b.quantity, 0);
