import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { useForm } from "react-hook-form"
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from "../../services/services"


export default function RequiredFiles(props) {
    const { register, handleSubmit, errors } = useForm()
    const [clickAction, setclickAction] = useState(true)
    // const [upload, setUpload] = useState([])

    const fair_id = props.match.params.id

    const Clicked = () => {
        setclickAction(!clickAction)
    }

    // useEffect(() => {
    //     const id2 = props.match.params.id;

    //     coopLagApi .get(`/fairs/${fair_id}/requirements/${requirements_id}`)
    //       .then(response => {
    //         setFamily(response.data.members);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });

    //   }, [props.match.params.id]);

    const onSubmit = (data) => {
        const headers = getUserToken();

        coopLagApi.post(`/fairs/${fair_id}/vendor-credentials`, data,
            {
                headers
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
                    <h2>Quick Check</h2>
                    <div className="information-content">
                        <p>Not a registered user? <span><Link to="/register" className="signIn-link">... Do so Here</Link></span> </p>
                        <p>Or sign into your <span><Link to="/login" className="signIn-link"> account  Here</Link></span> </p>
                        <p>Below are information required of a vendor by this fair</p>
                        <p>Requirement listed here- 1</p>
                        <p>Requirement listed here- 2</p>
                        <p>Requirement listed here- 3</p>
                    </div>
                </div>
                <div className={`${clickAction ? 'information' : 'credential-open'}`} >
                    <p className={`${clickAction ? 'open' : 'close'}`}>For fair requirements</p>
                    <div>
                        <p className="special-para" id="top-para">Requirement listed here -1</p>
                        <p className="special-para">Requirement listed here -2</p>
                        <p className="special-para">Requirement listed here -3</p>
                    </div>
                    <span className="expandable" onClick={Clicked}>Click here</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="right-side">
                    <h4>Enter's Required Credentials</h4>
                    <div id="credential-form">
                        <div>
                            <input type="text" name='business_name' placeholder=" Enter Business Name here..." ref={register({ required: true })} />
                        </div>
                        <div>
                            <input type="text" name='business_city' placeholder=" Enter Business City here..." ref={register({ required: true })} />
                        </div>
                        <div>
                            <input type="text" name='business_state' placeholder=" Enter Business State here..." ref={register({ required: true })} />
                        </div>
                        <div>
                            <input type="file" multiple name='requirements' ref={register({ required: true })} id="input-file" />
                            {errors.business_city && <p className="error-para">Plaese upload files</p>}
                        </div>
                        <div>
                            <input type="text" name='business_tel' placeholder=" Enter Phone Number (+12381234567890)" ref={register({ required: true })} />
                            {errors.business_city && <p className="error-para">Plaese input a valid Number (eg: +1238123456709)</p>}
                        </div>
                        <div>
                            <input type="text" name='business_address' placeholder=" Enter Business Address  here..." ref={register({ required: true })} />
                        </div>
                        <div>
                            <input type="number" name='delivery_duration' placeholder=" Enter Delivery Duration here..." ref={register({ required: true })} />
                            {errors.business_city && <p className="error-para">Plaese input duration as an interger</p>}
                        </div>
                        <div>
                            <input type="email" name='business_email' placeholder=" Enter Business Email Address here..." ref={register({ required: true })} />
                        </div>
                        <button className="button">Submit</button>
                    </div>
                </form>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
text-align: center;
display: flex;
justify-content: center;
width: 100%;
padding: 10px;
height: 115vh;
overflow: hidden;

@media only screen and (max-width: 580px){
    overflow: auto;
}

.credential-main-body{
    display: flex;
    justify-content: center;
    max-width: 800px;
    width: 90%;
    margin: 7% Auto;
    border-radius: 20px;
    box-shadow: 3 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

    @media only screen and (max-width: 1100px){
        margin-top: 10%;
    }
    
    @media only screen and (max-width: 740px){
        margin-top: 15%;
    }
    @media only screen and (max-width: 320px){
        margin-top: 20%;
    }

    .credential-open {
        height: 200px;
        margin: 10px 5%;
        padding: 0px 20px 25px 0px;
        border: 1px solid lightgrey;
        border-radius: 10px;
        color: white;
        position: relative;
        overflow: auto;
        box-shadow: 2px 2px 2px lightgrey;
        background: var(--primary-color);
      }

      .information {
        margin: 10px 5%;
        padding: 0 20px 25px;
        border: 1px solid lightgrey;
        border-radius: 10px;
        color: white;
        position: relative;
        height: 70px;
        overflow: hidden;
        box-shadow: 2px 2px 2px lightgrey;
        background: var(--primary-color);
        display: none;

        @media only screen and (max-width: 580px){ 
            display: block;
        }
      }

      .expandable {
        position: absolute;
        bottom: 0;
        left: 50%;
        font-size: 12px;
        color: grey;
        cursor: pointer;
        transform: translate(-50%);
        background-color: white;
        padding: 2px 5px;
        border-radius: 10px;
        margin-bottom: 5px;
      }

      .special-para{
        pargin-top: 2px;
        margin-bottom: 2px
      }
      #top-para{
          margin-top: 10px;
      }

      .open{
          display: block;
          margin-top: 10px;
          margin-bottom: 50px;
      }
      .close{
          display: none;
      }

    @media only screen and (max-width: 580px){
        display: flex;
        flex-direction: column;
    }

    .button {
        border: 2px solid forestgreen;
        color: black;
        padding: 4px 7px;
        width: 100px;
        text-align: center;
        text-decoration: none;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 16px;
        background: white;
        border-radius: 7px;
    }
    .button:hover{
        background-color: forestgreen;
        color: white;
    }

    .right-side{
        width: 50%;
        padding: 20px 2px 5px 2px;
        text-align: center;
        border-radius: 0px 20px 20px 0px;
        background: white;
        box-shadow: 5px 3px 5px lightgrey;
        border: 1px solid grey;

        h4{
            margin-top: 10%;
            margin-bottom: 5%;
            text-align: center
            color: var(--primary-color);


        }
        #credential-form{
            margin-top: 5%;
            padding-top: 4%;

            input{
                margin: 2px;
                border-radius: 5px;
                width: 70%;
                outline: none !important;
                border: 1px solid grey;

                ::placeholder {
                    font-size: 12px;
                  }
            } 
            input:focus {
                border:1px solid forestgreen;
                box-shadow: 0 0 10px forestgreen;
            }

            #input-file{
                border: none;
            }
        }
        .error-para{
            color: red;
            font-size: 14px;
        }

        @media only screen and (max-width: 580px){ 
            width: 95%;
            margin: 10px auto;
            border-radius: 20px 20px 20px 20px;

            h4{
                margin-top: 5%;
                margin-bottom: 5%;
            }

            #credential-form{
                margin-top: 5%;
                padding-top: 3%;
            }
        }

    }
    .left-side{
        width: 50%;
        background: var(--primary-color);
        color: white;
        padding: 5px;
        border-radius: 20px 0px 0px 20px;

        h2{
            margin-top: 10%;
            margin-bottom: 10%;
        }

        .information-content{
            text-align: center;
            padding: 10px;
        }
        .signIn-link{
            color: white;
            pointer: cursor;
        }

        @media only screen and (max-width: 580px){ 
            display: none;
        }
    }

}
`;