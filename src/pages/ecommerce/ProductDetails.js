import React from 'react';
import { ProductDetailWrapper } from './css/productDetailStyle';

const ProductDetails = () => {
  return (

    <ProductDetailWrapper>
      <div className="row m-5">
        <div className="col">
          <div className="main-img">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81D8-r%2BiZgL._UX500_.jpg" alt="sjskjkfj" />
          </div>
          <div className="mini-img">
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/81D8-r%2BiZgL._UX500_.jpg" alt="sjskjkfj" /></div>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/81D8-r%2BiZgL._UX500_.jpg" alt="sjskjkfj" /></div>
            <div><img src="https://images-na.ssl-images-amazon.com/images/I/81D8-r%2BiZgL._UX500_.jpg" alt="sjskjkfj" /></div>
          </div>
        </div>
        <div className="col">
          <h5>Product Title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quasi consectetur, eveniet sint aperiam voluptatum
            perferendis pariatur minus asperiores qui debitis quis earum
            blanditiis totam minima nemo eius nulla reprehenderit aut libero
            eaque! Quis impedit beatae suscipit dolore, consectetur autem?
          </p>
        </div>
      </div>
    </ProductDetailWrapper>

  );
};

export default ProductDetails;
