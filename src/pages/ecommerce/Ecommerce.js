import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../components/products/productCategory/Category';
import useApi from '../../hooks/Api/useApi';
import { getAllProducts } from '../../redux/slicers/products';
import { getUserData } from '../../utils/functions/userAuth';
import ProductList from './ProductList';

const userId = getUserData('id');
const Ecommerce = (props) => {
  const { data } = useApi(`/users/${userId}/see-created-products`);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productCollection);

  useEffect(() => {
    if (data.length) {
      dispatch(getAllProducts(data));
    }
  }, [data]);

  return (
    <div>
      <h3 className="text-center my-5">Product Page</h3>
      <div>
        <div className="row">
          <div className="col-md-3">
            <Category
              {...props}
            />
          </div>
          <div className="col-md-9">
            <ProductList
              data={products}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
