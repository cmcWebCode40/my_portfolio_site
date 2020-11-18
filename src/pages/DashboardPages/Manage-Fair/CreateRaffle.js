import React from 'react';
import styled from 'styled-components';

export default function CreateRaffle() {
  return (
    <StyledDiv>
      <div className="event">
        <h5 className="event-cat">Raffle Events</h5>
        <span className="event-span">+ New Event</span>
      </div>
      <div className="event-header-div">
        <h1>Oop!.... Still Under Construction.</h1>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
background: white;
box-shadow: 1px 3px 5px #e0e0e0;
padding-bottom: 50px;

h1{
    text-align: center;
    margin-top: 15%;
    margin-left: 5%;
}

.event{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;
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
