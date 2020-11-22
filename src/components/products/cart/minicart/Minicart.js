import React from 'react';
import { Link } from 'react-router-dom';
import { currencyFormatter, productTotalPrice, reduceProductTitle } from '../../../../utils/products/fuctions';
import cartImage from '../../../../assets/images/shopping-cart (1).svg';

const Minicart = ({ cartItems }) => {
  const currency = currencyFormatter({ currencyType: '', ctr: '' });
  return (
    <div className="container" id="wrapper">

      {cartItems.length ? (
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <i className="fa fa-shopping-cart cart-icon" />
            <span className="badge">{cartItems.length}</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">{currency.format(productTotalPrice(cartItems))}</span>
            </div>
          </div>
          <ul className="shopping-cart-items">
            {cartItems.map((item) => (
              <li key={item._id} className="clearfix">
                <img className="mr-2 ml-n4" src={item.imageOne} alt={item.product_name} />
                <span className="item-name">{reduceProductTitle(item.product_name)}</span>
                <span className="item-price">{currency.format(item.price)}</span>
                <span className="item-quantity">
                  Quantity:
                  {item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <Link to="/products/cart" className="button button-light">Go to cart</Link>
          <Link to="/products/checkout" className="button ">Checkout</Link>
        </div>
      ) : (
        <div className="shopping-cart">
          <img
            src={cartImage}
            height="70"
            alt="Your Cart is Empty"
          />
          <Link
            to="/products/collections"
            className="button "
          >
            Start Shopping
          </Link>
        </div>
      ) }

    </div>
  );
};

export default Minicart;
