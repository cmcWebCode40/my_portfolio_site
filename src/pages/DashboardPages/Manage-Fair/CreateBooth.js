import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default function CreateBooth() {
  return (
    <StyledDiv>
      <div className="booth">
        <h5 className="booth-cat">Booth Category</h5>
        <span className="booth-span">+ New Category</span>
      </div>
      <div className="booth-header-div">
        <span className="trash-booth" />
        <div className="table-header">
          <span className="span-booth">Category</span>
          <span className="span-both-fee">Fee</span>
          <span className="span-booth-feat">Feature</span>
          <span className="span-columns-stats">Status</span>
          <span className="span-booth-edit">....</span>
        </div>
      </div>
      <div className="booth-inner-div" id="title-content-div">
        <div className="booth-header-div">
          <div className="trash-booth"><FontAwesomeIcon icon={faTrashAlt} /></div>
          <div className="table-header">
            <span className="span-booth" id="booth-span-content">Basic</span>
            <span className="span-both-fee" id="booth-span-content">$1000</span>
            <span className="span-booth-feat" id="booth-span-content">Edit Features</span>
            <span className="span-columns-stats" id="booth-span-content">Active</span>
            <span className="span-booth-edit" id="booth-span-content">Edit</span>
          </div>
        </div>
        <div className="booth-header-div">
          <div className="trash-booth"><FontAwesomeIcon icon={faTrashAlt} /></div>
          <div className="table-header">
            <span className="span-booth" id="booth-span-content">Basic</span>
            <span className="span-both-fee" id="booth-span-content">$1000</span>
            <span className="span-booth-feat" id="booth-span-content">Edit Features</span>
            <span className="span-columns-stats" id="booth-span-content">Active</span>
            <span className="span-booth-edit" id="booth-span-content">Edit</span>
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

.booth{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;
}
.booth-cat{
    font-size: 18px;
    font-weight: 600;
    color: #4169E1;
    margin-left: 40px;
}
.booth-header-div{
    display: flex;
    align-items: baseline;
}

.booth-span{
    color: white;
    background-color: forestgreen;
    padding: 3px 7px;
    border-radius: 5px;
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
}

.trash-booth{
    font-size: 14px;
    color: red;
    width: 40px;
    cursor: pointer;
    text-align: center;
}

.table-header{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
}
.span-booth{
    width: 20%;
}

.span-both-fee{
    width: 15%;
}
.span-booth-feat{
    width: 25%;
    cursor: pointer;
}

.span-columns-stats{
    width: 15%;
}

.span-booth-edit{
    width: 15%;
    text-align: center;
    cursor: pointerbooth;
    color: #4169E1; 
}

#title-content-div{
    margin-top: -2px;
}
#event-span-content{
    color: #4169E1; 
}
`;
