import React from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom"
import CreateEvent from "./CreateEvent";
import CreateAdvert from "./CreateAdvert";
import CreateBooth from "./CreateBooth";
import CreateVendor from "./CreateVendor";
import CreateSpeaker from "./CareteSpeaker";

export default function SideBar() {
    return (
        <StyledDiv>
            <div className="create-side-body">
                <div className="create-sidenav">
                    <p className="create-titles">Status</p>
                    <div className="create-sidenav-div">
                        <span>Active</span>
                        <span className="create-span">Published</span>
                    </div>
                </div>
                <div className="create-sidenav">
                    <p className="create-titles">Fair</p>
                    <div className="create-sidenav-div">
                        <span className="create-span">Cooplag 2020</span>
                    </div>
                </div>
                <div className="create-sidenav">
                    <p className="create-titles">Date Created</p>
                    <div className="create-sidenav-div">
                        <span className="create-span">01/09/2020 9:40am</span>
                    </div>
                </div>
                <div className="create-sidenav">
                    <p className="create-titles">Package</p>
                    <div className="create-sidenav-div">
                        <span className="create-span">Standard</span>
                    </div>
                </div>
                <div className="create-sidenav">
                    <p className="create-titles">Template</p>
                    <div className="create-sidenav-div">
                        <span className="create-span">Outdoor#20</span>
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink to="/dashboard-managefair/speaker" activeClassName="is-active"><span>Create Speakers</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard-managefair/vendor" activeClassName="is-active"><span>Setup Vendor's Signup</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard-managefair/booth" activeClassName="is-active"><span>Booth Setting</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard-managefair/advert" activeClassName="is-active"><span>Advert Setting</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard-managefair/raffle" activeClassName="is-active"><span>Raffle</span></NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dashboard-managefair" activeClassName="is-active"><span>Manage Events</span></NavLink>
                    </li>
                </ul>
            </div>
            <div className="manage-fair-main-content">
                <Route exact path="/dashboard-managefair" component={CreateEvent} />
                <Route exact path="/dashboard-managefair/speaker" component={CreateSpeaker} />
                <Route exact path="/dashboard-managefair/vendor" component={CreateVendor} />
                <Route exact path="/dashboard-managefair/booth" component={CreateBooth} />
                <Route exact path="/dashboard-managefair/advert" component={CreateAdvert} />
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

display: flex;
justify-content: space-between;
background: #F8F8FF;
padding: 30px 20px;

a{
    text-decoration: none;
    color: royalblue;
}

.create-side-body{
    margin: 20px 5px 50px 5px;
     width: 19.8%;
     background-color: white;
     box-shadow: 3px 4px 15px #e0e0e0;
     padding-bottom: 50px;
     text-align: left;
}
.create-sidenav{
    margin: 8px 20px;
}
.create-titles{
    font-size: 12px;
    color: gray;
    margin-bottom: 3px;
}

.create-sidenav-div{
    margin-top: -5px;
    margin-bottom: 10px;
}

.create-span{
    color: #4169E1;
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

            &.is-active {
                border-right: forestgreen 4px solid;
            }
        }
    }

}

.manage-fair-main-content{
    width: 80%;
}
`;