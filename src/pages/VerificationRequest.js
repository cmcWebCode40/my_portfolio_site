import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

export default function UserVerificationRequest(props) {

    const credentials = {
        phoneNumber: '',
    }

    const [verifyInfo, setverifyInfo] = useState(credentials)
    const [failedAction, setfailedAction] = useState(false)
    const [wrongAction, setwrongAction] = useState(true)

    const handleChange = (e) => {
        e.persist();
        setverifyInfo({
            ...verifyInfo,
            [e.target.name]: e.target.value
        })
    };

    const addWrongAction = () => {
        setTimeout(() => {
            setwrongAction(!wrongAction)
        }, 1000)
    }
    const removeWrongAction = () => {
        setTimeout(() => {
            setwrongAction(wrongAction)
        }, 8000)
    }

    const errorAction = async () => {
        addWrongAction()
        removeWrongAction()
    }

    const addTimer = () => {
        setTimeout(() => {
            setfailedAction(!failedAction)
        }, 1000)
    }
    const autoRemove = () => {
        setTimeout(() => {
            setfailedAction(failedAction)
        }, 8000)
    }
    const errorTimer = async () => {
        addTimer()
        autoRemove()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://cooplagfair.herokuapp.com/api/v1/verification/send', verifyInfo)
            .then(res => {
                if (res.data.status === "success") {
                    props.history.replace("/verify")
                } else {
                    console.log(res.data)
                    errorAction()
                }
            })
            .catch(error => {
                console.log(error)
                errorTimer()
            })
    };
    return (
        <StyledDiv>
            <form onSubmit={handleSubmit} className="form">
                <h3 className="Details">Enter Registered Contact Below</h3>
                <div className={`${failedAction ? 'failed_show' : 'failed_hide'}`}>
                    <p><span>Phone Number Not Found.</span></p>
                </div>
                <div className={`${wrongAction ? 'wrong_show' : 'wrong_hide'}`}>
                    <p><span>Oops! Something went wrong. Please, try again.</span></p>
                </div>
                <div className="input-field">
                    <label htmlFor="Phone Number"></label>
                    <input type="text" name='phoneNumber' placeholder="Enter Resgistered Phone Number (+2348000000001)" onChange={handleChange} value={verifyInfo.phoneNumber} required />
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

    h3{
        margin-bottom: 50px;
    }

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

    .failed_hide{
        display: none;
    }
      .failed_show{
        display: block;
    }

    .wrong_show{
        display: none;
    }
    .wrong_hide{
        display: block;
    }
    span{
        color: red;
        font-size: 20px;
    }
`;

