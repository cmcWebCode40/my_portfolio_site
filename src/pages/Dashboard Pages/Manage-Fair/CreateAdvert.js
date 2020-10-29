import React from "react";
import styled from "styled-components";

export default function CreateAdvert() {
    return (
        <StyledDiv>
            <div class="advert">
                <h5 class="advert-cat">Advert Settings</h5>
            </div>
            <form id="advert-form">
                <div>
                    <label class="advert-labels">Ads Per Booth</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <div>
                    <label class="advert-labels">Ads Per Stories</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <div>
                    <label class="advert-labels">Ads Per Banner</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <div>
                    <label class="advert-labels">Stage Ads</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <div>
                    <label class="advert-labels">Booth Position</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <div class="advert-price-range-div">
                    <div>
                        <div><label id="advert-price-range-label">Price</label></div>
                        <input placeholder=" Enter Amount" id="advert-price-input" />
                    </div>
                    <div>
                        <div><label id="advert-price-range-label">Range</label></div>
                        <input placeholder=" Enter Booth Number Range" id="advert-range-input" />
                    </div>
                    <div><span class="span-advert-cat">+ New Category</span></div>
                </div>
                <div>
                    <label class="advert-label">Pane Page Ads</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <div>
                    <label class="advert-label">Lead Generations</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <div>
                    <label class="advert-label">Attendants</label>
                    <input placeholder=" Enter Amount" id="advert-input" />
                </div>
                <button>Submit</button>
            </form>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
background: white;
box-shadow: 1px 3px 5px #e0e0e0;
padding-bottom: 50px;
text-align: left;
padding-left: 10px;

.advert{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 50px;
}
.advert-cat{
    font-size: 18px;
    font-weight: 600;
    color: #4169E1;
    margin-left: 30px;
    margin-top: 30px;
}
#advert-form{
    margin-top: 5%;
    margin-left: 30px;
}

.advert-labels{
    width: 20%;
    color: #4169E1;
}

#advert-input{
    border: 1px solid gray;
    border-radius: 7px;
    width: 200px;
    font-size: 14px;
    height: 26px;
}
.advert-price-range-div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    width: 98%;
    margin-bottom: 30px;
    margin-top: 20px;
}

.span-advert-cat{
    padding: 5px 7px;
    background-color: forestgreen;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

#advert-range-input{
    border: 1px solid gray;
    border-radius: 7px;
    width: 250px;
    font-size: 14px;
    height: 26px;
}
#advert-price-input{
    border: 1px solid gray;
    border-radius: 7px;
    width: 150px;
    font-size: 14px;
    height: 26px;
}
#advert-price-range-label{
    color:black;
}

button{
    background: forestgreen;
    margin: 40px 0px 10px 0px;
    color: white;
    padding: 3px 15px;
    border-radius: 5px;
    border: 1px solid forestgreen;
}
`;