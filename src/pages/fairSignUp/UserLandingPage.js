import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import kpmg from '../../assets/images/kpmg.png';
import gtb from '../../assets/images/gtb.jpg';
import cooplag from '../../assets/images/cooplag-logo.png';
import nlng from '../../assets/images/nlng.png';
import shell from '../../assets/images/shell.png';
import total from '../../assets/images/total.png';
import Button from '../../components/button';


export default function UserLandingPage(props) {
    const id = props.match.params.id;

    return (
        <StyledDiv>
            <div className="iframe-intro">
                <div id="ifram-div">
                    <iframe title="Reception" allowfullScreen src="https://cdn.soft8soft.com/AROAJSY2GOEHMOFUVPIOE:83c599106f/applications/Cooplac_Recept/Cooplac_Recept.html"></iframe>
                </div>
                <div className="intro-div col-lg-4">
                    <h3 className="banner-heading">Welcome to CoopEast</h3>
                    <p className="tagline"><i>Exploring Digitalization in commercial Industry</i></p>
                    <Link to={`/chosen-fair/${id}`}><Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Enter Fair</Button></Link>
                </div>
            </div>
            <div className="w-100 container p-5">
                <h4>Sponsors & Headline Partners</h4>
                <div className="partner-images">
                    <div className="partner-image-box mr-lg-5"><img alt="virtual-fair" src={kpmg} /></div>
                    <div className="partner-image-box mr-lg-5"><img alt="virtual-fair" src={nlng} /></div>
                    <div className="partner-image-box mr-lg-5"><img alt="virtual-fair" src={total} /></div>
                    <div className="partner-image-box mr-lg-5"><img alt="virtual-fair" src={gtb} /></div>
                    <div className="partner-image-box mr-lg-5"><img alt="virtual-fair" src={shell} /></div>
                </div>
            </div>
            <section className="row about-section">
                <div className="about-section-title mx-auto text-center order-lg-last col-lg-4">
                    <h3>About CoopEast</h3>
                    <div className="about-section-image-box p-5 mx-auto"><img alt="virtual-fair" src={cooplag} /></div>
                </div>
                <div className="about-section-content p-5 col-lg-8">
                    <p>
                        Nulla est occaecat aliqua enim occaecat
                        cupidatat. Eu quis consectetur magna ex duis commodo labore magna
                        minim minim. Laborum cupidatat esse enim laboris reprehenderit
                        est ipsum suntLorem anim incididunt dolor. Sit ex quis dolor id voluptat
                    </p>
                </div>
            </section>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    text-align: center;

    .iframe-intro{
        display: flex;
        justify-content: space-between;
    }

    #ifram-div{
        max-width: 1024px; 
        width:70%;

        iframe{
            width:100%;
            height: 640px;
        }
    }

    .intro-div{
        width: 29%;
        margin-top: 10%;
    }

    .tagline{
        margin-bottom: 15%;
        font-size: 14px;
    }

    h3 {
        color: var(--primary-color);
        font-weight: 700;
      }
  
      .banner-heading {
        font-size: 35px;
      }
  
      h4 {
        font-weight: 600;
        margin-bottom: 20px;
        text-align: left;
        color: var(--dark-grey);
      }
      p {
        font-size: 20px;
      }
  
      section {
        margin-bottom: 50px;
      }
  
      .banner-section-image-box {
        max-width: 900px;
      }
  
      .partner-images {
        display: flex;
      }
  
      .partner-image-box {
        width: 80px;
      }
  
      .about-section-image-box {
        width: 300px;
      }
  
      .about-section-content {
        background-color: var(--primary-color);
        color: white;
      }
  
      hr {
        width: 75px;
        margin-left: 0;
      }
  
      .speaker-box {
        margin-bottom: 50px;
      }
  
      .speaker-image {
        width: 300px;
        height: 300px;
        background-color: var(--dark-grey);
        overflow: hidden;
      }
  
      .speaker-company {
        color: red;
        font-style: italic;
        font-size: 12px;
      }
  
      .speaker-position {
        color: #949493;
        font-weight: 600;
        font-size: 16px;
      }
  
      .speaker-details {
        padding: 10px;
      }
  
`;