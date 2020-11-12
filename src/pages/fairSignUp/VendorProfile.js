import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from "../../services/services";


export default function VendorProfile(props) {
    const [profile, setProfile] = useState([])

    const headers = getUserToken();
    const vendor_id = props.match.params.id;

    const errorAlert = (message) => {
        toast.error(message, { autoClose: 5000 }, {
            position: toast.POSITION.TOP_LEFT
        });
    }

    useEffect(() => {
        coopLagApi.get(`/vendors/${vendor_id}/vendor-profile`, { headers })
            .then(response => {
                const { data } = response.data;
                setProfile([data]);
            })
            .catch(error => {
                errorAlert(error.response.data.message);
            });

    }, [props.match.params.id]);

    return (
        <StyledDiv>
            <div className="vendor-profile">
                {profile.map(info => (
                    <div key={info._id} className="profile">
                        <div className="identity">
                            <p><span>Name: </span>{info.vendorName}</p>
                            <p><span>Business Name: </span>{info.business_name}</p>
                            <p><span>Location (city, State): </span>{info.business_city}, {info.business_state}</p>
                            <p><span>Phone: </span>{info.business_tel}</p>
                            <p><span>Email: </span>{info.business_email}</p>
                            <p id="edit-icon"><span>Edit profile <FontAwesomeIcon icon={faUserEdit} id="edited" /></span></p>
                        </div>
                        <div className="reg-fairs">
                            <h5>Fairs Registered in</h5>
                            <hr></hr>
                            {info.fairs.map(fair => (
                                <div key={fair}>
                                    <p>{fair}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

    .vendor-profile{
            background: white;
            box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
            -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
            -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
            -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
            -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
            padding: 30px 20px;
            max-width: 1000px;
            width: 90%;
            margin: 5% auto;

            @media only screen and (max-width: 860px){
                max-width: 500px;
            } 

    }

    .profile{
        display: flex;
        background: white;
        border: 2px solid var(--primary-color);
        border-radius: 5px;

        hr{
            background: var(--primary-color);
        }

        @media only screen and (max-width: 860px){
            display: flex;
            flex-direction: column;
        } 
    }

    .identity{
        color: var(--primary-color);
        padding: 20px 10px;
        width: 40%;
        min-width: 400px;

        @media only screen and (max-width: 860px){
            min-width: 250px;
            width: 95%;
            margin: auto;
        } 
        

        p{
            height: 40px;
            border-bottom: 1px solid var(--primary-color);
            padding: 10px 5px 5px 5px;
            font-size: 20px;

        }

        span{
            font-size: 14px;
            color: gray;
            margin-right: 10px;
        }

        #edit-icon{
            border-bottom: none;
            text-align: right;
            cursor: pointer;

            span{
                font-size: 12px;
                color: grey;
                padding: 3px 7px;
                border-radius: 10px;
            }
            span:hover{
                color: var(--primary-color);
                border: 1px solid var(--primary-color);
                padding: 5px 10px;
            }

            #edited{
                color: var(--primary-color);
                margin-left: 5px;
            }
        }
    }

    .reg-fairs{
        color: var(--primary-color);
        padding: 10px;   
        width: 50%;
        text-align: center;
        margin: auto;

        hr{
            width: 300px;
            margin-bottom: 10px;
            border-top: 1px solid LightGray;
        }

        @media only screen and (max-width: 860px){
           text-align: left;
           width: 100%;

           h5{
               margin-left: 30px;
           }

           hr{
               width: 80%;
               text-align: left;
           }
        } 
    }
`;