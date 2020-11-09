import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import LogoPage from './LogoPage';
import Nav from "./FairPageMobile"

export default function FairPageDashboard() {
  return (
    <StyledDiv>
      <div className="logo-side-body">
        <div className="logo-sidenav-div" id="active-logo-page">
          <span className="logo-sidenav-span">Change Logo</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Page Name</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Menu</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Slider</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Slider Content</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Sponsors</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">About Us</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Speakers</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Pricing</span>
        </div>
        <div className="logo-sidenav-div">
          <span className="logo-sidenav-span">Footer</span>
        </div>
      </div>
      <div className="manage-fairpage-main-content">
        <div className="fair-name-bar-2">
          <Nav />
        </div>
        <Route exact path="/dashboard-fairpage" component={LogoPage} />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
background: #F8F8FF;
padding: 30px 20px;
text-align: left;

@media only screen and (max-width: 700px){
  padding: 0px 0px;
}


.logo-side-body{
    margin: 20px 5px 50px 5px;
     width: 19.8%;
     background-color: white;
     box-shadow: 3px 4px 15px #e0e0e0;
     padding-bottom: 50px;
     padding-top: 40px;

     @media only screen and (max-width: 700px){
      display: none;
    }
}
.logo-inner-body{
    display: flex;
    justify-content: space-between;
}

.logo-sidenav-div{
    margin-bottom: 10px;
    margin-left: 30px;
    color: #4169E1;
}

#logo-body-content{
    width: 80%;
    background-color: white;
    margin: 50px 50px 50px 1px;
    box-shadow: 3px 4px 15px #e0e0e0;
}

#active-logo-page{
    border-right: forestgreen 4px solid;
}

.logo-new-span{
    color: white;
    background-color: forestgreen;
    padding: 3px 7px;
    border-radius: 5px;
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
}

span{
    margin-top: -3px;
    margin-bottom: -3px;
}

.manage-fairpage-main-content{
    width: 80%;
    @media only screen and (max-width: 700px){
      width: 98%;
      margin: auto 0;
    }
}

.fair-name-bar-2{
  display: none;
  justify-content: space-between;
  flex-direction: row;
  box-shadow: 1px 3px 5px #e0e0e0;
  padding: 3px 0px;
  background: white;
  height: 45px;

  
  @media only screen and (max-width: 700px){
    display: flex;
  }
}

`;
