import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from "../../services/services"

export default function AllFairs(props) {
    const [fairs, setFairs] = useState([])

    useEffect(() => {
        // const id = props.match.params.id;
        // console.log(id)

        const headers = getUserToken();

        coopLagApi.get(`/fairs`, { headers })
            .then(response => {
                console.log(response.data.data)
                setFairs(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [props.match.params.id]);

    return (
        <StyledDiv>
            <h1>All fairs</h1>
            {fairs.map(fair => (
                <div key={fair._id} >
                    <Link to={`/fair-landing-page/${fair._id}`}>
                        <h5><i>{fair.name}</i></h5>
                        <h6>Relationship: <i>{fair.about_event}</i></h6>
                    </Link>
                </div>
            ))}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    text-align: center;

    div{
        border: 2px solid grey;
        margin-top: 3px;
        curcor: pointer;
    }
`;