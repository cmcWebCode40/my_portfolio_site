import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { coopLagApi } from '../services/services';
import { authContextApi } from '../context/authContext';
import {
  PLATFORM_ADMIN,
  saveAuthToken, saveUserDetails
} from '../utils/functions/userAuth';

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
    display:block
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

export default function UserSignUp({ history }) {
  const credentials = {
    username: '',
    lastname: '',
    firstname: '',
    password: '',
    email: '',
    phoneNumber: ''
  };

  const [signUp, setSignUp] = useState(credentials);
  const { isUserAuth, setIsUserAuth } = useContext(authContextApi);

  const warning = () => {
    toast.warn('All inputs details are required', { autoClose: 6000 }, {
      position: toast.POSITION.BOTTOM_LEFT
    });
  };

  const errormessage = (message) => {
    toast.error(message, { autoClose: 7000 }, {
      position: toast.POSITION.TOP_LEFT
    });
  };
  const information = () => {
    toast.info('Please Holdon, Submitting Details! ....', { autoClose: 4000 }, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

  const handleChange = (e) => {
    e.persist();
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUp.phoneNumber === '' || signUp.email === '' || signUp.firstname === '' || signUp.lastname === '' || signUp.username === '' || signUp.password === '') {
      warning();
    } else {
      information();
      coopLagApi.post('/users/register', signUp)
        .then((res) => {
          const { data, status } = res.data;
          if (status === 'success') {
            setIsUserAuth(!isUserAuth);
            saveUserDetails(data);
            saveAuthToken(data.token);
            if (data.role === PLATFORM_ADMIN) {
              history.replace('/dashboard');
            } else {
              history.replace('/login');
              // history.replace('/fair/dashboard-overview');
            }
          }
        })
        .catch((error) => {
          errormessage(error.response.data.message);
        });
    }
  };
  return (
    <StyledDiv>
      <form onSubmit={handleSubmit} className="form">
        <h3 className="Details">Create Account</h3>
        <div className="input-field">
          <label htmlFor="name">
            Full Name
            <input type="text" name="username" placeholder=" Enter Username" onChange={handleChange} value={signUp.username} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="name">
            First Name
            <br />
            <input type="text" name="firstname" onChange={handleChange} value={signUp.firstname} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="name">
            Last Name
            <br />
            <input type="text" name="lastname" onChange={handleChange} value={signUp.lastname} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="password">
            Create Password
            <br />
            <input type="password" name="password" onChange={handleChange} value={signUp.password} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="name">
            Email
            <br />
            <input type="email" name="email" onChange={handleChange} value={signUp.email} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="name">
            Phone Number
            <br />
            <input type="text" name="phoneNumber" onChange={handleChange} value={signUp.phoneNumber} />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="button-submit"
          >
            Create Account

          </button>
        </div>
      </form>
    </StyledDiv>
  );
}
