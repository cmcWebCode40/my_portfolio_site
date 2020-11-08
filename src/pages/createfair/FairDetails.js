import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilePond } from 'react-filepond';
import moment from 'moment';
import { toast } from 'react-toastify';
import { getUserToken } from '../../utils/functions/userAuth';
import { errorHandler } from '../../error/ErrorHandler';
import { coopLagApi } from '../../services/services';
import { RequestLoaderIcon } from '../../components/Loaders/Loader';
import { maxImageSize } from '../../constant/ImageSize';

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
      height:40%;
      border-radius:${(props) => props.theme.styles.borderRadiusRounded};
      background-color:${(props) => props.theme.colors.light};
    }
    .form-div{
      div {
        margin: 1rem 0 ;
        /* height:40%; */
      }
    }
  }

`;

const FairDetails = ({ match }) => {
  const [partners] = useState([]);
  const [banner, setBanner] = useState({ files: '' });
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [reload, setreload] = useState('');
  const [checkboxValues, setcheckboxValues] = useState({
    paystack: false,
    fusepay: false,
    Indoor: false,
    Outdoor: false,
  });
  const [formValues, setFormValues] = useState({
    about_event: '',
    end_date: '',
    name: '',
    start_date: '',
    imageUrl: ''
  });
  const headers = getUserToken();
  const { fairId } = match.params;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const updateImage = async () => {
    const { imageUrl } = formValues;
    const formData = new FormData();
    if (imageUrl) formData.append('url', imageUrl);
    formData.append('banner', banner.files.file);
    setloading(true);
    try {
      const res = await coopLagApi.patch(`/fairs/${fairId}/fair-images/update`, formData, { headers });
      toast.success(res.data.message);
      setreload(res);
    } catch (error) {
      if (error && error.response) {
        const { data } = errorHandler(error);
        setError({
          message: data.message,
          class: 'alert alert-danger'
        });
      }
    }
    setloading(false);
  };

  const createFairHandler = async (e) => {
    e.preventDefault();
    const {
      about_event,
      end_date,
      name,
      start_date,
    } = formValues;

    const {
      Indoor, Outdoor, paystack, fusepay
    } = checkboxValues;

    const getEventTypes = () => {
      if (Indoor && Outdoor) return ['Indoor', 'Outdoor'];
      if (Indoor && !Outdoor) return ['Indoor'];
      if (!Indoor && Outdoor) return ['Outdoor'];
      return ['Indoor'];
    };
    const getPaymentTypes = () => {
      if (paystack && fusepay) return ['paystack', 'fusepay'];
      if (paystack && !fusepay) return ['paystack'];
      if (!paystack && fusepay) return ['fusepay'];
      return ['paystack'];
    };

    const formData = new FormData();
    formData.append('event_types ', getEventTypes());
    formData.append('end_date', end_date || data.start_date);
    formData.append('about_event', about_event || data.about_event);
    formData.append('payment_options', getPaymentTypes() || data.payment_options);
    formData.append('name', name || data.name);
    formData.append('start_date', start_date || data.start_date);

    setloading(true);
    try {
      const res = await coopLagApi.patch(`/fairs/${fairId}`, formData, { headers });
      toast.success(res.data.message);
      setreload(res);
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
      const res = await coopLagApi.get(
        `/fairs/${fairId}`,
        { headers }
      );
      setData(res.data.data);
    } catch (error) {
      if (error && error.response) {
        const { data } = errorHandler(error);
        setError({
          message: data.message,
          class: 'alert alert-danger'
        });
      }
    }
    setloading(false);
  };

  useEffect(() => {
    getAllFairs();
  }, [reload]);

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

                    />
                  </label>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Payment Options</h6>
                    <div className="checkbox">
                      <label htmlFor="paystack">
                        <input
                          type="checkbox"
                          onChange={handleCheckbox}
                          name="paystack"
                          id="paystack"
                        />
                        <span>Paystack</span>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label htmlFor="fusepay">
                        <input
                          type="checkbox"
                          onChange={handleCheckbox}
                          name="fusepay"
                          id="fusepay"
                        />
                        <span>Fuse pay</span>
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <h6>Event Type</h6>
                    <div className="checkbox">
                      <label htmlFor="Indoor">
                        <input
                          type="checkbox"
                          onChange={handleCheckbox}
                          name="Indoor"
                          id="Indoor"
                        />
                        <span>Indoor</span>
                      </label>
                    </div>
                    <div className="checkbox">
                      <label htmlFor="Outdoor">
                        <input
                          type="checkbox"
                          onChange={handleCheckbox}
                          name="Outdoor"
                          id="Outdoor"
                        />
                        <span>Out door</span>
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
                    maxFileSize={maxImageSize}
                    allowMultiple={false}
                    maxFiles={1}
                    onupdatefiles={setBannerHandler}
                    labelMaxFileSize={`Maximum file size is ${maxImageSize}`}
                  />
                  {' '}
                  <img
                    height="20"
                    className="img-thumbnail w-25 h-25"
                    // width="50"
                    src={data.fair_banner}
                    alt={data.name}
                  />
                </div>
                <div>
                  <input
                    type="url"
                    name="imageUrl"
                    id="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    disabled={loading}
                    className="btn btn-primary"
                    onClick={updateImage}
                  >
                    update image
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 my-3">
              <button
                disabled={loading}
                className="btn btn-primary"
                type="submit"
              >
                Save Details
              </button>
            </div>
          </form>
        </>
      ) : '' }
    </FairWrapper>
  );
};

export default FairDetails;
