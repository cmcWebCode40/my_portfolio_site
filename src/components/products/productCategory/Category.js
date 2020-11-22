import React, { useState, useEffect } from 'react';
import { useQuery } from '../../../hooks/useQuery';

import { productCategory } from '../../../utils/products/pCategory';
import { CategoryWrapper } from './css/Style';

const Category = ({ location, history }) => {
  const categoryQuery = useQuery(location).get('category');
  const [pCategory, setpCategory] = useState(productCategory);

  const handleChange = (e) => {
    if (e) {
      const { name, checked } = e.target;
      history.push(`/products/collections?category=${name}`);
      const filteredCategory = pCategory.map((item) => (
        item.isChecked ? {
          ...item,
          isChecked: false
        } : item
      )).map((item) => (
        item.name === name
          ? {
            ...item,
            isChecked: checked
          } : item
      ));
      setpCategory(filteredCategory);
    }
  };

  useEffect(() => {
    handleChange({ target: { name: categoryQuery || 'All', checked: true } });
  }, []);

  return (
    <CategoryWrapper>
      <h4>
        Search
      </h4>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search-id"
        />
      </div>
      <div className="category-list">
        {
          pCategory.map((list) => (
            <label key={list.name} htmlFor={list.name}>
              <input
                type="checkbox"
                name={list.name}
                id={list.name}
                checked={list.isChecked}
                onChange={handleChange}
              />
              {list.name}
            </label>
          ))
        }

      </div>
    </CategoryWrapper>
  );
};

export default Category;
