import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { coopLagApi } from '../../../../services/services';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import { fairPlanCategory } from '../../../../utils/list/createfair';
import { getUserToken } from '../../../../utils/authToken';
import { errorHandler } from '../../../../error/ErrorHandler';

const FairWrapper = styled.div`

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

const FairPlan = ({ activeStep, setActiveStep, fairId }) => {
  const [formValues, setFormValues] = useState('');
  const [partners] = useState([]);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [formValuesNumber, setFormValuesNumber] = useState(0);
  const [checkboxValues, setcheckboxValues] = useState({
    booth_ad: false,
    banner_ad: false,
    pane_page_ad: false,
    story_ad: false,
    stage_ad: false,
    lead_generation: false
  });

  const headers = getUserToken();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setcheckboxValues({ ...checkboxValues, [e.target.name]: e.target.checked });
  };

  const moveToNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleChangeNumber = (e) => {
    setFormValuesNumber({ ...formValuesNumber, [e.target.name]: +e.target.value });
  };

  const createFairHandler = async (e) => {
    e.preventDefault();
    const price_currency = 'N';
    const {
      category,
      created_at,
      booth_size,
      name,
      // price_currency,
      booth_position
    } = formValues;

    const {
      price,
      booth_attendants,
      number_of_products_catalog,
      no_of_visitors,
      // booth_position,
    } = formValuesNumber;

    const {
      banner_ad,
      booth_ad,
      pane_page_ad,
      stage_ad,
      story_ad,
      lead_generation
    } = checkboxValues;

    const data = {
      name,
      price,
      banner_ad,
      booth_ad,
      pane_page_ad,
      stage_ad,
      story_ad,
      category,
      created_at,
      price_currency,
      booth_size,
      booth_position,
      booth_attendants,
      lead_generation,
      number_of_products_catalog,
      no_of_visitors,
    };

    setloading(true);
    try {
      await coopLagApi.post(`/fairs/${fairId}/preset-plans`, data, { headers });
      setActiveStep(activeStep + 1);
    } catch (error) {
      if (error && error.response) {
        const { data } = errorHandler(error);
        setError({ message: data.message, class: 'alert alert-danger' });
      }
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
        ) }

        <div className="row">
          <div className="col-md-6 form-div">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <select required placeholder="Category" name="category" onChange={handleChange} id="category-id">
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
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleChangeNumber}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Booth size e.g (30x40)"
                name="booth_size"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Number of visitors"
                name="no_of_visitors"
                onChange={handleChangeNumber}
                required
              />
            </div>
            <div>
              <input
                type="text"
                value="₦"
                readOnly
                placeholder="Price currency"
                name="price_currency"
                onChange={handleChange}
                required
              />
            </div>

          </div>
          <div className="col-md-6 block-2">
            <div>
              <input
                type="text"
                placeholder="Booth position e.g(left,side,right)"
                name="booth_position"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Booth attendants"
                name="booth_attendants"
                onChange={handleChangeNumber}
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Number of Product catalog"
                name="number_of_products_catalog"
                onChange={handleChangeNumber}
                required
              />
            </div>
            <div>
              <label htmlFor="created_at">
                <input
                  type="date"
                  onChange={handleChange}
                  name="created_at"
                  placeholder="Created at"
                  required
                />
              </label>

            </div>
            <div className="checkbox">
              <label htmlFor="booth_ad">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name="booth_ad"
                  id="booth_ad"
                />
                <span>Booth Ad</span>
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="banner_ad">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name="banner_ad"
                  id="banner_ad"
                />
                <span>Banner Ad</span>
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="lead_generation">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name="lead_generation"
                  id="lead_generation"
                />
                <span>Lead generation</span>
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="pane_page_ad">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name="pane_page_ad"
                  id="pane_page_ad"
                />
                <span>Pane page Ad</span>
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="story_ad">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name="story_ad"
                  id="story_ad"
                />
                <span>Story Ad</span>
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="stage_ad">
                <input
                  type="checkbox"
                  onChange={handleCheckbox}
                  name="stage_ad"
                  id="stage_ad"
                />
                <span>Stage Ad</span>
              </label>
            </div>

          </div>
          <div className="col-md-12 my-3">
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Name</th>
                  <th>remove</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((person) => (
                  <tr key={person}>
                    <td>{person}</td>
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
          <div className="col-md-12 my-3">
            <div className="row">
              <div className="col">
                <button disabled={loading} className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
              <div className="col">
                <button onClick={moveToNext} className="btn btn-primary" type="submit">
                  Continue
                </button>
              </div>
            </div>

          </div>
        </div>
      </form>
    </FairWrapper>
  );
};

export default FairPlan;
