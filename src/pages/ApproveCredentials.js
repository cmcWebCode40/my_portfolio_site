import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { coopLagApi } from '../services/services';
import { getUserToken } from '../utils/functions/userAuth';
import { toast } from 'react-toastify';

export default function ApproveCredentials(props) {
    const [credentials, setCredentials] = useState([])

    const user_id = `5f9ca3ecca44fd0017507b53`;

    const headers = getUserToken();

    const errorAlert = (message) => {
        toast.error(
            message,
            { autoClose: 5000 },
            {
                position: toast.POSITION.TOP_LEFT,
            }
        );
    };

    useEffect(() => {
        coopLagApi
            .get(`/fairs/${user_id}/vendor-credentials`, { headers })
            .then((response) => {
                setCredentials(response.data.data);
            })
            .catch((error) => {
                errorAlert(error.response.data.message);
            });
    }, [user_id]);

    return credentials.length < 1 ? (<StyledDiv><h3>Loading....</h3></StyledDiv>) : (
        <StyledDiv>
            <h3>Vendor Credentials!</h3>
            <div className="cards-div">
                {credentials.map((data) => (
                    <div key={data._id} className="vendor-card">
                        <p>Vendor's Name: {data.vendorName}</p>
                        <p>Approved?: {data.approved}</p>
                        <p>Fair: {data.fair}</p>
                    </div>
                ))}
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    Text-align: center;

    h3{
        text-align: center;
    }

    .cards-div{
        display: flex;
        justify-content: spaced-evenly;
        flex-wrap: wrap;
    }

    .vendor-card{
        border: 2px dashed grey;
        border-radius: 10px;
        padding: 10px 5px;
        margin: 10px 5px;
        cursor: pointer;
    }
    .vendor-card:hover{
        background: lightgrey;
    }
`;