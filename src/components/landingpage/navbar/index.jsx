import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { getUserData, logoutUser } from '../../../utils/functions/userAuth';
import { authContextApi } from '../../../context/authContext';
import Button from '../../button';

function Navbar() {
  const [loading, setloading] = useState(false);
  const { isUserAuth, setIsUserAuth } = useContext(authContextApi);
  const currentUser = getUserData('firstname');
  const history = useHistory();

  useEffect(() => {

  }, [isUserAuth]);

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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="col col-lg-auto m-auto">
                <ul className="navbar-nav">
                  <li className="px-3 font-weight-bolder custom_nav-link"><NavLink to="/">Home</NavLink></li>
                  <li className="px-3 font-weight-bolder custom_nav-link">About</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Features</li>
                  <li className="px-3 font-weight-bolder custom_nav-link">Pricing</li>
                </ul>
              </div>
              <div className="register-login">
                <div className="px-4 mb-n3">
                  <NavLink to="/register"><Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Sign Up</Button></NavLink>
                </div>
                <div className="px-4 mb-n3">
                  <NavLink to="/login"><Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Sign In</Button></NavLink>
                </div>
              </div>
              <div className="register-login">
                <div>
                  {currentUser
                    ? (
                      <span
                        className="font-weight-bold "
                      >
                        {currentUser}
                      </span>
                    )
                    : (
                      <NavLink to="/register">
                        <span id="register">Sign up</span>
                      </NavLink>
                    )}
                </div>
                <div>
                  {currentUser
                    ? (
                      <button
                        disabled={!!loading}
                        type="button"
                        onClick={() => {
                          setloading(true);
                          logoutUser(history);
                          setIsUserAuth(!isUserAuth);
                          setloading(false);
                        }}
                        className="btn mx-2 btn-outline-primary"
                      >
                        Logout
                      </button>
                    )
                    : (
                      <NavLink to="/login">
                        <Button label="Sign In" />
                      </NavLink>
                    )}
                </div>
              </div>
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


  .icon{
    position:absolute;
    transform:translate(-50%,-50%);
    height:100vh
  }

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
    height: 100%;

    @media only screen and (max-width: 400px){
      display: none;
    }
  }
  #register:hover {
    background: var(--primary-color);
    color: white;
  }

`;
