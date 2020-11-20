import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import theme from '../../../../theme/theme';
import VendorRequirement from '../../forms/vendor/Vendor';
import ModalDialog from '../../../modal/Modal';
import useApi from '../../../../hooks/Api/useApi';
import { EmptyList } from '../../../emptylist/EmptyList';

const TableWrapper = styled.table`
  box-shadow:${() => theme.styles.boxShadow};
  border-radius:${() => theme.styles.borderRadius};
`;

const VendorSetting = ({ match }) => {
  const { fairId } = match.params;
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState('');
  const {
    data,
    error,
    loading,
    setRefech: setreload
  } = useApi(`/fairs/${fairId}/requirements`);

  const onOpenModal = () => setOpen(true);

  return (
    <>
      <ModalDialog
        open={open}
        setOpen={setOpen}
      >
        <VendorRequirement
          fairId={fairId}
          setreload={setreload}
          type="post"
        />
      </ModalDialog>
      <ModalDialog
        open={edit}
        setOpen={setEdit}
      >
        <VendorRequirement
          fairId={fairId}
          setreload={setreload}
          item={item}
          type="patch"
        />
      </ModalDialog>
      {error && (
      <div
        className={error.class}
        role="alert"
      >
        {error.message}
      </div>
      ) }
      {loading && (
      <RequestLoaderIcon
        size="3x"
        label="Please wait"
        className="text-primary bg-mid-gray"
      />
      )}
      <div className="container">
        <button
          type="button"
          className="btn btn-primary mb-2"
          onClick={onOpenModal}
        >
          Add requirements
          <FontAwesomeIcon
            icon={['fa', 'plus-circle']}
            className="text-white"
          />
          {' '}
        </button>
        {data && data.requirements ? (
          <TableWrapper className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Reg. date</th>
              </tr>
            </thead>
            <tbody>
              {data.requirements.map((item, index) => (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td
                    aria-hidden
                    onClick={() => {
                      setItem(item);
                      setEdit(true);
                    }}
                  >
                    <FontAwesomeIcon icon={['fa', 'edit']} />

                  </td>
                  <td>{moment(item.created_at).format('L')}</td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
        ) : (
          <EmptyList text="No Fair Preset" />
        )}
      </div>
    </>

  );
};

export default VendorSetting;
