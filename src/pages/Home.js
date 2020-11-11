import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import testImg from '../components/landingpage/assets/00.webp';
import kpmg from '../components/landingpage/assets/kpmg.png';
import gtb from '../components/landingpage/assets/gtb.jpg';
import nlng from '../components/landingpage/assets/nlng.png';
import shell from '../components/landingpage/assets/shell.png';
import total from '../components/landingpage/assets/total.png';

const Home = () => {
  return (
    <StyledDiv>
      <section className="container">

        {/* First Row */}
        <div className="row pt-5">
          {/* Left column */}
          <div className="col-lg-6 m-auto banner-image-box">
            <img src={testImg} alt="banner" className="banner-image" />
          </div>

          {/* Right column */}
          <div className="col-lg-6 m-auto">
            <h2 className="banner-header">World First 3D Virtual Experience Fair Platform</h2>
            <p>Create a virtual exhibition fair in less than 5 minutes.</p>
            <div className="row">
              <div className="col-lg-4">
                <Link
                  to="/fair/dashboard-overview"
                  className="btn btn-primary btn-lg"
                >
                  Create Fair
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-12 partners mt-5">
            <h2 className="partners-caption">Proudly used by</h2>
            <div className="partner-logos">
              <div className="p-logo"><img src={kpmg} alt="logo" /></div>
              <div className="p-logo"><img src={gtb} alt="logo" /></div>
              <div className="p-logo"><img src={nlng} alt="logo" /></div>
              <div className="p-logo"><img src={shell} alt="logo" /></div>
              <div className="p-logo"><img src={total} alt="logo" /></div>
            </div>
          </div>
        </div>
      </section>
    </StyledDiv>
  );
};

export default Home;

const StyledDiv = styled.div`
    Height: 100vh;
    img {
      width: 100%;
    }
    .partner-logos {
      display: flex;
    }
    .p-logo {
      width: 100px;
      padding-right: 10px;
    }
    .banner-image-box {
      width: 500px;
    }
    .banner-header {
      color: var(--primary-color);
    }
    h2 {
      font-weight: 700;
    }
    .partners-caption {
      font-size: 1.2rem;
      color: var(--dark-grey);
    }
`;
