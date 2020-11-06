import React from 'react';
import styled from 'styled-components';

import Button from '../../components/landingpage/button';
import testImg from '../../assets/images/00.webp';
import kpmg from '../../assets/images/kpmg.png';
import gtb from '../../assets/images/gtb.jpg';
import nlng from '../../assets/images/nlng.png';
import shell from '../../assets/images/shell.png';
import total from '../../assets/images/total.png';

const fairLandingPage = () => {
  return (
    <StyledDiv>
      <div className="container-fluid m-0">

        {/* Section 1 */}
        <section className="row">
          <h1>Tee Shirt</h1>
        </section>

        {/* Section 2 */}
        <section className="row about-section">
          <div className="about-section-title mx-auto text-center">
            <h3>About CoopLAG</h3>
            <div className="about-section-image-box"><img src={gtb}/></div>
          </div>
          <div className="about-section-content p-5">
            <p>
              Nulla est occaecat aliqua enim occaecat cupidatat. Eu quis consectetur magna ex duis commodo labore magna minim minim. Laborum cupidatat esse enim laboris reprehenderit est ipsum sunt Lorem anim incididunt dolor. Sit ex quis dolor id voluptate non eiusmod dolor sunt adipisicing excepteur exercitation.
              Culpa pariatur ullamco culpa culpa cillum nulla nulla aliqua quis proident elit magna incididunt. Sunt quis mollit do cillum ullamco consectetur sit duis magna qui ut adipisicing. Ex Lorem eu non laborum occaecat sit incididunt laborum. Aliqua incididunt Lorem aliqua pariatur. Incididunt magna consectetur Lorem aliquip aliquip commodo et voluptate ea consectetur exercitation. Duis fugiat ex cillum magna aliqua magna veniam.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="row speakers-section">
          <div>
            <h3>Speakers</h3>
          </div>
          <div>
            <div className="speaker-box">
              <div><img/></div>
              <div>
                <h2>Speaker Name</h2>
                <p>Speaker Position</p>
                <hr/>
                <p>Company</p>
              </div>
            </div>
            <div className="speaker-box">
              <div><img/></div>
              <div>
                <h2>Speaker Name</h2>
                <p>Speaker Position</p>
                <hr/>
                <p>Company</p>
              </div>
            </div>
            <div className="speaker-box">
              <div><img/></div>
              <div>
                <h2>Speaker Name</h2>
                <p>Speaker Position</p>
                <hr/>
                <p>Company</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="row pricing-section">

        </section>

        {/* Section 5 */}
        <section className="row pre-footer-section">

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

    .about-section-image-box {
      width: 300px;
    }

    .about-section-content {
      background-color: var(--primary-color);
      color: white;
    }
`;
