import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from '../../services/services';

export default function AllFairs({ match }) {
  const [fairs, setFairs] = useState([]);
  const { id } = match.params;
  const headers = getUserToken();

  const errorAlert = (message) => {
    toast.error(
      message,
      { autoClose: 5000 },
      {
        position: toast.POSITION.TOP_LEFT,
      }
    );
  };

  useEffect(() => {
    coopLagApi
      .get('/fairs', { headers })
      .then((response) => {
        console.log(response.data.data)
        setFairs(response.data.data);
      })
      .catch((error) => {
        errorAlert(error.response.data.message);
      });
  }, [id]);

  return (
    <StyledDiv>
      <h2 id="title">Explore All Fairs</h2>
      {' '}
      <hr />
      <div className="container">
        <div className="fairs-div row mx-auto">
          {fairs.map((fair) => (
            <div key={fair._id} className="per-fair col-lg-4">
              <Link to={`/fair-landing-page/${fair._id}`}>
                {/* <div className="card" id="card-div">
                <img src={fair.fair_banner} className="card-img-top" alt="Fair Banner" />
                <div className="card-body">
                  <h5 className="card-title">{fair.name}</h5>
                  <p className="card-text">
                    {' '}
                    <i>{fair.about_event}</i>
                  </p>
                </div>
              </div> */}
                <Card style={{ width: '18rem' }} className="mx-auto my-4 shadow">
                  <Card.Img
                    variant="top"
                    src={fair.fair_banner}
                    className="card-img-top"
                    alt="Fair Banner"
                  />
                  <Card.Body>
                    <Card.Title>{fair.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of the
                      card&apos;s content.
                      {' '}
                      <i>{fair.about_event}</i>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  // text-align: center;
  // margin-top: 0;
  background-color: #f6faf5;

  #title {
    color: var(--primary-color);
    text-align: center;
    padding: 20px;
    font-weight: 700;
  }

  hr {
    // background: white;
    max-width: 800px;
    width: 80%;
    margin-bottom: 20px;
  }

  // .fairs-div {
  //   display: flex;
  //   justify-content: space-evenly;
  //   flex-wrap: wrap;
  // }

  // .per-fair {
  //   // border: 2px solid grey;
  //   margin-top: 10px;
  //   margin-bottom: 5px;
  //   cursor: pointer;
  // }

  // #card-div {
  //   width: 18rem;
  //   // border: 1px dashed grey;
  // }
  // #card-div:hover {
  //   opacity: 0.8;
  //   transition: 0.3s;
  //   box-shadow: 2px 5px 5px 5px white;
  // }

  .card-img-top {
    height: 200px;
  }
`;
