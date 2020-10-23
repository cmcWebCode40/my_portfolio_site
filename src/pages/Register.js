import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

export default function UserSignUp(props) {

    const credentials = {
        username: '',
        lastname: '',
        firstname: '',
        password: '',
        email: '',
        phoneNumber: ''
    }

    const [signUp, setSignUp] = useState(credentials)

    const handleChange = (e) => {
        e.persist();
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
        console.log(signUp)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signUp)
        axios
            .post('https://cooplagfair.herokuapp.com/api/v1/users/register', signUp)
            .then(res => {
                if (res.data.status === "success")
                    props.history.push("/login")
                else {
                    console.log(res.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    };
    return (
        <StyledDiv>
            <form onSubmit={handleSubmit} className="form">
                <h3 className="Details">Enter Details Below</h3>
                <div className="input-field">
                    <label htmlFor="name"></label>
                    <input type="text" name='username' placeholder="Enter Username" onChange={handleChange} value={signUp.username} required />
                </div>
                <div className="input-field">
                    <label htmlFor="name"></label>
                    <input type="text" name='firstname' placeholder="Enter Firstname" onChange={handleChange} value={signUp.firstname} required />
                </div>
                <div className="input-field">
                    <label htmlFor="name"></label>
                    <input type="text" name='lastname' placeholder="Enter Lastname" onChange={handleChange} value={signUp.lastname} required />
                </div>
                <div className="input-field">
                    <label htmlFor="password"></label>
                    <input type="password" name='password' placeholder="Enter Password" onChange={handleChange} value={signUp.password} required />
                </div>
                <div className="input-field">
                    <label htmlFor="name"></label>
                    <input type="email" name='email' placeholder="Enter Email" onChange={handleChange} value={signUp.email} required />
                </div>
                <div className="input-field">
                    <label htmlFor="name"></label>
                    <input type="text" name='phoneNumber' placeholder="Enter Phone Number (eg: +2348000000001)" onChange={handleChange} value={signUp.phoneNumber} required />
                </div>
                <div className="input-field">
                    <button className='button-submit'>Submit</button>
                </div>
            </form>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    max-width: 1300px;
    height: 100vh;
    width: 100%;

    .form{
        margin-top: 10%;
        text-align: center;
        margin-left: 15%;
        margin-right: 15%; 
        padding-top: 3%;
        box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
     0 2px 4px rgba(0, 0, 0, 0.24);
      }

      .button-submit{
        width: 30%;
        margin-top: 3px;
        margin-bottom: 5%;
        border :1px solid dodgerblue;
        border-radius: 5px;
        padding: 5px 7px;
        background: lawngreen;
       }
       
       .button-submit:hover{
         background: dodgerblue;
       
       }

       input{
           width: 70%;
           margin: 2px;
           height: 25px;
       }
`;

