import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ManageFair from "./Manage-Fair/ManageFair";
import FairEvent from "./FairEvents/FairEvent";
import CreateShops from "./Shops/CreateShops";
import Construction from "./ConstructionPage";


function Dashboard() {

    return (
        <StyledDiv>
            <div className="sidebar-div">
                <div className="fair-name-bar">
                    <h5 className="co-op">Coop<span id="co-Lag">LAG</span></h5>
                    <div className="font-bar"><FontAwesomeIcon icon={faBars} size="2x" /></div>
                </div>
                <div className="side-bar">
                    <p className="side-bar-header">FAIR</p>

                    <div className="dropdown" id="Sidebar-dropdown-div">
                        <p className="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Manage Fair
                            </p>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li className="dropdown-item">
                                <NavLink to="/dashboard-managefair" activeClassName="is-active"><span>Manage Fair</span></NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink to="/dashboard-managefair/speaker" activeClassName="is-active"><span>Manage Speaker</span></NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink to="/dashboard-managefair/vendor" activeClassName="is-active"><span>Manage Vendor</span></NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink to="/dashboard-managefair/booth" activeClassName="is-active"><span>Manage Booth</span></NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink to="/dashboard-managefair/advert" activeClassName="is-active"><span>Manage Advert</span></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown" id="Sidebar-dropdown-div">
                        <p className="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Manage Fair Page
                        </p>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li className="dropdown-item">
                                <NavLink to="/dashboard-fairpage" activeClassName="is-active"><span>Manage Logo</span></NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink to="/dashboard/construction" activeClassName="is-active" ><span>Action -2</span></NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink to="/dashboard/construction" activeClassName="is-active" ><span>Action -3</span></NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Action -4</span></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown" id="Sidebar-dropdown-div">
                        <p className="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
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
                    <ul>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Pricing</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Manage Vendor</span></NavLink></li>
                        <li>
                            <NavLink exact to="/dashboard/fairevents">Fair Events</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Registration</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>TRANSACTION</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Transaction</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Transaction</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>SHOPS</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Transaction</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Transaction</span></NavLink></li>
                        <li>
                            <NavLink exact to="/dashboard/shops" activeClassName="is-active"><span>Product</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Shop Ad Banners</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>ADS</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Ads</span></NavLink></li>
                        <li className="side-bar-par">
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Ads</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>General Ads</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>TEAMS</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Team</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Team</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Platform Team</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>PAYMENT OPTION </span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Payment</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Payment</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Platform Payment</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Bank Details</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>SETTLEMENT</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Settlement</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Sttlement</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>LOGISTICS</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>All Logistics</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>VISITORS</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Visitors</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Visitors</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>WALLET</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Wallet</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Wallet</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>DEALS</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Deals</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Deals</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>SYSTEM Config</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Config</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Config</span></NavLink></li>
                        <li className="side-bar-header">
                            <span>USHERS</span></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Fair Ushers</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>Vendor's Usher</span></NavLink></li>
                        <li>
                            <NavLink to="/dashboard/construction" activeClassName="is-active"><span>General Ushers</span></NavLink></li>
                    </ul>

                </div>
            </div>
            <div className="Manage-body">
                <Route exact path="/dashboard" component={ManageFair} />
                <Route exact path="/dashboard/shops" component={CreateShops} />
                <Route exact path="/dashboard/fairevents" component={FairEvent} />
                <Route exact path="/dashboard/construction" component={Construction} />
            </div>

        </StyledDiv>
    )
}

export default Dashboard

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background: #F8F8FF;

    .sidebar-div{
        background: white;
        width: 20%;

        .fair-name-bar{
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            box-shadow: 1px 3px 5px #e0e0e0;
            padding: 3px 10px;
            height: 45px;
        }

        .co-op{
            margin-left: 10px;
        }
        #co-Lag{
            font-weight: bold;
        }

        .font-bar{
            margin-right: 10px;
            cursor: pointer;
            font-size: 20px;
        }

        .side-bar{
            box-shadow: 3px 5px 10px #e0e0e0;
            padding-bottom: 50px;
            text-align: left;
            margin-top: -10px;
            cursor: pointer;
        }

        .side-bar-header{
            margin: 20px 20px 10px 2px;
            color: grey;
            text-align: left;
        } 

        #Sidebar-dropdown-div{
            cursor: pointer;
            color: royalblue;
            margin-top: 8px;
            margin-left: 20px;
        }

    }

    .Manage-body{
        width: 80%;
    }

    ul {

        list-style-type: none;
        margin: 0;
        padding-left: 20px;
    
        li{
            padding: 3px 0;
            color: royalblue;
            margin-bottom: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            width: 100%;
    
            a{
                width: 100%;
                margin-right: 0px;
                color: royalblue;
    
                &.is-active {
                    border-right: forestgreen 4px solid;
                }
            }
        }
    
    }
`
