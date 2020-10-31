import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../mainLayout/header/Header';

const AppBar = styled.div`
  #wrapper {
      padding-left: 0;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    #wrapper.toggled {
      padding-left: 250px;
    }

    #sidebar-wrapper {
      z-index: 1000;
      position: fixed;
      left: 250px;
      width: 0;
      height: 100%;
      margin-left: -250px;
      overflow-y: auto;
      background:${(props) => props.theme.colors.primary};
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    #wrapper.toggled #sidebar-wrapper {
      width: 250px;
    }

    #page-content-wrapper {
      width: 100%;
      position: absolute;
      padding: 15px;
    }

    #wrapper.toggled #page-content-wrapper {
      position: absolute;
      margin-right: -250px;
    }

    /* Sidebar Styles */

    .sidebar-nav {
      position: absolute;
      top: 0;
      width: 250px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .sidebar-nav li {
      text-indent: 20px;
      line-height: 40px;
    }

    .sidebar-nav li a {
      display: block;
      text-decoration: none;
      color:${(props) => props.theme.colors.whiteColor};
    }

    .sidebar-nav li a:hover {
      text-decoration: none;
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
    }

    .sidebar-nav li a:active,
    .sidebar-nav li a:focus {
      text-decoration: none;
    }

    .sidebar-nav>.sidebar-brand {
      height: 65px;
      font-size: 18px;
      line-height: 60px;
    }

    .sidebar-nav>.sidebar-brand a {
      color: #999999;
    }

    .sidebar-nav>.sidebar-brand a:hover {
      color: #fff;
      background: none;
    }

    @media(min-width:768px) {
      #wrapper {
        padding-left: 250px;
      }

      #wrapper.toggled {
        padding-left: 0;
      }

      #sidebar-wrapper {
        width: 250px;
      }

      #wrapper.toggled #sidebar-wrapper {
        width: 0;
      }

      #page-content-wrapper {
        padding: 20px;
        position: relative;
      }

      #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
      }
    }`;

const DashBoardLayout = ({ children }) => {
  const toggleModal = () => {
    const wrapper = document.querySelector('#wrapper');
    wrapper.classList.toggle('toggled');
  };

  return (
    <AppBar>
      <Header />
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            {/* <li className="sidebar-brand">
              <a href="##">
                Start Bootstrap
              </a>
            </li> */}
            <li>
              <a href="##">Dashboard</a>
            </li>
            <li>
              <a href="##">Shortcuts</a>
            </li>
            <li>
              <a href="##">Overview</a>
            </li>
            <li>
              <a href="##">Events</a>
            </li>
            <li>
              <a href="##">About</a>
            </li>
            <li>
              <a href="##">Services</a>
            </li>
            <li>
              <a href="##">Contact</a>
            </li>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <a href="#menu-toggle" onClick={toggleModal} className="btn btn-default" id="menu-toggle">
                  <FontAwesomeIcon icon={['fa', 'bars']} />
                </a>
                <main>
                  {children}
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

DashBoardLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default DashBoardLayout;
