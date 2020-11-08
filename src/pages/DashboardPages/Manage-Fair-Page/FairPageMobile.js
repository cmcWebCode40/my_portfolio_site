import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Nav() {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    const handleMenuButton = () => {
        setisSidebarOpen(!isSidebarOpen)
    };
    const autocloseMenu = () => {
        setTimeout(() => {
            setisSidebarOpen(!isSidebarOpen)
        }, 5000)
    }
    return (
        <StyledDiv>
            <div className="menu-button" onClick={handleMenuButton}><FontAwesomeIcon icon={faBars} size="2x" /></div>
            <nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
                <div className="mobile-header">
                    <div >
                        <h5>Coop<span id="Cooplag">LAG</span></h5>
                    </div>
                    <div id="close" onClick={handleMenuButton}> <FontAwesomeIcon icon={faTimes} size="1x" /></div>
                </div>
                <div className="logo-side-body" onClick={autocloseMenu}>
                    <div className="logo-sidenav-div" id="active-logo-page">
                        <span className="logo-sidenav-span">Change Logo</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Page Name</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Menu</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Slider</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Slider Content</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Sponsors</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">About Us</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Speakers</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Pricing</span>
                    </div>
                    <div className="logo-sidenav-div">
                        <span className="logo-sidenav-span">Footer</span>
                    </div>
                </div>
            </nav>
        </StyledDiv>

    )
}


export default Nav;

const StyledDiv = styled.div`
position: relative;
display: none;

.logo-sidenav-div{
    margin-bottom: 10px;
    margin-left: 30px;
    color: #4169E1;
}

.logo-side-body{
    margin: 20px 5px 50px 5px;
     width: 19.8%;
     background-color: white;
     box-shadow: 3px 4px 15px #e0e0e0;
     padding-bottom: 50px;
     padding-top: 40px;
}
.menu-button{
    position: relative;
    z-index: 99;
    cursor: pointer;
    padding-left: 3px;
}
.menu-items{
    padding: 0;
    margin: 0;
    background-color: white;
}
a{
    text-decoration: none;
    color: royalblue;
    display: flex;
    padding: 2px 5px;
    margin-top: 2px;
}

#grouped{
    border-bottom: 0.5px solid gray;
    margin-top: 3px;
}

a:hover {
    color: #fff !important;
    background: forestgreen;
  }

.mobile-header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 25vw;
    width: 100%;
    padding: 5px;
    font-size: 18px;
    margin-bottom: 10px;
    border-bottom: 1px dashed gray;

    h5{
        text-shadow: 3px 5px 2px gray, 
    }
    #close {
        font-weight: 400;
        color: black;
        font-size: 25px;
        cursor: pointer;
    }
    #Cooplag{
        font-weight: 600;
    }
  }


.nav {
    width: 130px;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #888;
    position: absolute;
    top: 0;
    z-index: 999;
    background-color: #fff;
    left: -135px;
    -webkit-transition: left 0.3s ease-in;
    -o-transition: left 0.3s ease-in;
    transition: left 0.3s ease-in;
}
.nav.show{
    left: 0;
}

.side-bar-header{
    margin-left: 5px;
    color: grey;
    text-align: left;
    margin-bottom: 3px;
    margin-top: 5px;
}
.side-bar-par{
    color: royalblue;
    padding: 1px 5px;
    cursor: pointer;
    margin-bottom: 3px;
}
.side-bar-par:hover {
    color: #fff !important;
    background: forestgreen;
  }

@media only screen and (max-width: 700px){
    display: block;
    width: 50px;
  }

`