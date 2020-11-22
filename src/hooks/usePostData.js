import { useEffect, useState } from 'react';
import { errorHandler } from '../error/ErrorHandler';
import { coopLagApi } from '../services/services';
import { getUserToken } from '../utils/functions/userAuth';

const usePostData = () => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState('');
  const [refetch, setRefech] = useState(true);
  const [loading, setloading] = useState(false);
  const headers = getUserToken();

  const handleError = (error) => {
    if (error?.response) {
      const { data } = errorHandler(error);
      setTimeout(() => {
        setError({ message: data ? data.message : 'something went wrong', class: 'alert alert-danger' });
      }, 2000);
    } else {
      setError('something went wrong');
    }
  };

  const deleteItem = async (url) => {
    setloading(true);
    try {
      const res = await coopLagApi.get(url, 'headers');
      setdata(res.data);
    } catch (error) {
      handleError(error);
    }
    setloading(false);
  };

  const postData = async (values) => {
    const {
      url, type, data
    } = values;
    setloading(true);
    try {
      const res = await coopLagApi[type || 'post'](url, data, { headers });
      setdata(res.data);
    } catch (error) {
      handleError(error);
    }
    setloading(false);
  };

  useEffect(() => {

  }, [error, data, loading]);

  return {
    error,
    data,
    loading,
    refetch,
    setRefech,
    postData,
    deleteItem
  };
};

export default usePostData;
