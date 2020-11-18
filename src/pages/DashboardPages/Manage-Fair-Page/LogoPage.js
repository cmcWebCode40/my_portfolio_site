import React from 'react';
import styled from 'styled-components';

export default function LogoPage() {
  return (
    <StyledDiv>
      <div className="logo">
        <h5 className="logo-cat">Logo</h5>
        <span className="logo-new-span">+ New Event</span>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
background: white;
box-shadow: 1px 3px 5px #e0e0e0;
padding-bottom: 50px;

.logo{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 20px;
}
.logo-cat{
    font-size: 18px;
    font-weight: 600;
    color: #4169E1;
    margin-left: 40px;
}

.logo-span{
    color: white;
    background-color: forestgreen;
    padding: 3px 7px;
    border-radius: 5px;
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
}
`;
