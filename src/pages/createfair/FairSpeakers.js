import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../theme/theme';
import { RequestLoaderIcon } from '../../components/Loaders/Loader';
import ModalDialog from '../../components/modal/Modal';
import FairSpeaker from '../../components/createfairdashboard/table/fairspeakers/FairSpeakers';
import AddFairSpeaker from '../../components/createfairdashboard/forms/fairSpeaker/FairSpeaker';
import useApi from '../../hooks/Api/useApi';

const TableWrapper = styled.div`
box-shadow:${() => theme.styles.boxShadow};
;
border-radius:${() => theme.styles.borderRadius};
.cursor-btn{
  cursor:pointer;
}

`;

const Table = ({ match }) => {
  const [speakerId, setSpeakerId] = useState('');
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [reload, setreload] = useState('');
  const {
    data, error, loading, getData
  } = useApi();
  const { fairId } = match.params;

  const onOpenModal = (id) => {
    setSpeakerId(id);
    setOpen(true);
  };
  const onOpenModalAdd = () => {
    setOpenAdd(true);
  };

  useEffect(() => {
    getData(`/fairs/${fairId}/speakers`);
  }, [reload]);

  return (
    <>
      <button type="button" className="btn btn-sm btn-primary" onClick={onOpenModalAdd}>
        Add Fair Speakers
        <FontAwesomeIcon icon={['fa', 'plus-circle']} className="text-white" />
        {' '}
      </button>
      <div className="container table-responsive">
        <ModalDialog open={open} setOpen={setOpen}>
          <FairSpeaker
            reload={reload}
            setreload={setreload}
            fairId={fairId}
            speakerId={speakerId}
          />
        </ModalDialog>
        <ModalDialog open={openAdd} setOpen={setOpenAdd}>
          <AddFairSpeaker
            fairId={fairId}
          />
        </ModalDialog>
        {error && (
        <div className={error.class} role="alert">
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
          <TableWrapper className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">User</th>
                <th scope="col">Title</th>
                <th scope="col">Name</th>
                <th scope="col">Profession</th>
                <th scope="col">Facebook</th>
                <th scope="col">LinkedIn</th>
                <th scope="col">Instagram</th>
                <th scope="col">Details</th>
                <th scope="col">Reg. Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      height="70"
                      className="img-thumbnail"
                      src={item.photoUrl}
                      alt={item.name}
                    />

                  </td>
                  <td>{item.title}</td>
                  <td>{item.name}</td>
                  <td>{item.profession}</td>
                  <td title={item.facebook}>
                    facebook
                    {/* <CopyToClipboard

text={`${process.env.REACT_APP_HOST_CLIENT}/customer/
account/register?referralId=${referralId}`}
              onCopy={() => setcopy(!copy)}
            >
              <Button
                variant="outlined"
                size="small"
                className={classes.Btn}
                color="secondary"
              >
                {copy ? 'Copied!' : 'Copy'}
              </Button>
            </CopyToClipboard> */}
                  </td>
                  <td title={item.linkedIn}>{item.linkedIn}</td>
                  <td title={item.instagram}>{item.instagram}</td>
                  <td>
                    <span
                      aria-hidden
                      className="btn btn-success btn-sm"
                      onClick={() => {
                        onOpenModal(item._id,);
                      }}
                    >
                      more
                    </span>
                  </td>
                  <td>{moment(item.created_at).format('L')}</td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
        ) : (
          <RequestLoaderIcon
            size="3x"
            label="Please wait"
            className="text-primary bg-mid-gray"
          />
        )}
      </div>
    </>

  );
};

export default Table;
