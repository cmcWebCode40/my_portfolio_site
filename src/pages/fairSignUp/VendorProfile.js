import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { getUserToken } from '../../utils/functions/userAuth';
import { coopLagApi } from '../../services/services';

import profile_picture from '../../assets/images/profile-1.jpg';

export default function VendorProfile({ match }) {
  const [profile, setProfile] = useState([]);

  const headers = getUserToken();
  const vendor_id = match.params.id;

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
      .get(`/vendors/${vendor_id}/vendor-profile`, { headers })
      .then((response) => {
        const { data } = response.data;
        setProfile([data]);
      })
      .catch((error) => {
        errorAlert(error.response.data.message);
      });
  }, [match.params.id]);

  return (
    <StyledDiv>
      <div className="vendor-profile container mx-auto">
        {profile.map((info) => (
          <div key={info._id} className="profile row py-5 px-3">
            <div className="identity col-lg-6 mx-auto shadow p-5 mb-5">
              <div className="profile-pic mx-auto">
                <img alt="tags" src={profile_picture} />
              </div>
              <div className="profile-detail-box mx-auto text-center p-4">
                <p className="profile-detail vendor-name">
                  {/* <span>Name: </span> */}
                  {info.vendorName}
                </p>
                <p className="profile-detail">
                  <span className="profile-detail-caption">Business Name: </span>
                  {info.business_name}
                </p>
                <p className="profile-detail">
                  <span className="profile-detail-caption">Location: </span>
                  {info.business_city}
                  ,
                  {' '}
                  {info.business_state}
                </p>
                <p className="profile-detail">
                  <span className="profile-detail-caption">Phone: </span>
                  {info.business_tel}
                </p>
                <p className="profile-detail">
                  <span className="profile-detail-caption">Email: </span>
                  {info.business_email}
                </p>
              </div>
              <div className="edit-profile text-center">
                <p id="edit-icon" className="pt-3">
                  <span>
                    Edit profile
                    {' '}
                    <FontAwesomeIcon icon={faUserEdit} id="edited" />
                  </span>
                </p>
              </div>
            </div>
            <div className="registered-fairs mx-auto shadow text-center p-5 mb-5">
              <h5 className="registered-fairs-caption py-4">Fairs Registered</h5>
              {info.fairs.map((fair) => (
                <div key={fair} id="fairs" className="py-2">
                  <p>{fair}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .vendor-profile {
    background-color: var(--tint);
  }
  .identity,
  .registered-fairs {
    border-radius: 20px;
    max-width: 400px;
    width: 100%;
    border: 1px solid var(--primary-color);
  }

  .profile-pic {
    width: 200px;
    border-radius: 20px;
    overflow: hidden;
  }

  .registered-fairs-caption {
    font-weight: 700;
  }

  .profile-detail {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .vendor-name {
    font-size: 20px;
    font-weight: 700;
  }

  .profile-detail-caption {
    font-weight: 300;
    text-transform: none;
  }
`;
