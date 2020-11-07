import { useEffect, useState } from 'react';
import { errorHandler } from '../../error/ErrorHandler';
import { coopLagApi } from '../../services/services';
import { getUserToken } from '../../utils/functions/userAuth';

const useApi = () => {
  const [data, setdata] = useState([]);
  const [postResponseData, setPostResponseData] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const headers = getUserToken();

  const handleError = (error) => {
    if (error && error.response) {
      const { data } = errorHandler(error);
      setError({ message: data.message, class: 'alert alert-danger' });
    } else {
      setError('something went wrong');
    }
  };

  const getData = async (url) => {
    setloading(true);
    try {
      const res = await coopLagApi.get(url, { headers });
      setdata(res.data.data);
      // console.log(res.data.data.topics);
    } catch (error) {
      handleError(error);
    }
    setloading(false);
  };

  const deleteItem = async (url) => {
    setloading(true);
    try {
      const res = await coopLagApi.get(url, { headers });
      setPostResponseData(res.data);
    } catch (error) {
      handleError(error);
    }
    setloading(false);
  };

  const postData = async (values) => {
    const { url, type, data } = values;
    setloading(true);
    try {
      const res = await coopLagApi[type || 'post'](url, data, { headers });
      setPostResponseData(res.data);
    } catch (error) {
      handleError(error);
    }
    setloading(false);
  };
  useEffect(() => {

  }, [postResponseData]);

  return {
    error,
    data,
    loading,
    getData,
    postData,
    postResponseData,
    deleteItem
  };
};

export default useApi;
