import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function Nav() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const handleMenuButton = () => {
    setisSidebarOpen(!isSidebarOpen);
  };
  const autocloseMenu = () => {
    setTimeout(() => {
      setisSidebarOpen(!isSidebarOpen);
    }, 5000);
  };
  return (
    <StyledDiv>
      <div
        aria-hidden
        className="menu-button"
        onClick={handleMenuButton}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />

      </div>
      <nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
        <div className="mobile-header">
          <div>
            <h5>
              Coop
              <span id="Cooplag">LAG</span>
            </h5>
          </div>
          <div aria-hidden id="close" onClick={handleMenuButton}>
            {' '}
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </div>
        </div>
        <div aria-hidden className="menu-items" onClick={autocloseMenu}>
          <p className="create-titles">Status</p>
          <div className="create-sidenav-div">
            <span>Active</span>
            <span className="logo-sidenav-span">Published</span>
          </div>
          <div className="menu-list">
            <p className="create-titles">Fair</p>
            <div className="create-sidenav-div">
              <span className="logo-sidenav-span">Cooplag 2020</span>
            </div>
          </div>
          <div className="menu-list">
            <p className="create-titles">Date Created</p>
            <div className="create-sidenav-div">
              <span className="logo-sidenav-span">01/09/2020 9:40am</span>
            </div>
          </div>
          <div className="menu-list">
            <p className="create-titles">Package</p>
            <div className="create-sidenav-div">
              <span className="logo-sidenav-span">Standard</span>
            </div>
          </div>
          <div className="menu-list">
            <p className="create-titles">Template</p>
            <div className="create-sidenav-div">
              <span className="logo-sidenav-span">Outdoor#20</span>
            </div>
          </div>
          <div className="menu-list">
            <NavLink to="/dashboard-managefair/speaker" className="logo-sidenav-span"><span>Create Speakers</span></NavLink>
          </div>
          <div className="menu-list">
            <NavLink to="/dashboard-managefair/vendor" className="logo-sidenav-span"><span>Setup Vendor&lsquo;s Signup</span></NavLink>
          </div>
          <div className="menu-list">
            <NavLink to="/dashboard-managefair/booth" className="logo-sidenav-span"><span>Booth Setting</span></NavLink>
          </div>
          <div className="menu-list">
            <NavLink to="/dashboard-managefair/advert" className="logo-sidenav-span"><span>Advert Setting</span></NavLink>
          </div>
          <div className="menu-list">
            <NavLink to="/dashboard-managefair/construction" className="logo-sidenav-span"><span>Raffle</span></NavLink>
          </div>
          <div className="menu-list">
            <NavLink exact to="/dashboard-managefair" className="logo-sidenav-span"><span>Manage Events</span></NavLink>
          </div>
        </div>
      </nav>
    </StyledDiv>

  );
}

export default Nav;

const StyledDiv = styled.div`
position: relative;
display: none;

.menu-button{
    position: relative;
    z-index: 99;
    cursor: pointer;
    padding-left: 3px;
}
.menu-items{
    padding: 0;
    margin: 0;
    background-color: white;
    width: 100%;
}
.logo-sidenav-span{
    text-decoration: none;
    color: royalblue;
    display: flex;
    padding: 2px 2px 2px 7px;
    margin-top: 3px;
    width: 100%;
}

.logo-sidenav-span:hover {
    color: #fff !important;
    background: forestgreen;
  }

#grouped{
    border-bottom: 0.5px solid gray;
    margin-top: 3px;
}

.mobile-header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 25vw;
    width: 100%;
    padding: 5px;
    font-size: 18px;
    margin-bottom: 2px;
    border-bottom: 1px dashed gray;

    h5{
        text-shadow: 3px 5px 2px gray, 
    }
    #close {
        font-weight: 400;
        color: black;
        font-size: 25px;
        cursor: pointer;
    }
    #Cooplag{
        font-weight: 600;
    }
  }


.nav {
    width: 130px;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #888;
    position: absolute;
    top: 0;
    z-index: 999;
    background-color: #fff;
    left: -135px;
    -webkit-transition: left 0.3s ease-in;
    -o-transition: left 0.3s ease-in;
    transition: left 0.3s ease-in;
}
.nav.show{
    left: 0;
}

.create-titles{
    font-size: 12px;
    color: gray;
    margin-bottom: 3px;
}

.create-sidenav-div{
    margin-top: -5px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

@media only screen and (max-width: 700px){
    display: block;
  }

`;
