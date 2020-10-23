import React, { useState } from "react"
import axios from "axios";
import styled from "styled-components";

function UserVerificationConfirmation(props) {
  const contact_information = {
    name: '',
  }

  const [message, setMessage] = useState(contact_information)
  const [button, setButton] = useState(false)
  const [submitAction, setsubmitAction] = useState(false)
  const [successAction, setsuccessAction] = useState(false)

  const handleChange = (e) => {
    e.persist();
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButton(!button)
    setsubmitAction(!submitAction)
    axios
      .post('https://cooplagfair.herokuapp.com/api/v1/users/verification/verify-account', message)
      .then(res => {
        if (res.data.status === 'Success') {
          console.log(res.data)
          setsubmitAction(!submitAction)
          setsuccessAction(!successAction)
        }
        else {
          console.log(res + "from res..")
        }
      })
      .catch(error => {
        console.log(error + " From error..")
      })
  };

  return (
    <StyledDiv>
      <div className=" form-container animated animatedFadeInUp fadeInUp">
        <h3 className="p-one">Please Enter Verification code below.</h3>
        <form onSubmit={handleSubmit} method="post" action="send">
          <div className={`${submitAction ? 'show' : 'hide'}`}>
            <p><span>Submitting verification code....</span></p>
          </div>
          <div className={`${successAction ? 'succes_show' : 'success_hide'}`}>
            <p><span>Your account has been successfully verified.</span></p>
          </div>
          <div><label></label>
            <input name="name" type="text" placeholder="Please Enter Verification Code" onChange={handleChange} value={message.name} required />
          </div>
          <div className="btn-field">
            <button type="submit" className="submit hvr-radial-out" disabled={button}>Submit Code</button>
          </div>
        </form>
      </div>
    </StyledDiv>
  )
}

export default UserVerificationConfirmation;

const StyledDiv = styled.div`
text-align: center;
padding-top: 7%;
padding-bottom: 10%;
.p-one{
  padding-top: 3%;
  margin-bottom: 5px;
  @media only screen and (max-width:480px){
    font-size: 25px;
  }
  @media only screen and (max-width:380px){
    font-size: 22px;
  }
}
label{
  color: red;
}
h3{
    margin-bottom: 60px;
}
.success_hide{
  display: none;
}
.success_show{
  display: block;
}
.hide{
    display: none;
  }
  .show{
    display: block;
  }
span{
  background: #7CFC00;
  font-size: 20px;
  padding:3px 70px;
  margin-top: 7px;
  margin-bottom: 1px;
}
.required{
  font-size: 12px;
  color: red;
}
.number-class{
  padding-left: 5px;
}
@keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  .animated {
    animation-duration: 0.7s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.7s;
    -webkit-animation-fill-mode: both;
  }

  .animatedFadeInUp {
    opacity: 0;
  }

  .fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
  }
  .form-container{
    margin: 2% 10% 2% 10%;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 5px;
    text-align: center;
    box-shadow: 0 -1px 0 #e0e0e0, 0 7px 10px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

    @media only screen and (max-width: 1000px){
      margin-top: 10%;
    }
    @media only screen and (max-width: 850px){
      margin-top: 12%;
    }
    @media only screen and (max-width: 700px){
      margin-top: 13.5%;
      margin-left: 10%;
      margin-right: 10%;
    }
    @media only screen and (max-width: 550px){
      margin-top: 15.5%;
      padding-right: 10px;
      padding-left: 10px;
    }
    @media only screen and (max-width: 360px){
      margin-top: 8%;
      margin-bottom: 11%;
    }
  }
  form{
      margin-top: 30px;
  }
  input{
      width: 70%;
      height: 23px;
      margin: 1px;

      @media only screen and (max-width: 550px){   
        width: 80%;
      }
  }
  textarea{
      width: 70%;
      height: 150px;
      margin-top: 10px;
      margin-bottom: 5px;

      @media only screen and (max-width: 550px){   
        width: 80%
      }
  }

  .submit{
    width: 30%;
    margin-top: 3px;
    margin-bottom: 5%;
    border :1px solid dodgerblue;
    border-radius: 5px;
    padding: 5px 7px;
    cursor: pointer;
    border: 1px solid #2098d1;
    font-size: 14.5px;
   }
   .btn-field{
    text-align: center;
   }
   .hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    // background: #e1e1e1;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-radial-out:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098d1;
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-radial-out:hover,
  .hvr-radial-out:focus,
  .hvr-radial-out:active {
    color: white;
  }
  .hvr-radial-out:hover:before,
  .hvr-radial-out:focus:before,
  .hvr-radial-out:active:before {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
`;