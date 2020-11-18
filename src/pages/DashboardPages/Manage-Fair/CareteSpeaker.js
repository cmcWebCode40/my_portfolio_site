import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default function CreateSpeaker() {
  return (
    <StyledDiv>
      <div className="speaker-body">
        <div className="speaker">
          <h5 className="speaker-cat">Speakers Category</h5>
          <span className="speaker-span">+ New Category</span>
        </div>
        <div className="create-inner-div">
          <div className="speaker-header-div">
            <span id="trash-speaker" />
            <div className="table-header">
              <span className="span-create">Category</span>
              <span className="span-create-columns">Status</span>
              <span className="span-create-edit">....</span>
            </div>
          </div>
          <div className="speaker-header-div">
            <div id="trash-speaker"><FontAwesomeIcon icon={faTrashAlt} /></div>
            <div className="table-header">
              <span className="span-create" id="speaker-span-content">Parallel Session</span>
              <span className="span-create-columns" id="speaker-span-content">active</span>
              <span className="span-create-edit" id="speaker-span-content">Edit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="speaker-body">
        <div className="speaker">
          <h5 className="speaker-cat">All Speakers</h5>
          <span className="speaker-span">+ New Speaker</span>
        </div>
        <div className="create-inner-div-2">
          <div className="speaker-header-div">
            <span id="trash-speaker" />
            <div className="table-header">
              <p className="span-create-2">Name</p>
              <p className="span-create-email">Email</p>
              <p className="span-create-pass">Password</p>
              <p className="span-create-columns">Staus</p>
              <p className="span-create-role">Role</p>
            </div>
          </div>
          <div className="speaker-header-div">
            <div id="trash-speaker"><FontAwesomeIcon icon={faTrashAlt} /></div>
            <div className="table-header">
              <span className="span-create-2" id="speaker-span-content">Charlse Avis</span>
              <span className="span-create-email" id="speaker-span-content">charlseavis@gmail</span>
              <span className="span-create-pass" id="speaker-span-content">********</span>
              <span className="span-create-columns" id="speaker-span-content">active</span>
              <span className="span-create-role" id="speaker-span-content">Pannel Session</span>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`

background: white;
box-shadow: 1px 3px 5px #e0e0e0;
padding-bottom: 50px;

.speaker-body{
    margin: 20px;
}

.speaker{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;
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

.speaker-header-div{
    display: flex;
    align-items: baseline;
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
