import React, { useState } from "react"
import styled from "styled-components"
import { PaystackButton } from "react-paystack";


export default function PatstackPay() {

    const publicKey = "pk_test_29bf5bcfda75d34a0b289494b6286f00f4e57cd4"
    const amount = 1000000
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
    }
    return (
        <StyledDiv>
            <div className="App">
                <div className="container">
                    <div className="item">
                        <img
                            className="item-image"
                            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                            alt="product"
                        />
                        <div className="item-details">
                            <p>Coco Oil</p>
                            <p>{amount}</p>
                        </div>
                    </div>
                    <div className="checkout-form">
                        <form>
                            <label>Name</label>
                            <input
                                type="text"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Email</label>
                            <input
                                type="text"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Phone</label>
                            <input
                                type="text"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </form>
                        <PaystackButton {...componentProps} />
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

.App {
    text-align: center;
    font-family: "Roboto";
    letter-spacing: 0.1rem;
  }
  .container {
    display: flex;
    flex-direction: row;
    margin: 5% auto;
    width: 635px;
    height: 430px;
    background: white;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  }
  .item {
    width: 50%;
    position: relative;
  }
  .item-image {
    height: 430px;
    width: 100%;
    object-fit: cover;
  }
  .overlay-effect {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    background-color: #303030;
    overflow: hidden;
    z-index: 1;
  }
  .item-details {
    position: absolute;
    bottom: 0;
    margin-bottom: 5px;
    margin-left: 20px;
    color: #84a17d;
    text-align: left;
  }
  .item-details__title {
    font-size: 22px;
  }
  .item-details__amount {
    font-weight: bolder;
  }
  .checkout {
    background: #84a17d; /* fallback for old browsers */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 430px;
    width: 50%;
  }
  .checkout-form {
    padding: 20px 20px;
  }
  .checkout-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .checkout-field label {
    text-align: left;
    color: #e0eafc;
    font-size: 10px;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  .checkout-field input {
    background-color: transparent;
    border: 1px solid #cecece;
    border-radius: 5px;
    color: #e0eafc;
    height: 35px;
  }
  .paystack-button {
    cursor: pointer;
    text-align: center;
    font-size: 10px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    background-color: #bfbfbf;
    font-weight: bold;
    color: #e0eafc;
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    margin-top: 40px;
  }
`;