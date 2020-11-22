import React from 'react';
import { ProductDetailsWrapper } from './css/product';
import pCategory from '../../../utils/products/category.json';

const ProductDetails = ({
  handleChange,
  handleCheckbox,
  handleChangeNumber
}) => {
  return (
    <ProductDetailsWrapper>
      <div className="form-group">
        <label htmlFor="pName">
          Product Name
          <span className="text-danger ml-2">*</span>
          <input
            required
            type="text"
            onChange={handleChange}
            name="productName"
            className="form-control"
            id="pName"
            aria-describedby="pName"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pCategory">
          Category
          <span className="text-danger ml-2">*</span>
          <select
            required
            className="form-control"
            placeholder="Category"
            onChange={handleChange}
            name="category"
            id="pCategory"
          >
            <option value="">Choose category</option>
            {pCategory.map((list) => (
              <option key={list} value={list}>
                {list}
              </option>
            ))}
          </select>
        </label>

      </div>
      <div className="form-group">
        <label htmlFor="pBrand">
          Brand
          <span className="text-danger ml-2">*</span>
          <input
            required
            name="brand"
            type="text"
            onChange={handleChange}
            className="form-control"
            id="pBrand"
            aria-describedby="pBrand"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pWarranty">
          warranty
          <span className="text-danger ml-2">*</span>
          <input
            required
            onChange={handleChange}
            name="warranty"
            type="text"
            className="form-control"
            id="pWarranty"
            aria-describedby="pWarranty"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pPrice">
          Price
          <span className="text-danger ml-2">*</span>
          <input
            required
            name="price"
            onChange={handleChangeNumber}
            type="number"
            className="form-control"
            id="pPrice"
            aria-describedby="pPrice"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="quantityAvailable">
          Available Quantity
          <span className="text-danger ml-2">*</span>
          <input
            required
            name="quantityAvailable"
            onChange={handleChangeNumber}
            type="number"
            className="form-control"
            id="quantityAvailable"
            aria-describedby="quantityAvailable"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pDiscount">
          Discount
          <span className="text-danger ml-2">*</span>
          <input
            required
            name="discount"
            onChange={handleChangeNumber}
            type="number"
            className="form-control"
            id="pDiscount"
            aria-describedby="pDiscount"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pDesc">
          Description
          <textarea
            name="description"
            type="text"
            rows="6"
            onChange={handleChange}
            className="form-control"
            id="pDesc"
            aria-describedby="pDesc"
          />
        </label>
      </div>
      <div className="form-group form-check">
        <label className="form-check-label" htmlFor="pAvailable">
          <input
            onChange={handleCheckbox}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          Available
          <span className="text-danger ml-2">*</span>
        </label>
      </div>
    </ProductDetailsWrapper>

  );
};

export default ProductDetails;
