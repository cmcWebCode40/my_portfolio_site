import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilePond } from 'react-filepond';
import moment from 'moment';
import { getUserToken } from '../../utils/authToken';
import { errorHandler } from '../../error/ErrorHandler';
import { coopLagApi } from '../../services/services';
import { RequestLoaderIcon } from '../../components/Loaders/Loader';

const FairWrapper = styled.div`

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

const FairDetails = ({ match }) => {
  const [formValues, setFormValues] = useState('');
  const [partners] = useState([]);
  const [banner, setBanner] = useState({ files: '' });
  const [logo] = useState({ files: '' });
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [checkboxValues, setcheckboxValues] = useState({
    booth_ad: false,
    banner_ad: false,
    pane_page_ad: false,
    story_ad: false,
    stage_ad: false,
    lead_generation: false
  });
  const headers = getUserToken();
  const { fairId } = match.params;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const createFairHandler = async (e) => {
    e.preventDefault();
    if (!partners.length) {
      return setError({ message: 'Please all fields are required', class: 'alert alert-danger' });
    }
    const {
      about_event,
      category,
      end_date,
      fair_env,
      fair_type,
      name,
      // payment_options,
      start_date,
      total_expected_vendors
    } = formValues;
    const formData = new FormData();
    formData.append('banner', banner.files.file);
    formData.append('logo', logo.files.file);
    formData.append('about_event', about_event);
    formData.append('end_date', end_date);
    formData.append('fair_env', fair_env);
    formData.append('category', category);
    formData.append('fair_type', fair_type);
    formData.append('name', name);
    formData.append('start_date', start_date);
    // formData.append('payment_options', 'Futterwave');
    formData.append('total_expected_vendors', total_expected_vendors);
    formData.append('partners', JSON.stringify(partners));

    setloading(true);
    try {
      await coopLagApi.post('/fairs', formData, { headers });
    } catch (error) {
      if (error && error.response) {
        const { data } = errorHandler(error);
        setError({ message: data.message, class: 'alert alert-danger' });
      }
    }
    setloading(false);
  };

  const setBannerHandler = (fileItems) => {
    setBanner({
      files: fileItems[0],
    });
  };

  const handleCheckbox = (e) => {
    setcheckboxValues({ ...checkboxValues, [e.target.name]: e.target.checked });
  };

  const getAllFairs = async () => {
    setloading(true);
    try {
      const res = await coopLagApi.get(`/fairs/${fairId}`, { headers });
      setData(res.data.data);
    } catch (error) {
      if (error && error.response) {
        const { data } = errorHandler(error);
        setError({ message: data.message, class: 'alert alert-danger' });
      }
    }
    setloading(false);
  };

  useEffect(() => {
    getAllFairs();
  }, []);

  useEffect(() => {

  }, [partners]);

  return (
    <FairWrapper>
      {loading && (
      <RequestLoaderIcon
        size="3x"
        label="Please wait"
        className="text-primary bg-mid-gray"
      />
      )}
      {data ? (
        <>
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
                    defaultValue={data.name}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Name"
                    name="about_event"
                    defaultValue={data.about_event}
                    onChange={handleChange}
                    rows="7"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="start_date">
                    <span>Start date</span>
                    (
                    {moment(data.start_date).format('L')}
                    )
                    <input
                      type="date"
                    // defaultValue={moment(data.start_date).format('L')}
                      onChange={handleChange}
                      name="start_date"
                      value={data.start_date}
                      placeholder="Start date"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="end_date">
                    <span>End date</span>
                    {' '}
                    (
                    {moment(data.end_date).format('L')}
                    )
                    <input
                      type="date"
                    // defaultValue={moment(data.end_date).format('L')}
                      onChange={handleChange}
                      name="end_date"
                      value={data.end_date}
                      placeholder="Start date"
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Payment Options</h6>
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
                  </div>
                  <div className="col">
                    <h6>Event Type</h6>
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
                  </div>

                </div>
              </div>
              <div className="col-md-6 form-div">
                <div className="filepond-image1">
                  <FilePond
                    className="filepond-image"
                    labelIdle="Upload your fair banner"
                    allowFileSizeValidation
                    maxFileSize="500KB"
                    allowMultiple={false}
                    maxFiles={1}
                    required
                    onupdatefiles={setBannerHandler}
                    labelMaxFileSize="Maximum file size is 500KB"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="image url"
                    name="imageUrl"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-3">
              <button
                disabled={loading}
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      ) : '' }
    </FairWrapper>
  );
};

export default FairDetails;
