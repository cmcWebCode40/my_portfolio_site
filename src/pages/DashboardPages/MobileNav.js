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
        <div className="menu-items">
          <div className="menu-list">
            <p className="side-bar-header">FAIR</p>
            <div className="dropdown" id="Sidebar-dropdown-div">
              <p
                className="dropdown-toggle side-bar-par"
                type=""
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Manage Fair
              </p>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="dropdown-item menu-list">
                  <NavLink to="/dashboard-managefair" activeClassName="is-active" onClick={autocloseMenu}><span>Manage Fair</span></NavLink>
                </li>
                <li className="dropdown-item menu-list">
                  <NavLink to="/dashboard-managefair/speaker" activeClassName="is-active" onClick={autocloseMenu}><span>Manage Speaker</span></NavLink>
                </li>
                <li className="dropdown-item menu-list">
                  <NavLink to="/dashboard-managefair/vendor" activeClassName="is-active" onClick={autocloseMenu}><span>Manage Vendor</span></NavLink>
                </li>
                <li className="dropdown-item menu-list">
                  <NavLink to="/dashboard-managefair/booth" activeClassName="is-active" onClick={autocloseMenu}><span>Manage Booth</span></NavLink>
                </li>
                <li className="dropdown-item menu-list">
                  <NavLink to="/dashboard-managefair/advert" activeClassName="is-active" onClick={autocloseMenu}><span>Manage Advert</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div aria-hidden className="menu-list" onClick={autocloseMenu}>
            <div className="dropdown" id="Sidebar-dropdown-div">
              <p
                className="dropdown-toggle side-bar-par"
                type=""
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Fair Page
              </p>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="dropdown-item">
                  <NavLink to="/dashboard-fairpage" activeClassName="is-active"><span>Manage Logo</span></NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Action -2</span></NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Action -3</span></NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Action -4</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div aria-hidden className="menu-list" onClick={autocloseMenu}>
            <div className="dropdown" id="Sidebar-dropdown-div">
              <p
                className="dropdown-toggle side-bar-par"
                type=""
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Booth Setting
              </p>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="dropdown-item">
                  <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Manage Logo</span></NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Action -2</span></NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Action -3</span></NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Action -4</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Pricing</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Manage Vendor</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink exact to="/dashboard/fairevents">Fair Events</NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Registration</span></NavLink></div>
          <div id="grouped" />
          <p className="side-bar-header">TRANSACTION</p>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Transaction</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Transaction</span></NavLink></div>
          <div id="grouped" />
          <p className="side-bar-header">SHOPS</p>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Transaction</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Transaction</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink exact to="/dashboard/shops" activeClassName="is-active"><span>Product</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Shop Ad Banners</span></NavLink></div>
          <div id="grouped" />
          <p className="side-bar-header">ADS</p>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Ads</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Ads</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>General Ads</span></NavLink></div>
          <div id="grouped" />
          <p className="side-bar-header">TEAMS</p>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Team</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Team</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Platform Team</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Platform Team</span></NavLink></div>
          <div id="grouped" />
          <p className="side-bar-header">PAYMENT OPTION </p>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Payment</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Payment</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Platform Payment</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Bank Details</span></NavLink></div>
          <div id="grouped" />
          <p className="side-bar-header">SETTLEMENT</p>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Settlement</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Sttlement</span></NavLink></div>
          <div id="grouped" />
          <p className="side-bar-header">LOGISTICS</p>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>All Logistics</span></NavLink></div>
          <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Visitors</span></NavLink></div>
          <div id="grouped">
            <p className="side-bar-header">WALLET</p>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Visitors</span></NavLink></div>
          </div>
          <div id="grouped">
            <p className="side-bar-header">VISITORS</p>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Wallet</span></NavLink></div>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Wallet</span></NavLink></div>
          </div>
          <div id="grouped">
            <p className="side-bar-header">DEALS</p>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Deals</span></NavLink></div>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Deals</span></NavLink></div>
          </div>
          <div id="grouped">
            <p className="side-bar-header">SYSTEM Config</p>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Config</span></NavLink></div>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Config</span></NavLink></div>
          </div>
          <div id="grouped">
            <p className="side-bar-header">USHERS</p>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Ushers</span></NavLink></div>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor&rsquo;s Usher</span></NavLink></div>
            <div className="menu-list" aria-hidden onClick={autocloseMenu}><NavLink to="/dashboard/construction" activeClassName="is-active"><span>General Ushers</span></NavLink></div>
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
}
a{
    text-decoration: none;
    color: royalblue;
    display: flex;
    padding: 2px 5px;
    margin-top: 2px;
}

#grouped{
    border-bottom: 0.5px solid gray;
    margin-top: 3px;
}

a:hover {
    color: #fff !important;
    background: forestgreen;
  }

.mobile-header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 25vw;
    width: 100%;
    padding: 5px;
    font-size: 18px;
    margin-bottom: 10px;
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

.side-bar-header{
    margin-left: 5px;
    color: grey;
    text-align: left;
    margin-bottom: 3px;
    margin-top: 5px;
}
.side-bar-par{
    color: royalblue;
    padding: 1px 5px;
    cursor: pointer;
    margin-bottom: 3px;
}
.side-bar-par:hover {
    color: #fff !important;
    background: forestgreen;
  }

@media only screen and (max-width: 700px){
    display: block;
    width: 50px;
  }

`;
