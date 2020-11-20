import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { errorHandler } from '../../error/ErrorHandler';
import { coopLagApi } from '../../services/services';
import { getUserToken } from '../../utils/functions/userAuth';

const useApi = (url) => {
  const [data, setdata] = useState([]);
  const [postResponseData, setPostResponseData] = useState('');
  const [error, setError] = useState('');
  const [refetch, setRefech] = useState(true);
  const [loading, setloading] = useState(false);
  const headers = getUserToken();

  const handleError = (error) => {
    if (error && error.response) {
      const { data } = errorHandler(error);
      setError({ message: data ? data.message : 'something went wrong', class: 'alert alert-danger' });
    } else {
      setError('something went wrong');
    }
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
    // const auth = getUserToken();
    const getData = async () => {
      const cookies = new Cookies();
      const token = cookies.get('vcn_usr:auth', { path: '/' });
      setloading(true);
      try {
        const res = await coopLagApi.get(url, { headers: { Authorization: `Bearer ${token}` } });
        if (res.data) {
          setdata(res.data.data);
        }
        // console.log(res.data.data.topics);
      } catch (error) {
        handleError(error);
      }
      setloading(false);
    };
    getData();
  }, [postResponseData, refetch, url]);

  return {
    error,
    data,
    loading,
    // getData,
    refetch,
    setRefech,
    postData,
    postResponseData,
    deleteItem
  };
};

export default useApi;
