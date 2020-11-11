import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilePond } from 'react-filepond';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import useApi from '../../../../hooks/Api/useApi';

const FairWrapper = styled.div`
  form {
    label {
      input,select,textarea {
      border-radius:${(props) => props.theme.styles.borderRadiusRounded};;
      background-color:${(props) => props.theme.colors.light};
      padding: .6rem;
      text-align:center;
      width:100%;
      outline:none;
      border:none;
      &::focus{
        border:1px solid ${(props) => props.theme.colors.primary};
      }
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
        /* margin:1rem .4rem ; */
      }
    }
  }

`;

const FairSpeaker = ({
  speakerId, fairId, reload, setreload
}) => {
  const [formValues, setFormValues] = useState('');
  const [banner, setBanner] = useState({ files: '' });
  const {
    data,
    loading,
    getData,
    error,
    postData,
  } = useApi();

  // if (postResponseData) {
  //   toast.success(postResponseData.message, { toastId: 'fair' });
  // }

  useEffect(() => {
    getData(`/fairs/${fairId}/speakers/${speakerId}`);
  }, [fairId]);

  useEffect(() => {
    if (data) {
      setFormValues({
        name: data.name,
        title: data.title,
        facebook: data.facebook,
        linkedIn: data.linkedIn,
        instagram: data.instagram,
        profession: data.profession,
        topics: data.topics
      });
    }
  }, [data]);

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

    const postValues = {
      url: `/fairs/${fairId}/speakers/${speakerId}`,
      type: 'patch',
      data: formData
    };
    await postData(postValues);
    await setreload(!reload);
  };

  const setBannerHandler = (fileItems) => {
    setBanner({
      files: fileItems[0],
    });
  };

  if (data) {
    return (
      <FairWrapper>
        {loading && (
        <RequestLoaderIcon
          size="3x"
          label="Please wait"
          className="text-primary bg-mid-gray"
        />
        )}
        <h4
          className="text-primary text-center"
        >
          Edit Speaker Details
        </h4>
        <form onSubmit={(createFairHandler)}>
          {error && (
          <div className={error.class} role="alert">
            {error.message}
          </div>
          ) }
          <div className="row">
            <div className="col-md-6 form-div">
              <div>
                <label htmlFor="name">
                  {' '}
                  Name
                  {' '}
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={data.name}
                    required
                    onChange={handleChange}
                  />

                </label>

              </div>
              <div>
                <label htmlFor="title">
                  Title
                  {' '}
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    defaultValue={data.title}
                    onChange={handleChange}
                    required
                  />

                </label>

              </div>
              <div>
                <label htmlFor="facebook">
                  Facebook
                  {' '}
                  <input
                    name="facebook"
                    onChange={handleChange}
                    defaultValue={data.facebook}
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
                <label htmlFor="linkedIn">
                  LinkedIn
                  {' '}
                  <input
                    name="linkedIn"
                    onChange={handleChange}
                    defaultValue={data.linkedIn}
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
                  Instagram
                  {' '}
                  <input
                    name="instagram"
                    onChange={handleChange}
                    defaultValue={data.instagram}
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
              <label htmlFor="profession">
                Profession
                {' '}
                <div>
                  <input
                    defaultValue={data.profession}
                    type="text"
                    placeholder="profession"
                    name="profession"
                    onChange={handleChange}
                    required
                  />
                </div>

              </label>

              <div>
                <label htmlFor="topics">
                  Topic
                  {' '}
                  <textarea
                    defaultValue={data.topics && data.topics[0]}
                    type="text"
                    placeholder="Topic"
                    name="topics"
                    rows="2"
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="filepond-image1">
                <FilePond
                  className="filepond-image"
                  labelIdle="Upload Profile picture"
                  allowFileSizeValidation
                  maxFileSize="500KB"
                  allowMultiple={false}
                  maxFiles={1}
                  // required
                  onupdatefiles={setBannerHandler}
                  labelMaxFileSize="Maximum file size is 500KB"
                />
              </div>
              <img
                className="img-thumbnail w-25"
                src={data.photoUrl}
                alt={data.name}
              />
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
      </FairWrapper>
    );
  }
  return <p>No data</p>;
};

export default FairSpeaker;
