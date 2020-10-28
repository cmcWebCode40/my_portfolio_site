import React from 'react';
import styled from 'styled-components';
import AdCarousels from '../../components/vendorshop/adcarousels/AdCarousels';
import ProductCard from '../../components/vendorshop/productcards/ProductCard';
import Visitors from '../../components/vendorshop/visitors/Visitors';
import { arrayImg } from '../../utils/data';

const TabWrapper = styled.div.attrs({
  className: 'panel panel-default bg-white mx-auto'
})` 
    border-radius:${(props) => props.theme.styles.borderRadius};
    /* height:100vh; */
    margin-top:3rem;
    margin-bottom:3rem;
`;

const Divider = styled.hr`
  background:${(props) => props.theme.colors.gray};
  border-radius:${(props) => props.theme.styles.borderRadius};
  height:.2rem;
  margin:.7rem 2rem  ;
`;
const List = styled.ul.attrs({
  // className: 'nav nav-pills',

})` 
 justify-content:center;
  color:${(props) => props.theme.colors.gray};
  display:flex;
  align-content:center;
  border-radius:3rem;
  width:70%;
  margin:auto;
  border:3px solid ${(props) => props.theme.colors.gray};
  .active{
    background:${(props) => props.theme.colors.gray};
    padding:0rem 0;
    color:${(props) => props.theme.colors.whiteColor};
    border-radius:3rem;
    border:none;

    a{
      color:${(props) => props.theme.colors.whiteColor};
      text-decoration:none;
      margin:1rem 1.3rem;
      border:1px solid ${(props) => props.theme.colors.gray};
    }
  }
   li {
      flex-basis:50%;
      padding:0rem .7rem;
    }
`;

const VendorShopTabs = () => {
  return (
    <TabWrapper>
      <h4 className="text-center my-2 py-2">
        <strong>Vendor&rsquo;s</strong>
        {' '}
        Shop
      </h4>
      <div className="panel-heading">
        <div className="panel-title">
          <List className="nav nav-tabs my-2">
            <li className="active">
              <a href="#1" data-toggle="tab">Visitors</a>
            </li>
            <li>
              <a href="#2" data-toggle="tab">Shop </a>
            </li>
          </List>
        </div>
      </div>
      <div className="panel-body ">
        <div className="tab-content ">
          <div className="tab-pane active" id="1">
            <AdCarousels images={arrayImg} />
            <Visitors />
          </div>
          <div className="tab-pane" id="2">
            <AdCarousels images={arrayImg} />
            <h5 className="text-primary text-left mx-4">Hot Deals</h5>
            <Divider />
            <div className="row p-3">
              {[1, 2].map((item) => (
                <div key={item} className="col-md-6 ">
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabWrapper>
  );
};

export default VendorShopTabs;