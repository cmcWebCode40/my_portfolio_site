import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const defaultStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  margin: 'auto',
  zIndex: 999,
};

export const RequestLoaderIcon = ({
  size, className, label, styles
}) => {
  return (
    <span style={defaultStyles} className="d-block bg-white p-3">
      <FontAwesomeIcon icon={['fa', 'spinner']} spin size={size} color="#333" className={className} styles={styles} />
      <span>{label}</span>
    </span>
  );
};

RequestLoaderIcon.defaultProps = {
  styles: defaultStyles
};

const Loader = () => {
  return <span>Loading......</span>;
};

export default Loader;
