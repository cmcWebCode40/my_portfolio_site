import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../button';

function Navbar() {
  return (
    <StyledDiv>
      <div className="header  shadow-sm">
        <div className="container-fluid">
          <div className="row navbar navbar-expand-lg navbar-light">
            <div className="navbar-brand col-1 logo-box">
              <a href="/" className="logo-link">
                fair
                <span className="font-weight-bolder text-success">Square</span>
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <div className="col col-lg-auto m-auto">
                <ul className="navbar-nav">
                  <li className="px-3 font-weight-bolder custom_nav-link"><NavLink to="/">Home</NavLink></li>
                  <li className="px-3 font-weight-bolder custom_nav-link">About</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Features</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Pricing</li>
                </ul>
              </div>
            </div>
            <div className="register-login">
              <div>
                <NavLink to="/register"><span id="register">Sign up</span></NavLink>
              </div>
              <div>
                <NavLink to="/login"><Button label="Sign In" /></NavLink>
              </div>
              {/* <div className="col-lg-1">
                <NavLink to="/sign-in"><Button label="Sign In" /></NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Navbar;

const StyledDiv = styled.div`
  position:fixed;
  width:100%;
  z-index:999;
  background: white;
  margin: 0 0 2rem 0;

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
  a{
    text-decoration: none;
    color: var(--primary-color);
  }
  .register-login{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  #register{
    background: white;
    color: var(--primary-color);
    margin-right: 10px;
    padding: 7.5px 10px;
    border-radius: 5px;

    @media only screen and (max-width: 400px){
      display: none;
    }
  }
  #register:hover {
    background: var(--primary-color);
    color: white;
  }

`;
