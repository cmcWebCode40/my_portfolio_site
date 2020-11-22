import React from 'react';
import { Link } from 'react-router-dom';
import { productTotalPrice } from '../../../utils/products/fuctions';

const CartTotal = ({ currency, cartItems }) => {
  return (
    <div className="col-lg-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="mb-3">The total amount of</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
              </div>
              <span>
                <strong>
                  {currency.format(productTotalPrice(cartItems))}
                </strong>
              </span>
            </li>
          </ul>
          <Link
            to="/products/checkout"
            className="btn btn-primary btn-block"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
