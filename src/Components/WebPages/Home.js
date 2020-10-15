import React from "react";
import styled from "styled-components";


function Home() {

    return (
        <StyledDiv>
            <div className="div-welcome">
                <h3>Welcome</h3>
                <h3>to </h3>
                <h3 className="coop">CoopLag Fair</h3>
            </div>
        </StyledDiv>
    )
}

export default Home;

const StyledDiv = styled.div`
    Height: 100vh;
    .div-welcome{
        margin-top: 20%;

        h3{
            text-align: center;
            font-size: 30px;
        }

        .coop{
            font-size: 40px;
        }
    }
`;