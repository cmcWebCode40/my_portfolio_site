import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from '../../services/services';

export default function RequiredFiles(props) {
  const { register, handleSubmit, errors } = useForm();
  const [clickAction, setclickAction] = useState(true);

  // const test_id1 = useParams.id
  // const test_id2 = props.match.params.id
  // console.log(test_id)

  const Clicked = () => {
    setclickAction(!clickAction);
  };

  const onSubmit = (data) => {
    const fair_id = `5f9032692bb0c600179cea69`;
    const headers = getUserToken();

    coopLagApi
      .post(`/fairs/${fair_id}/vendor-credentials`, data, {
        headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <StyledDiv>
      <div className="container px-5 credential-main-body">
        <div className="row">
          <div className="left-side mx-auto col-lg-6">
            <h4>Quick Check</h4>
            <div className="information-content">
              <p>
                Not a registered user?{' '}
                <span>
                  <Link to="/register" className="signIn-link">
                    do so Here
                  </Link>
                </span>{' '}
              </p>
              <p>
                Or sign into your{' '}
                <span>
                  <Link to="/login" className="signIn-link">
                    {' '}
                    account here
                  </Link>
                </span>{' '}
              </p>
              {/* <p>Below are information required of a vendor by this fair</p>
                        <p>Requirement listed here- 1</p>
                        <p>Requirement listed here- 2</p>
                        <p>Requirement listed here- 3</p> */}
            </div>
            {/* <div className={`${clickAction ? 'information' : 'credential-open'}`} >
                      <p className={`${clickAction ? 'open' : 'close'}`}>For fair requirements</p>
                      <div>
                          <p className="special-para" id="top-para">Requirement listed here -1</p>
                          <p className="special-para">Requirement listed here -2</p>
                          <p className="special-para">Requirement listed here -3</p>
                      </div>
                      <span className="expandable" onClick={Clicked}>Click here</span>
                  </div> */}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="right-side mx-auto col-lg-6">
            <h4>Register for Fair</h4>
            <div id="credential-form">
              <div>
                <input
                  type="text"
                  name="business_name"
                  placeholder=" Enter Business Name here..."
                  ref={register({ required: true })}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="business_city"
                  placeholder=" Enter Business City here..."
                  ref={register({ required: true })}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="business_state"
                  placeholder=" Enter Business State here..."
                  ref={register({ required: true })}
                />
              </div>
              <div>
                <input
                  type="file"
                  multiple
                  name="requirements"
                  ref={register({ required: true })}
                  id="input-file"
                />
                {errors.business_city && <p className="error-para">Please upload files</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="business_tel"
                  placeholder=" Enter Phone Number (+12381234567890)"
                  ref={register({ required: true })}
                />
                {errors.business_city && (
                  <p className="error-para">Please input a valid Number (eg: +1238123456709)</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="business_address"
                  placeholder=" Enter Business Address  here..."
                  ref={register({ required: true })}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="delivery_duration"
                  placeholder=" Enter Delivery Duration here..."
                  ref={register({ required: true })}
                />
                {errors.business_city && (
                  <p className="error-para">Please input duration as an integer</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="business_email"
                  placeholder=" Enter Business Email Address here..."
                  ref={register({ required: true })}
                />
              </div>
              <input type="submit" className="button" placeholder="submit" />
            </div>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  // height: 100vh;

  .credential-main-body {
    margin: 30px auto;
  }

  h4 {
    color: var(--primary-color);
    margin-bottom: 30px;
    font-weight: 700;
  }

  .left-side {
    padding: 20px;
  }

  form {
    border: 2px solid var(--dark-grey);
    border-radius: 20px;
    padding: 20px;
    max-width: 400px;
  }

  input {
    width: 100%;
    margin-bottom: 20px;
    padding: 5px 10px;
  }

  .error-para {
    color: red;
    font-size: 12px;
    font-style: italic;
    margin-top: -15px;
  }
`;
