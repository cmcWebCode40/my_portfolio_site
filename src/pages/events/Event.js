import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageLogo from '../../assets/images/eventlanding.PNG';
import view from '../../assets/images/view.svg';
import clap from '../../assets/images/clap-hands.svg';
import help from '../../assets/images/help.svg';
import arrow from '../../assets/images/up-arrow.svg';
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';
import EventTabMobile from './EventTabMobile';
import EventTabs from './EventTabs';

const Event = () => {
  return (
    <EventWrapper>
      <div id="mobile">
        <EventTabMobile />
      </div>
      <div id="desktop" className="row m-4">
        <div className="col-8 ml-5">
          <button type="button" className="btn btn-outline-dark m-2">
            Conference
          </button>
          <button type="button" className="btn btn-outline-dark m-2 ">
            Panel session
          </button>
          <button type="button" className="btn btn-outline-dark m-2 ">
            Networking
          </button>
          <div />
          <div className="event-box-div">
            <div className="left-side">
              <img alt="events" src={imageLogo} />
              <div className="event-options mt-2 w-50 mx-auto">
                <span className="my-auto">Ask questions </span>
                <ToggleSwitch rounded />
                <span>
                  <img alt="events" src={clap} className="eye-image" />
                </span>
                <span className="m-2">Clap</span>
                <span>Audio </span>
                <ToggleSwitch rounded />
              </div>
            </div>
            <div className="right-side ml-3">
              <div>
                <div className="mx-auto px-1">
                  <img alt="events" src={arrow} className="eye-image mx-2" />
                </div>
                <div className="icon-box">
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                  <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
                </div>
                <div className="mx-auto pl-3 down-arrow">
                  <img alt="events" src={arrow} className="eye-image mx-2" />
                </div>
              </div>
              <div className="px-3">
                <img alt="events" src={view} className="eye-image" />
                <br />
                1000
              </div>
              <div className="px-3">
                <img alt="events" src={clap} className="eye-image" />
                <br />
                321
              </div>
              <div className="px-3">
                <img alt="events" src={help} className="eye-image" />
                <br />
                12
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={['fa', 'eye']} />
              </div>
            </div>
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

const EventWrapper = styled.div`
  #mobile {
    display: none;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    #mobile {
      display: block;
    }
    #desktop {
      display: none;
    }
  }

  .event-box-div {
    display: flex;
  }

  .event-options {
    display: flex;
  }

  .icon-box {
    background-color: var(--tint);
    border-radius: 5px;
    padding: 5px 0;
  }

  .icon {
    display: block;
    margin: 5px;
  }

  .eye-image {
    width: 30px;
    height: auto;
  }

  .down-arrow {
    transform: rotate(180deg);
  }
`;
