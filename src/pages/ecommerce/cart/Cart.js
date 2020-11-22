import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { EmptyList } from '../../../components/emptylist/EmptyList';
import { currencyFormatter } from '../../../utils/products/fuctions';
import cartImage from '../../../assets/images/shopping-cart (1).svg';
import CartActions from './CartActions';
import CartTotal from './CartTotal';
import { CartWrapper } from './css/cart';

const Cart = () => {
  const cartItems = useSelector((state) => state.productCart).cart;
  const currency = currencyFormatter({ currencyType: '', ctr: '' });

  return (
    <CartWrapper>
      <section className="m-5">
        <h5 className="mb-4">
          Cart (
          <span>{cartItems.length}</span>
          {' '}
          items)
        </h5>
        {cartItems.length ? (
          <div className="row">
            <div className="col-lg-8">
              <div className="card wish-list mb-3">
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="row mb-4">
                      <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                          <img
                            className="img-fluid w-50"
                            src={item.imageOne}
                            alt={item.product_name}
                          />
                        </div>
                      </div>
                      <CartActions
                        {...item}
                        currency={currency}
                      />
                      <hr className=" w-75 col-md-12 mx-2 px-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <CartTotal
              cartItems={cartItems}
              currency={currency}
            />
          </div>
        ) : (
          <>
            <EmptyList
              imageFile={cartImage}
              text="Your Cart is Empty"
            />
            <div className=" text-center my-2 mx-auto">
              <Link className="btn text-center btn-primary mx-auto" to="/products/collections">
                Start Shopping
              </Link>
            </div>
          </>

        )}
      </section>
    </CartWrapper>
  );
};

export default Cart;
