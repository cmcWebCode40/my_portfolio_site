import React from 'react';
import styled from 'styled-components';
import Table from '../table/Table';

const TabWrapper = styled.div.attrs({
  className: 'panel panel-default bg-white mx-auto',
})`
  border-radius: ${(props) => props.theme.styles.borderRadius};
  height: 100vh;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Overview = ({ data, error, loading }) => {
  return (
    <TabWrapper>
      <Table data={data} error={error} loading={loading} />
    </TabWrapper>
  );
};

export default Overview;
