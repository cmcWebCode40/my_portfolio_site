import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"


export default function FairEvent() {
    return (
        <StyeldDiv>
            <div class="manage-body">
                <div className="fair-name-bar"></div>
                <div className="manage-body-content">
                    <div class="manage-fair">
                        <h5 class="manage">Events</h5>
                        <span class="manage-span">+ New Fair</span>
                    </div>
                    <div class="table-header-div">
                        <span id="trash"></span>
                        <div class="table-header">
                            <span class="span-fair">Fair</span>
                            <span class="span-columns">Date Created</span>
                            <span class="span-columns">Template </span>
                            <span class="span-columns">Status</span>
                            <span class="span-columns">Package</span>
                            <span class="span-edit">....</span>
                        </div>
                    </div>
                    <div class="table-header-div">
                        <div id="trash"><FontAwesomeIcon icon={faTrashAlt} /></div>
                        <div class="table-header">
                            <span class="span-fair" id="manage-span-content">Cooplag 2020</span>
                            <span class="span-columns" id="manage-span-content">01/09/2020 9:40am</span>
                            <span class="span-columns" id="manage-span-content">Outdoor#20 </span>
                            <span class="span-columns" id="manage-span-content">active</span>
                            <span class="span-columns" id="manage-span-content">Standard</span>
                            <span class="span-edit" id="manage-span-content">Edit</span>
                        </div>
                    </div>
                </div>
            </div>
        </StyeldDiv>
    )
}

const StyeldDiv = styled.div`
.manage-body{
    background: white;
   background-color: #F8F8FF;
}

.fair-name-bar{
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   box-shadow: 1px 3px 5px #e0e0e0;
   padding: 3px 10px;
   background: white;
   height: 45px;
}

.manage-body-content{
   margin: 20px;
   background: white;
   padding-bottom: 50px;
   width: 95%;
   margin: auto center;
   box-shadow: 1px 3px 5px #e0e0e0;
}

.manage-fair{
   display: flex;
   justify-content: space-between;
}
.manage{
   margin-top: 20px;
   margin-left: 20px;
   color: #4169E1;
   font-weight: bold;
}
.manage-span{
   color: white;
   background-color: forestgreen;
   padding: 3px 7px;
   border-radius: 5px;
   margin-right: 20px;
   margin-top: 20px;
   cursor: pointer;
}

.table-header-div{
   display: flex;
   align-items: baseline;
}
.table-header{
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   margin-bottom: 10px;
   width: 95%;
}

.span-columns{
   width: 180px;
   text-align: center;
   /* color: #4169E1; */
}

#manage-span-content{
  color: #4169E1; 
}

#trash{
   width: 5%;
   text-align: center;
   color: red;
   cursor: pointer;
}
.span-fair{
   width: 100px;
}
.span-edit{
   margin-right: 20px;
   width: 50px;
   text-align: center;
}

`;