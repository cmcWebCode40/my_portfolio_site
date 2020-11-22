import React from 'react';
import CartSummary from '../../../components/products/cart/cartsummary/CartSummary';
import { getUserData } from '../../../utils/functions/userAuth';
import { CheckoutWrapper } from './css/Styles';
import PaymentMethods from './paymentMethods/PaymentMethods';

const Checkout = () => {
  const firstName = getUserData('firstname');
  const lastName = getUserData('lastname');
  const email = getUserData('email');

  return (
    <CheckoutWrapper className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <CartSummary />
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">
                  First name
                  <input readOnly type="text" className="form-control" id="firstName" placeholder="" value={firstName} required />
                </label>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">
                  Last name
                  {' '}
                  <input readOnly type="text" className="form-control" id="lastName" placeholder="" value={lastName} required />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Email
                {' '}
              </label>
              <input readOnly type="email" className="form-control" id="email" placeholder="you@example.com" value={email} />
            </div>

            <div className="mb-3">
              <label htmlFor="address">
                Address
                {' '}
                <textarea type="text" col="6" className="form-control" id="address" placeholder="1234 Main St" required />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="country-state">
                State
                <select className="custom-select d-block w-100" id="country-state" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
              </label>
            </div>
            <hr className="mb-4" />
            <PaymentMethods />
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </CheckoutWrapper>
  );
};

export default Checkout;
