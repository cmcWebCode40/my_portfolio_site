import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const EventWrapper = styled.div`

.icon{
  color:${(props) => props.theme.colors.gray};
  };

  .details{
    height:75%;
  };
  .money{
    height:25%;
    margin:-1rem  0 0 0;
    background-color: ${(props) => props.theme.colors.gray};
  }

  button{
    border-radius:${(props) => props.theme.styles.borderRadiusRounded};
    border:2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.whiteColor};
    margin: .2rem  1rem;
    padding:.3rem .8rem ;
  }

`;

const Schedules = () => {
  return (
    <EventWrapper className="card mb-3">
      <div className="row no-gutters">
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider.</p>
            <div className=" d-flex ">
              <div className="mt-n1">
                <FontAwesomeIcon size="2x" className="icon" icon={['fa', 'user-circle']} />
              </div>
              <div className="mx-2">
                Charles Avis
              </div>
            </div>
            <div>
              <button type="button">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="bg-primary details">
            <h4 className="text-white p-3 font-weight-bolder">18th</h4>
            <span className="text-white italic">August</span>
            <p className="text-white font-weight-bold">9.00am</p>
          </div>
          <div className="money ">
            <p className="text-primary font-weight-bold">$20</p>
          </div>
        </div>
      </div>
    </EventWrapper>
  );
};

export default Schedules;
