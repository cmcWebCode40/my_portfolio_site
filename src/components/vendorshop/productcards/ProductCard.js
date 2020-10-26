import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.div.attrs({
  className: 'card my-2 w-80',

})` 
  border-radius:${(props) => props.theme.styles.borderRadius};
  border:3px solid ${(props) => props.theme.colors.gray};

  .icon{ 
 
  }
  .shopping-cart{
      color:${(props) => props.theme.colors.danger};
    }
  .info-circle{
      color:${(props) => props.theme.colors.primary};
    }
`;

const ProductCard = () => {
  return (
    <Card>
      <img src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6ecedc1e639d8a4b77aa8e85f4962f03" className="card-img-top" alt="cart" />
      <div className="card-body">
        <h6 className="card-title">42 Televison</h6>
        <div className="d-flex">
          <span className="mr-2 font-weight-bold ">
            N39393
          </span>
          <span className="mr-4">
            <FontAwesomeIcon icon={['fa', 'info-circle']} size="1x" className="icon info-circle" />
          </span>
          <span className="mr-4">
            <FontAwesomeIcon icon={['fa', 'shopping-cart']} size="1x" className="icon shopping-cart" />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
