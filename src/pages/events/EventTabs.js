import React from 'react';
import styled from 'styled-components';
import AdCarousels from '../../components/vendorshop/adcarousels/AdCarousels';
import Events from '../../components/vendorshop/events/Events';
import Schedules from '../../components/vendorshop/schedules/Schedules';
import Speakers from '../../components/vendorshop/speakers/Speakers';
import { arrayImg } from '../../utils/data';

const TabWrapper = styled.div.attrs({
  className: 'panel panel-default bg-white mx-auto'
})` 
    border-radius:${(props) => props.theme.styles.borderRadius};
    height:100vh;
    margin-top:3rem;
    margin-bottom:3rem;
`;

const List = styled.ul.attrs({
  // className: 'nav nav-pills',

})` 
 justify-content:center;
  color:${(props) => props.theme.colors.gray};
  display:flex;
  align-content:center;
  border-radius:3rem;
  width:90%;
  margin:auto;
  border:3px solid ${(props) => props.theme.colors.gray};
  .active{
    background:${(props) => props.theme.colors.gray};
    color:${(props) => props.theme.colors.whiteColor};
    border-radius:3rem;
    border:none;

    a{
      color:${(props) => props.theme.colors.whiteColor};
      text-decoration:none;
      /* margin:1rem 1.3rem; */
      border:1px solid ${(props) => props.theme.colors.gray};
    }
  }
   li {
     display:flex;
     justify-content:flex-end;
      flex-basis:23.3333333333%;
      /* width:100%; */
      margin:0rem .2rem;
    }
`;

const EventTabs = () => {
  return (
    <TabWrapper>
      <h4 className="text-center font-weight-bold my-2 py-4">
        Event Schedule
      </h4>
      <div className="panel-heading">
        <div className="panel-title">
          <List className="nav nav-tabs my-2">
            <li className="active">
              <a href="#1" data-toggle="tab">Event</a>
            </li>
            <li>
              <a href="#2" data-toggle="tab">Schedules</a>
            </li>
            <li>
              <a href="#3" data-toggle="tab">Speakers</a>
            </li>
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
            </div>
          </div>
          <div className="tab-pane" id="2">
            <div className="mx-auto">
              <AdCarousels images={arrayImg} />
            </div>
            <div className="p-3">
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
