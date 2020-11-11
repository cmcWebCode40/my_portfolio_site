import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
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
            <h3>Vendor's Profile</h3>
            <div className="fairs-div">
                {profile.map(info => (
                    <div key={info._id} className="per-fair">
                        <p>{info.vendorName}</p>
                        <p>{info.business_name}</p>
                        <p>{info.business_city}</p>
                        <div>{info.fairs.map(fair => (
                            <div key={fair}>
                                <p>{fair}</p>
                            </div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    text-align: center;
`;