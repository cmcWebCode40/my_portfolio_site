import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from "../../services/services"

export default function AllFairs(props) {
    const [fairs, setFairs] = useState([])

    const headers = getUserToken();

    const errorAlert = (message) => {
        toast.error(message, { autoClose: 5000 }, {
            position: toast.POSITION.TOP_LEFT
        });
    }

    useEffect(() => {
        coopLagApi.get(`/fairs`, { headers })
            .then(response => {
                setFairs(response.data.data);
            })
            .catch(error => {
                errorAlert(error.response.data.message);
            });

    }, [props.match.params.id]);

    return (
        <StyledDiv>
            <h1 id="title">Explore all fairs</h1> <hr></hr>
            <div className="fairs-div">
                {fairs.map(fair => (
                    <div key={fair._id} className="per-fair">
                        <Link to={`/fair-landing-page/${fair._id}`}>
                            <div className="card" id="card-div">
                                <img src={fair.fair_banner} className="card-img-top" alt="Fair Banner" />
                                <div className="card-body">
                                    <h5 className="card-title">{fair.name}</h5>
                                    <p className="card-text"> <i>{fair.about_event}</i></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
text-align: center;
margin-top: 0;
padding-top: 5%;
padding-bottom: 2%;
background: var(--primary-color);

@media only screen and (max-width: 800px){
    padding-top: 10%;
}
@media only screen and (max-width: 550px){ 
    padding-top: 12%;
    h1{
        font-size: 35px;
    }
}
@media only screen and (max-width: 440px){ 
    padding-top: 15%;
    h1{
        font-size: 30px;
    }
}

    #title{
        color: white;
        margin-botton: 3%;
    }
    hr{
        background: white;
        max-width: 800px;
        width: 80%;
        margin-bottom: 4%;
    }

    .fairs-div{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .per-fair{
        border: 2px solid grey;
        margin-top: 10px;
        margin-bottom: 5px;
        curcor: pointer;
    }

    #card-div{
        width: 18rem;
        border: 1px dashed grey;
    }
    #card-div:hover {
        opacity: 0.8;
        transition: 0.3s;
        box-shadow: 2px 5px 5px 5px white;
    }
`;