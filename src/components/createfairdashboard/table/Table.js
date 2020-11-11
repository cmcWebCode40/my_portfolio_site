import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RequestLoaderIcon } from '../../Loaders/Loader';
import theme from '../../../theme/theme';
import useApi from '../../../hooks/Api/useApi';
import { EmptyList } from '../../emptylist/EmptyList';

const TableWrapper = styled.table`
box-shadow:${() => theme.styles.boxShadow};
;
  border-radius:${() => theme.styles.borderRadius};
  .cursor-btn{
    cursor:pointer;
  }

`;

const Table = (props) => {
  const { data, loading: waiting } = props;
  const {
    error,
    loading,
  } = useApi();

  return (
    <div className="">
      {error && (
      <div className={error.class} role="alert">
        {error.message}
      </div>
      ) }
      {(loading || waiting) && (
      <RequestLoaderIcon
        size="3x"
        label="Please wait"
        className="text-primary bg-mid-gray"
      />
      )}
      {data.length ? (
        <TableWrapper className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Name</th>
              <th scope="col">Payments Options</th>
              <th scope="col">Fair type</th>
              {/* <th scope="col">Teams</th> */}
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.payment_options.length}</td>
                <td>{item.fair_type}</td>
                {/* <td>{item.team}</td> */}
                <td>{moment(item.start_date).format('L')}</td>
                <td>{moment(item.end_date).format('L')}</td>
                <td>
                  <Link
                    className="btn btn-success btn-sm"
                    to={`/fair/dashboard-overview/${item._id}`}
                  >
                    more
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      ) : (
        <EmptyList text="No Fairs" />
      )}
    </div>

  );
};

export default Table;
