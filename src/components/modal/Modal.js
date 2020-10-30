import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalDialog = ({ children, open, setOpen }) => {
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        {children}
      </Modal>
    </div>
  );
};

ModalDialog.prototype = {
  children: PropTypes.node.isRequired
};

export default ModalDialog;
