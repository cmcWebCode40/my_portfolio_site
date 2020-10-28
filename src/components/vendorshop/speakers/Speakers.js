import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ScheduleWrapper = styled.div.attrs({
  className: 'd-flex'
})`

.icon{
  color:${(props) => props.theme.colors.gray};
  };

`;

const Speakers = () => {
  return (
    <ScheduleWrapper>
      <div className="mx-2">
        <FontAwesomeIcon className="icon" icon={['fa', 'user-circle']} size="3x" />
      </div>
      <div className="mx-2">
        <h5>Avis Charles</h5>
        <p className="mx-2 text-primary">Speaker</p>
      </div>
    </ScheduleWrapper>
  );
};

export default Speakers;
