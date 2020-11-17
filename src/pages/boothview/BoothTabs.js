import React from 'react';
import styled from 'styled-components';
import Feeds from '../../components/vendorshop/feeds/Feeds';
import HotDeals from '../../components/vendorshop/hotdeals/HotDeals';

const ListItem = styled.ul.attrs({
  className: '"nav nav-tabs nav-justified"',
})`
  li {
    color: #444;
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    border-top: none;
    border-right: none;
    border-left: none;
  }
`;

const BoothTabs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <ListItem className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#hotdeals"
                  role="tab"
                  aria-controls="hotdeals"
                  aria-selected="true"
                >
                  Hot Deals
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  data-toggle="tab"
                  href="#feeds"
                  role="tab"
                  aria-controls="feeds"
                  aria-selected="false"
                >
                  Demo Feeds
                </a>
              </li>
            </ListItem>
            <div className="tab-content mt-3">
              <div
                className="tab-pane active  "
                id="hotdeals"
                role="tabpanel"
                aria-labelledby="duck-tab"
              >
                <HotDeals />
              </div>
              <div className="tab-pane" id="feeds" role="tabpanel" aria-labelledby="chicken-tab">
                <Feeds />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothTabs;
