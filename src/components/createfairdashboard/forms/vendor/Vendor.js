import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import useApi from '../../../../hooks/Api/useApi';

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

const Vendor = ({ activeStep, setActiveStep, fairId }) => {
  const [formValues, setFormValues] = useState('');
  const [partners] = useState([]);
  const {
    loading,
    error,
    postData,
    postResponseData
  } = useApi();

  if (postResponseData) {
    toast.success(postResponseData.message, { toastId: 'fair' });
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const createFairHandler = async (e) => {
    e.preventDefault();
    const {
      name,
      description,
    } = formValues;
    const data = {
      requirements: [{ name, description }]
    };
    const postValues = {
      url: `/fairs/${fairId}/requirements`,
      data
    };
    await postData(postValues);
    if (activeStep) {
      setActiveStep(activeStep + 1);
    }
  };

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
      <form onSubmit={(createFairHandler)}>
        {error && (
        <div className={error.class} role="alert">
          {error.message}
        </div>
        )}

        <div className="row">
          <div className="col-md-12 form-div">
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
              <div>
                <textarea type="text" placeholder="description" name="description" onChange={handleChange} rows="7" required />
              </div>
            </div>
            <div className="col-md-12 my-3">
              <div className="row">
                <div className="col">
                  <button disabled={loading} className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
                {/* <div className="col">
                  <button onClick={moveToNext} className="btn btn-primary" type="submit">
                    Continue
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </FairWrapper>
  );
};

export default Vendor;
