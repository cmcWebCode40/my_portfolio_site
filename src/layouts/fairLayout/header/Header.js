import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledDiv>
      <header className="header">
        <div className="container-fluid">
          <div className="row navbar navbar-expand-lg navbar-light p-lg-4">
            <div className="navbar-brand logo-box">
              <a href="/fair-landing-page" className="logo-link mr-auto ml-lg-5">Coop<span className="font-weight-bolder text-uppercase">lag</span></a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="col col-lg-auto ml-auto">
                <ul className="navbar-nav">
                  <li className="px-3 font-weight-bolder custom_nav-link">About Cooplag</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Events</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Speakers</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Pricing</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </StyledDiv>
  );
};

export default Header;

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
    color: var(--tint);
  }

`;
