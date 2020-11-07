import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { errorHandler } from '../../../error/ErrorHandler';
import useApi from '../../../hooks/Api/useApi';
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
  const [reload, setreload] = useState('');
  const {
    data,
    error,
    loading,
    getData,
  } = useApi();

  useEffect(() => {
    getData('/fairs');
  }, [reload]);

  return (
    <TabWrapper>
      <Table
        data={data}
        error={error}
        loading={loading}
        setreload={setreload}
        // reload
      />
    </TabWrapper>
  );
};

export default Overview;
