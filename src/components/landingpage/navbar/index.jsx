import React from 'react';
import styled from 'styled-components';
import Button from '../button';

function Navbar() {
  return (
    <StyledDiv>
      <div className="header shadow-sm">
        <div className="container-fluid">
          <div className="row navbar navbar-expand-lg navbar-light">
            <div className="navbar-brand col-1 logo-box">
              <a href="index.html" className="logo-link">
                fair
                <span className="font-weight-bolder text-success">Square</span>
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <div className="col col-lg-auto m-auto">
                <ul className="navbar-nav">
                  <li className="px-3 font-weight-bolder custom_nav-link">Home</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">About</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Features</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Pricing</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1">
              <Button label="Sign In" />
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Navbar;

const StyledDiv = styled.div`
  .logo-box {
    font-size: 30px;
  }
  .logo-link {
    text-decoration: none;
    color: black;
  }
  .custom_nav-link {
    color: var(--primary-color);
  }
`;
