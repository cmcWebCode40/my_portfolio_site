import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RequestLoaderIcon } from '../../Loaders/Loader';
import theme from '../../../theme/theme';

const TableWrapper = styled.div`
box-shadow:${(props) => theme.styles.boxShadow};
;
border-radius:${(props) => props.theme.styles.borderRaduis};

`;

const Table = ({ error, loading, data }) => {
  return (
    <TableWrapper className="container table-responsive">
      {error && (
      <div className={error.class} role="alert">
        {error.message}
      </div>
      ) }
      {!loading ? (
        <table className="table  table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Name</th>
              {/* <th scope="col">Vendor</th> */}
              {/* <th scope="col">Partners logos</th> */}
              <th scope="col">Payments Options</th>
              {/* <th scope="col">Event types</th>
              <th scope="col">Fair env</th> */}
              <th scope="col">Fair type</th>
              <th scope="col">Teams</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Details</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                {/* <td>{item.vendors}</td> */}
                {/* <td>{item.partner_logos.length}</td> */}
                <td>{item.payment_options.length}</td>
                {/* <td>{item.event_types.length}</td>
                <td>{item.fair_env}</td> */}
                <td>{item.fair_type}</td>
                <td>{item.team}</td>
                <td>{moment(item.start_date).format('L')}</td>
                <td>{moment(item.end_date).format('L')}</td>
                <td><Link className="btn btn-success btn-sm" to={`/fair/dashboard-overview/${item._id}`}>more</Link></td>
                <td><FontAwesomeIcon icon={['fa', 'trash']} className="text-center" color="red" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <RequestLoaderIcon size="3x" label="Please wait" className="text-primary bg-mid-gray" />}

    </TableWrapper>

  );
};

export default Table;
