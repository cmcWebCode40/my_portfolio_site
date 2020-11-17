// ================================================================================
// Imports
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// ================================================================================
// JSX Function
const AdCarousels = ({ images }) => {
  return (
    <div className="my-4">
      {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {images.map((index) => (
            <li
              key={Math.random(1, 300)}
              data-target="#carouselExampleIndicators"
              data-slide-to={`${index}`}
              className={` ${index === 0 && 'active'}`}
            />
          ))}
        </ol>
        <CarouselInner>
          {images.map((image, index) => (
            <div className={`carousel-item mx-auto ${index === 0 && 'active'}`} key={image.name}>
              <img
                className="d-block w-100 h-100"
                src={image.src}
                data-color="lightblue"
                alt={image.name}
              />
              <div className="carousel-caption d-md-block" />
            </div>
          ))}
        </CarouselInner>
      </div> */}
    </div>
  );
};

// ================================================================================
// Normal variables and functions
AdCarousels.defaultProps = {
  images: [],
};
AdCarousels.prototype = {
  images: PropTypes.array.isRequired,
};

export default AdCarousels;

// ================================================================================
// Styled components
const CarouselInner = styled.ul.attrs({
  className: 'carousel-inner mx-auto h-100',
})`
  /* background:${(props) => props.theme.colors.gray}; */
  display: flex;
  align-content: center;
  border-radius: ${(props) => props.theme.styles.borderRadius};
`;
