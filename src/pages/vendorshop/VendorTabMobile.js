import React from 'react';
import styled from 'styled-components';
import vendorImg from '../../assets/images/vendor-bg.jpg';
import AdCarousels from '../../components/vendorshop/adcarousels/AdCarousels';
import Events from '../../components/vendorshop/events/Events';
import HotDeals from '../../components/vendorshop/hotdeals/HotDeals';
import ProductCard from '../../components/vendorshop/productcards/ProductCard';
import Schedules from '../../components/vendorshop/schedules/Schedules';
import Visitors from '../../components/vendorshop/visitors/Visitors';
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
const Tabs = styled.div`
  background-color:'#333';
  height:100vh;
  width:100vw;
  /* overflow:hidden; */
  background:url(${vendorImg});
  background-size:100% 100%;
  background-position:center;
  background-repeat:no-repeat;
  
`;
const Title = styled.h5`
  margin:1rem auto ;
  text-align:center;
  padding:.2rem 0;
  width:60%;
  border-radius:${(props) => props.theme.styles.borderRadius};
  background-color:${(props) => props.theme.colors.whiteColor};
  border:2px solid ${(props) => props.theme.colors.gray};
`;

const VendorTabMobile = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <ListItem className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#live" role="tab" aria-controls="live" aria-selected="true">Live</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " data-toggle="tab" href="#visitor" role="tab" aria-controls="visitor" aria-selected="false">Visitors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#shop" role="tab" aria-controls="shop" aria-selected="false">Shop</a>
              </li>
            </ListItem>

            <div className="tab-content mt-3">
              <Tabs className="tab-pane  " id="live" role="tabpanel" aria-labelledby="duck-tab">
                <Title>Vendor&rsquo;s Shop</Title>
              </Tabs>
              <div className="tab-pane" id="visitor" role="tabpanel" aria-labelledby="chicken-tab">
                <Title>Vendor&rsquo;s Shop</Title>
                <AdCarousels images={arrayImg} />
                <Visitors mobile />
              </div>
              <div className="tab-pane active" id="shop" role="tabpanel" aria-labelledby="kiwi-tab">
                <Title>Vendor&rsquo;s Shop</Title>
                <HotDeals />
                <Schedules />
                <Events />
                <h5 className="text-primary text-left my-3 mx-4">Hot Deals</h5>
                <AdCarousels images={arrayImg} />
                <div className="d-flex justify-content-center ">
                  {[1, 2].map((item) => (
                    <div key={item} className="">
                      <ProductCard />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorTabMobile;
