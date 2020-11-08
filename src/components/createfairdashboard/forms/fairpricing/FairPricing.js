import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { coopLagApi } from '../../../../services/services';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import { fairPlanCategory, fairPosition } from '../../../../utils/list/createfair';
import { getUserToken } from '../../../../utils/functions/userAuth';
import { errorHandler } from '../../../../error/ErrorHandler';

const FairWrapper = styled.div`
  .ad-label{
    margin:'4rem';
  }

  .label-ad{
    display:flex;
    & >*{
      margin: 0rem .3rem ;
    }
  }

  .block-2{
    div{
      margin:1rem 0;
    }
  
  }
  .checkbox{
    margin-top:1rem;
    label{
      display:grid;
      grid-template-columns:.2fr 3fr;
      span{
        margin:-.4rem 0 0 .3rem;
      }
    }
  }
  form {
    /* display:grid;
    grid-template-columns:1fr 1fr; */
    input,select,textarea {
      border-radius:${(props) => props.theme.styles.borderRadiusRounded};;
      background-color:${(props) => props.theme.colors.light};
      padding: .8rem 2rem;
      width:100%;
      outline:none;
      border:none;
      &::focus{
        border:1px solid ${(props) => props.theme.colors.primary};
      }
    }

    .filepond-image{
      padding:5rem ;
      width:100%;
      border-radius:${(props) => props.theme.styles.borderRadiusRounded};
      background-color:${(props) => props.theme.colors.light};
    }
    .form-div{
      div {
        margin:1rem .4rem ;
      }
    }
  }

`;

const FairPricing = ({ activeStep, setActiveStep, fairId }) => {
  const [formValues, setFormValues] = useState('');
  const [formValuesNumber, setFormValuesNumber] = useState(0);
  const [error, setError] = useState('');
  const [partners, setPartners] = useState([]);
  const [partnerValue, setPartnersValue] = useState({ position: '', price: '' });
  const [loading, setloading] = useState(false);
  const headers = getUserToken();

  const addPosition = () => {
    const { position, price } = partnerValue;
    setPartners([...partners, partnerValue]);
    if (position && price) {
      setPartners([...partners, { position, price: Number(price) }]);
    } else {
      return setError({ message: 'you cant not partners with same name', class: 'alert alert-danger' });
    }
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleChangeNumber = (e) => {
    setFormValuesNumber({ ...formValuesNumber, [e.target.name]: +e.target.value });
  };

  const handlePostion = (e) => {
    setPartnersValue({ ...partnerValue, [e.target.name]: e.target.value });
  };

  const createFairHandler = async (e) => {
    e.preventDefault();

    if (!partners.length) {
      return setError({ message: 'Please all fields are required', class: 'alert alert-danger' });
    }
    const {
      lead_generation,

      price_per_product,

    } = formValues;
    const {
      ads_per_booth,
      ads_per_banner,
      ads_per_pane,
      ads_per_stage,
      ads_per_story,
      ads_per_booth_price,
      ads_per_banner_price,
      ads_per_pane_price,
      ads_per_stage_price,
      ads_per_story_price,
      price_per_visitor,
      price_squared_meter,
      price_per_booth_attendant
    } = formValuesNumber;

    const booth_ad = {
      ads_per_booth,
      price: ads_per_booth_price
    };
    const banner_ad = {
      ads_per_banner,
      price: ads_per_banner_price
    };
    const pane_page_ad = {
      ads_per_pane,
      price: ads_per_pane_price
    };

    const stage_ad = {
      ads_per_stage,
      price: ads_per_stage_price
    };
    const story_ad = {
      ads_per_story,
      price: ads_per_story_price
    };

    const data = {
      booth_ad,
      stage_ad,
      banner_ad,
      story_ad,
      pane_page_ad,
      lead_generation,
      price_per_visitor,
      price_per_product,
      booth_position: partners,
      price_per_booth_attendant,
      price_squared_meter
    };

    setloading(true);
    try {
      await coopLagApi.post(`/fairs/${fairId}/fair-pricing`, data, { headers });
      setActiveStep(activeStep + 1);
    } catch (error) {
      const { data } = errorHandler(error);
      setError({ message: data.message, class: 'alert alert-danger' });
    }
    setloading(false);
  };

  useEffect(() => {

  }, [partners]);

  return (
    <FairWrapper>
      {loading && <RequestLoaderIcon size="3x" label="Please wait" className="text-primary bg-mid-gray" />}
      <form onSubmit={(createFairHandler)}>
        {error && (
        <div className={error.class} role="alert">
          {error.message}
        </div>
        )}
        <div className="row">
          <div className="col-md-6 form-div">
            <div>
              <select
                required
                placeholder="Category"
                name="category"
                onChange={handleChange}
                id="category-id"
              >
                <option value="">
                  Category
                </option>
                {fairPlanCategory.map((fair) => (
                  <option key={fair} value={fair}>
                    {fair}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Lead generation"
                name="lead_generation"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="number"
                placeholder="Price per visitor"
                name="price_per_visitor"
                onChange={handleChangeNumber}
                required
              />
            </div>
            <div>
              <div className="label-ad">
                <label className="ad-label" htmlFor="ads_per_booth">
                  Booth Ad Price
                  {' '}
                  <input
                    id="ads_per_booth"
                    type="number"
                    name="ads_per_booth"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
                <label className="ad-label" htmlFor="ads_per_booth_price">
                  Price
                  {' '}
                  <input
                    type="number"
                    name="ads_per_booth_price"
                    id="ads_per_booth_price"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
              </div>

            </div>
            <div>
              <div className="label-ad">
                <label className="ad-label" htmlFor="ads_per_banner">
                  BBanner booth Ad
                  {' '}
                  <input
                    id="ads_per_banner"
                    type="number"
                    name="ads_per_banner"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
                <label className="ad-label" htmlFor="ads_per_banner_price">
                  Price
                  {' '}
                  <input
                    type="number"
                    name="ads_per_banner_price"
                    id="ads_per_banner_price"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
              </div>

            </div>

            <div>
              <div className="label-ad">
                <label className="ad-label" htmlFor="ads_per_pane">
                  Pane page ad
                  {' '}
                  <input
                    type="number"
                    name="ads_per_pane"
                    id="ads_per_pane"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
                <label className="ad-label" htmlFor="ads_per_pane_price">
                  Price
                  {' '}
                  <input
                    type="number"
                    name="ads_per_pane_price"
                    id="ads_per_pane_price"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
              </div>

            </div>
            <div>
              <div className="label-ad">
                <label className="ad-label" htmlFor="ads_per_stage">
                  Stage Ad
                  {' '}
                  <input
                    type="number"
                    name="ads_per_stage"
                    id="ads_per_stage"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
                <label className="ad-label" htmlFor="ads_per_stage_price">
                  Price
                  {' '}
                  <input
                    type="number"
                    name="ads_per_stage_price"
                    id="ads_per_stage_price"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
              </div>

            </div>
            <div>
              <div className="label-ad">
                <label className="ad-label" htmlFor="ads_per_story">
                  Story Ad
                  {' '}
                  <input
                    type="number"
                    name="ads_per_story"
                    id="ads_per_story"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
                <label className="ad-label" htmlFor="ads_per_story_price">
                  Price
                  {' '}
                  <input
                    type="number"
                    name="ads_per_story_price"
                    id="ads_per_story_price"
                    onChange={handleChangeNumber}
                    required
                  />

                </label>
              </div>

            </div>
            <div>
              <input
                type="number"
                placeholder="Price per booth attendant"
                name="price_per_booth_attendant"
                onChange={handleChangeNumber}
                required
              />
            </div>
          </div>
          <div className="col-md-6 block-2">
            <div>
              <input
                type="text"
                placeholder="Price per product"
                name="price_per_product"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Price  squared meter"
                name="price_squared_meter"
                onChange={handleChangeNumber}
                required
              />
            </div>
            <div className="row">
              <div className="col">
                <select required placeholder="Position" name="position" onChange={handlePostion} id="category-id">
                  <option value="">
                    Choose Postion
                  </option>
                  {fairPosition.map((fair) => (
                    <option key={fair} value={fair}>
                      {fair}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <input
                  type="number"
                  placeholder="Booth position"
                  name="price"
                  onChange={handlePostion}
                  required
                />
              </div>
              <div className="col-12">
                <button type="button" onClick={addPosition} className="btn btn-primary">
                  Add Position
                </button>
              </div>
            </div>
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Position</th>
                  <th>price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((booth) => (
                  <tr key={booth.price}>
                    <td>{booth.position}</td>
                    <td>{booth.price}</td>
                    <td
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon
                        icon={['fa', 'trash']}
                        className="alert-danger"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6 my-3" />
          <div className="col-md-12 my-3">
            <div className="row">
              <div className="col">
                <button disabled={loading} className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
              {/* <div className="col">
                <button className="btn btn-primary" type="submit">
                  Continue
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </form>
    </FairWrapper>
  );
};

export default FairPricing;
