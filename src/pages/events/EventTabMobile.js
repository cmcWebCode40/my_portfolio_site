import React from 'react';
import styled from 'styled-components';
import AdCarousels from '../../components/vendorshop/adcarousels/AdCarousels';
import Events from '../../components/vendorshop/events/Events';
import Schedules from '../../components/vendorshop/schedules/Schedules';
import Speakers from '../../components/vendorshop/speakers/Speakers';
import { arrayImg } from '../../utils/data';

const ListItem = styled.ul.attrs({
  className: '"nav nav-tabs nav-justified"'
})`

li{
  color:#444
}

 .active{
  border-bottom:2px solid ${(props) => props.theme.colors.primary};
  border-top:none;
  border-right:none;
  border-left:none;
}
`;

const EventTabMobile = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <ListItem className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#event" role="tab" aria-controls="event" aria-selected="true">Event</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " data-toggle="tab" href="#schedule" role="tab" aria-controls="schedule" aria-selected="false">Schedules</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#speakers" role="tab" aria-controls="speakers" aria-selected="false">Speakers</a>
              </li>
            </ListItem>
            <div className="tab-content mt-3">
              <div className="tab-pane  " id="event" role="tabpanel" aria-labelledby="duck-tab">
                <AdCarousels images={arrayImg} />
                <Events />
              </div>
              <div className="tab-pane" id="schedule" role="tabpanel" aria-labelledby="chicken-tab">
                <AdCarousels images={arrayImg} />
                <Schedules />
              </div>
              <div className="tab-pane active" id="speakers" role="tabpanel" aria-labelledby="kiwi-tab">
                <AdCarousels images={arrayImg} />
                <Speakers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTabMobile;
