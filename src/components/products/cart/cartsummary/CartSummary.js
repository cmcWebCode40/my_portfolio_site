import React from 'react';
import { useSelector } from 'react-redux';
import { currencyFormatter, productTotalPrice } from '../../../../utils/products/fuctions';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.productCart).cart;
  const currency = currencyFormatter({ currencyType: '', ctr: '' });
  return (
    <>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">{cartItems.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {cartItems.map((item) => (
          <li key={item._id} className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{item.product_name}</h6>
              <small className="text-muted mx-1">
                {item.quantity}
                {' '}
                x
              </small>
              <small className="text-muted mx-1">
                {currency.format(item.price)}
              </small>
            </div>
            <span className="text-muted">{currency.format(item.quantity * item.price)}</span>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>{currency.format(productTotalPrice(cartItems))}</strong>
        </li>
      </ul>
    </>
  );
};

export default CartSummary;
