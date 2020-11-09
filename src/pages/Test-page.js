import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from "styled-components";


const Msg = ({ closeToast }) => (
    <div>
        Lorem ipsum dolor
        <button>Retry</button>
        <button onClick={closeToast}>Close</button>
    </div>
)

export default function Example123() {

    const displayMsg = () => {
        toast(Msg)
        // toast(Msg) would also work
    }

    return (
        <Styled>
            <button onClick={displayMsg}>Click me</button>
            <ToastContainer />
        </Styled>
    );
}

const Styled = styled.div`
    text-align: center;
    margin-top: 10%;
`;