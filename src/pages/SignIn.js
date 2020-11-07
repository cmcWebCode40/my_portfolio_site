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
        console.log(res)
        localStorage.setItem('JWT', res.data.data.token);
        cookies.set('JWT', `${res.data.data.token}`, { path: '/' });
        props.history.push('/fair/dashboard-overview');
      })
      .catch(error => {
        console.log(error)
      })
  };
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit} className="form">
        <h3 className="Details">Sign In</h3>
        <div className="input-field">
          <label htmlFor="name">Email</label>
          <input type="email" name='email' onChange={handleChange} value={signIn.email} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' onChange={handleChange} value={signIn.password} required />
        </div>
        <div>
          <button className='button-submit'>Sign In</button>
        </div>
      </form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 100vh;
  width: 100%;
  padding: 30px;

  .form{
    max-width: 400px;
    margin: auto;
    margin-top: 50px;
    border-radius: 20px;
    text-align: left; 
    padding: 30px;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  }

  .button-submit{
    width: 100%;
    // max-width: 250px;
    margin-top: 7px;
    margin-bottom: 3%;
    border :1px solid #317fc8;
    border-radius: 5px;
    padding: 5px 7px;
    background: #317fc8;
    color: white;
  }
  
  .button-submit:hover{
    background: dodgerblue;
  }

  input{
    width: 100%;
    height: 25px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  label {
    font-size: .6rem;
  }

  .input-field {
    margin-bottom: 20px;
    border: 2px solid rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    padding: 0 10px;
  }

  .input-field:active {
    border: 2px solid blue;
  }

  .Details {
    font-weight: 700;
    color: #317fc8;
  }
`;

