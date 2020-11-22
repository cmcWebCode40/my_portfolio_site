import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../../../redux/slicers/cart';
import { currencyFormatter, discountPrice, reduceProductTitle } from '../../../utils/products/fuctions';
import { CardWrapper } from './css/card';

const Msg = ({ closeToast }) => (
  <div>
    <span className="d-block">Product added to cart</span>
    <a
      href="/products/cart"
      className="btn btn-success btn-sm mr-3"
    >
      view your cart
    </a>
    <button
      type="button"
      className="btn btn-success btn-sm ml-3"
      onClick={closeToast}
    >
      Close
    </button>
  </div>
);

const ProductCard = (props) => {
  const {
    _id,
    product_name,
    imageOne,
    category,
    price,
    price_currrency,
    discount,
    brand,
  } = props;
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const currency = currencyFormatter({ currencyType: '', ctr: '' });

  const displayMsg = () => {
    toast.success(<Msg />, {
      autoClose: 10000,
      position: toast.POSITION.BOTTOM_LEFT,
      toastId: 'cart',
    });
    // toast(Msg) would also work
  };

  const addProductToCart = () => {
    setloading(true);
    const data = {
      productId: _id,
      product_name,
      imageOne,
      category,
      price,
      price_currrency,
      discount,
      brand,
      quantity: 2
    };
    dispatch(addToCart(data));
    displayMsg();
    setloading(false);
  };

  return (
    <CardWrapper>
      <div className="product-card ">
        <Link to={`/products/details/${_id}?name=${product_name}&category=${category}`}>
          <div className="badge">{brand}</div>
          <div className="product-tumb">
            <img src={imageOne} alt={product_name} />
          </div>
          <div className="product-details">
            <span className="product-catagory">{category}</span>
            <h5>{reduceProductTitle(product_name)}</h5>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>{currency.format(discountPrice(price, discount))}</small>
                {currency.format(price)}
              </div>
            </div>
          </div>
        </Link>
        <div className="product-links m-2">
          <div>
            <button type="button" className="btn btn-outline-dark">
              WishList
            </button>
          </div>
          <div>
            <button
              onClick={addProductToCart}
              type="button"
              className="btn btn-primary"

            >
              {loading ? (
                <span>
                  Addding...
                  <FontAwesomeIcon icon={['fa', 'spinner']} size="1x" spin />
                  {' '}
                </span>
              ) : 'Add to cart'}

            </button>
          </div>
        </div>
      </div>

    </CardWrapper>
  );
};

export default ProductCard;
