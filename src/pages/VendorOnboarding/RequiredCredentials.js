import React, { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form"

export default function RequiredFiles() {
    const { register, handleSubmit, error } = useForm()

    const onSubmit = (data) => {
        const fair_id = `5f90322b2bb0c600179cea67`
        const token = localStorage.getItem('JWT');

        // console.log(token)
        // console.log(data)

        axios
            .post(`https://cooplagfair.herokuapp.com/api/v1/fairs/${fair_id}/vendor-credentials`, data,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <StyledDiv>
            <div className="credential-main-body">
                <div className="left-side">
                    <h4>Information</h4>
                    <p>Please ensure you are already signed in as a user, else <span><Link to="/login"> login using this link</Link></span> </p>
                    <p>Below are information required of a vendor by the fair</p>
                    <p>A</p>
                    <p>B</p>
                    <p>C</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="right-side">
                    <h4>Enter's Required Credentials</h4>
                    <div>
                        <input type="text" name='business_name' ref={register({ required: true })} />
                    </div>
                    <div>
                        <input type="text" name='business_city' ref={register({ required: true })} />
                    </div>
                    <div>
                        <input type="text" name='business_state' ref={register({ required: true })} />
                    </div>
                    <div>
                        <input type="file" multiple name='requirements' ref={register({ required: true })} />
                    </div>
                    <div>
                        <input type="text" name='business_tel' ref={register({ required: true })} />
                    </div>
                    <div>
                        <input type="text" name='business_address' ref={register({ required: true })} />
                    </div>
                    <div>
                        <input type="number" name='delivery_duration' ref={register({ required: true })} />
                    </div>
                    <div>
                        <input type="email" name='business_email' ref={register({ required: true })} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
text-align: center;
width: 100%;
margin: 3% auto;
padding-top: 2%;
height: 100vh;
overflow: hidden;

.credential-main-body{
    display: flex;
    justify-content: center;
    max-width: 1000px;
    width: 100%;
    padding: 2%;
    input{
        margin: 2px;
    } 

    .right-side{
        width: 60%;
    }
    .left-side{
        width: 40%;
    }

}
`;