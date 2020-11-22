import React from 'react';
import ProductCard from '../../components/products/cards/ProductCard';

const ProductList = ({ data }) => {
  return (
    <div>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4" key={item._id}>
            <ProductCard
              {...item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.defaultProps = {
  data: []
};

export default ProductList;
