import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Cookies from 'universal-cookie';


export default function Navbar(props) {
    const onLogout = () => {
        const cookies = new Cookies();
        cookies.remove('JWT', { path: '/' });
    };
    return (
        <StyledDiv>
            <header>
                <div className="container-fluid d-none d-md-block">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 col-md-6 custom_nav">
                            <h5 className="p-3">Coop<span id="lag">LAG</span></h5>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-6 pt-3 custom_login">
                            <NavLink to="/register"> <span id="signup">Sign Up</span> </NavLink>
                            <NavLink to="/login"> <span id="login">Sign In</span> </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    .body_container{
        margin-bottom: 50px;
    }

    .custom_nav{
        padding-right: 0px
        display: flex;
        justify-content: space-between;
    }

    .custom_login{
        
        padding-left: 0px;
        padding-right: 5px;

        a{
            margin: 2px 5px;
            text-decoration: none;
            color: black;
            padding: 3px 6px;
            border-radius: 5px;
        }

        a:hover{
            background: dodgerblue;
            color: white;
        }

        #login{
            cursor:pointer;
        }

        #signup{
            cursor:pointer;
        }
    }

    h5{
        #lag{
            font - weight: bold;
        }
    }
`;