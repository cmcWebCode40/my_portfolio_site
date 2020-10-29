import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"

export default function CreateVendor() {
    return (
        <StyledDiv>
            <div className="vendor-body">
                <div className="vendor">
                    <h5 className="vendor-cat">Vendor's Category</h5>
                    <span className="vendor-span">+ New Category</span>
                </div>
                <div class="vendor-header-div">
                    <span id="trash-vendor"></span>
                    <div className="table-header">
                        <span className="span-create-vend">Category</span>
                        <span className="span-create-columns-2">Fee</span>
                        <span className="span-create-edit-2">Feature</span>
                        <span className="span-create-columns">Staus</span>
                        <span className="span-create-edit">....</span>
                    </div>
                </div>
                <div className="create-inner-div-2" id="title-content-div">
                    <div className="vendor-header-div">
                        <div id="trash-vendor"><FontAwesomeIcon icon={faTrashAlt} /></div>
                        <div className="table-header">
                            <span className="span-create-vend" id="vendor-span-content">Basic</span>
                            <span className="span-create-columns-2" id="vendor-span-content">$1000</span>
                            <span className="span-create-edit-2" id="vendor-span-content">Edit Features</span>
                            <span className="span-create-columns" id="vendor-span-content">Active</span>
                            <span className="span-create-edit" id="vendor-span-content">Edit</span>
                        </div>
                    </div>
                    <div className="vendor-header-div">
                        <div id="trash-vendor"><FontAwesomeIcon icon={faTrashAlt} /></div>
                        <div className="table-header">
                            <span className="span-create-vend" id="vendor-span-content">Classic</span>
                            <span className="span-create-columns-2" id="vendor-span-content">$5000</span>
                            <span className="span-create-edit-2" id="vendor-span-content">Edit Features</span>
                            <span className="span-create-columns" id="vendor-span-content">Active</span>
                            <span className="span-create-edit" id="vendor-span-content">Edit</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vendor-body">
                <div className="vendor">
                    <h5 className="vendor-cat">Vendor's Signup Link</h5>
                    <span className="vendor-span">+ New Link</span>
                </div>
                <div className="create-inner-div-2">
                    <div className="vendor-header-div-vend">
                        <span id="trash-vendor"></span>
                        <div className="table-header">
                            <span className="span-create-2">Link</span>
                            <span className="span-create-email">Form Template</span>
                        </div>
                    </div>
                    <div className="vendor-header-div-vend">
                        <div id="trash-vendor"><FontAwesomeIcon icon={faTrashAlt} /></div>
                        <div className="table-header">
                            <span className="span-create-2 link" id="vendor-span-content">www.linktoanywhere.com</span>
                            <span className="span-create-email" id="vendor-span-content">Form 1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vendor-body">
                <div className="vendor">
                    <h5 className="vendor-cat">Form Template</h5>
                    <span className="vendor-span">+ New Form</span>
                </div>
                <div className="vend-form-body">
                    <form className="vend-form">
                        <div className="vend-name"><label>Form Name</label></div>
                        <input id="vend-input" />
                        <div id="vend-form-label"><label>Field Title</label></div>
                        <div className="select-addField">
                            <select id="vend-select">
                                <option>Select Input Type</option>
                                <option value="Option One">Option One</option>
                                <option value="Option Two">Option Two</option>
                                <option value="Option Three">Option Three</option>
                            </select>
                            <p id="vend-form-par"> <span id="vend-plus">+ </span> Add Another Field</p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`

background: white;
box-shadow: 1px 3px 5px #e0e0e0;
padding-bottom: 20px;
text-align: left;

.vendor-body{
    margin: 10px;
}
.vendor-header-div{
    display: flex;
    align-items: baseline;
}
.vendor{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 50px;
}
.vendor-cat{
    font-size: 18px;
    font-weight: 600;
    color: #4169E1;
    margin-left: 40px;
}

.vendor-span{
    color: white;
    background-color: forestgreen;
    padding: 3px 7px;
    border-radius: 5px;
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
}
.span-create-vend{
    width: 20%;
}

.span-create-edit-2{
    width: 20%;
    cursor: pointer;
}
.span-create-columns-2{
    width: 30px;
}
#trash-vendor{
    font-size: 14px;
    color: red;
    width: 40px;
    cursor: pointer;
}

.vendor-header-div-vend{
    display: flex;
    align-items: baseline;
    width: 60%;
}

.table-header{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 90%;
}

.link{
    cursor: pointer;
}
.vend-form{
    margin-left: 50px;
}

#vend-form-label{
    margin-top: 20px;
}

#vend-input{
    width: 60%;
    font-size: 14px;
    height: 26px;
    border-radius: 5px;
    border: 1px solid gray;
}

#vend-select{
    width: 55%;
    border-radius: 5px;
    border: 1px solid gray;
}
.vend-form-body{
    width: 70%;
}

.select-addField{
    display: flex;
    justify-content: space-between;
    width: 65%;
    align-items: center;
}

#vend-form-par{
    color: forestgreen;
    font-size: 14px;
    cursor: pointer;
}
#vend-plus{
    font-weight: 800;
    font-size: 15px;
}
p{
    margin-top: 2px;
    margin-bottom: 2px;
}
.vend-name{
    margin-top: 10px;
}

#vendor-span-content{
    color: #4169E1; 
}

.create-inner-div-2{
    margin-top: 10px;
    margin-left: 10px;
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