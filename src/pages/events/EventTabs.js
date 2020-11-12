import React from 'react';
import styled from 'styled-components';
import AdCarousels from '../../components/vendorshop/adcarousels/AdCarousels';
import Events from '../../components/vendorshop/events/Events';
import Schedules from '../../components/vendorshop/schedules/Schedules';
import Speakers from '../../components/vendorshop/speakers/Speakers';
import { arrayImg } from '../../utils/data';

const EventTabs = () => {
  return (
    <TabWrapper>
      <h4 className="text-center font-weight-bold my-2 py-4">Event Schedule</h4>
      <div className="panel-heading">
        <div className="panel-title">
          {/* <List className="nav nav-tabs my-2">
            <li className="active">
              <a href="#1" data-toggle="tab">
                Event
              </a>
            </li>
            <li>
              <a href="#2" data-toggle="tab">
                Schedules
              </a>
            </li>
            <li>
              <a href="#3" data-toggle="tab">
                Speakers
              </a>
            </li>
          </List> */}
          <List className="nav nav-tabs">
            <a href="#1" data-toggle="tab" className="active col-4">
              <li className="text-center">Event</li>
            </a>
            <a href="#2" data-toggle="tab" className=" col-4">
              <li className="text-center">Schedules</li>
            </a>
            <a href="#3" data-toggle="tab" className=" col-4">
              <li className="text-center">Speakers</li>
            </a>
          </List>
        </div>
      </div>
      <div className="panel-body ">
        <div className="tab-content ">
          <div className="tab-pane active" id="1">
            <div className="mx-auto">
              <AdCarousels images={arrayImg} />
            </div>
            <div className="p-3">
              <Events />
              <Events />
            </div>
          </div>
          <div className="tab-pane" id="2">
            <div className="mx-auto">
              <AdCarousels images={arrayImg} />
            </div>
            <div className="p-3">
              <Schedules />
              <Schedules />
            </div>
          </div>
          <div className="tab-pane" id="3">
            <div className="mx-auto">
              <AdCarousels images={arrayImg} />
            </div>
            <div className="row p-3">
              <Speakers />
            </div>
          </div>
        </div>
      </div>
    </TabWrapper>
  );
};

export default EventTabs;

const TabWrapper = styled.div.attrs({
  className: 'panel panel-default bg-white mx-auto',
})`
  border-radius: ${(props) => props.theme.styles.borderRadius};
  height: 100vh;
  margin-top: 3rem;
  margin-bottom: 3rem;
  a {
    color: ${(props) => props.theme.colors.gray};
    text-decoration: none;
  }
`;

const List = styled.ul.attrs({
  // className: 'nav nav-pills',
})`
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-content: center;
  border-radius: 3rem;
  overflow: hidden;
  width: 90%;
  margin: auto;
  border: 3px solid ${(props) => props.theme.colors.gray};
  .active {
    background: ${(props) => props.theme.colors.gray};
    padding: 0rem 0;
    color: ${(props) => props.theme.colors.whiteColor};
    overflow: hidden;
    border: none;

    a {
      color: ${(props) => props.theme.colors.whiteColor};
      text-decoration: none;
      margin: 1rem 1.3rem;
      border: 1px solid ${(props) => props.theme.colors.gray};
    }
  }
  li {
    flex-basis: 23.3333333333%;
    padding: 0rem 0.7rem;
  }
`;
