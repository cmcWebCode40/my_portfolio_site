import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Divider = styled.hr`
  background: ${(props) => props.theme.colors.light};
  height: 1px;
  margin: 0.2rem 1rem;
`;

const CartWrapper = styled.div`
  height: 100vh;
  #mobile {
    display: none;
  }
  .discount {
    border: 1px solid ${(props) => props.theme.colors.light};
    border-radius: ${(props) => props.theme.styles.borderRadius};
    padding: 0.3rem;
  }
  .hotdeals {
    max-height: 32rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    background: ${(props) => props.theme.colors.whiteColor};
    padding: 2rem 3rem;
    border-radius: ${(props) => props.theme.styles.borderRadius};
  }
  .feeds {
    background: ${(props) => props.theme.colors.whiteColor};
    border-radius: ${(props) => props.theme.styles.borderRadius};
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    #mobile {
      /* display:block */
    }
    #desktop {
      /* display:none; */
    }
  }

  .cart-image {
    width: 200px;
  }

  .cart-caption p {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 28px;
  }
`;

const Cart = () => {
  return (
    <CartWrapper>
      <div id="desktop" className="row ">
        <div className="col-md-8 mr-3 hotdeals">
          {[2, 2, 2, 3].map(() => (
            <>
              <div key={Math.random(0, 300)} className="d-flex justify-content-between my-4">
                <div className="">
                  <div className="d-flex">
                    <div className="cart-image">
                      <img
                        src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6ecedc1e639d8a4b77aa8e85f4962f03"
                        alt="cart"
                      />
                    </div>
                    <div className="my-2 mx-3 cart-caption">
                      <h5>42" Television</h5>
                      <p>N42,000</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <span className="font-weight-bold h6 d-block text-center">Quantity</span>
                  <button type="button" className="btn btn-primary px-3 btn-sm">
                    <FontAwesomeIcon
                      icon={['fa', 'caret-left']}
                      size="1x"
                      className="icon shopping-cart"
                    />
                  </button>
                  <button type="button" className="btn font-weight-bold bg-light ">
                    1
                  </button>
                  <button type="button" className="btn btn-primary px-3 btn-sm">
                    <FontAwesomeIcon
                      icon={['fa', 'caret-right']}
                      size="1x"
                      className="icon shopping-cart"
                    />
                  </button>
                  <div className="mt-3">
                    <span className="text-primary">Discount</span>{' '}
                    <span className="discount">12%</span>
                  </div>
                </div>
              </div>
              <Divider />
            </>
          ))}
        </div>
        <div className="col-md-3  feeds">
          <div className="d-flex justify-content-between m-3">
            <span className="text-primary">Amount</span>
            <span className="font-weight-bold h5">N3,000</span>
          </div>
          <div className="d-flex justify-content-between m-3">
            <span className="text-primary">Discount</span>
            <span className="font-weight-bold h5">N300</span>
          </div>
          <div className="d-flex justify-content-between m-3">
            <span className="text-primary">Vat(7.5%)</span>
            <span className="font-weight-bold h5">N33</span>
          </div>
          <Divider />
          <div className="d-flex justify-content-between m-2">
            <span className="text-primary">Total</span>
            <span className="font-weight-bold text-primary h5">N2,700</span>
          </div>
          <Divider />
          <div className="text-center">
            <button type="button" className="btn  btn-primary full-width">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
      <div id="mobile" />
    </CartWrapper>
  );
};

export default Cart;
