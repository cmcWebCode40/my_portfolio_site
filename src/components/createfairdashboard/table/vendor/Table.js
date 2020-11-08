import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import theme from '../../../../theme/theme';
import VendorRequirement from '../../forms/vendor/Vendor';
import ModalDialog from '../../../modal/Modal';
import useApi from '../../../../hooks/Api/useApi';

const TableWrapper = styled.div`
.table{
  box-shadow:${() => theme.styles.boxShadow};
  border-radius:${() => theme.styles.borderRadius};
}


`;

const VendorSetting = ({ match }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [reload, setreload] = useState('');
  const {
    data,
    getData,
    error,
    loading
  } = useApi();
  const { fairId } = match.params;

  const onOpenModal = () => setOpen(true);

  useEffect(() => {
    getData(`/fairs/${fairId}/requirements`);
  }, []);

  return (
    <>
      <ModalDialog
        open={open}
        setOpen={setOpen}
      >
        <VendorRequirement fairId={fairId} />
      </ModalDialog>
      <ModalDialog
        open={edit}
        setOpen={setEdit}
      >
        <VendorRequirement fairId={fairId} />
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
      <TableWrapper className="container">
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
          <table className="table table-hover">
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
                  <td><FontAwesomeIcon icon={['fa', 'edit']} /></td>
                  <td>{moment(item.created_at).format('L')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <RequestLoaderIcon
            size="3x"
            label="Please wait"
            className="text-primary bg-mid-gray"
          />
        )}
      </TableWrapper>
    </>

  );
};

export default VendorSetting;
