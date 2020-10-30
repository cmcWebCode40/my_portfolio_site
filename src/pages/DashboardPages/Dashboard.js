import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ManageFair from "./Manage-Fair/ManageFair";
import FairEvent from "./FairEvents/FairEvent";
import CreateShops from "./Shops/CreateShops";


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
                    <div className="dropdown" id="active-page">
                        <p className="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Manage Fair
                            </p>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <NavLink to="/dashboard-managefair"><a className="dropdown-item" >Manage Fair</a></NavLink>
                            <NavLink to="/dashboard-managefair/speaker"><a className="dropdown-item" >Manage Speaker</a></NavLink>
                            <NavLink to="/dashboard-managefair/vendor"><a className="dropdown-item" >Manage Vendor</a></NavLink>
                            <NavLink to="/dashboard-managefair/booth"><a className="dropdown-item" >Manage Booth</a></NavLink>
                            <NavLink to="/dashboard-managefair/advert"><a className="dropdown-item" >Manage Advert</a></NavLink>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Manage Fair Page
                            </p>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action -1</a>
                            <a className="dropdown-item" href="#">Action -2</a>
                            <a className="dropdown-item" href="#">Action -3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Booth Setting
                            </p>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action -1</a>
                            <a className="dropdown-item" href="#">Action -2</a>
                            <a className="dropdown-item" href="#">Action -3</a>
                        </div>
                    </div>
                    <p className="side-bar-par">Pricing</p>
                    <p className="side-bar-par">Manage Vendor</p>
                    <p className="side-bar-par"><NavLink exact to="/dashboard/fairevents">Fair Events</NavLink></p>
                    <p className="side-bar-par">Vendor's Registration</p>
                    <p className="side-bar-header">TRANSACTION</p>
                    <p className="side-bar-par">Fair Transaction</p>
                    <p className="side-bar-par">Vendor's Transaction</p>
                    <p className="side-bar-header">SHOPS</p>
                    <p className="side-bar-par">Fair Transaction</p>
                    <p className="side-bar-par">Vendor's Transaction</p>
                    <p className="side-bar-par"><NavLink exact to="/dashboard/shops">Product</NavLink></p>
                    <p className="side-bar-par">Shop Ad Banners</p>
                    <p className="side-bar-header">ADS</p>
                    <p className="side-bar-par">Fair Ads</p>
                    <p className="side-bar-par">Vendor's Ads</p>
                    <p className="side-bar-par">General Ads</p>
                    <p className="side-bar-header">TEAMS</p>
                    <p className="side-bar-par">Fair Team</p>
                    <p className="side-bar-par">Vendor's Team</p>
                    <p className="side-bar-par">Platform Team</p>
                    <p className="side-bar-header">PAYMENT OPTION </p>
                    <p className="side-bar-par">Fair Payment</p>
                    <p className="side-bar-par">Vendor's Payment</p>
                    <p className="side-bar-par">Platform Payment</p>
                    <p className="side-bar-par">Bank Details</p>
                    <p className="side-bar-header">SETTLEMENT</p>
                    <p className="side-bar-par">Fair Settlement</p>
                    <p className="side-bar-par">Vendor's Sttlement</p>
                    <p className="side-bar-header">LOGISTICS</p>
                    <p className="side-bar-par">All Logistics</p>
                    <p className="side-bar-header">VISITORS</p>
                    <p className="side-bar-par">Fair Visitors</p>
                    <p className="side-bar-par">Vendor's Visitors</p>
                    <p className="side-bar-header">WALLET</p>
                    <p className="side-bar-par">Fair Wallet</p>
                    <p className="side-bar-par">Vendor's Wallet</p>
                    <p className="side-bar-header">DEALS</p>
                    <p className="side-bar-par">Fair Deals</p>
                    <p className="side-bar-par">Vendor's Deals</p>
                    <p className="side-bar-header">SYSTEM Config</p>
                    <p className="side-bar-par">Fair Config</p>
                    <p className="side-bar-par">Vendor's Config</p>
                    <p className="side-bar-header">USHERS</p>
                    <p className="side-bar-par">Fair Ushers</p>
                    <p className="side-bar-par">Vendor's Usher</p>
                    <p className="side-bar-par">General Ushers</p>
                </div>
            </div>
            <div className="Manage-body">
                <Route exact path="/dashboard" component={ManageFair} />
                <Route exact path="/dashboard/shops" component={CreateShops} />
                <Route exact path="/dashboard/fairevents" component={FairEvent} />
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
        }

        .side-bar-header{
            margin: 20px 20px 10px 20px;
            color: grey;
        } 

        .side-bar-par{
            cursor: pointer;
            color: royalblue;
            margin-top: 8px;
            margin-left: 20px;
        }

        #active-page{
            border-right: forestgreen 4px solid;
        }
    }

    .Manage-body{
        width: 80%;
    }
`
