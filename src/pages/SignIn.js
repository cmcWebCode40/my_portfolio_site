import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import Cookies from 'universal-cookie';

export default function UserSignIn(props) {

    const credentials = {
        password: '',
        email: '',
    }

    const [signIn, setSignIn] = useState(credentials)

    const handleChange = (e) => {
        e.persist();
        setSignIn({
            ...signIn,
            [e.target.name]: e.target.value
        })
    };

    const cookies = new Cookies();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://cooplagfair.herokuapp.com/api/v1/users/login', signIn)
            .then(res => {
                // localStorage.setItem('coop_token', res.data.data.token);
                cookies.set('JWT', `${res.data.data.token}`, { path: '/' });
                props.history.push('/dashboard');
            })
            .catch(error => {
                console.log(error)
            })
    };
    return (
        <StyledDiv>
            <form onSubmit={handleSubmit} className="form">
                <h3 className="Details">Enter Sign In Details Below</h3>
                <div className="input-field">
                    <label htmlFor="name"></label>
                    <input type="email" name='email' placeholder="Enter Email" onChange={handleChange} value={signIn.email} required />
                </div>
                <div className="input-field">
                    <label htmlFor="password"></label>
                    <input type="password" name='password' placeholder="Enter Password" onChange={handleChange} value={signIn.password} required />
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

