import React from 'react';
import styled from 'styled-components';

import Button from '../../components/button';
import Timer from '../../components/timer';
import CheckMarkSuccess from '../../components/checkMark/checkMarkSuccess';
import CheckMarkCancel from '../../components/checkMark/checkMarkCancel';
import testImg from '../../assets/images/00.jpg';
import kpmg from '../../assets/images/kpmg.png';
import gtb from '../../assets/images/gtb.jpg';
import cooplag from '../../assets/images/cooplag-logo.png';
import nlng from '../../assets/images/nlng.png';
import shell from '../../assets/images/shell.png';
import total from '../../assets/images/total.png';
import profile1 from '../../assets/images/profile-1.jpg';
import profile2 from '../../assets/images/profile-2.jpg';
import profile3 from '../../assets/images/profile-3.jpg';

const fairLandingPage = () => {
  const startDate = new Date().getTime() + 1296000000;
  return (
    <StyledDiv>
      <div className="container-fluid">

        {/* Section 1 */}
        <section className="row">
          <div className="col-lg-8">
            <div className="banner-section-image-box mx-auto">
              <img src={testImg} />
            </div>
          </div>
          <div className="col-lg-4">
            <div><Timer startDate={startDate} /></div>
            <div>
              <h3>Welcome to Cooplag</h3>
              <p>Exploring Digitalization in Oil & Gas</p>
              <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Sign Up</Button>
              <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Sign In</Button>
            </div>
          </div>
          <div className="w-100 container p-5">
            <h4>Sponsors & Partners</h4>
            <div className="partner-images">
              <div className="partner-image-box mr-lg-5"><img src={kpmg} /></div>
              <div className="partner-image-box mr-lg-5"><img src={nlng} /></div>
              <div className="partner-image-box mr-lg-5"><img src={total} /></div>
              <div className="partner-image-box mr-lg-5"><img src={gtb} /></div>
              <div className="partner-image-box mr-lg-5"><img src={shell} /></div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="row about-section">
          <div className="about-section-title mx-auto text-center order-lg-last col-lg-4">
            <h3>About CoopLAG</h3>
            <div className="about-section-image-box p-5 mx-auto"><img src={cooplag} /></div>
          </div>
          <div className="about-section-content p-5 col-lg-8">
            <p>
              Nulla est occaecat aliqua enim occaecat cupidatat. Eu quis consectetur magna ex duis commodo labore magna minim minim. Laborum cupidatat esse enim laboris reprehenderit est ipsum sunt Lorem anim incididunt dolor. Sit ex quis dolor id voluptate non eiusmod dolor sunt adipisicing excepteur exercitation.
              Culpa pariatur ullamco culpa culpa cillum nulla nulla aliqua quis proident elit magna incididunt. Sunt quis mollit do cillum ullamco consectetur sit duis magna qui ut adipisicing. Ex Lorem eu non laborum occaecat sit incididunt laborum. Aliqua incididunt Lorem aliqua pariatur. Incididunt magna consectetur Lorem aliquip aliquip commodo et voluptate ea consectetur exercitation. Duis fugiat ex cillum magna aliqua magna veniam.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="row speakers-section mx-auto">
          <div className="col-lg-12">
            <h3 className="container pb-5">Speakers</h3>
          </div>
          <div className="row mx-auto">
            <div className="speaker-box col-lg-4">
              <div className="speaker-image"><img src={profile1} /></div>
              <div className="speaker-details">
                <h4>Andy Crestodina</h4>
                <p className="speaker-position">Founder & Strategic Director</p>
                <hr/>
                <p className="speaker-company">Orbit Media Studios</p>
              </div>
            </div>
            <div className="speaker-box col-lg-4">
              <div className="speaker-image"><img src={profile3} /></div>
              <div className="speaker-details">
                <h4>Ardath Albee</h4>
                <p className="speaker-position">CEO</p>
                <hr/>
                <p className="speaker-company">Marketing Interactions Inc</p>
              </div>
            </div>
            <div className="speaker-box col-lg-4">
              <div className="speaker-image"><img src={profile2} /></div>
              <div className="speaker-details">
                <h4>Jay Acunzo</h4>
                <p className="speaker-position">VP of Marketing</p>
                <hr/>
                <p className="speaker-company">NextView</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="row pricing-section mx-auto jumbotron w-100">
          <div className="col-lg-12">
            <h3 className="container pb-5">Pricing</h3>
          </div>
          <div className="row mx-auto">
            <div className="pricing-box col-lg-3 mx-auto my-4">
              <div className="pricing-category">Starter</div>
              <div className="price-offerings">
                <div className="row">
                  <div>Booth</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Ads</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Vendors</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Speakers</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Products</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Logistics</div><div><CheckMarkCancel /></div>
                </div>
                <div className="row">
                  <div>Booth Template</div><div><CheckMarkSuccess /></div>
                </div>
              </div>
              <div className="price">$1,000</div>
            </div>
            <div className="pricing-box col-lg-3 mx-auto my-4">
              <div className="pricing-category">Business</div>
              <div className="price-offerings">
                <div className="row">
                  <div>Booth</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Ads</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Vendors</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Speakers</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Products</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Logistics</div><div><CheckMarkCancel /></div>
                </div>
                <div className="row">
                  <div>Booth Template</div><div><CheckMarkSuccess /></div>
                </div>
              </div>
              <div className="price">$5,000</div>
            </div>
            <div className="pricing-box col-lg-3 mx-auto my-4">
              <div className="pricing-category">Professional</div>
              <div className="price-offerings">
                <div className="row">
                  <div>Booth</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Ads</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Vendors</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Speakers</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Products</div><div><CheckMarkSuccess /></div>
                </div>
                <div className="row">
                  <div>Logistics</div><div><CheckMarkCancel /></div>
                </div>
                <div className="row">
                  <div>Booth Template</div><div><CheckMarkSuccess /></div>
                </div>
              </div>
              <div className="price">$15,000</div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="row pre-footer-section mx-auto">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>Welcome to Cooplag 2020</h3>
                <p>Exploring Digitalization in Oil & Gas</p>
              </div>
              <div className="col-lg-6">
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Sign Up</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Sign In</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StyledDiv>
  );
};

export default fairLandingPage;

const StyledDiv = styled.div`
    img {
      width: 100%;
    }

    h3 {
      color: var(--primary-color);
      font-weight: 700;
    }

    h4 {
      font-weight: 600;
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

    .pricing-box {
      width: 100%;
      background-color: var(--tint);
      border-radius: 20px;
    }

    @media screen and (min-width: 920px) {
      .pricing-box {
        width: 400px;
      }
    }

    .pricing-category, .price {
      color: var(--primary-color);
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      padding: 20px 0;
    }

    .price-offerings .row {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }
`;
