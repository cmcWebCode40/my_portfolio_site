import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from '../../services/services';

export default function RequiredFiles(props) {
    const { register, handleSubmit, errors } = useForm();

    const fair_id = props.match.params.id

    const errorAlert = (message) => {
        toast.error(message, { autoClose: 5000 }, {
            position: toast.POSITION.TOP_LEFT
        });
    }
    const onSubmit = (data) => {
        const headers = getUserToken();

        coopLagApi
            .post(`/fairs/${fair_id}/vendor-credentials`, data, {
                headers,
            })
            .then((res) => {
                console.log(res);
                // const { data, status } = res.data;
                // if (status === 'success') {
                //   saveVendorDetails(data);
                //     history.replace('/vendorprofile');
                // }else {
                //     history.replace('/....');
                // }
            })
            .catch((error) => {
                errorAlert(error.response.data.message);
            });
    };
    return (
        <StyledDiv>
            <div className="page-content">
                <div className="form-v10-content">
                    <form className="form-detail" method="post" id="myform" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-left">
                            <h2>Prerequisites</h2>
                            <p className="prerequisites-paragraph">
                                To use this form, you must already be a registered user.{' '}
                                <div>
                                    Register{' '}
                                    <Link to="/register" className="signIn-link">
                                        Here
                  </Link>
                                </div>
                            </p>
                            <p className="prerequisites-paragraph">
                                Already have an account?{' '}
                                <div>
                                    Login{' '}
                                    <Link to="/register" className="signIn-link">
                                        Here
                  </Link>
                                </div>
                            </p>
                        </div>
                        <div className="form-right">
                            <h2>Business Details</h2>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="business_name"
                                    className="company"
                                    id="company"
                                    placeholder="Name of Business"
                                    ref={register({ required: true })}
                                />
                                {errors.business_name && <p className="error-para">Business name is required</p>}
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="business_address"
                                    className="company"
                                    id="company"
                                    placeholder="Business Address"
                                    ref={register({ required: true })}
                                />
                                {errors.business_address && (
                                    <p className="error-para">Business address is required</p>
                                )}
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="business_city"
                                    className="company"
                                    id="company"
                                    placeholder="City"
                                    ref={register({ required: true })}
                                />
                                {errors.business_city && <p className="error-para">Please input your city</p>}
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="business_state"
                                    className="company"
                                    id="company"
                                    placeholder="State"
                                    ref={register({ required: true })}
                                />
                                {errors.business_state && <p className="error-para">Please put in your state</p>}
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="business_tel"
                                    className="phone"
                                    id="phone"
                                    placeholder="Phone Number"
                                    ref={register({ required: true })}
                                />
                                {errors.business_tel && <p className="error-para">Phone number is required</p>}
                            </div>
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="business_email"
                                    id="your_email"
                                    className="input-text"
                                    ref={register({ required: true })}
                                    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                                    placeholder="Your Email"
                                />
                                {errors.business_email && <p className="error-para">Business email is required</p>}
                            </div>
                            <div className="form-row">
                                <input
                                    type="file"
                                    multiple
                                    name="requirements"
                                    ref={register({ required: true })}
                                    id="input-file"
                                />
                                {errors.requirements && <p className="error-para">Please upload an image</p>}
                            </div>
                            <div className="form-checkbox">
                                <label className="container">
                                    <p>
                                        I accept the{' '}
                                        <a href="#" className="text">
                                            Terms and Conditions
                    </a>{' '}
                    of your fair.
                  </p>
                                    <input type="checkbox" name="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="form-row-last">
                                <input
                                    type="submit"
                                    name="register"
                                    className="register"
                                    value="Register for Fair"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
  .page-content {
    width: 100%;
    margin: 0 auto;
    // background: #ccc;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -o-align-items: center;
    -ms-align-items: center;
    -moz-align-items: center;
    -webkit-align-items: center;
  }
  .form-v10-content {
    background: #fff;
    width: 1100px;
    border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    margin: 95px 0;
    position: relative;
    font-family: 'Montserrat', sans-serif;
  }
  .form-v10-content .form-detail {
    position: relative;
    width: 100%;
    display: flex;
    display: -webkit-flex;
  }
  .form-v10-content .form-detail h2 {
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 34px;
    padding: 33px 50px 0px 60px;
  }

  .prerequisites-paragraph {
    padding: 33px 50px 0px 60px;
  }

  .error-para {
    color: #efefef;
    font-style: italic;
    font-size: 12px;
  }

  .signIn-link {
    font-weight: 700;
  }

  .form-v10-content .form-detail .form-left {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 100%;
  }
  .form-v10-content .form-detail .form-left h2 {
    color: #2271dd;
  }
  .form-v10-content .form-detail .form-right {
    width: 100%;
    background: var(--primary-color);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .form-v10-content .form-detail .form-right h2 {
    color: #fff;
  }
  .form-v10-content .form-detail .form-group {
    display: flex;
    display: -webkit-flex;
  }
  .form-v10-content .form-detail .form-row {
    position: relative;
    margin-bottom: 24px;
    padding-left: 60px;
    padding-right: 50px;
  }
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-1 {
    width: 50%;
    padding: 0 12px 0 60px;
  }
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-2 {
    width: 50%;
    padding: 0 50px 0 12px;
  }
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-3 {
    width: 73%;
    padding: 0 12px 0 60px;
  }
  .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 {
    width: 50%;
    padding: 0 50px 0 12px;
  }
  .form-v10-content .form-detail .form-right .form-group .form-row.form-row-1 {
    width: 50%;
    padding: 0 12px 0 60px;
  }
  .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
    width: 100%;
    padding: 0 50px 0 12px;
  }
  .form-v10-content .form-detail select,
  .form-v10-content .form-detail input {
    width: 100%;
    padding: 11.5px 15px 15px 15px;
    border: 1px solid transparent;
    background: transparent;
    appearance: unset;
    -moz-appearance: unset;
    -webkit-appearance: unset;
    -o-appearance: unset;
    -ms-appearance: unset;
    outline: none;
    -moz-outline: none;
    -webkit-outline: none;
    -o-outline: none;
    -ms-outline: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
  }
  .form-v10-content .form-detail select {
    background: 0 0;
    position: relative;
    z-index: 9;
    cursor: pointer;
  }
  .form-v10-content .form-detail .form-left select {
    color: #666;
  }
  .form-v10-content .form-detail .form-right select {
    color: #f2f2f2;
  }
  .form-v10-content .form-detail .select-btn {
    z-index: 0;
    position: absolute;
    top: 30%;
    right: 11.5%;
    font-size: 18px;
  }
  .form-v10-content .form-detail .form-left .select-btn {
    color: #666;
  }
  .form-v10-content .form-detail .form-right .select-btn {
    color: #f2f2f2;
  }
  .form-v10-content .form-detail .form-group .form-row.form-row-4 .select-btn {
    top: 20%;
    right: 26%;
  }
  .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {
    top: 20%;
    right: 19%;
  }
  .form-v10-content .form-detail .form-left input {
    color: #000;
  }
  .form-v10-content .form-detail .form-right input {
    color: #fff;
  }
  .form-v10-content .form-detail .form-left input,
  .form-v10-content .form-detail .form-left select {
    border-bottom: 1px solid #ccc;
  }
  .form-v10-content .form-detail .form-left input:focus,
  .form-v10-content .form-detail .form-left select:focus {
    border-bottom: 1px solid #999;
  }
  .form-v10-content .form-detail .form-right input,
  .form-v10-content .form-detail .form-right select {
    border-bottom: 1px solid;
    border-bottom-color: rgba(255, 255, 255, 0.3);
  }
  .form-v10-content .form-detail .form-right input:focus,
  .form-v10-content .form-detail .form-right select:focus {
    border-bottom: 1px solid #ccc;
  }
  .form-v10-content .form-detail .form-right select option {
    background: #4835d4;
  }
  .form-v10-content .form-detail .form-checkbox {
    margin-top: 37px;
    padding: 0 50px 0 60px;
    position: relative;
  }
  .form-v10-content .form-detail .form-checkbox input {
    position: absolute;
    opacity: 0;
  }
  .form-v10-content .form-detail .form-checkbox .checkmark {
    position: absolute;
    top: 1px;
    left: 60px;
    height: 15px;
    width: 15px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }
  .form-v10-content .form-detail .form-checkbox .checkmark::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 1px;
    width: 3px;
    height: 8px;
    border: 1px solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    display: none;
  }
  .form-v10-content .form-detail .form-checkbox input:checked ~ .checkmark::after {
    display: block;
  }
  .form-v10-content .form-detail .form-checkbox p {
    margin-left: 34px;
    color: #e5e5e5;
    font-size: 14px;
    font-weight: 400;
  }
  .form-v10-content .form-detail .form-checkbox .text {
    font-weight: 400;
    color: #fff;
    text-decoration: underline;
  }
  .form-v10-content .form-detail .form-right .form-row-last {
    padding-left: 60px;
    margin: 44px 0 10px;
  }
  .form-v10-content .form-detail .form-right .register {
    background: #fff;
    border-radius: 25px;
    -o-border-radius: 25px;
    -ms-border-radius: 25px;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
    -o-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
    width: 180px;
    border: none;
    margin: 6px 0 50px 0px;
    cursor: pointer;
    color: #333;
    font-weight: 700;
    font-size: 15px;
  }
  .form-v10-content .form-detail .form-right .register:hover {
    background: #ccc;
  }
  .form-v10-content .form-detail .form-right .form-row-last input {
    padding: 12.5px;
  }
  .form-v10-content .form-detail .form-left input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #666;
    font-size: 16px;
  }
  .form-v10-content .form-detail .form-left input::-moz-placeholder {
    /* Firefox 19+ */
    color: #666;
    font-size: 16px;
  }
  .form-v10-content .form-detail .form-left input:-ms-input-placeholder {
    /* IE 10+ */
    color: #666;
    font-size: 16px;
  }
  .form-v10-content .form-detail .form-left input:-moz-placeholder {
    /* Firefox 18- */
    color: #666;
    font-size: 16px;
  }
  .form-v10-content .form-detail .form-right input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #f2f2f2;
    font-size: 16px;
  }
  .form-v10-content .form-detail .form-right input::-moz-placeholder {
    /* Firefox 19+ */
    color: #f2f2f2;
    font-size: 16px;
  }
  .form-v10-content .form-detail .form-right input:-ms-input-placeholder {
    /* IE 10+ */
    color: #f2f2f2;
    font-size: 16px;
  }
  .form-v10-content .form-detail .form-right input:-moz-placeholder {
    /* Firefox 18- */
    color: #f2f2f2;
    font-size: 16px;
  }

  /* Responsive */
  @media screen and (max-width: 1199px) {
    .form-v10-content {
      margin: 95px 20px;
    }
  }
  @media screen and (max-width: 991px) and (min-width: 768px) {
    .form-v10-content .form-detail .form-group {
      flex-direction: column;
      -o-flex-direction: column;
      -ms-flex-direction: column;
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
    }
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,
    .form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,
    .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
      width: auto;
      padding: 0 50px 0 60px;
    }
    .form-v10-content .form-detail .select-btn,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 .select-btn,
    .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {
      right: 15%;
    }
  }
  @media screen and (max-width: 767px) {
    .form-v10-content .form-detail {
      flex-direction: column;
      -o-flex-direction: column;
      -ms-flex-direction: column;
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
    }
    .form-v10-content .form-detail .form-right {
      border-top-right-radius: 0px;
      border-bottom-left-radius: 10px;
    }
    .form-v10-content .form-detail .form-left {
      padding-bottom: 50px;
    }
  }
  @media screen and (max-width: 575px) {
    .form-v10-content .form-detail .form-group {
      flex-direction: column;
      -o-flex-direction: column;
      -ms-flex-direction: column;
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
    }
    .form-v10-content .form-detail .form-row,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,
    .form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,
    .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
      width: auto;
      padding: 0 30px;
    }
    .form-v10-content .form-detail .select-btn,
    .form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 .select-btn,
    .form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {
      right: 15%;
    }
    .form-v10-content .form-detail h2 .prerequisites-paragraph {
      padding: 33px 30px 0px 30px;
    }
    .form-v10-content .form-detail .form-checkbox {
      padding: 0 30px;
    }
    .form-v10-content .form-detail .form-checkbox .checkmark {
      left: 30px;
    }
    .form-v10-content .form-detail .form-right .form-row-last {
      padding-left: 0;
      text-align: center;
      margin: 44px 0 30px;
    }
  }
`;
