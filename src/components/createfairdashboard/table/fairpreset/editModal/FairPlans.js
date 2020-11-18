import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { toast } from 'react-toastify';
import { coopLagApi } from '../../../../../services/services';
import { RequestLoaderIcon } from '../../../../Loaders/Loader';
import { fairPlanCategory } from '../../../../../utils/list/createfair';
import { getUserToken } from '../../../../../utils/functions/userAuth';
import { errorHandler } from '../../../../../error/ErrorHandler';

const FairWrapper = styled.div`
  .block-2 {
    div {
      margin: 1rem 0;
    }
  }
  .checkbox {
    margin-top: 1rem;
    label {
      display: grid;
      grid-template-columns: 0.2fr 3fr;
      span {
        margin: -0.4rem 0 0 0.3rem;
      }
    }
  }
  form {
    /* display:grid;
    grid-template-columns:1fr 1fr; */
    input,
    select,
    textarea {
      border-radius: ${(props) => props.theme.styles.borderRadiusRounded};
      background-color: ${(props) => props.theme.colors.light};
      padding: 0.8rem 2rem;
      width: 100%;
      outline: none;
      border: none;
      &::focus {
        border: 1px solid ${(props) => props.theme.colors.primary};
      }
    }

    .filepond-image {
      padding: 5rem;
      width: 100%;
      border-radius: ${(props) => props.theme.styles.borderRadiusRounded};
      background-color: ${(props) => props.theme.colors.light};
    }
    .form-div {
      div {
        margin: 1rem 0.4rem;
      }
    }
  }
`;

const FairPlan = (props) => {
  const {
    activeStep, setActiveStep, reload, fairId, singleData, setreload
  } = props;
  const [formValues, setFormValues] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [formValuesNumber, setFormValuesNumber] = useState(0);
  const [checkboxValues, setcheckboxValues] = useState({
    booth_ad: false,
    banner_ad: false,
    pane_page_ad: false,
    story_ad: false,
    stage_ad: false,
    lead_generation: false,
  });

  useEffect(() => {
    if (singleData) {
      const {
        banner_ad,
        booth_ad,
        pane_page_ad,
        stage_ad,
        story_ad,
        lead_generation,
        price,
        booth_attendants,
        number_of_products_catalog,
        no_of_visitors,
        category,
        created_at,
        booth_size,
        name,
        booth_position,
      } = singleData;
      setcheckboxValues({
        banner_ad,
        booth_ad,
        pane_page_ad,
        stage_ad,
        story_ad,
        lead_generation,
      });
      setFormValuesNumber({
        price,
        booth_attendants,
        number_of_products_catalog,
        no_of_visitors,
      });
      setFormValues({
        category,
        created_at,
        booth_size,
        name,
        booth_position,
      });
    }
  }, [singleData]);

  const headers = getUserToken();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setcheckboxValues({ ...checkboxValues, [e.target.name]: e.target.checked });
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
      booth_position,
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
      lead_generation,
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
      const res = await coopLagApi[singleData ? 'patch' : 'post'](
        `/fairs/${fairId}/preset-plans/${singleData ? singleData._id : ''}`,
        data,
        { headers }
      );
      if (activeStep) {
        setActiveStep(activeStep + 1);
      } else {
        setreload(!reload);
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error && error.response) {
        const { data } = errorHandler(error);
        setError({ message: data.message, class: 'alert alert-danger' });
      }
    }
    setloading(false);
  };

  return (
    <FairWrapper>
      {loading && (
        <RequestLoaderIcon size="3x" label="Please wait" className="text-primary bg-mid-gray" />
      )}
      <form onSubmit={createFairHandler}>
        {error && (
          <div className={error.class} role="alert">
            {error.message}
          </div>
        )}

        <div className="row">
          <div className="col-md-6 form-div">
            <div>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formValues.name || ''}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="category">
                Category
                <select
                  value={formValues.category || ''}
                  required
                  placeholder="Category"
                  name="category"
                  onChange={handleChange}
                  id="category-id"
                >
                  <option value="">Category</option>
                  {fairPlanCategory.map((fair) => (
                    <option key={fair} value={fair}>
                      {fair}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="price">
                Price
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={formValuesNumber.price || ''}
                  onChange={handleChangeNumber}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="booth_size">
                Booth Size
                {' '}
                <input
                  type="text"
                  value={formValues.booth_size || ''}
                  placeholder="Booth size e.g (30x40)"
                  name="booth_size"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="no_of_visitors">
                No of visitors
                {' '}
                <input
                  type="number"
                  value={formValuesNumber.no_of_visitors || ''}
                  placeholder="Number of visitors"
                  name="no_of_visitors"
                  onChange={handleChangeNumber}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="price_currency">
                Price Currency
                {' '}
                <input
                  type="text"
                  value="₦"
                  readOnly
                  placeholder="Price currency"
                  name="price_currency"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          <div className="col-md-6 block-2">
            <div>
              <label htmlFor="booth_position">
                Booth position
                <input
                  type="text"
                  value={formValues.booth_position || ''}
                  placeholder="Booth position e.g(left,side,right)"
                  name="booth_position"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="booth_attendants">
                {' '}
                Booth Attendants
                {' '}
                <input
                  type="number"
                  value={formValuesNumber.booth_attendants || ''}
                  placeholder="Booth attendants"
                  name="booth_attendants"
                  onChange={handleChangeNumber}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="number_of_products_catalog">
                {' '}
                No. of product catalog
                <input
                  type="number"
                  value={formValuesNumber.number_of_products_catalog || ''}
                  placeholder="Number of Product catalog"
                  name="number_of_products_catalog"
                  onChange={handleChangeNumber}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="created_at">
                Date created
                <input
                  type="date"
                  value={moment(formValues.created_at).format('yyyy-MM-dd') || ''}
                  onChange={handleChange}
                  name="created_at"
                  placeholder="Created at"
                  // required
                />
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="booth_ad">
                <input
                  type="checkbox"
                  checked={checkboxValues.booth_ad || ''}
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
                  checked={checkboxValues.banner_ad || ''}
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
                  checked={checkboxValues.lead_generation || ''}
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
                  checked={checkboxValues.pane_page_ad || ''}
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
                  checked={checkboxValues.story_ad || ''}
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
                  checked={checkboxValues.stage_ad || ''}
                  name="stage_ad"
                  id="stage_ad"
                />
                <span>Stage Ad</span>
              </label>
            </div>
          </div>
          <div className="col-md-12 my-3">
            <div className="row">
              <div className="col">
                <button disabled={loading} className="btn btn-primary" type="submit">
                  Submit
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
