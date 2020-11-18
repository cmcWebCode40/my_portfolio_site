import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default function ManageFair() {
  return (
    <StyledDiv>
      <div className="manage-body">
        <div className="manage-body-content">
          <div className="manage-fair">
            <h5 className="manage">Manage Fair</h5>
            <span className="manage-span">+ New Fair</span>
          </div>
          <div className="table-header-div">
            <span id="trash" />
            <div className="table-header">
              <span className="span-fair">Fair</span>
              <span className="span-columns-date">Date Created</span>
              <span className="span-columns-status">Status</span>
              <span className="span-columns-package">Package</span>
              <span className="span-edit">....</span>
            </div>
          </div>
          <div className="table-header-div">
            <div id="trash"><FontAwesomeIcon icon={faTrashAlt} /></div>
            <div className="table-header">
              <span className="span-fair" id="manage-span-content">Cooplag 2020</span>
              <span className="span-columns-date" id="manage-span-content">01/09/2020 9:40am</span>
              <span className="span-columns-status" id="manage-span-content">active</span>
              <span className="span-columns-package" id="manage-span-content">Standard</span>
              <span className="span-edit" id="manage-span-content">Edit</span>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`

.manage-body{
     background: white;
    background-color: #F8F8FF;
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

.span-fair{
    width: 25%;
}
.span-edit{
    margin-right: 15%;
    width: 50px;
    text-align: center;
}
.span-columns-date{
    width: 27%;
    text-align: center;
}
.span-columns-status{
    width: 10%;
    text-align: center;
}
.span-columns-package{
    width: 21%;
    text-align: center;
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

`;
