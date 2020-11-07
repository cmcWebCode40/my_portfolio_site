import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form"

export default function RequiredFiles() {
    const { register, handleSubmit, error } = useForm()

    // const credentials = {
    //     name: '',
    //     description: '',
    // }

    // const [requiredName, setRequiredName] = useState(credentials)

    // const handleChange = (e) => {
    //     e.persist();
    //     setRequiredName({
    //         ...requiredName,
    //         [e.target.name]: e.target.value
    //     })
    // };

    const onSubmit = (data) => {
        const fair_id = `5f90322b2bb0c600179cea67`
        const token = localStorage.getItem('JWT');

        console.log(token)
        console.log(data)

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Vendor's Credentials</h1>
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
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
text-align: center;
margin-top: 5%;
input{
    margin: 2px;
} 
`;