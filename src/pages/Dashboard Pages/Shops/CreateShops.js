import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"


export default function CreateShops() {
    return (
        <StyledDiv>
            <div class="manage-body">
                <div className="fair-name-bar"></div>
                <div className="manage-body-content">
                    <div class="manage-fair">
                        <h5 class="manage">Shops</h5>
                        <span class="manage-span">+ New Category</span>
                    </div>
                    <div class="shop-header-div-title">
                        <span id="trash"></span>
                        <div class="shop-header-title">
                            <span class="shop-cat-title">Category</span>
                            <span class="shop-brand-title">Brand</span>
                        </div>
                    </div>
                    <div class="shop-header-div">
                        <div id="trash"><FontAwesomeIcon icon={faTrashAlt} /></div>
                        <div class="shop-header">
                            <span class="shop-cat" id="manage-span-content">Electronics</span>
                            <span class="shop-brand" id="manage-span-content">LG</span>
                            <span class="shop-manage">Manage</span>
                        </div>
                    </div>
                    <div class="upload">
                        <span class="single">Single Upload</span><span class="Bulk">Bulk Upload</span>
                        <p class="upload-par"><span class="download-excel">Download</span> Excel Template for Bulk
                            Upload
                        </p>
                    </div>
                    <div class="shop-header-item-div">
                        <span id="trash"></span>
                        <div class="item-header">
                            <span class="item-prod">Product</span>
                            <span class="item-QA">QA</span>
                            <span class="item-price">Price</span>
                            <span class="item-disc">Discount</span>
                            <span class="item-desc">Description</span>
                            <span class="item-media">Media</span>
                            <span class="item-edit">....</span>
                        </div>
                    </div>
                    <div class="shop-table-holder">
                        <div class="shop-header-item-div">
                            <div id="trash"><FontAwesomeIcon icon={faTrashAlt} /></div>
                            <div class="item-header">
                                <span class="item-prod" id="shop-content">42"TV</span>
                                <span class="item-QA" id="shop-content">22</span>
                                <span class="item-price" id="shop-content">NGN 32,000</span>
                                <span class="item-disc" id="shop-content">5%</span>
                                <span class="item-desc" id="shop-content">Black 42" LG with one year...</span>
                                <span id="item-media-2">Manage</span>
                                <span class="item-edit" id="shop-content">Edit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledDiv >
    )
}

const StyledDiv = styled.div`
 
 .manage-body{
    background: white;
   background-color: #F8F8FF;
 }
 .fair-name-bar{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 1px 3px 5px #e0e0e0;
    padding: 3px 10px;
    background: white;
    height: 45px;
 }
 
 .manage-body-content{
    margin: 20px;
    background: white;
    padding-bottom: 50px;
    width: 95%;
    margin: auto center;
    box-shadow: 1px 3px 5px #e0e0e0;
 }
 
 .manage-fair{
     display: flex;
     justify-content: space-between;
 }
 .manage{
     margin-top: 20px;
     margin-left: 20px;
     color: #4169E1;
     font-weight: bold;
 }
 .manage-span{
     color: white;
     background-color: forestgreen;
     padding: 3px 7px;
     border-radius: 5px;
     margin-right: 20px;
     margin-top: 20px;
     cursor: pointer;
 }
 #trash{
     width: 7%;
     text-align: center;
     color: red;
     cursor: pointer;
 }
 
 .shop-header-div{
     display: flex;
     align-items: baseline;
     max-width: 50%;
     margin-left: 20px;
 }
 
 .shop-header-div-title{
     display: flex;
     align-items: baseline;
     max-width: 40%;
     margin-left: 20px;
 }
 .shop-header{
     display: flex;
     justify-content: space-between;
     margin-top: 10px;
     margin-bottom: 10px;
     margin-left: 5px;
     width: 90%;
 }
 
 .shop-header-title{
     display: flex;
     justify-content: space-between;
     margin-top: 10px;
     margin-bottom: 10px;
     width: 80%;
     margin-left: 12px;
 }
 
 .shop-brand{
     width: 30%;
 }
 
 .shop-brand-title{
     width: 48%;
 }
 
 .shop-cat-title{
     width: 48%;
 }
 .shop-cat{
     width: 35%;
 }
 
 .shop-manage{
     width: 25%;
     background-color: forestgreen;
     color: white;
     margin-left: 5px;
     border-radius: 5px;
     text-align: center;
     padding-top: 2px;
     padding-bottom: 2px;
     cursor: pointer;
 }
 
 .upload{
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-top: 8%;
     margin-left: 10%;
     margin-right: 15%;
     max-width: 520px;
     width: 95%;
     margin-bottom: 5%;
 }
 
 .single{
     color: white;
     border-radius: 5px;
     padding: 3px 7px;
     background-color: forestgreen;
     cursor: pointer;
 }
 
 .Bulk{
     color: forestgreen;
     border: 1px solid forestgreen;
     padding: 3px 7px;
     border-radius: 5px;
     font-weight: 500;
     cursor: pointer;
 }
 
 .download-excel{
     color: forestgreen;
     font-weight: 500;
     cursor: pointer;
 }
 
 .upload-par{
     font-size: 14px;
 }
 
 .shop-header-item-div{
     display: flex; 
     margin-top: 20px;
     width: 100%;
 }
 .item-header{
     display: flex;
     width: 100%;
 }
 .item-prod{
     width: 15%;
 }
 .item-QA{
     width: 5%;
 }
 .item-price{
     width: 13%;
 }
 .item-disc{
     width: 9%;
 }
 .item-desc{
     width: 30%;
 }
 .item-media{
     width: 10%;
     margin-right: 20px;
 }
 
 #item-media-2{
     background-color: forestgreen;
     padding-top: 2px;
     padding-bottom: 2px;
     cursor: pointer;
     border-radius: 5px;
     width: 10%;
     color: white;
     margin-right: 20px;
     text-align: center;
 }
 .item-edit{
     width: 7%;
 }
 #shop-content{
     color: #4169E1;
 }
 #manage-span-content{
    color: #4169E1; 
 }
 
`;