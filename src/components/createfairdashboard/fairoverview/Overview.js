import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { errorHandler } from '../../../error/ErrorHandler';
import { coopLagApi } from '../../../services/services';
import { getUserToken } from '../../../utils/authToken';
import Table from '../table/Table';

const TabWrapper = styled.div.attrs({
  className: 'panel panel-default bg-white mx-auto'
})` 
    border-radius:${(props) => props.theme.styles.borderRadius};
    height:100vh;
    margin-top:3rem;
    margin-bottom:3rem;
`;

const Overview = () => {
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const headers = getUserToken();

  const getAllFairs = async () => {
    setloading(true);
    try {
      const res = await coopLagApi.get('/fairs', { headers });
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

  return (
    <TabWrapper>
      <Table
        data={data}
        error={error}
        loading={loading}
      />
    </TabWrapper>
  );
};

export default Overview;
