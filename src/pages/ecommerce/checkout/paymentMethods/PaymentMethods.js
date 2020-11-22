import React from 'react';
import payStack from '../../../../assets/images/paystack.png';

export const paymentType = [
  {
    type: 'Paystack',
    image: payStack
  },
  {
    type: 'Fuse Pay',
    image: payStack
  },
  {
    type: 'Coop East',
    image: payStack
  }
];

const PaymentMethods = () => {
  return (
    <div>
      <h4 className="mb-3">Payment Method</h4>
      <div className="d-block my-3">
        <div className="custom-control custom-radio">
          {paymentType.map((inputs) => (
            <div className="row my-2" key={inputs.type}>
              <div className="col-6">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                <label className="custom-control-label" htmlFor="credit">
                  {inputs.type}
                </label>
              </div>
              <div className="col-4">
                <img
                  // height="50"
                  // width="10"
                  className="w-50 h-70 img-thumbnail"
                  src={inputs.image}
                  alt={inputs.type}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
