import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

export default function UserSignUp(props) {
  const credentials = {
    username: '',
    lastname: '',
    firstname: '',
    password: '',
    email: '',
    phoneNumber: ''
  };

  const [signUp, setSignUp] = useState(credentials);

  const handleChange = (e) => {
    e.persist();
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://cooplagfair.herokuapp.com/api/v1/users/register', signUp)
      .then((res) => {
        if (res.data.status === 'success') {
          props.history.push('/login');
        } else {
        }
      })
      .catch((error) => {
      });
  };
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit} className="form">
        <h3 className="Details">Create Account</h3>
        {/* <div className="input-field">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="username" placeholder=" Enter Username" onChange={handleChange} value={signUp.username} required />
        </div> */}
        <div className="input-field">
          <label htmlFor="name">First Name</label><br />
          <input type="text" name="firstname"  onChange={handleChange} value={signUp.firstname} required />
        </div>
        <div className="input-field">
          <label htmlFor="name">Last Name</label><br />
          <input type="text" name="lastname"  onChange={handleChange} value={signUp.lastname} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Create Password</label><br />
          <input type="password" name="password"  onChange={handleChange} value={signUp.password} required />
        </div>
        <div className="input-field">
          <label htmlFor="name">Email</label><br />
          <input type="email" name="email"  onChange={handleChange} value={signUp.email} required />
        </div>
        <div className="input-field">
          <label htmlFor="name">Phone Number</label><br />
          <input type="text" name="phoneNumber"  onChange={handleChange} value={signUp.phoneNumber} required />
        </div>
        <div>
          <button className="button-submit">Create Account</button>
        </div>
      </form>
    </StyledDiv>
  );
}
