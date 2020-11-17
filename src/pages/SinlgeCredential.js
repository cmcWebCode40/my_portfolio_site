import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { coopLagApi } from '../services/services';
import { getUserToken } from '../utils/functions/userAuth';
import { toast } from 'react-toastify';

export default function SingleCredentials({ history, match }) {
    const [credentialsInfo, setCredentialsInfo] = useState([])
    const [approveCred, setApproveCred] = useState(true);

    let fair_id = new URLSearchParams(history.location.search).get("fair_id")
    let user_id = new URLSearchParams(history.location.search).get("user_id")
    const credential_id = match.params.id
    const headers = getUserToken()


    const errorAlert = (message) => {
        toast.error(
            message,
            { autoClose: 5000 },
            {
                position: toast.POSITION.TOP_LEFT,
            }
        );
    };

    const information = () => {
        toast.info("Submission was successful ....", { autoClose: 4000 }, {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    useEffect(() => {
        coopLagApi
            .get(`/fairs/${fair_id}/vendor-credentials/${credential_id}`, { headers })
            .then((response) => {
                setCredentialsInfo([response.data.data]);
            })
            .catch((error) => {
                errorAlert(error.response.data.message);
            });
    }, [credential_id]);

    const approval = (abc) => {
        setApproveCred(abc)
        onSubmit()
    }

    const onSubmit = () => {
        coopLagApi
            .patch(`/fairs/${fair_id}/users/${user_id}/vendor-credentials/${credential_id}/approve`, approveCred, { headers })
            .then((response) => {
                if (response.data.status = "success") {
                    information()
                    history.push("/approvecredential")
                }
            })
            .catch((error) => {
                errorAlert(error.response.data.message);
            });
    }

    return (
        <StyledDiv>
            <h3>Vendors Credentials!</h3>
            <div className="cards-div">
                {credentialsInfo.map((data) => (
                    <div key={data._id} className="vendor-card">
                        <p>Vendor's Name: {data.vendorName}</p>
                        {data.credentials.map(credential => (
                            <div key={credential._id}>
                                <p>File name: {credential.name}</p>
                                <div className="image-div">
                                    <img src={credential.value} alt="images" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="btns-div">
                    <span id="approved" onClick={() => approval(true)}>Approved</span>
                    <span id="rejected" onClick={() => approval(false)}>Rejected</span>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
Text-align: center;

h3{
    text-align: center;
}

.btns-div{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    #approved{
        color: white;
        background: var(--primary);
        margin-right: 5px;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    #rejected{
        color: white;
        background: red;
        margin-left: 5px;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
}

img{
    width: 400px;
    height: 300px;
}

.vendor-card{
    border: 2px dashed grey;
    border-radius: 10px;
    padding: 10px 5px;
    margin: 5% auto 2%;
    cursor: pointer;
    width: 450px;
    text-align: center;

    a{
        text-decoration: none;
    }
}
.vendor-card:hover{
    background: lightgrey;
}
`;