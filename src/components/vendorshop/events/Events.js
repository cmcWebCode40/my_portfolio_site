import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const EventWrapper = styled.div`
height:100%;
.icon{
  color:${(props) => props.theme.colors.gray};
  };

  .details{
    height:100%;
  };


  button{
    border-radius:${(props) => props.theme.styles.borderRadiusRounded};
    border:2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.whiteColor};
    margin: 1rem ;
    padding:.3rem .8rem ;
  }

`;

const Events = () => {
  return (
    <EventWrapper className="card  mx-2">
      <div className="row no-gutters">
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting.</p>
            <div className=" d-flex ">
              <div className=" mt-n1">
                <FontAwesomeIcon size="2x" className="icon" icon={['fa', 'user-circle']} />
              </div>
              <div className="mx-2">
                Charles Avis
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="bg-primary details">
            <h4 className="text-white p-2 font-weight-bolder">18th</h4>
            <span className="text-white italic">August</span>
            <p className="text-white font-weight-bold">9.00am</p>
          </div>
        </div>
      </div>
    </EventWrapper>
  );
};

export default Events;
