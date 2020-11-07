import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { RequestLoaderIcon } from '../../../Loaders/Loader';
import theme from '../../../../theme/theme';
import { errorHandler } from '../../../../error/ErrorHandler';
import { coopLagApi } from '../../../../services/services';
import { getUserToken } from '../../../../utils/functions/userAuth';
import FairPlan from './editModal/FairPlans';
import ModalDialog from '../../../modal/Modal';

const TableWrapper = styled.div`
.table{
  box-shadow:${() => theme.styles.boxShadow};
}

border-radius:${() => theme.styles.borderRadius};
.cursor-btn{
  cursor:pointer;
}

`;

const FairPreset = ({ match }) => {
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [reload, setreload] = useState('');
  const headers = getUserToken();
  // console.log(props);
  const { fairId } = match.params;

  const getAllFairs = async () => {
    setloading(true);
    try {
      const res = await coopLagApi.get(`/fairs/${fairId}/preset-plans`, { headers });
      setData(res.data);
    } catch (error) {
      if (error && error.response) {
        const { data } = errorHandler(error);
        setError({ message: data.message, class: 'alert alert-danger' });
      }
    }
    setloading(false);
  };

  const onOpenModal = () => setOpen(true);

  useEffect(() => {
    getAllFairs();
  }, []);

  return (
    <TableWrapper className="container table-responsive">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onOpenModal}
      >
        Create Fair
        {' '}
        <FontAwesomeIcon
          icon={['fa', 'plus-circle']}
          className="text-white"
        />
        {' '}
      </button>
      <ModalDialog
        open={open}
        setOpen={setOpen}
      >
        <FairPlan fairId={fairId} />
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
      {data.length ? (
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Name</th>
              <th scope="col">Attendants</th>
              <th scope="col">Position</th>
              <th scope="col">Size</th>
              <th scope="col">Category</th>
              <th scope="col">lead gen</th>
              <th scope="col">Visitors</th>
              <th scope="col">Products</th>
              <th scope="col">Price</th>
              <th scope="col">Currency</th>
              <th scope="col">Booth Ad</th>
              <th scope="col">Banner</th>
              <th scope="col">Reg. date</th>
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
                <td>
                  <Link
                    className="btn btn-success btn-sm"
                    to={`/fair/dashboard-overview/${item._id}`}
                  >
                    more
                  </Link>
                </td>
                <td
                  className="cursor-btn"
                  aria-hidden
                  // onClick={() => handleDeleteFair(item._id)}
                >
                  <FontAwesomeIcon
                    icon={['fa', 'trash']}
                    className="text-center"
                    color="red"
                  />
                </td>
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

  );
};

export default FairPreset;
