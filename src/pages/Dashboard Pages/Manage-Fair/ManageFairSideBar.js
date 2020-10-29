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
            <div class="create-side-body">
                <div class="create-sidenav">
                    <p class="create-titles">Status</p>
                    <div class="create-sidenav-div">
                        <span>Active</span>
                        <span class="create-span">Published</span>
                    </div>
                </div>
                <div class="create-sidenav">
                    <p class="create-titles">Fair</p>
                    <div class="create-sidenav-div">
                        <span class="create-span">Cooplag 2020</span>
                    </div>
                </div>
                <div class="create-sidenav">
                    <p class="create-titles">Date Created</p>
                    <div class="create-sidenav-div">
                        <span class="create-span">01/09/2020 9:40am</span>
                    </div>
                </div>
                <div class="create-sidenav">
                    <p class="create-titles">Package</p>
                    <div class="create-sidenav-div">
                        <span class="create-span">Standard</span>
                    </div>
                </div>
                <div class="create-sidenav">
                    <p class="create-titles">Template</p>
                    <div class="create-sidenav-div">
                        <span class="create-span">Outdoor#20</span>
                    </div>
                </div>
                <div class="create-sidenav-par">
                    <p class="side-bar-par">Create Speakers</p>
                    <p class="side-bar-par">Setup Vendor's Signup</p>
                    <p class="side-bar-par">Booth Setting</p>
                    <p class="side-bar-par">Advert Setting</p>
                    <p class="side-bar-par">Raffle</p>
                    <p id="create-spreaker">Event</p>
                </div>
            </div>
            <div className="manage-fair-main-content">
                <Route exact path="/dashboard-managefair" component={CreateSpeaker} />
                {/* <Route exact path="/dashboard-managefair" component={CreateVendor} /> */}
                {/* <Route exact path="/dashboard-managefair" component={CreateBooth} /> */}
                {/* <Route exact path="/dashboard-managefair" component={CreateEvent} /> */}
                {/* <Route exact path="/dashboard-managefair" component={CreateAdvert} /> */}
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

display: flex;
justify-content: space-between;
background: #F8F8FF;
padding: 30px 20px;

.create-side-body{
    margin: 50px 1px 50px 50px;
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

.create-sidenav-par{
    margin-top: 50px;
}

.side-bar-par{
    cursor: pointer;
    color: royalblue;
    margin-top: 8px;
    margin-left: 20px;
}
#create-spreaker{
    border-right: forestgreen 4px solid;
    padding: 6px 0 6px 20px;
    color: royalblue;
    margin-bottom: 5px;
    cursor: pointer;
}

.manage-fair-main-content{
    width: 80%;
}
`;