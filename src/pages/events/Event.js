import React from 'react';
import styled from 'styled-components';
import imageLogo from '../../assets/images/eventlanding.PNG';
import EventTabMobile from './EventTabMobile';
import EventTabs from './EventTabs';

const EventWrapper = styled.div`
  #mobile{
    display:none;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    #mobile{
    display:block
  };
    #desktop{
    display:none;
  }}
  ;
`;

const Event = () => {
  return (
    <EventWrapper>
      <div id="mobile">
        <EventTabMobile />
      </div>
      <div id="desktop" className="row m-4">
        <div className="col-8 ml-5">
          <button type="button" className="btn btn-outline-dark m-2">Conference</button>
          <button type="button" className="btn btn-outline-dark m-2 ">Panel session</button>
          <button type="button" className="btn btn-outline-dark m-2 ">Networking</button>
          <div>
            <img src={imageLogo} alt="Landing Page" />
          </div>
        </div>
        <div className="col mx-3">
          <EventTabs />
        </div>
      </div>
    </EventWrapper>
  );
};

export default Event;
