import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"


export default function CreateSpeaker() {
    return (
        <StyledDiv>
            <div class="speaker-body">
                <div class="speaker">
                    <h5 class="speaker-cat">Speakers Category</h5>
                    <span class="speaker-span">+ New Category</span>
                </div>
                <div class="create-inner-div">
                    <div class="speaker-header-div">
                        <span id="trash-speaker"></span>
                        <div class="table-header">
                            <span class="span-create">Category</span>
                            <span class="span-create-columns">Status</span>
                            <span class="span-create-edit">....</span>
                        </div>
                    </div>
                    <div class="speaker-header-div">
                        <div id="trash-speaker"><FontAwesomeIcon icon={faTrashAlt} /></div>
                        <div class="table-header">
                            <span class="span-create" id="speaker-span-content">Parallel Session</span>
                            <span class="span-create-columns" id="speaker-span-content">active</span>
                            <span class="span-create-edit" id="speaker-span-content">Edit</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="speaker-body">
                <div class="speaker">
                    <h5 class="speaker-cat">All Speakers</h5>
                    <span class="speaker-span">+ New Speaker</span>
                </div>
                <div class="create-inner-div-2">
                    <div class="speaker-header-div">
                        <span id="trash-speaker"></span>
                        {/* <div class="table-header">
                            <span class="span-create-2">Name</span>
                            <span class="span-create-email">Email</span>
                            <span class="span-create-pass">Password</span>
                            <span class="span-create-columns">Staus</span>
                            <span class="span-create-role">Role</span>
                        </div> */}
                        <div class="table-header">
                            <p class="span-create-2">Name</p>
                            <p class="span-create-email">Email</p>
                            <p class="span-create-pass">Password</p>
                            <p class="span-create-columns">Staus</p>
                            <p class="span-create-role">Role</p>
                        </div>
                    </div>
                    <div class="speaker-header-div">
                        <div id="trash-speaker"><FontAwesomeIcon icon={faTrashAlt} /></div>
                        <div class="table-header">
                            <span class="span-create-2" id="speaker-span-content">Charlse Avis</span>
                            <span class="span-create-email" id="speaker-span-content">charlseavis@gmail</span>
                            <span class="span-create-pass" id="speaker-span-content">********</span>
                            <span class="span-create-columns" id="speaker-span-content">active</span>
                            <span class="span-create-role" id="speaker-span-content">Pannel Session</span>
                        </div>
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

.create-body{
    background-color: #F8F8FF;
}

.create-side-body{
    margin: 50px 1px 50px 50px;
     width: 19.8%;
     background-color: white;
     box-shadow: 3px 4px 15px #e0e0e0;
     padding-bottom: 50px;
}
.create-inner-body{
    display: flex;
    justify-content: space-between;
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

#create-spreaker{
    border-right: forestgreen 4px solid;
    padding: 6px 0 6px 20px;
    color: royalblue;
    margin-bottom: 5px;
    cursor: pointer;
}

#create-body-content{
    width: 80%;
    background-color: white;
    margin: 50px 50px 50px 1px;
    box-shadow: 3px 4px 15px #e0e0e0;
}

.speaker-body{
    margin: 20px;
}
.speaker-header-div{
    display: flex;
    align-items: baseline;
}
.speaker{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 50px;
}
.speaker-cat{
    font-size: 18px;
    font-weight: 600;
    color: #4169E1;
    margin-left: 40px;
}

.speaker-span{
    color: white;
    background-color: forestgreen;
    padding: 3px 7px;
    border-radius: 5px;
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
}
.create-inner-div{
    width: 60%;
    margin-top: 10px;
    margin-left: 10px;
}
.span-create{
    width: 40%;
}
.span-create-columns{
    text-align: center;
}
.span-create-edit{
    margin-right: 20px;
    width: 50px;
    text-align: center;
    cursor: pointer;
}
#trash-speaker{
    font-size: 14px;
    color: red;
    width: 30px;
    cursor: pointer;
}

#speaker-span-content{
    color: #4169E1; 
}
span{
    margin-top: -3px;
    margin-bottom: -3px;
}
.span-create-2{
    width: 15%;
}
.span-create-email{
    width: 20%;
}
.span-create-pass{
    width: 15%;
}
.span-create-columns{
    width: 30px;
}

.span-create-role {
    width: 15%;
}

.create-inner-div-2{
    margin-top: 10px;
    margin-left: 10px;
}

.table-header{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
}

`;