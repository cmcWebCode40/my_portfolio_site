import React, { useState } from 'react';
import moment from 'moment';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import theme from '../../theme/theme';
import { RequestLoaderIcon } from '../../components/Loaders/Loader';
import ModalDialog from '../../components/modal/Modal';
import FairSpeaker from '../../components/createfairdashboard/table/fairspeakers/FairSpeakers';
import AddFairSpeaker from '../../components/createfairdashboard/forms/fairSpeaker/FairSpeaker';
import useApi from '../../hooks/Api/useApi';
import { EmptyList } from '../../components/emptylist/EmptyList';

const TableWrapper = styled.table`
  box-shadow:${() => theme.styles.boxShadow};
  ;
  border-radius:${() => theme.styles.borderRadius};
  .cursor-btn{
    cursor:pointer;
  }

  .img-thumb{
    height: 2rem;
    width: 2rem;
    border-radius: .3rem
  }

`;

const Table = ({ match }) => {
  const { fairId } = match.params;
  const [speakerId, setSpeakerId] = useState('');
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [link, setLink] = useState('');
  const [linkOpen, setLinkOpen] = useState('');
  const [copy, setCopy] = useState(false);
  const {
    data, error, loading, setRefech: setreload,
    refetch: reload
  } = useApi(`/fairs/${fairId}/speakers`);

  const onOpenModal = (id) => {
    setSpeakerId(id);
    setOpen(true);
  };
  const onOpenModalAdd = () => {
    setOpenAdd(true);
  };

  return (
    <>
      <div className="container table-responsive">
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={onOpenModalAdd}
        >
          Add Fair Speakers
          <FontAwesomeIcon icon={['fa', 'plus-circle']} className="text-white" />
        </button>
        <ModalDialog open={open} setOpen={setOpen}>
          <FairSpeaker
            reload={reload}
            setreload={setreload}
            fairId={fairId}
            speakerId={speakerId}
          />
        </ModalDialog>
        <ModalDialog open={linkOpen} setOpen={setLinkOpen}>
          <div className="my-5">
            <h5 className="text-primary my-2">Copy your link</h5>
            <input
              type="text"
              value={link}
              readOnly
              className="p-1 bg-light"
            />
            <CopyToClipboard
              text="item.facebook"
              onCopy={() => setCopy(!copy)}
            >
              <button type="button" className="btn btn-outline-success">
                {copy
                  ? 'Copied!' : 'Copy'}
              </button>
            </CopyToClipboard>
          </div>

        </ModalDialog>
        <ModalDialog open={openAdd} setOpen={setOpenAdd}>
          <AddFairSpeaker
            fairId={fairId}
            setreload={setreload}
            setOpenAdd={setOpenAdd}
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
                      className="img-thumb"
                      src={item.photoUrl}
                      alt={item.name}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.name}</td>
                  <td>{item.profession}</td>
                  <td title={item.facebook}>
                    <FontAwesomeIcon
                      size="1x"
                      className="text-primary"
                      onClick={() => {
                        setLinkOpen(true);
                        setLink(item.facebook);
                      }}
                      icon={faFacebook}
                    />
                  </td>
                  <td
                    title={item.linkedIn}
                  >
                    <FontAwesomeIcon
                      className="text-primary"
                      size="1x"
                      onClick={() => {
                        setLinkOpen(true);
                        setLink(item.linkedIn);
                      }}
                      icon={faLinkedin}
                    />

                  </td>
                  <td
                    title={item.instagram}
                  >
                    <FontAwesomeIcon
                      size="1x"
                      className="text-danger"
                      onClick={() => {
                        setLinkOpen(true);
                        setLink(item.instagram);
                      }}
                      icon={faInstagram}
                    />

                  </td>
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
          <EmptyList />
        )}
      </div>
    </>

  );
};

export default Table;
