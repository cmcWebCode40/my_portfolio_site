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
                <div class="fair-name-bar">
                    <h5 class="co-op">Coop<span id="co-Lag">LAG</span></h5>
                    <div class="font-bar"><FontAwesomeIcon icon={faBars} size="2x" /></div>
                </div>
                <div class="side-bar">
                    <p class="side-bar-header">FAIR</p>
                    <div class="dropdown" id="active-page">
                        <p class="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Manage Fair
                            </p>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action -1</a>
                            <a class="dropdown-item" href="#">Action -2</a>
                            <a class="dropdown-item" href="#">Action -3</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <p class="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Manage Fair Page
                            </p>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action -1</a>
                            <a class="dropdown-item" href="#">Action -2</a>
                            <a class="dropdown-item" href="#">Action -3</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <p class="dropdown-toggle side-bar-par" type="" id="dropdownMenuButton" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Booth Setting
                            </p>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action -1</a>
                            <a class="dropdown-item" href="#">Action -2</a>
                            <a class="dropdown-item" href="#">Action -3</a>
                        </div>
                    </div>
                    <p class="side-bar-par">Pricing</p>
                    <p class="side-bar-par">Manage Vendor</p>
                    <p class="side-bar-par"><NavLink exact to="/dashboard/fairevent">Fair Events</NavLink></p>
                    <p class="side-bar-par">Vendor's Registration</p>
                    <p class="side-bar-header">TRANSACTION</p>
                    <p class="side-bar-par">Fair Transaction</p>
                    <p class="side-bar-par">Vendor's Transaction</p>
                    <p class="side-bar-header">SHOPS</p>
                    <p class="side-bar-par">Fair Transaction</p>
                    <p class="side-bar-par">Vendor's Transaction</p>
                    <p class="side-bar-par">Product</p>
                    <p class="side-bar-par">Shop Ad Banners</p>
                    <p class="side-bar-header">ADS</p>
                    <p class="side-bar-par">Fair Ads</p>
                    <p class="side-bar-par">Vendor's Ads</p>
                    <p class="side-bar-par">General Ads</p>
                    <p class="side-bar-header">TEAMS</p>
                    <p class="side-bar-par">Fair Team</p>
                    <p class="side-bar-par">Vendor's Team</p>
                    <p class="side-bar-par">Platform Team</p>
                    <p class="side-bar-header">PAYMENT OPTION </p>
                    <p class="side-bar-par">Fair Payment</p>
                    <p class="side-bar-par">Vendor's Payment</p>
                    <p class="side-bar-par">Platform Payment</p>
                    <p class="side-bar-par">Bank Details</p>
                    <p class="side-bar-header">SETTLEMENT</p>
                    <p class="side-bar-par">Fair Settlement</p>
                    <p class="side-bar-par">Vendor's Sttlement</p>
                    <p class="side-bar-header">LOGISTICS</p>
                    <p class="side-bar-par">All Logistics</p>
                    <p class="side-bar-header">VISITORS</p>
                    <p class="side-bar-par">Fair Visitors</p>
                    <p class="side-bar-par">Vendor's Visitors</p>
                    <p class="side-bar-header">WALLET</p>
                    <p class="side-bar-par">Fair Wallet</p>
                    <p class="side-bar-par">Vendor's Wallet</p>
                    <p class="side-bar-header">DEALS</p>
                    <p class="side-bar-par">Fair Deals</p>
                    <p class="side-bar-par">Vendor's Deals</p>
                    <p class="side-bar-header">SYSTEM Config</p>
                    <p class="side-bar-par">Fair Config</p>
                    <p class="side-bar-par">Vendor's Config</p>
                    <p class="side-bar-header">USHERS</p>
                    <p class="side-bar-par">Fair Ushers</p>
                    <p class="side-bar-par">Vendor's Usher</p>
                    <p class="side-bar-par">General Ushers</p>
                </div>
            </div>
            <div className="Manage-body">
                {/* <Route excat path="/dashboard" component={ManageFair} /> */}
                <Route exact path="/dashboard" component={CreateShops} />
                <Route exact path="/dashboard/fair" component={FairEvent} />
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
