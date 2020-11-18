import React from 'react';
import styled from 'styled-components';

export default function Construction() {
  return (
    <StyeldDiv>
      <div className="manage-body">
        <div className="manage-body-content">
          <div className="manage-fair">
            <h5 className="manage">New Title</h5>
            <span className="manage-span">+ New </span>
          </div>
          <div>
            <h1>Oop!.... Still Under Construction.</h1>
          </div>
        </div>
      </div>
    </StyeldDiv>
  );
}

const StyeldDiv = styled.div`
.manage-body{
    background: white;
   background-color: #F8F8FF;
}

h1{
    text-align: center;
    margin-top: 15%;
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
