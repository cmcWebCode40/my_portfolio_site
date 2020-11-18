import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import theme from '../../../../theme/theme';

import FairPlan from './editModal/FairPlans';
import ModalDialog from '../../../modal/Modal';
import { EmptyList } from '../../../emptylist/EmptyList';
import useApi from '../../../../hooks/Api/useApi';

const TableWrapper = styled.table`
  box-shadow: ${() => theme.styles.boxShadow};
  border-radius: ${() => theme.styles.borderRadius};
  .cursor-btn {
    cursor: pointer;
  }
`;

const FairPreset = ({ match }) => {
  const { fairId } = match.params;
  const [open, setOpen] = useState(false);
  const [openId, setOpenId] = useState(false);
  const [singleData, setSingleData] = useState('');
  const {
    data, error, loading, refetch: reload, setRefech: setreload
  } = useApi(
    `/fairs/${fairId}/preset-plans`
  );

  const setSingleItem = (item) => {
    setSingleData(item);
    setOpenId(true);
  };

  const onOpenModal = () => setOpen(true);

  return (
    <div className="container">
      <button type="button" className="btn btn-primary" onClick={onOpenModal}>
        Add Plans
        {' '}
        <FontAwesomeIcon icon={['fa', 'plus-circle']} className="text-white" />
        {' '}
      </button>
      <ModalDialog open={open} setOpen={setOpen}>
        <FairPlan fairId={fairId} />
      </ModalDialog>
      <ModalDialog open={openId} setOpen={setOpenId}>
        <span className="text-primary text-center h4">Edit Fair Plans</span>
        <FairPlan fairId={fairId} setreload={setreload} reload={reload} singleData={singleData} />
      </ModalDialog>
      {error && (
        <div className={error.class} role="alert">
          {error.message}
        </div>
      )}
      {loading && (
        <RequestLoaderIcon size="3x" label="Please wait" className="text-primary bg-mid-gray" />
      )}
      {data.length ? (
        <TableWrapper className="table table-hover mt-2">
          <thead className="thead-light">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Visitors</th>
              <th scope="col">Products</th>
              <th scope="col">Price</th>
              <th scope="col">Currency</th>
              <th scope="col">Reg. date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id} onClick={() => setSingleItem(item)}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.no_of_visitors}</td>
                <td>{item.number_of_products_catalog}</td>
                <td>{item.price}</td>
                <td>{item.price_currency}</td>
                <td>{moment(item.created_at).format('L')}</td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      ) : (
        <EmptyList text="No Fair Preset" />
      )}
    </div>
  );
};

export default FairPreset;
