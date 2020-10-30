import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilePond } from 'react-filepond';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { coopLagApi } from '../../../../services/services';

const FairWrapper = styled.div`
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

const paymentOptions = ['Flutterwave', 'paystack'];
const fairType = ['Indoor', 'outdoor'];
const category = ['Indoor', 'outdoor'];

const CreateFair = () => {
  const [formValues, setFormValues] = useState('');
  const [partners, setPartners] = useState([]);
  const [partnerValue, setPartnersValue] = useState('');
  const [banner, setBanner] = useState({ files: '' });
  const [logo, setLogo] = useState({ files: '' });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const createFairHandler = async (e) => {
    e.preventDefault();
    const {
      about_event,
      category,
      end_date,
      fair_env,
      fair_type,
      name,
      payment_options,
      start_date,
      total_expected_vendors
    } = formValues;
    const formData = new FormData();
    formData.append('banner', banner.files.file);
    formData.append('logo', logo.files.file);
    formData.append('about_event', about_event);
    formData.append(' end_date', end_date);
    formData.append('fair_env', fair_env);
    formData.append('category', category);
    formData.append('fair_type', fair_type);
    formData.append('name', name);
    formData.append('start_date', start_date);
    formData.append('payment_options', payment_options);
    formData.append(' total_expected_vendors', total_expected_vendors);
    formData.append('partners', JSON.stringify(partners));
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    };
    await coopLagApi.post('/fairs', formData, { headers });
    // try {
    //   await coopLagApi.post('/fairs', formData, { headers });
    // } catch (error) {
    // }
  };

  const setBannerHandler = (fileItems) => {
    setBanner({
      files: fileItems[0],
    });
  };
  const setLogoHandler = (fileItems) => {
    setLogo({
      files: fileItems[0],
    });
  };

  const addPartners = () => {
    if (partnerValue) {
      const checkValue = partners.find((person) => person === partnerValue);
      if (checkValue) {
        return 'sdjkcksjdk';
      }
      setPartners([...partners, partnerValue]);
    }
  };

  const handleDelete = (data) => {
    const filteredItem = partners.filter((person) => person !== data);
    setPartners(filteredItem);
  };

  useEffect(() => {

  }, [partners]);

  return (
    <FairWrapper>
      <form>
        <div className="row">
          <div className="col-md-6 form-div">
            <div>
              <input type="text" placeholder="Name" name="name" onChange={handleChange} required />
            </div>
            <div>
              <input type="text" placeholder="Choose fair theme" name="fair_env" onChange={handleChange} required />
            </div>
            <div>
              <textarea type="text" placeholder="Name" name="about_event" onChange={handleChange} rows="7" required />
            </div>
            <div>
              <select required placeholder="fair type" name="fair_type" onChange={handleChange} id="fair_type-id">
                {fairType.map((fair) => (
                  <option key={fair} value={fair}>
                    {fair}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select onClick={handleChange} required placeholder="payment options" name="payment_options" id="payment_options-id">
                {paymentOptions.map((payment) => (
                  <option key={payment} value={payment}>
                    {payment}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input onChange={(e) => setPartnersValue(e.target.value)} type="text" placeholder="Partners" required />
              <button onClick={addPartners} className="btn btn-primary my-2 w-100" type="button">Add</button>
            </div>
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
                    <td aria-hidden="true" onClick={() => handleDelete(person)}><FontAwesomeIcon icon={['fa', 'trash']} className="alert-danger" /></td>
                  </tr>
                ))}

              </tbody>
            </table>
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
            <div className="filepond-image1">
              <FilePond
                className="filepond-image"
                labelIdle="Upload your fair Logo"
                allowFileSizeValidation
                maxFileSize="500KB"
                allowMultiple={false}
                stylePanelLayout="compact"
                maxFiles={1}
                required
                onupdatefiles={setLogoHandler}
                labelMaxFileSize="Maximum file size is 500KB"
              />
            </div>
            <div>
              <select required placeholder="Category" onClick={handleChange} name="category" id="category-id">
                {category.map((list) => (
                  <option key={list} value={list}>
                    {list}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input type="number" onClick={handleChange} name="total_expected_vendors" placeholder="Total expected vendor" required />
            </div>
            <div>
              <input type="date" onClick={handleChange} name="start_date" placeholder="Start date" required />
            </div>
            <div>
              <input type="date" onClick={handleChange} name="end_date" placeholder="End date" required />
            </div>
          </div>
        </div>
        <div className="col-md-12 my-3"><button onClick={createFairHandler} className="btn btn-primary btn-lg" type="submit">Submt</button></div>
      </form>
    </FairWrapper>
  );
};

export default CreateFair;
