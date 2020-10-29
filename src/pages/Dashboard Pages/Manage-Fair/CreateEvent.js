import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"


export default function CreateEvent() {
    return (
        <StyledDiv>
            <div class="event">
                <h5 class="event-cat">Manage Events</h5>
                <span class="event-span">+ New Event</span>
            </div>
            <div class="event-header-div">
                <span id="trash-event" className="trash-event"></span>
                <div class="table-header">
                    <span class="span-event">Events</span>
                    <span class="span-event-dec">Description</span>
                    <span class="span-event-fee">Fee</span>
                    <span class="span-event-type">Type</span>
                    <span class="span-event-url">URL</span>
                    <span class="span-event-edit">....</span>
                </div>
            </div>
            <div class="create-inner-div-2" id="title-content-div">
                <div class="event-header-div">
                    <div className="trash-event"><FontAwesomeIcon icon={faTrashAlt} /></div>
                    <div class="table-header">
                        <span class="span-event" id="event-span-content">Power Of Money</span>
                        <span class="span-event-dec" id="event-span-content">Enough details coming in</span>
                        <span class="span-event-fee" id="event-span-content">$10</span>
                        <span class="span-event-type" id="event-span-content">Conference</span>
                        <span class="span-event-url" id="event-span-content">www.visitagain.com</span>
                        <span class="span-event-edit" id="event-span-content">Edit</span>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
background: white;
box-shadow: 1px 3px 5px #e0e0e0;
padding-bottom: 50px;

.event{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 50px;
}
.event-cat{
    font-size: 18px;
    font-weight: 600;
    color: #4169E1;
    margin-left: 40px;
}
.event-header-div{
    display: flex;
    align-items: baseline;
}

.event-span{
    color: white;
    background-color: forestgreen;
    padding: 3px 7px;
    border-radius: 5px;
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
}

.trash-event{
    font-size: 14px;
    color: red;
    width: 40px;
    cursor: pointer;
}
#trash-event{
    margin-left: 8px;
}

.table-header{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
}

.span-event{
    width: 17%;
}
.span-event-dec{
    width: 25%;
}
.span-event-fee{
    width: 6%;
}
.span-event-type{
    width: 10%;
}
.span-event-url{
    width: 30%;
}
.span-event-edit{
    width: 7%;
    cursor: pointer;
}
.create-inner-div-2{
    margin-top: 10px;
    margin-left: 10px;
}

#title-content-div{
    margin-top: -2px;
}
#event-span-content{
    color: #4169E1; 
}
`;