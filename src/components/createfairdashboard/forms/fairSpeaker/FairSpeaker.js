import React, { useState } from 'react';
import styled from 'styled-components';
import { FilePond } from 'react-filepond';
import { coopLagApi } from '../../../../services/services';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import { getUserToken } from '../../../../utils/functions/userAuth';
import { errorHandler } from '../../../../error/ErrorHandler';

const FairWrapper = styled.div`
  form {
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

const SpeakerFair = ({
  activeStep, setActiveStep, fairId, setreload,
  setOpenAdd
}) => {
  const [formValues, setFormValues] = useState('');
  const [banner, setBanner] = useState({ files: '' });
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const headers = getUserToken();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const createFairHandler = async (e) => {
    e.preventDefault();
    const {
      name,
      title,
      facebook,
      linkedIn,
      instagram,
      profession,
      topics
    } = formValues;
    const formData = new FormData();
    formData.append('profilePicture', banner.files.file);
    formData.append('title', title);
    formData.append('name', name);
    formData.append('facebook', facebook);
    formData.append('linkedIn', linkedIn);
    formData.append('instagram', instagram);
    formData.append('profession', profession);
    formData.append('topics', topics);
    setloading(true);

    try {
      await coopLagApi.post(`/fairs/${fairId}/speakers`, formData, { headers });
      if (setreload) {
        setreload(true);
        setOpenAdd(false);
      }
      setActiveStep(activeStep + 1);
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
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                rows="2"
                required
              />
            </div>
            <div>
              <label htmlFor="facebook">
                Facebook Link
                {' '}
                <input
                  name="facebook"
                  onChange={handleChange}
                  rows="2"
                  required
                
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  pattern="https://.*"
                  size="30"
                />

              </label>

            </div>
            <div>
              <label htmlFor="linkedIn">
                LinkedIn Link
                {' '}
                <input
                  name="linkedIn"
                  onChange={handleChange}
                  rows="2"
                  required
                  type="url"
                  id="url"
                  placeholder="https://example.com"
                  pattern="https://.*"
                  size="30"
                />

              </label>

            </div>
            <div>
              <label htmlFor="instagram">
                Instagram Link
                {' '}
                <input
                  name="instagram"
                  onChange={handleChange}
                  rows="2"
                  required
                  type="url"
                  id="url"
                  placeholder="https://example.com"
                  pattern="https://.*"
                  size="30"
                />
              </label>
            </div>
          </div>
          <div className="col-md-6 form-div">
            <div>
              <textarea type="text" placeholder="profession" name="profession" onChange={handleChange} rows="2" required />
            </div>
            <div>
              <textarea type="text" placeholder="Topic" name="topics" onChange={handleChange} rows="2" required />
            </div>
            <div className="filepond-image1">
              <FilePond
                className="filepond-image"
                labelIdle="Upload Profile picture"
                allowFileSizeValidation
                maxFileSize="500KB"
                allowMultiple={false}
                maxFiles={1}
                required
                onupdatefiles={setBannerHandler}
                labelMaxFileSize="Maximum file size is 500KB"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12 my-3">
          <button disabled={loading} className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </FairWrapper>
  );
};

export default SpeakerFair;
