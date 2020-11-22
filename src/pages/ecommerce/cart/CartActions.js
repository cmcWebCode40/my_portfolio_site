import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { decrementCartItem, incrementCartItem, removeCartItem } from '../../../redux/slicers/cart';

const CartActions = ({
  price, quantity, product_name,
  currency, productId
}) => {
  const dispatch = useDispatch();

  const handleCartIncrement = (id) => {
    dispatch(incrementCartItem(id));
    toast.success('Cart item incremented successfully', {
      toastId: 'cart',
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000
    });
  };
  const handleCartDecrement = (id) => {
    dispatch(decrementCartItem(id));
    toast.success('Cart item reduced successfully', {
      toastId: 'cart',
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000
    });
  };
  const removeFromCart = (id) => {
    dispatch(removeCartItem(id));
    toast.success('Cart item removed successfully', {
      toastId: 'cart',
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000
    });
  };

  return (
    <>
      <div className="col-md-7 col-lg-9 col-xl-9">
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h5>{product_name}</h5>
              <p className="mb-3 text-muted text-uppercase small">{currency.format(price)}</p>
            </div>
            <div>
              <div className="def-number-input number-input safari_only mb-0 w-100">
                <button
                  type="button"
                  className="btn btn-primary  m-1 btn-sm"
                  onClick={() => handleCartDecrement(productId)}
                >
                  <FontAwesomeIcon
                    icon={['fa', 'minus']}
                    size="1x"
                    className="icon shopping-cart"
                  />
                </button>
                <span type="button" className="btn font-weight-bold m-1 bg-light ">
                  {quantity}
                </span>
                <button
                  onClick={() => handleCartIncrement(productId)}
                  type="button"
                  className="btn btn-primary  m-1   btn-sm"
                >
                  <FontAwesomeIcon
                    icon={['fa', 'plus']}
                    size="1x"
                    className="icon shopping-cart"
                  />
                </button>
              </div>
              <small id="passwordHelpBlock" className="form-text text-muted text-center">
                (Note,
                {' '}
                {quantity}
                {' '}
                piece)
              </small>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button
                onClick={() => removeFromCart(productId)}
                type="button"
                className="btn btn-text mr-2"
              >
                <FontAwesomeIcon
                  icon={['fa', 'trash']}
                  size="1x"
                  className="icon mr-2"
                  color="red"
                />
                Remove
              </button>
              <button type="button" className="btn  btn-outline">
                <FontAwesomeIcon
                  icon={['fa', 'heart']}
                  size="1x"
                  className="icon text-primary mr-2"
                />
                Add to wishlist
              </button>
            </div>
            <p
              className="mb-0"
            >
              <span><strong>{currency.format(price * quantity)}</strong></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartActions;
